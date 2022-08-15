import React from "react";
import styled from "styled-components";
// import Link from "next/link";
import Image from "next/image";
import Oval from "../../../public/svg/oval.svg";
import Dot from "../../../public/svg/dot.svg";

const AboutTcomacWrapper = styled.div`
  margin: 50px 200px;
  .about-tcomac {
    padding-top: 0px;
    position: absolute;
    display: flex;
    z-index: 999;
    .about-desc {
      h6 {
        font-weight: 400;
        font-size: 24px;
        line-height: 29px;
        letter-spacing: 2px;
        text-transform: uppercase;
        color: #000000;
        margin-bottom: 40px;
      }
      h4 {
        font-weight: 400;
        font-size: 36px;
        line-height: 48px;
        letter-spacing: 0.2px;
        color: #183b56;
        margin: 0px 0px 50px;
      }
      p {
        font-weight: 400;
        font-size: 18px;
        line-height: 32px;
        color: #5a7184;
        margin-bottom: 60px;
        /* width: 50%; */
      }
      .btn {
        border: 2px solid #333333;
        border-radius: 2000px;
        font-weight: 700;
        font-size: 16px;
        line-height: 22px;
        text-align: center;
        color: #333333;
        mix-blend-mode: darken;
        padding: 10px 200px;
        background-color: #fff;
        cursor: pointer !important;
      }
    }
    .about-img {
      width: 100%;
      height: 100%;
      position: relative;

      .item {
        background: #979797;
        border-radius: 13px;
      }
      .item1 {
        width: 85px;
        height: 64px;
        bottom: -300px;
        position: absolute;
        right: 280px;
      }
      .item2 {
        width: 128px;
        height: 96px;
        bottom: -220px;
        position: absolute;
        right: 460px;
        z-index: 999;
      }
      .item3 {
        width: 160px;
        height: 120px;
        bottom: -475px;
        position: absolute;
        right: 320px;
        z-index: 999;
      }
      .item4 {
        width: 213.33px;
        height: 160px;
        top: 40px;
        position: absolute;
        right: 0px;
        z-index: 999;
      }
      .item5 {
        width: 128px;
        height: 96px;
        bottom: -380px;
        position: absolute;
        right: 40px;
      }
      .item6 {
        position: absolute;
        bottom: -430px;
        right: 260px;
      }
      .item7 {
        position: absolute;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: #f1f4f5;
        bottom: -238px;
        right: 568px;
      }
      .item8 {
        background: #1565d8;
        position: absolute;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        bottom: -220px;
        right: -21px;
      }
    }
  }
  .imgOval {
    position: absolute;
    top: 0;
    right: 0;
  }

  @media screen and (max-width: 1660px) {
    margin: 50px;
  }
  @media screen and (max-width: 1360px) {
    margin: 0px 30px 350px;
    .about-tcomac {
      flex-direction: column;
      .about-desc {
      }
      .about-img {
        margin-bottom: 400px;
      }
    }
  }
  @media screen and (max-width: 700px) {
    margin: 0px 30px 250px;

    .about-tcomac {
      .about-desc {
        h6 {
          font-size: 20px;
          line-height: 25px;
          margin-bottom: 20px;
        }
        h4 {
          font-size: 26px;
          line-height: 38px;
          margin: 0px 0px 20px;
        }
        p {
          font-size: 15px;
          line-height: 30px;
          margin-bottom: 30px;
        }
        .btn {
          padding: 10px 50px;
        }
      }
    }
    .about-img {
      .item1 {
        width: 65px !important;
        height: 44px !important;
        bottom: -240px !important;
        right: 160px !important;
      }
      .item2 {
        width: 88px !important;
        height: 66px !important;
        bottom: -160px !important;
        right: 260px !important;
        z-index: 999;
      }
      .item3 {
        width: 130px !important;
        height: 100px !important;
        bottom: -380px !important;
        right: 220px !important;
        z-index: 999;
      }
      .item4 {
        width: 150px !important;
        height: 100px !important;
        top: 40px !important;
        right: 20px !important;
        z-index: 999;
      }
      .item5 {
        width: 108px !important;
        height: 76px !important;
        bottom: -330px !important;
        right: 20px !important;
      }
      .item6 {
        bottom: -360px !important;
        right: 180px !important;
      }
      .item7 {
        width: 30px !important;
        height: 30px !important;
        bottom: -168px !important;
        right: 328px !important;
      }
      .item8 {
        width: 40px !important;
        height: 40px !important;
        bottom: -155px !important;
        right: 5px !important;
      }
    }
  }
`;

const AboutTcomac = (data) => {
  return (
    <>
      <AboutTcomacWrapper>
        <div className="about-tcomac">
          <div className="about-desc">
            <h6>{data.shead}</h6>
            <h4>{data.mhead}</h4>
            <p>{data.para}</p>
            <button className="btn">{data.btn}</button>
          </div>
          <div className="about-img">
            <div className="item item1"></div>
            <div className="item item2"></div>
            <div className="item item3"></div>
            <div className="item item4"></div>
            <div className="item item5"></div>
            <div className="item6">
              <Image src={Dot} alt="img" />
            </div>
            <div className="item7"></div>
            <div className="item8"></div>
          </div>
        </div>
        <Image
          src={Oval}
          layout="fixed"
          className="imgOval"
          alt="background-oval"
          width={2000}
          height={550}
        />
      </AboutTcomacWrapper>
    </>
  );
};

export default AboutTcomac;
