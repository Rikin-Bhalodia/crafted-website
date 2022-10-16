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
      <p>Last updated on Oct 11th 2022</p>
      <p>
        CRAFTED NEEM TREE PRIVATE LIMITED believes in helping its customers as
        far as possible, and has therefore a liberal cancellation policy. Under
        this policy:
      </p>

      <ul>
        <li>
          Cancellations will be considered only if the request is made
          immediately after placing the order. However, the cancellation request
          may not be entertained if the orders have been communicated to the
          vendors/merchants and they have initiated the process of shipping
          them.
        </li>
        <li>
          CRAFTED NEEM TREE PRIVATE LIMITED does not accept cancellation
          requests for perishable items like flowers, eatables etc. However,
          refund/replacement can be made if the customer establishes that the
          quality of product delivered is not good.
        </li>
        <li>
          In case of receipt of damaged or defective items please report the
          same to our Customer Service team. The request will, however, be
          entertained once the merchant has checked and determined the same at
          his own end. This should be reported within 7 days of receipt of the
          products.
        </li>
        <li>
          In case you feel that the product received is not as shown on the site
          or as per your expectations, you must bring it to the notice of our
          customer service within 7 days of receiving the product. The Customer
          Service Team after looking into your complaint will take an
          appropriate decision.
        </li>
        <li>
          In case of complaints regarding products that come with a warranty
          from manufacturers, please refer the issue to them.
        </li>
        <li>
          In case of any Refunds approved by the CRAFTED NEEM TREE PRIVATE
          LIMITED, it’ll take 9-15 days for the refund to be processed to the
          end customer.
        </li>
      </ul>
    </PrivacyPolicyWrapper>
  );
};

export default PrivacyPolicy;
