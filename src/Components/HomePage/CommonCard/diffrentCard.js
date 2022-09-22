import Image from "next/image";
import React from "react";
import styled from "styled-components";
import BackGround from "/public/svg/background.svg";
import OurStory from "/public/svg/ourstory.svg";
import Community from "/public/svg/community.svg";
import AboutCrafted from "/public/svg/about-crafted.svg";
// import Link from "next/link";
import { useRouter } from "next/router";

const CommonCard = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    bottom: -100px;
    gap: 30px;
  }
  .title {
    color: #ffffff;
    font-weight: 700;
    font-size: 30px;
    position: absolute;
    top: 30px;
    left: 55px;
  }
  .card {
    display: flex;
  }
  .images {
    height: 350px;
    width: 400px !important;
  }
  .banner2-img {
    height: 100px;
    object-fit: cover;
    background-size: cover;
    background-attachment: fixed;
  }
  @media screen and (max-width: 1330px) {
    .container {
      flex-wrap: wrap;
      gap: 10px;
      padding: 30px;
    }
  }
`;

const data = [
  { path: "/ourstory", img: OurStory },
  { path: "/about", img: AboutCrafted },
  { path: "/think-social", img: Community },
];

const DiffCard = () => {
  const router = useRouter();
  const handleClick = (path) => {
    router.push(path);
  };
  return (
    <CommonCard>
      <Image
        src={BackGround}
        alt="background"
        layout="fill"
        className="banner2-img"
        style={{ height: "200px" }}
      />
      <div className="title">Who we are?</div>
      <div className="container">
        {data.map((dta) => {
          return (
            <div className="card" key={dta}>
              <Image
                src={dta.img}
                className="images"
                alt="images"
                width={400}
                height={350}
                style={{ cursor: "pointer" }}
                onClick={() => handleClick(dta.path)}
              />
            </div>
          );
        })}
      </div>
    </CommonCard>
  );
};

export default DiffCard;
