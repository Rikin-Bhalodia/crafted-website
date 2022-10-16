import React from "react";
import styled from "styled-components";
// import Link from "next/link";

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
      <div className="heading">Shipping & Delivery Policy</div>
      <p>Last updated on Oct 11th 2022</p>

      <p>
        For International buyers, orders are shipped and delivered through
        registered international courier companies and/or International speed
        post only. For domestic buyers, orders are shipped through registered
        domestic courier companies and /or speed post only. Orders are shipped
        within 0-2 days or as per the delivery date agreed at the time of order
        confirmation and delivering of the shipment subject to Courier Company /
        post office norms. CRAFTED NEEM TREE PRIVATE LIMITED is not liable for
        any delay in delivery by the courier company / postal authorities and
        only guarantees to hand over the consignment to the courier company or
        postal authorities within 0-2 days from the date of the order and
        payment or as per the delivery date agreed at the time of order
        confirmation. Delivery of all orders will be to the address provided by
        the buyer. Delivery of our services will be confirmed on your mail ID as
        specified during registration. For any issues in utilizing our services
        you may contact our helpdesk on<b> 7317029723</b> or{" "}
        <b> thecraftedyou@gmail.com</b>
      </p>
    </PrivacyPolicyWrapper>
  );
};

export default PrivacyPolicy;
