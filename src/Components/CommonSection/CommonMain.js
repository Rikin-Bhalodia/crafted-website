import React from "react";
import styled from "styled-components";
// import Link from "next/link";
// import Image from "next/image";

const CommonMainWrapper = styled.div`
  padding: 0px 200px 30px;
  .main-content {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 50px;
    .main-left {
      flex-grow: 1;
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
      flex-grow: 1;
      p {
        font-weight: 400;
        font-size: 28px;
        line-height: 36px;
        color: #5a7184;
      }
    }
  }

  @media screen and (max-width: 1440px) {
    padding: 0px 80px;
    .main-content {
      .main-left {
        p {
          font-size: 20px;
          line-height: 25px;
          letter-spacing: 1.7px;
        }
        h4 {
          font-size: 30px;
          line-height: 40px;
        }
      }
      .main-right {
        p {
          font-size: 25px;
          line-height: 30px;
        }
      }
    }
  }
  @media screen and (max-width: 1000px) {
    .main-content {
      flex-direction: column;
      text-align: center;
      .main-left {
        h4 {
          width: 100%;
        }
      }
    }
  }
  @media screen and (max-width: 657px) {
    padding: 0px 30px 0px;
  }
  @media screen and (max-width: 500px) {
    .main-content {
      text-align: left;
      gap: 0px;

      .main-left {
        p {
          font-size: 15px;
          line-height: 15px;
          letter-spacing: 1.5px;
        }
        h4 {
          font-size: 28px;
          line-height: 38px;
        }
      }
      .main-right {
        p {
          font-size: 22px;
          line-height: 30px;
        }
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
