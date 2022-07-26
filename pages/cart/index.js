import React, { useState } from "react";
import "antd/dist/antd.css";
import { Button, message, Steps } from "antd";
import ShoppingCart from "./../../src/Components/cart-page/Shoppingcart";
import CheckOut from "./../../src/Components/cart-page/Checkout";
import ThankYou from "./../../src/Components/cart-page/Thankyou";
import styled from "styled-components";


const CartWrapper = styled.div`
    padding: 0px 100px 100px;

    .heading {
        padding-bottom: 70px;
    }
  @media screen and (max-width:627px){
    padding: 0px 50px 100px;
  }
  @media screen and (max-width:527px){
    padding: 0px 20px 50px !important;
  }
`;


const { Step } = Steps;
const steps = [
  {
    title: "Shopping Cart",
    content: <ShoppingCart/>
  },
  {
    title: "Checkout",
    content: <CheckOut/>
  },
  {
    title: "Thank You",
    content: <ThankYou/>
  }
];

const Cart = () => {
  const [current, setCurrent] = useState(0);

  
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };

  const onChange = (value) => {
    console.log('onChange:', current);
    setCurrent(value);
  };

  return (
    <>
    <CartWrapper>
      <div className="heading" style={{display:'flex',justifyContent:'center',
      fontWeight: '700',fontSize: '36px',lineHeight: '54px',color: '#393D46',paddingTop:'40px'}}>{steps[current].title}</div>
      <Steps current={current} onChange={onChange}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content" style={{padding:'20px 0px 0px 0px'}}>{steps[current].content}</div>
      <div className="steps-action" style={{textAlign:'right'}}>
        {current === 0 && (
            <Button
            style={{
              padding: '0px 70px',
              height: '50px',
              background: '#393D46',
              color: '#FFFFFF',
              fontSize:'18px',
              fontWeight:'500',
            }}
            onClick={() => next()}
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
              padding: '0px 70px',
              height: '50px',
              background: '#393D46',
              color: '#FFFFFF',
              fontSize:'18px',
              fontWeight:'500',
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