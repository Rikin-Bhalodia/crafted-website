import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import RightArrow from "/public/svg/right-arrow.svg";
import Sweater from "/public/svg/sweater.svg";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

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
    ${"" /* align-items: center; */}
    margin-left: 70px;
    margin-top: 20px;
  }
  .name {
    font-weight: 500;
    font-size: 28px;
    ${"" /* padding-left: 52px; */}
  }
  .desc {
    font-weight: 700;
    font-size: 75px;
    line-height: 80px;
    width: 300px;
    font-family: "Playfair Display";
    font-style: normal;
    ${"" /* padding-left: 50px; */}
  }
  .match-btn {
    font-weight: 500;
    font-size: 20px;
    background: #393d46;
    color: #fff;
    width: 200px;
    margin-top: 30px;
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
      height: 800px;
    }
    .content {
      margin: 100px 140px;
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
      width: 180px;
      margin-top: 40px;
      height: 50px;
    }
  }
  @media screen and (max-width: 1500px) {
    video {
      height: 700px;
    }
    .content {
      margin: 80px 100px;
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
      height: 600px;
    }
    .content {
      margin: 40px 80px;
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
      margin: 30px 40px;
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
  return (
    <SliderWrapper>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide className="slide">
          <video src={"/craftedVideo.mp4"} autoPlay={true} loop={true} muted />
          <div className="content">
            <div className="name">India’s First</div>
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
            <SwiperSlide className="small-slider" key={i}>
              <Image src={Sweater} alt="sweater" />
              <Link href="/question">
                <div>
                  Poplin Cotton
                  <br /> Fabric
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </SliderWrapper>
  );
}
