import React from "react";
import styled from "styled-components";
import Link from "next/link";
import InstagramEmbed from "react-instagram-embed";

const FollowUsWraapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
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
      font-size: 20px;
    }
    .slug {
      font-size: 15px;
    }
    .button {
      font-size: 12px;
      width: 120px;
      height: 35px;
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
        <div className="box">
          <InstagramEmbed
            url="https://www.instagram.com/p/CawHewPp2g0/"
            // clientAccessToken="123|456"
            // maxWidth={0}
            // hideCaption={false}
            // containerTagName="div"
            // protocol=""
            // injectScript
            // onLoading={() => {}}
            // onSuccess={() => {}}
            // onAfterRender={() => {}}
            // onFailure={() => {}}
          />
        </div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
      <Link href="https://www.instagram.com/robo.party/" target="_blank">
        <button className="button" style={{ cursor: "pointer" }}>
          FOLLOW NOW
        </button>
      </Link>
    </FollowUsWraapper>
  );
};

export default FollowUs;
