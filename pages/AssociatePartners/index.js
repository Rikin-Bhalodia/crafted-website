import React, { useRef } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OurServices from "../../src/Components/reseller/OurServices";
import ChooseUs from "../../src/Components/reseller/ChooseUs";
import ContactSec from "../../src/Components/reseller/Contact";
import AboutUs from "../../src/Components/reseller/AboutUs";
import OurMission from "../../src/Components/reseller/OurMission";
import TeamSlider from "../../src/Components/reseller/TeamSlider";
import banner from "/public/svg/reseller-banner.svg";
import Image from "next/image";

const ResellerWrapper = styled.div`
  width: 100%;
  height: 750px;
  background-image: url("");
  opacity: 0.7;
  position: relative;
  object-fit: fill;
  img {
    z-index: 1;
    object-fit: cover;
  }
  .reseller-section {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 2;
    position: absolute;
    top: 0;
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
      button {
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
        cursor: pointer;
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
    padding: 20px 0px;
    width: 100%;
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
  const form = useRef();
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      form.current[0].value &&
      form.current[1].value &&
      form.current[2].value
    ) {
      emailjs
        .sendForm(
          "service_m0vqwp5",
          "template_tzutlla",
          form.current,
          "_Byn7_FXweaYyAMpl"
        )
        .then(
          (result) => {
            toast(
              "your message we received from we will contact you in short time wait for that Thank you!!"
            );
          },
          (error) => {
            toast("opps something went wrong please retry after some time");
          }
        );
      router.push("/");
    } else {
      toast("Please fill all the details");
    }
  };
  return (
    <>
      <ResellerWrapper>
        <Image src={banner} layout="fill" />
        <div className="reseller-section">
          <h3>
            Become our <br /> The Crafted Associate Partner
          </h3>
          <p>
            We are builing a community of Manufacturers, Sellers, <br />{" "}
            Stitching Partners and Customers.
          </p>
          <form ref={form} onSubmit={handleSubmit}>
            <input type="text" id="fname" name="name" placeholder="Name*" />
            <br />

            <input type="email" id="email" name="email" placeholder="Email*" />
            <br />
            <select name="join" id="join">
              <option value="" hidden>
                Join Us as a
              </option>
              <option value="manufacturer">Manufacturer</option>
              <option value="resellers">Resellers</option>
              <option value="stitching-partners">Stitching Partners</option>
            </select>
            {/* <input
              type="text"
              id="join"
              name="join"
              placeholder="Join The Crafted Family as a*"
            /> */}
            <br />
            <button className="btn" type="submit">
              Get Started
            </button>
          </form>
        </div>
      </ResellerWrapper>
      <OurServices />
      <ChooseUs />
      <AboutUs />
      <OurMission />
      <TeamSlider />
      <ContactSec />
      <ToastContainer />
    </>
  );
};

export default Reseller;
