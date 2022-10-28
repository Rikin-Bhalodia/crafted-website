import React from "react";
import styled from "styled-components";
import Link from "next/link";

const PrivacyPolicyWrapper = styled.div`
  padding: 0 200px 50px;
  .heading {
    width: 100%;
    height: 300px;
    font-size: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #535155;
    font-style: italic;
    line-height: 76px;
    text-align: center;
  }
  p {
    font-size: 20px;
    font-family: "Open Sans", sans-serif;
    line-height: 1.5em;
    letter-spacing: 0.5px;
  }
  a {
    color: blue;
  }
  ul li {
    font-size: 20px;
  }
  div {
    padding-top: 20px;
    font-size: 35px;
    font-family: "Libre Baskerville", Georgia, Times, serif;
    color: #535155;
  }
  @media screen and (max-width: 1000px) {
    padding: 0 150px 40px;
    .heading {
      font-size: 45px;
      line-height: 55px;
    }
    div {
      font-size: 30px;
    }
  }
  @media screen and (max-width: 800px) {
    padding: 0 100px 40px;
    .heading {
      font-size: 40px;
      height: 200px;
    }
    div {
      font-size: 27px;
    }
  }
  @media screen and (max-width: 600px) {
    padding: 0 70px 30px;
    .heading {
      font-size: 35px;
      line-height: 40px;
    }
    div {
      font-size: 25px;
    }
    ul li,
    p {
      font-size: 16px;
    }
  }
  @media screen and (max-width: 450px) {
    padding: 0 20px 20px;
    .heading {
      font-size: 25px;
      height: 170px;
    }
    div {
      font-size: 23px;
    }
  }
`;

const PrivacyPolicy = () => {
  return (
    <PrivacyPolicyWrapper>
      <div className="heading">Cancellation & Refund Policy</div>
      <p>Last updated on Oct 28th 2022</p>
      <p>
      CRAFTED NEEM TREE PRIVATE LIMITED believes in helping its customers as far as possible, and has therefore a liberal cancellation policy. Under this policy:
      </p>
<div>
Cancellation Policy
</div>
<p>
Cancellations will be considered only if the request is made immediately within 24 hours after placing the order. However, the cancellation request may not be entertained if the orders have been communicated to the vendors/merchants after 24 hours and they have initiated the process of shipping them.
</p>
      <p>CRAFTED NEEM TREE PRIVATE LIMITED does not accept cancellation requests for the customized orders.</p>
      <p>In case you feel that the product received is not as shown on the site or as per your expectations, you must bring it to the notice of our customer service within 24 hours of receiving the product. The Customer Service Team after looking into your complaint will take an appropriate decision.</p>
      <div>
      Return and Refund Policy
      </div>
      <p>You may return new most (not used), unopened items within 7 days after delivery for a full refund (excluding shipping). Special-ordered (i.e. Customized) items or replacement parts cannot be refunded and are considered final sale, without exceptions.</p>
      <p>In case of Refunds approved by the CRAFTED NEEM TREE PRIVATE LIMITED, it’ll take 9-15 days for the refund to be processed to the end customer once we receive the returned product.</p>
      <div>Damaged Orders</div>
      <p>Unfortunately, not all orders arrive in the condition that they left our warehouse. Please contact customer service, immediately, if your order appears damaged. Do not sign for the package until we’ve been contacted. If your order has been affected by concealed damage, please contact us once the package is opened. We will require pictures and other details to ensure proper resolution.</p>
      <p>In case of receipt of damaged or defective items please report the same to our Customer Service team. The request will, however, be entertained once the merchant has checked and determined the same at his own end. This should be reported within 48 hours of receipt of the products.</p>
      <p>For any issues in utilizing our services you may contact our helpdesk on <b>
      7317029723 </b>  or mail us at <b>
      TheCraftedYou@gmail.com</b></p>
    </PrivacyPolicyWrapper>
  );
};

export default PrivacyPolicy;
