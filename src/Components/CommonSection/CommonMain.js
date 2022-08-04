import React from "react";
import styled from "styled-components";
// import Link from "next/link";
// import Image from "next/image";

const CommonMainWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 0px 200px 100px;
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
  @media screen and (max-width: 1440px) {
    padding: 0px 80px 100px;
  }
  @media screen and (max-width: 1440px) {
    flex-direction: column;
  }
  @media screen and (max-width: 657px) {
    padding: 0px 30px 70px;
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
        <div className="main-left">
          <p>{props.head}</p>
          <h4>
            We provide enterprises with innovative technology for small to space
            enterprises
          </h4>
        </div>
        <div className="main-right">
          <p>
            We supply enterprises, organizations and institutes of high-tech
            industries with modern components. We build long-term trusting
            relationships with our customers and partnes for further fruitful
            cooperations.
          </p>
          <p>
            From year to year we strive to invent the most innovative technology
            that is used by both small enterprises and space enterprises.
          </p>
        </div>
      </CommonMainWrapper>
    </>
  );
};

export default CommonMain;
