import React from "react";
import styled from "styled-components";
import Link from "next/link";
import OurServices from "../../src/Components/reseller/OurServices";
import ChooseUs from "../../src/Components/reseller/ChooseUs";
import ContactSec from "../../src/Components/reseller/Contact";
import AboutUs from "../../src/Components/reseller/AboutUs";
import OurMission from "../../src/Components/reseller/OurMission";
import TeamSlider from "../../src/Components/reseller/TeamSlider";

const ResellerWrapper = styled.div`
  width: 100%;
  height: 750px;
  background: linear-gradient(
    261.26deg,
    #cccccc 14.9%,
    #666666 43.58%,
    #000000 89.94%
  );
  opacity: 0.7;
  .reseller-section {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h3 {
      font-weight: 400;
      font-size: 60px;
      line-height: 64px;
      text-align: center;
      color: #ffffff;
      width: 100%;
      margin-bottom: 30px;
      letter-spacing: 2px;
    }
    p {
      font-weight: 400;
      font-size: 21px;
      line-height: 30px;
      text-align: center;
      color: #ffffff;
      width: 100%;
      margin-bottom: 30px;
    }
    form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 50px;
      input,
      select {
        width: 450px;
        height: 50px;
        background: #ffffff;
        border: 1px solid #f0e2d0;
        border-radius: 25px;
        font-weight: 500;
        font-size: 21px;
        color: #666666;
        padding: 0px 50px;
        margin-bottom: -5px;
      }
      a {
        background: #000000;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 50px;
        font-weight: 400;
        font-size: 24px;
        line-height: 26px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #ffffff;
        padding: 15px 50px;
        margin-top: 10px;
      }
    }
  }
  @media screen and (max-width: 900px) {
    .reseller-section {
      h3 {
        font-size: 50px;
      }
    }
  }
  @media screen and (max-width: 568px) {
    padding: 20px 50px;
    width: 100%;
    height: 100%;
    .reseller-section {
      h3 {
        font-size: 30px;
        line-height: 44px;
        margin-bottom: 0px;
      }
      p {
        font-size: 11px;
        line-height: 20px;
        margin-bottom: 30px;
      }
      form {
        input,
        select {
          width: 300px;
          height: 35px;
          width: 100%;
          font-size: 15px;
        }
        a {
          font-size: 14px;
          padding: 8px 50px;
        }
      }
    }
  }
`;

const Reseller = () => {
  return (
    <>
      <ResellerWrapper>
        <div className="reseller-section">
          <h3>
            Become our <br /> The Crafted Associate Partner
          </h3>
          <p>
            We are builing a community of Manufacturers, Sellers, <br />{" "}
            Stitching Partners and Customers.
          </p>
          <form action="post">
            <input type="text" id="fname" name="fname" placeholder="Name*" />
            <br />

            <input type="email" id="email" name="email" placeholder="Email*" />
            <br />
            <select id="Month">
              <option value="">Category*</option>
              <option value="Janaury">Janaury</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
            </select>
            <br />
            <Link href="#" className="btn">
              Get Started
            </Link>
          </form>
        </div>
      </ResellerWrapper>
      <OurServices />
      <ChooseUs />
      <AboutUs />
      <OurMission />
      <TeamSlider />
      <ContactSec />
    </>
  );
};

export default Reseller;
