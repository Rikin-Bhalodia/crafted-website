import React from "react";
import styled from "styled-components";
import Link from "next/link";

const ContactSecWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px;
  .contact-section {
    width: 100vw;
    height: 550px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(
      261.26deg,
      rgba(253, 52, 110, 0.96) 14.9%,
      #b81c5c 43.58%,
      #0abfbc 89.94%
    );
    border-radius: 15px;
    h4 {
      font-size: 48px;
      line-height: 62px;
      text-align: center;
      letter-spacing: -1px;
      color: #ffffff;
      width: 50%;
      margin: 0px;
    }
    p {
      width: 35%;
      font-weight: 400;
      font-size: 18px;
      line-height: 32px;
      text-align: center;
      color: #ffffff;
      margin: 40px 0px 50px;
    }
    a {
      background: #fd346e;
      border-radius: 50px;
      padding: 18px 60px;
      font-size: 15px;
      line-height: 26px;
      text-align: center;
      color: #ffffff;
    }
  }
  @media screen and (max-width: 1253px) {
    .contact-section {
      width: 100%;
      height: 100%;
      padding: 50px 30px;
      h4 {
        width: 80%;
      }
      p {
        width: 56%;
        margin: 20px 0px 30px;
      }
    }
  }
  @media screen and (max-width: 925px) {
    padding: 50px 30px;
  }

  @media screen and (max-width: 775px) {
    .contact-section {
      h4 {
        font-size: 28px;
        line-height: 38px;
        width: 80%;
      }
      p {
        width: 66%;
      }
      a {
        padding: 8px 50px;
      }
    }
  }
  @media screen and (max-width: 675px) {
    .contact-section {
      h4 {
        width: 100%;
      }
      p {
        width: 100%;
      }
    }
  }
`;

const ContactSec = () => {
  return (
    <>
      <ContactSecWrapper>
        <div className="contact-section">
          <h4>Find out how we’ll build your digital presence</h4>
          <p>
            Don’t miss out the potential visitors and sales for the absence of
            your digital presence.
          </p>
          <Link href="#">Get started</Link>
        </div>
      </ContactSecWrapper>
    </>
  );
};

export default ContactSec;
