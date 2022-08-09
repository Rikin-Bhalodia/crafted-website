import Image from "next/image";
import React from "react";
import styled from "styled-components";
import HeartImg from "/public/svg/heart-icon.svg";
import Link from "next/link";
const FooterWrapper = styled.div`
  background: #303030;
  height: 100%;
  position: relative;
  top: -5px;

  .container {
    display: flex;
    justify-content: space-around;
  }
  .head {
    font-weight: 700;
    font-size: 36px;
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
    ${"" /* right: 50px; */}
    margin-top: 30px;
    justify-content: space-between;
  }
  .title {
    font-weight: 700;
    font-size: 25px;
    color: #cccccc;
    margin: 25px 0px;
  }
  .data {
    margin-top: 20px;
    color: #959ead;
    font-size: 16px;
  }
  .wishes {
    display: flex;
    width: 100%;
    justify-content: center;
    text-align: center;
    ${"" /* position: absolute; */}
    ${"" /* bottom: 35px; */}
    padding:50px 0px 30px;
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
    font-size: 20px;
    color: #cccccc;
    padding-top: 10px;
  }
  @media screen and (max-width: 1299px) {
    .container {
      flex-direction: column;
      text-align: center;
    }
    .container > div {
      margin-top: 50px !important;
    }
    .color {
      justify-content: center;
    }
    .all-footer-content {
      justify-content: space-evenly;
      width: 100vw;
    }
  }
  @media screen and (max-width: 1299px) {
    .all-footer-content {
      flex-wrap: wrap;
      margin-top: 0px !important;
    }
    .all-footer-content > div {
      width: 150px;
      padding: 20px 0px;
    }
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="container">
        <div style={{ margin: "150px 0 0 0" }}>
          <Link href="/">
            <div className="head" style={{ cursor: "pointer" }}>
              The Crafted
            </div>
          </Link>
          <div className="head" style={{ fontSize: "24px", fontWeight: "400" }}>
            Building The Crafted New India.
          </div>
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
          <div>
            <div className="title" style={{ cursor: "pointer" }}>
              Services
            </div>
            <div className="data" style={{ cursor: "pointer" }}>
              Partners
            </div>
            <div className="data" style={{ cursor: "pointer" }}>
              Design
            </div>
            <div className="data" style={{ cursor: "pointer" }}>
              Themes
            </div>
            <div className="data" style={{ cursor: "pointer" }}>
              Illustrations
            </div>
          </div>
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
            <div className="data" style={{ cursor: "pointer" }}>
              Terms
            </div>
            <div className="data" style={{ cursor: "pointer" }}>
              Privacy Policy
            </div>
            <div className="data" style={{ cursor: "pointer" }}>
              Caree
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
            Copyright © The Crafted 2022 . Crafted with love in India.
          </div>
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
