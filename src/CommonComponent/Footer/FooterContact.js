import Image from "next/image";
import React from "react";
import styled from "styled-components";
import WaveImage from "/public/svg/wave.svg";

const FooterWrapper = styled.div`
  .container {
    height: 400px;
    justify-content: space-evenly;
    align-items: center;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    position: relative;
    top: -5.2px;
    ${
      "" /* padding:0px 80px;
    gap:100px; */
    }
  }
  .article-card {
    width: 500px;
    height: 300px;
    border-radius: 16px;
    background: #ffffff;
    display: flex;
    position: relative;
    flex-direction: column;
    z-index: 9;
    padding: 5px 10px 0 10px;
  }
  .article-img {
    width: 100%;
    text-align: center;
    background: #9d9d9d;
    border-radius: 12px;
    height: 170px;
    ${"" /* margin: 10px  ; */}
  }
  .article-title {
    color: #183b56;
    font-style: normal;
    float: left;
    font-weight: 700;
    font-size: 24px;
    padding: 30px 0 0 30px;
  }
  .article-des {
    font-size: 18px;
    line-height: 32px;
    color: #5a7184;
    padding-top: 12px;
    padding: 10px 0 0 30px;
  }
  .add-details {
    width: 620px;
  }
  .heading {
    font-size: 34px;
    font-style: normal;
    color: #fff;
    font-weight: 400;
  }
  .input-field {
    width: 400px;
    background: #ffffff;
    border-radius: 8px;
    font-size: 16px;
    color: #5a7184;
    height: 48px;
    padding: 20px;
    border: none;
  }
  .button {
    background: #757575;
    border-radius: 8px;
    height: 48px;
    width: 120px;
    border: none;
    margin-left: 20px;
    font-weight: 700;
    font-size: 16px;
    color: #fff;
  }
  .description {
    color: #5a7184;
    font-weight: 400;
    font-size: 14px;
    padding-top: 15px;
  }
  .cards {
    position: relative;
    height: 330px;
  }
  .left-card {
    width: 250px;
    height: 150px;
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: -80px;
    background: #ffffff;
    mix-blend-mode: normal;
    opacity: 0.06;
    box-shadow: -50px 50px 50px rgba(0, 0, 0, 0.15);
    border-radius: 16px;
  }
  .right-card {
    width: 250px;
    height: 150px;
    position: absolute;
    top: 30px;
    right: -60px;
    z-index: 1;
    mix-blend-mode: normal;
    background: #757575;
    box-shadow: -50px 50px 50px rgba(0, 0, 0, 0.15);
    border-radius: 16px;
  }
  @media screen and (max-width: 1200px) {
    height: auto;
    .container {
      flex-direction: column-reverse;
      width: 100%;
      height: 100%;
      padding: 0px 20px;
    }
    .cards {
      padding: 20px;
    }
    .add-details {
      width: 100%;
      text-align: center;
      padding: 20px;
    }
    .article-card {
      width: 100%;
    }
    .article-img {
      width: 100%;
    }
  }
  @media screen and (max-width: 670px) {
    .heading {
      font-size: 23px;
    }
    .article-des {
      padding: 10px 0 0 10px;
      font-size: 15px;
    }
    .article-title {
      padding: 20px 0 0 10px;
      font-size: 20px;
    }
    .button {
      margin-top: 20px;
    }
    .left-card {
      left: -10px;
    }
    .right-card {
      right: -10px;
    }
  }

  @media screen and (max-width: 440px) {
    .article-des {
      font-size: 15px;
    }
    .article-title {
      font-size: 18px;
    }
    .input-field {
      width: 100%;
    }
  }
`;

const FooterContact = () => {
  return (
    <FooterWrapper>
      <Image src={WaveImage} alt="wave-icon" />
      <div className="container">
        <div className="add-details">
          <div className="heading">
            Get our the crafted stories and fashion tips delivered from us to
            your inbox weekly.
          </div>
          <div
            style={{
              margin: "20px 0 0 0",
            }}
          >
            <input placeholder="Your Email" className="input-field" />
            <button className="button" style={{ cursor: "pointer" }}>
              Get started
            </button>
          </div>
          <div className="description">
            Get a response tomorrow if you submit by 9pm today. If we received
            after 9pm will get a reponse the following day.
          </div>
        </div>
        <div className="cards">
          <div className="left-card"></div>
          <div className="article-card">
            <div className="article-img"></div>
            <div className="article-title">The best aticles every week</div>
            <div className="article-des">
              Fashion and Lifestyle tips directly in your inbox.
            </div>
          </div>
          <div className="right-card"></div>
        </div>
      </div>
    </FooterWrapper>
  );
};

export default FooterContact;
