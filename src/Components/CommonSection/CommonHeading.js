import React from "react";
import styled from "styled-components";
// import Link from "next/link";
import Image from "next/image";
import Wave from "../../../public/svg/wave2.svg";
import banner from "../../../public/svg/main-slider.svg";
const CommonHeadWrapper = styled.div`
  background-color: #979797;
  width: 100%;
  height: 715px;
  position: relative;
  img {
    z-index: 1;
    object-fit: cover;
  }
  div {
    width: 100%;
    height: 541px;
    z-index: 111;
    position: relative;

    .common-head {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      h3 {
        font-weight: 400;
        font-size: 56px;
        line-height: 68px;
        text-align: center;
        letter-spacing: 0.2px;
        color: #ffffff;
        width: 50%;
      }
      p {
        font-weight: 400;
        font-size: 20px;
        line-height: 36px;
        text-align: center;
        color: #ffffff;
        margin-bottom: 100px;
        width: 50%;
      }
      .btn {
        background: #ffffff;
        border-radius: 2000px;
        font-weight: 700;
        font-size: 18px;
        line-height: 22px;
        text-align: center;
        color: #666666;
        border: none;
        padding: 12px 120px;
      }
    }
  }
  .img {
    position: absolute;
    bottom: 0;
  }
  @media screen and (max-width: 1040px) {
    height: 600px;
    div {
      height: 436px;
      padding: 10px;
      .common-head {
        h3 {
          font-size: 35px;
          line-height: 45px;
          margin-bottom: 10px;
          width: 50%;
        }
        p {
          margin-bottom: 20px;
          width: 50%;
        }
        .btn {
          padding: 10px 30px;
        }
      }
    }
  }
  @media screen and (max-width: 700px) {
    div {
      .common-head {
        h3 {
          width: 100%;
        }
        p {
          width: 100%;
        }
      }
    }
  }
`;

const CommonHead = (props) => {
  return (
    <>
      <CommonHeadWrapper>
        <Image src={banner} alt="banner-img" layout="fill" />
        <div>
          <div className="common-head">
            <h3>{props.heading}</h3>
            <p>{props.para}</p>
            <button className="btn" style={{ cursor: "pointer" }}>
              {props.btn}
            </button>
          </div>
        </div>
        <Image src={Wave} layout="fixed" className="img" alt="bannerWave" />
      </CommonHeadWrapper>
    </>
  );
};

export default CommonHead;
