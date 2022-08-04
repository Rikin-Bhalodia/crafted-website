import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { Button, Steps } from "antd";
import ShoppingCart from "./../../src/Components/cart-page/Shoppingcart";
import CheckOut from "./../../src/Components/cart-page/Checkout";
import { getDatabase, onValue, ref, set } from "firebase/database";
import ThankYou from "./../../src/Components/cart-page/Thankyou";
import styled from "styled-components";
import Image from "next/image";
import Logo from "/public/svg/logo.svg";
import { useAuth } from "../../src/auth/AuthContext";

const CartWrapper = styled.div`
  padding: 0px 100px 100px;

  .heading {
    padding-bottom: 70px;
  }
  @media screen and (max-width: 627px) {
    padding: 0px 50px 100px;
  }
  @media screen and (max-width: 527px) {
    padding: 0px 20px 50px !important;
  }
`;

const { Step } = Steps;
const steps = [
  {
    title: "Shopping Cart",
    content: <ShoppingCart />,
  },
  {
    title: "Checkout",
    content: <CheckOut />,
  },
  {
    title: "Thank You",
    content: <ThankYou />,
  },
];

const loadScript = (src) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};

// const __DEV__ = document?.domain === "localhost";

const Cart = () => {
  const [current, setCurrent] = useState(0);
  const [cartProduct, setCartProduct] = useState([]);
  const { currentUser } = useAuth();
  console.log(currentUser, "user");
  useEffect(() => {
    const db = getDatabase();
    const starCountRef = ref(db, "cartItem/");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setCartProduct(Object.entries(data));
    });
  }, []);
  const cartItems = cartProduct.map(([key, value]) => {
    return value;
  });
  const array = cartItems?.map((data) => {
    return Number(data?.cartData?.mrp) * data?.totalUserItem;
  });

  const totalAmount = array.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );

  const displayRezorPay = async () => {
    const data = await fetch("http://localhost:1337/razorpay", {
      method: "POST",
    })
      .then((t) => t.json())
      .catch((e) => console.log(e, "e"));

    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      alert("Razorpay SDK failed to load. are you online?");
      return;
    }
    const options = {
      key: "rzp_test_NJRQ7mstGJ8A8J",
      name: "The Crafted",
      description: "We are happy to make connection with you !!",
      amount: totalAmount,
      currency: data?.currency,
      image: <img src={Logo} alt="logo" />,
      order_id: data?.id,
      handler: function (response) {},
      prefill: {
        name: currentUser.displayName,
        email: currentUser.email,
        // contact: ,
      },
    };
    var rzp1 = new window.Razorpay(options);
    rzp1.open();
  };
  const next = (key) => {
    key === 0 ? setCurrent(current + 1) : displayRezorPay();
  };
  const prev = () => {
    setCurrent(current - 1);
  };

  const onChange = (value) => {
    setCurrent(value);
  };

  console.log(cartItems, array, "item");

  return (
    <>
      <CartWrapper>
        <div
          className="heading"
          style={{
            display: "flex",
            justifyContent: "center",
            fontWeight: "700",
            fontSize: "36px",
            lineHeight: "54px",
            color: "#393D46",
            paddingTop: "40px",
          }}
        >
          {steps[current].title}
        </div>
        <Steps current={current} onChange={onChange}>
          {steps.map((item) => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div className="steps-content" style={{ padding: "20px 0px 0px 0px" }}>
          {steps[current].content}
        </div>
        <div className="steps-action" style={{ textAlign: "right" }}>
          {current === 0 && (
            <Button
              style={{
                padding: "0px 70px",
                height: "50px",
                background: "#393D46",
                color: "#FFFFFF",
                fontSize: "18px",
                fontWeight: "500",
              }}
              onClick={() => next(current)}
            >
              Checkout
            </Button>
          )}
          {/* {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success("Processing complete!")}
          >
            Done
          </Button>
        )} */}
          {current === 1 && (
            <Button
              style={{
                padding: "0px 70px",
                height: "50px",
                background: "#393D46",
                color: "#FFFFFF",
                fontSize: "18px",
                fontWeight: "500",
              }}
              onClick={() => next()}
            >
              Checkout
            </Button>
          )}
        </div>
      </CartWrapper>
    </>
  );
};

export default Cart;
