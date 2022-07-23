import React from "react";
import styled from "styled-components";

const FollowUsWraapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding:150px 0px 0px;
  .follow {
    font-weight: 700;
    font-size: 30px;
  }
  .slug {
    font-weight: 400;
    font-size: 16px;
  }
  .box {
    margin-top: 15px;
    background: #c4c4c4;
    border-radius: 25px;
    height: 180px;
    width: 240px;
  }
  .button {
    background: #e07171;
    border-radius: 45px;
    width: 180px;
    height: 50px;
    border: none;
    font-weight: 400;
    font-size: 16px;
    color: #ffffff;
    margin-top: 30px;
  }

  @media screen and (max-width: 1550px) {
    .box {
      width: 200px;
      height: 150px;
    }
  }
  @media screen and (max-width: 1350px) {
    .box {
      width: 150px;
    }
    .follow {
      text-align: center;
    }
  }
`;

const FollowUs = () => {
  return (
    <FollowUsWraapper>
      <div className="follow">FOLLOW US ON INSTAGRAM</div>
      <div className="slug">@iTheCrafted</div>
      <div
        style={{
          display: "flex",
          columnGap: "15px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {[1, 2, 3, 4, 5, 6].map((_) => {
          return (
            <>
              <div className="box"></div>
            </>
          );
        })}
      </div>
      <button className="button">FOLLOW NOW</button>
    </FollowUsWraapper>
  );
};

export default FollowUs;
