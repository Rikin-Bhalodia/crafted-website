import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Dot from "../../../public/svg/dot2.svg";

const CommonImageWrapper = styled.div`
  padding: 50px 0px;
  .image-section {
    width: 100%;
    height: 700px;
    display: grid;
    grid-template-columns: 0.8fr 0.9fr 1fr 1.4fr 2.4fr 1.5fr 1.5fr;
    grid-template-rows: 0.5fr 0.7fr 3.8fr 1fr 3.5fr 1fr;
    gap: 20px;
    position: relative;
    .img1 {
      width: 100%;
      height: 100%;
      background: #979797;
      border-radius: 10px;
      grid-area: 1/3/5/5;
    }
    .img2 {
      background: #979797;
      border-radius: 10px;
      grid-area: 3/5/4/6;
    }
    .img3 {
      background: #979797;
      border-radius: 10px;
      grid-area: 2/6/4/8;
    }
    .img4 {
      background: #979797;
      border-radius: 10px;
      grid-area: 5/1/7/4;
    }
    .img5 {
      background: #979797;
      border-radius: 10px;
      grid-area: 5/4/6/5;
    }
    .img6 {
      background: #979797;
      border-radius: 10px;
      grid-area: 4/5/7/7;
      z-index: 1;
    }
    .img7 {
      position: absolute;
      bottom: 205px;
      right: 94px;
      z-index: -999;
    }
  }
  @media screen and (max-width: 1000px) {
    padding: 0px;
    .image-section {
      grid-template-columns: 2fr 3.5fr;
      grid-template-rows: 3fr 1fr 4fr 1fr 4fr;
      padding: 20px;
      .img1 {
        grid-area: 2/1/5/2;
      }
      .img2 {
        grid-area: 1/1/2/2;
      }
      .img3 {
        grid-area: 1/2/3/3;
      }
      .img4 {
        grid-area: 3/2/4/3;
      }
      .img5 {
        grid-area: 5/1/6/2;
      }
      .img6 {
        grid-area: 4/2/6/3;
      }
      .img7 {
        display: none;
      }
    }
  }
`;

const CommonImage = () => {
  return (
    <>
      <CommonImageWrapper>
        <div className="image-section">
          <div className="img1"></div>
          <div className="img2"></div>
          <div className="img3"></div>
          <div className="img4"></div>
          <div className="img5"></div>
          <div className="img6"></div>
          <div className="img7">
            <Image src={Dot} alt="img" />
          </div>
        </div>
      </CommonImageWrapper>
    </>
  );
};

export default CommonImage;
