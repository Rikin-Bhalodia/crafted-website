import React from "react";
import styled from "styled-components";

const ThankYouWrapper = styled.div`
  padding: 100px 0px;
  .thankyou-section {
    display : flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .para {
      font-weight: 700;
      font-size: 64px;
      margin-bottom: auto;
      color: #393D46;
    }
    p{
      font-weight: 400;
      font-size: 18px;
      text-align: center;
      color: #393D46;
      width: 40%;
    }
    a {
      font-weight: 500;
      font-size: 18px;
      line-height: 27px;
      color: #FFFFFF;
      padding:16px 35px;
      background: #393D46;
      margin-top: 30px;
    }
  }

  @media screen and (max-width:1060px){
    padding: 50px 0px;
    p{
      width: 80% !important;
    }
  }
  @media screen and (max-width:838px){
    .para {
      font-size: 54px !important;
    }
  }

  @media screen and (max-width:478px){
    .para {
      font-size: 44px  !important;
    }
  }
`;

const ThankYou = () => {
    return (
      <ThankYouWrapper>
        <div className="thankyou-section">
          <p className="para">Thank You!</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. </p>
          <a href="/">Go Shopping Again</a>
        </div>
      </ThankYouWrapper>
    );
};

export default ThankYou;