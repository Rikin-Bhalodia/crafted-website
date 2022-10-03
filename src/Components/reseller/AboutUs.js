import React from "react";
import styled from "styled-components";
import chooseUs from "../../../public/svg/reseller_chooseus.svg";

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
      font-size: 33px;
      line-height: 52px;
      font-weight: 500;
      letter-spacing: 1px;
      color: #262729;
      margin: 30px 0px 50px;
      width: 100%;
    }
    img {
      width: 100%;
      border-radius: 15px;
    }
    p {
      font-weight: 400;
      font-size: 25px;
      line-height: 38px;
      color: #262729;
      opacity: 0.7;
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
      font-size: 32px;
      line-height: 50px;
      color: #262729;
      opacity: 0.7;
    }
    img {
      width: 100%;
      height: 100%;
      border-radius: 15px;
      margin: 70px 0px;
    }
  }
  @media screen and (max-width: 1440px) {
    padding: 80px;
    gap: 50px;
    .about-left {
      img {
        width: 100%;
        border-radius: 15px;
      }
    }
  }

  @media screen and (max-width: 1240px) {
    gap: 50px;
    grid-template-rows: auto auto;
    grid-template-columns: 1fr;
  }
  @media screen and (max-width: 775px) {
    padding: 25px 30px;
  }

  @media screen and (max-width: 594px) {
    gap: 30px;

    .about-left {
      .para {
        color: #fd346e;
        margin: 0px;
      }
      h4 {
        font-size: 25px;
        line-height: 38px;
        margin: 30px 0px;
      }
    }
    .about-right {
      div {
        height: 100%;
        margin: 30px 0px;
      }
      p {
        font-size: 20px;
        margin: 10px 0px;
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
          <h4>
            The Crafted is an Indian revolutionary brand that focuses on
            Empowering Women, Educating Youth, and Helping in crafting a New
            India.
          </h4>
          <img src={chooseUs.src} />
          <p>
            It is on a mission of enabling social entrepreneurship throughout
            India by empowering Indian women to work from home and educating
            youth to become focused and self-reliant.
          </p>
        </div>
        <div className="about-right">
          <p className="para">Step to Join our program</p>
          <p>1. Sign up to the program here.</p>
          <p>2. Fill the form and submit application.</p>
          <p>
            3. Once our team will receive your application they will connect you
            through the call.
          </p>
          <p>
            4. Once we approve the application you will receive dashboard login
            and welcome kit.
          </p>
          <p>5. Now you are ready to refer and earn.</p>
        </div>
      </AboutUsWrapper>
    </>
  );
};

export default AboutUs;
