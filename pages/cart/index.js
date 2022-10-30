import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { Button, Steps } from "antd";
import ShoppingCart from "./../../src/Components/cart-page/Shoppingcart";
import CheckOut from "./../../src/Components/cart-page/Checkout";
import ThankYou from "./../../src/Components/cart-page/Thankyou";
import styled from "styled-components";
import Logo from "/public/svg/logo.svg";
import UniqId from "uniqid";
import { useAuth } from "../../src/auth/AuthContext";
import { getDatabase, onValue, ref } from "firebase/database";

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

const Cart = () => {
  const __DEV__ =
    window?.location?.hostname === "localhost"
      ? "http://localhost:3001"
      : "https://crafted-backend.vercel.app";
  const [current, setCurrent] = useState(0);
  const { currentUser } = useAuth();
  const [cartProduct, setCartProduct] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    const starCountRef = ref(db, `cartItem/${currentUser?.uid}/`);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      let cartDatalist = [];
      for (let id in data) {
        cartDatalist.push(data[id]);
      }
      if (cartDatalist.length) {
        setCartProduct(cartDatalist);
      } else {
        setCartProduct([]);
      }
    });
  }, []);

  const productDetails = cartProduct.map((data) => {
    return {
      category: data.category || "",
      color: data.color || "",
      id: data.id || "",
      mrp: data.mrp || "",
      name: data.name || "",
      sale_price: data.sale_price || "",
      size: data.size || "",
      sku: data.sku || "",
      tag: data.tag || "",
      totalUserItem: data.totalUserItem || "",
    };
  });
  const [details, setDetails] = useState({
    name: "",
    address: "",
    contact: "",
    city: "",
    state: "",
    zip_code: "",
    user_id: currentUser?.uid || "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const { Step } = Steps;
  const steps = [
    {
      title: "Shopping Cart",
      content: <ShoppingCart />,
    },
    {
      title: "Checkout",
      content: <CheckOut handleChange={handleChange} details={details} />,
    },
    {
      title: "Thank You",
      content: <ThankYou />,
    },
  ];

  const array = cartProduct?.map((data) => {
    return Number(data?.mrp) * data?.totalUserItem;
  });

  const totalAmount = array.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
  const amount = totalAmount * 100;
  const bodyData = {
    amount: amount,
    receipt: UniqId(),
    payment_capture: 1,
    notes: details,
  };

  const displayRezorPay = async () => {
    const data = await fetch(`${__DEV__}/razorpay`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyData),
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

    const orderItemsDetails = {
      ...productDetails,
      order_id: data?.id,
      user_id: currentUser?.uid || "",
    };
    const options = {
      key: "rzp_live_JxIiJ0bff0o2SD",
      name: "The Crafted",
      description: "We are happy to make connection with you !!",
      amount: amount,
      currency: "INR",
      image: Logo,
      order_id: data?.id,
      prefill: {
        name: details.name,
        email: currentUser?.email || "",
      },
    };
    var rzp1 = new window.Razorpay(options);
    rzp1.open();
    await fetch(`${__DEV__}/verification`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });

    await fetch(`${__DEV__}/order-details`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderItemsDetails),
    });
    setTimeout(() => {
      setCurrent(current + 1);
    }, 5000);
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
          {steps.map((item, i) => (
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
