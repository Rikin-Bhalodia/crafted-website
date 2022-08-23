import React from "react";
import styled from "styled-components";
// import Link from "next/link";
// import Image from "next/image";

const CommonMainWrapper = styled.div`
  padding: 0px 200px 30px;
  .main-content {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    gap: 50px;
    .main-left {
      p {
        font-weight: 400;
        font-size: 24px;
        line-height: 29px;
        letter-spacing: 2px;
        text-transform: uppercase;
        color: #000000;
      }
      h4 {
        font-weight: 700;
        font-size: 36px;
        line-height: 48px;
        letter-spacing: 0.2px;
        color: #183b56;
        width: 85%;
        margin: 0px;
      }
    }
    .main-right {
      p {
        font-weight: 400;
        font-size: 18px;
        line-height: 32px;
        color: #183b56;
      }
    }
  }

  @media screen and (max-width: 1440px) {
    padding: 0px 80px;
  }
  @media screen and (max-width: 1440px) {
    .main-content {
      flex-direction: column;
    }
  }
  @media screen and (max-width: 657px) {
    padding: 0px 30px 0px;
    gap: 30px;
    .main-left {
      h4 {
        font-size: 26px;
        line-height: 38px;
        width: 100%;
      }
    }
  }
`;

const CommonMain = (props) => {
  return (
    <>
      <CommonMainWrapper>
        <div className="main-content">
          <div className="main-left">
            <p>{props.head}</p>
            <h4>{props.left}</h4>
          </div>
          <div className="main-right">
            <p>{props.righttop}</p>
            <p>{props.rightbottom}</p>
          </div>
        </div>
      </CommonMainWrapper>
    </>
  );
};

export default CommonMain;
