import React from "react";
import styled from "styled-components";
// import Link from "next/link";
// import Image from "next/image";

const AboutUsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.8fr 1fr;
  gap: 150px;
  padding: 100px 150px;
  .about-left {
    .para {
      font-size: 16px;
      line-height: 28px;
      color: #fd346e;
      margin: 0px;
    }
    h4 {
      font-size: 48px;
      line-height: 62px;
      letter-spacing: -1px;
      color: #262729;
      margin: 30px 0px 50px;
      width: 80%;
    }
    div {
      width: 100%;
      height: 600px;
      background: #c4c4c4;
      border-radius: 15px;
    }
  }
  .about-right {
    .para {
      font-size: 16px;
      line-height: 28px;
      color: #fd346e;
      margin: 0px;
    }
    p {
      font-weight: 400;
      font-size: 18px;
      line-height: 32px;
      color: #262729;
      opacity: 0.7;
    }
    div {
      width: 100%;
      height: 400px;
      background: #c4c4c4;
      border-radius: 15px;
      margin: 70px 0px;
    }
  }
  @media screen and (max-width: 1440px) {
    padding: 80px;
    gap: 50px;
  }
  @media screen and (max-width: 1240px) {
    gap: 50px;
    grid-template-rows: auto auto;
    grid-template-columns: 1fr;
  }
  @media screen and (max-width: 775px) {
    padding: 50px 30px;
  }

  @media screen and (max-width: 594px) {
    gap: 30px;

    .about-left {
      .para {
        color: #fd346e;
        margin: 0px;
      }
      h4 {
        font-size: 35px;
        line-height: 48px;
        margin: 30px 0px 30px;
      }
      div {
        height: 400px;
      }
    }
    .about-right {
      div {
        height: 300px;
        margin: 30px 0px;
      }
    }
  }
`;

const AboutUs = () => {
  return (
    <>
      <AboutUsWrapper>
        <div className="about-left">
          <p className="para">About us</p>
          <h4>We are here to make your website looks more elegant</h4>
          <div></div>
        </div>
        <div className="about-right">
          <p className="para">Our customer</p>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy
          </p>
          <div></div>
          <p>
            Everything we do is thoughtfully tied with creativity. We design and
            develop modern user friendly websites which incorporate your logo
            and branding according to your choice.
          </p>
        </div>
      </AboutUsWrapper>
    </>
  );
};

export default AboutUs;
