import Image from "next/image";
import React from "react";
import styled from "styled-components";
import HeartImg from "/public/svg/heart-icon.svg";
import Link from "next/link";
import { HiHeart } from "react-icons/hi";

const FooterWrapper = styled.div`
  background: #303030;
  height: 100%;
  position: relative;
  top: -5px;
  z-index: 999;

  .container {
    display: flex;
    justify-content: space-around;
  }
  .head {
    font-weight: 700;
    font-size: 30px;
    color: #cccccc;
  }
  .para {
    font-weight: 600;
    font-size: 26px;
    color: #cccccc;
  }
  .color {
    display: flex;
    column-gap: 15px;
    margin-top: 15px;
  }
  .diff {
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }
  .all-footer-content {
    display: flex;
    width: 700px;
    position: relative;
    margin-top: 30px;
    justify-content: center;
    gap: 80px;
  }
  .title {
    font-weight: 700;
    font-size: 18px;
    color: #cccccc;
    margin: 25px 0px;
  }
  .data {
    margin-top: 20px;
    color: #959ead;
    font-size: 14px;
  }
  .wishes {
    display: flex;
    width: 100%;
    justify-content: center;
    text-align: center;
    padding: 50px 0px 30px;
  }
  .image-back {
    height: 60px;
    width: 60px;
    background: #fff;
    justify-content: center;
    text-align: center;
    display: flex;
    align-items: center;
    border-radius: 50%;
  }
  .copy-right {
    font-weight: 400;
    font-size: 18px;
    color: #cccccc;
    padding-top: 10px;
  }
  .top {
    display: flex;
    justify-content: center;
    gap: 80px;
  }
  .end {
    display: flex;
    justify-content: center;
    gap: 80px;
  }
  .head-logo {
    margin-top: 100px;
    margin-left: 50px;
  }
  @media screen and (max-width: 1299px) {
    .top {
      gap: 50px;
    }
    .end {
      gap: 50px;
    }
    .all-footer-content {
      gap: 50px;
    }
    .container {
      justify-content: center;
    }
  }
  @media screen and (max-width: 1100px) {
    .head-logo {
      margin-left: 50px;
    }
    .head {
      font-size: 26px;
    }
    .para {
      font-size: 20px;
    }
    .color {
      column-gap: 10px;
    }
  }
  @media screen and (max-width: 799px) {
    .all-footer-content {
      flex-direction: column;
      align-items: center;
      margin-top: 0px;
      gap: 0px;
    }
    .all-footer-content > div {
      width: 350px;
      padding: 20px 0px;
    }
    .title {
      font-size: 16px;
    }
    .data {
      font-size: 13px;
    }
    .head {
      font-size: 24px;
    }
    .para {
      font-size: 16px;
    }
    .copy-right {
      font-size: 16px;
    }
  }
  @media screen and (max-width: 630px) {
    .container {
      flex-direction: column-reverse;
      align-items: center;
    }
    .head-logo {
      text-align: center;
      margin-left: 0px;
      margin-top: 30px;
    }
    .color {
      column-gap: 10px;
      text-align: center;
      justify-content: center;
    }
    .title {
      font-size: 20px;
    }
    .data {
      font-size: 13px;
    }
    .head {
      font-size: 25px;
    }
    .para {
      font-size: 15px;
    }
    .copy-right {
      font-size: 16px;
    }
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="container">
        <div className="head-logo">
          <Link href="/">
            <div className="head" style={{ cursor: "pointer" }}>
              The Crafted
            </div>
          </Link>
          <div className="para">Building The Crafted New India.</div>
          <div className="color">
            <div
              className="diff"
              style={{
                background: "#FC5A5A",
              }}
            ></div>
            <div
              className="diff"
              style={{
                background: "#FF6B00",
              }}
            ></div>
            <div
              className="diff"
              style={{
                background: "#67FC5A",
              }}
            ></div>
            <div
              className="diff"
              style={{
                background: "#5D5AFC",
              }}
            ></div>
            <div
              className="diff"
              style={{
                background: "#FC5AD8",
              }}
            ></div>
          </div>
        </div>
        <div className="all-footer-content">
          <div className="top">
            <div>
              <div className="title" style={{ cursor: "pointer" }}>
                Product
              </div>
              <Link href="/webapp">
                <div className="data" style={{ cursor: "pointer" }}>
                  TCOMaC
                </div>
              </Link>
              <div className="data" style={{ cursor: "pointer" }}>
                Physical
              </div>
              <div className="data" style={{ cursor: "pointer" }}>
                Categories
              </div>
              <div className="data" style={{ cursor: "pointer" }}>
                Referral Program
              </div>
            </div>
          </div>
          <div className="end">
            <div>
              <div className="title" style={{ cursor: "pointer" }}>
                Company
              </div>
              <Link href="/about">
                <div className="data" style={{ cursor: "pointer" }}>
                  About Us
                </div>
              </Link>
              <Link href="/think-social">
                <div className="data" style={{ cursor: "pointer" }}>
                  Think Social
                </div>
              </Link>
              <Link href="/blog">
                <div className="data" style={{ cursor: "pointer" }}>
                  Blog
                </div>
              </Link>
              <Link href="/contact">
                <div className="data" style={{ cursor: "pointer" }}>
                  Contact Us
                </div>
              </Link>
            </div>
            <div>
              <div className="title" style={{ cursor: "pointer" }}>
                More
              </div>
              <Link href='/privacy-policy'>
              <div className="data" style={{ cursor: "pointer" }}>
              Privacy Policy
              </div>
              </Link>
              <Link href="/terms-condition">
              <div className="data" style={{ cursor: "pointer" }}>
              Terms and Conditions
              </div>
              </Link>
              <Link href="/refund-policy">
              <div className="data" style={{ cursor: "pointer" }}>
              Cancellation Return and Refund
              </div>
              </Link>
              <Link href="/delivery-policy">
              <div className="data" style={{ cursor: "pointer" }}>
              Shipping & Delivery Policy
              </div>
              </Link>
              <Link href="/contact">
              <div className="data" style={{ cursor: "pointer" }}>
              Contact Us
              </div>
              </Link>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <div className="wishes">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div className="image-back">
            <Image src={HeartImg} alt="heart-img" />
          </div>
          <div className="copy-right">
            Copyright © The Crafted 2022 . Crafted with{" "}
            <HiHeart style={{ color: "red" }} /> in India.
          </div>
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
