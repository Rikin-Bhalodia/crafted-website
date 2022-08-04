import React from "react";
import styled from "styled-components";
import HomeTotalBox from "./HomeTotalBoxs";
import HomeChart from "./HomeChart";
import HomeOrder from "./HomeOrder";
import HomeTran from "./HomeTran";
import HomeStac from "./HomeStac";
import DashBoardHead from "../DashBoardHead";

const HomeHeadingWrapper = styled.div`
  .body-section {
    display: grid;
    gap: 30px;
    grid-template-columns: 1.8fr 1fr;
    width: 100%;
    height: 120vh;
    padding: 30px 0px;
    .body-left {
      width: 100%;
      height: 100%;
      display: grid;
      grid-template-rows: 1fr 2fr 2fr;
      gap: 30px;
    }
    .body-right {
      width: 100%;
      height: 100%;
      display: grid;
      grid-template-rows: 1fr 1fr;
      gap: 30px;
      margin-right: 30px;
    }
  }
`;

const HomeHeading = () => {
  return (
    <>
      <HomeHeadingWrapper>
        <DashBoardHead name="Dashboard" sec="Tuesday, 29 March 2022" />
        <div className="body-section">
          <div className="body-left">
            <HomeTotalBox />
            <HomeChart />
            <HomeOrder />
          </div>
          <div className="body-right">
            <HomeTran />
            <HomeStac />
          </div>
        </div>
      </HomeHeadingWrapper>
    </>
  );
};

export default HomeHeading;
