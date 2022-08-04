import React from "react";
import styled from "styled-components";
import Link from "next/link";
// import Image from "next/image";

const OurMissionWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: flex-start;
  gap: 100px;
  padding: 100px 150px;
  .mission-heading {
    width: 100%;
    .para {
      font-size: 16px;
      line-height: 28px;
      color: #fd346e;
      margin: 0px;
    }
    p {
      font-weight: 400;
      font-size: 18px;
      line-height: 32px;
      color: #262729;
      opacity: 0.7;
      margin: 0px 0px 50px;
    }
    h4 {
      font-size: 48px;
      line-height: 62px;
      letter-spacing: -1px;
      color: #262729;
      margin: 15px 0px 20px;
    }
    a {
      background: #fd346e;
      border-radius: 50px;
      font-size: 15px;
      line-height: 26px;
      color: #ffffff;
      padding: 15px 60px;
    }
  }
  .mission-img {
    display: flex;
    gap: 20px;
    div {
      width: 300px;
      height: 400px;
      background: #c4c4c4;
      border-radius: 5px;
      transform: skew(-14deg);
    }
  }
  @media screen and (max-width: 1440px) {
    padding: 80px;
    gap: 50px;
  }
  @media screen and (max-width: 1240px) {
    gap: 50px;
    grid-template-rows: auto auto;
    grid-template-columns: 1fr;
    .mission-img {
      display: flex;
      justify-content: center;
    }
  }
  @media screen and (max-width: 864px) {
    padding: 50px 30px;
    .mission-heading {
      width: 100%;

      h4 {
        font-size: 38px;
        line-height: 52px;
      }
    }
    .mission-img {
      display: flex;
      justify-content: center;
      align-items: center;

      div {
        transform: skew(-8deg);
        width: 100%;
        height: 300px;
      }
    }
  }
`;

const OurMission = () => {
  return (
    <>
      <OurMissionWrapper>
        <div className="mission-heading">
          <p className="para">Our Mission</p>
          <h4>Create recognition for businesses online</h4>
          <p>
            Business advisory service advises current and future businesses
            prospects of a client, with the aim of advancing their business or
            company.
          </p>
          <Link href="#">Get started</Link>
        </div>
        <div className="mission-img">
          <div></div>
          <div></div>
        </div>
      </OurMissionWrapper>
    </>
  );
};

export default OurMission;
