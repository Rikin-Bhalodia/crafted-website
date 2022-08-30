import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import RightArrow from "/public/svg/right-arrow.svg";
import Sweater from "/public/svg/sweater.svg";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

const SliderWrapper = styled.div`
  .slide {
    position: relative;
    width: 100%;
    height: 80%;
  }
  .swiper-wrapper {
    position: relative;
    z-index: 1;
  }
  .content {
    position: absolute !important;
    color: #fff;
    top: 0;
    z-index: 99;
    display: flex;
    flex-direction: column;
    margin-left: 120px;
    margin-top: 70px;
  }
  .name {
    font-weight: 500;
    font-size: 45px;
  }
  .desc {
    font-weight: 700;
    font-size: 80px;
    line-height: 100px;
    width: 300px;
    font-family: "Playfair Display";
    font-style: normal;
  }
  .match-btn {
    font-weight: 500;
    font-size: 20px;
    background: #393d46;
    color: #fff;
    width: 200px;
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
  }
  .small-slider {
    height: 120px;
    width: 130px !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: #ffffff;
    border-radius: 25px;
  }
  .small-swiper {
    bottom: 150px !important;
  }
  video {
    width: 100vw;
    object-fit: cover;
  }
  @media screen and (max-width: 1950px) {
    video {
      height: 700px;
    }
    .content {
      margin: 70px 120px;
    }
    .name {
      font-size: 45px;
    }
    .desc {
      font-size: 80px;
      line-height: 100px;
    }
    .match-btn {
      font-size: 20px;
      width: 200px;
      margin-top: 40px;
      height: 50px;
    }
  }
  @media screen and (max-width: 1500px) {
    video {
      height: 630px;
    }
    .content {
      margin: 60px 100px;
    }
    .name {
      font-size: 35px;
    }
    .desc {
      font-size: 70px;
      line-height: 90px;
    }
    .match-btn {
      font-size: 18px;
      width: 170px;
      margin-top: 35px;
      height: 45px;
    }
  }
  @media screen and (max-width: 1200px) {
    video {
      height: 580px;
    }
    .content {
      margin: 50px 80px;
    }
    .name {
      font-size: 30px;
    }
    .desc {
      font-size: 60px;
      line-height: 80px;
    }
    .match-btn {
      margin-top: 30px;
    }
  }
  @media screen and (max-width: 570px) {
    .content {
      margin: 60px 50px;
    }
    .name {
      font-size: 25px;
    }
    .desc {
      font-size: 50px;
      line-height: 70px;
    }
    .match-btn {
      font-size: 16px;
      width: 160px;
      margin-top: 30px;
      height: 40px;
    }
  }
`;

export default function App() {
  const router = useRouter();
  const [videoURL, setvideoURL] = useState("");
  const [windowDimenion, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  });

  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);

    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimenion]);

  useEffect(() => {
    if (windowDimenion.winWidth >= 1400) {
      setvideoURL("/craftedVideo.mp4");
    } else if (windowDimenion.winWidth >= 1000) {
      setvideoURL("/Crafted1400.mp4");
    } else if (windowDimenion.winWidth >= 600) {
      setvideoURL("/Crafted900.mp4");
    } else {
      setvideoURL("/Crafted400.mp4");
    }
  }, [windowDimenion.winWidth]);

  return (
    <SliderWrapper>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide className="slide">
          <video src={videoURL} autoPlay={true} loop={true} muted />
          <div className="content">
            <div className="name">World's First</div>
            <div className="desc">Online Matching Centre</div>
            <button className="match-btn" style={{ cursor: "pointer" }}>
              Match Now <Image src={RightArrow} alt="right-arrow" />
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        grabCursor={true}
        spaceBetween={15}
        className="small-swiper"
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, i) => {
          return (
            <SwiperSlide
              className="small-slider"
              key={i}
              onClick={() => router.push("/question")}
            >
              <Image src={Sweater} alt="sweater" />
              <div>Poplin Cotton Fabric</div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </SliderWrapper>
  );
}
