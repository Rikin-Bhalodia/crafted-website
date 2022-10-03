import React from "react";
import styled from "styled-components";
import Link from "next/link";
import achive from "../../../public/svg/reseller_achive.svg";
const OurMissionWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: flex-start;
  gap: 100px;
  padding: 100px 150px;
  align-items: center;
  .mission-heading {
    width: 100%;
    p {
      font-weight: 400;
      font-size: 18px;
      line-height: 32px;
      color: #262729;
      opacity: 0.7;
      margin: 0px 0px 20px;
    }
    h4 {
      font-size: 40px;
      line-height: 60px;
      font-weight: 500;
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
    img {
      width: 100%;
      height: 100%;
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
    padding: 25px 30px;
    .mission-heading {
      width: 100%;

      h4 {
        font-size: 30px;
        line-height: 50px;
      }
    }
    .mission-img {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

const OurMission = () => {
  return (
    <>
      <OurMissionWrapper>
        <div className="mission-heading">
          <h4>
            Why is it a win-win situation to join the Crafted Associate Partner
            Program and The Crafted community?
          </h4>
          <p>
            The Crafted is world's first brand to introduce an online colour
            matching tech tool to help customers find a colour match for their
            costumes.
          </p>
          <p style={{ marginBottom: "50px" }}>
            Joining us will help you to work with a completely new niche concept
            and increase your market reach by targeting a specific audience.
          </p>
          <Link href="#">Get started</Link>
        </div>
        <div className="mission-img">
          <img src={achive.src} />
        </div>
      </OurMissionWrapper>
    </>
  );
};

export default OurMission;
