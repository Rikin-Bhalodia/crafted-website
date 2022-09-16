import React from "react";
import styled from "styled-components";
// import Link from "next/link";
// import Image from "next/image";

const CommonContent1Wrapper = styled.div`
  display: flex;
  padding: 50px 200px;
  gap: 50px;
  align-items: center;
  .content-img {
    .img {
      width: 750px;
      height: 750px;
      background: #979797;
      border: 10px solid #ffffff;
      border-radius: 8px;
    }
  }
  .content-data {
    h3 {
      font-weight: 700;
      font-size: 48px;
      line-height: 60px;
      letter-spacing: 0.2px;
      color: #183b56;
      margin: 0 0 30px;
    }
    p {
      font-weight: 400;
      font-size: 30px;
      line-height: 40px;
      color: #5a7184;
    }
  }
  @media screen and (max-width: 1700px) {
    .content-img {
      .img {
        width: 650px;
        height: 650px;
      }
    }
    .content-data {
      h3 {
        font-size: 38px;
        line-height: 50px;
      }
      p {
        font-size: 30px;
        line-height: 40px;
      }
    }
  }

  @media screen and (max-width: 1500px) {
    padding: 50px 80px;
    .content-img {
      .img {
        width: 550px;
        height: 550px;
      }
    }
    .content-data {
      h3 {
        font-weight: 700;
        font-size: 48px;
        line-height: 60px;
      }
      p {
        font-size: 25px;
        line-height: 34px;
      }
    }
  }
  @media screen and (max-width: 1440px) {
    .content-img {
      .img {
        width: 600px;
        height: 600px;
      }
    }
    .content-data {
      p {
        font-size: 30px;
        line-height: 40px;
      }
    }
  }
  @media screen and (max-width: 1300px) {
    .content-img {
      .img {
        width: 550px;
        height: 550px;
      }
    }
    .content-data {
      p {
        font-size: 25px;
        line-height: 34px;
      }
    }
  }
  @media screen and (max-width: 1100px) {
    .content-img {
      .img {
        width: 450px;
        height: 450px;
      }
    }
    .content-data {
      h3 {
        font-size: 30px;
        line-height: 40px;
      }
      p {
        font-size: 22px;
        line-height: 30px;
      }
    }
  }
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    gap: 20px;
    .content-data {
      text-align: center;
    }
  }
  @media screen and (max-width: 657px) {
    padding: 30px;
  }
  @media screen and (max-width: 500px) {
    text-align: left;
    .content-img {
      .img {
        width: 330px;
        height: 330px;
      }
    }
  }
`;

const CommonContent1 = (props) => {
  return (
    <>
      <CommonContent1Wrapper>
        <div className="content-img">
          <div className="img"></div>
        </div>
        <div className="content-data">
          <h3>{props.head}</h3>
          <p>{props.para}</p>
          <p>{props.para1}</p>
        </div>
      </CommonContent1Wrapper>
    </>
  );
};

export default CommonContent1;
