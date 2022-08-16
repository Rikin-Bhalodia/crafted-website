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
    width: 100vw;
    height: 765px;
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
    margin-top: 80px;
    margin-left: 70px;
  }
  .name {
    font-weight: 500;
    font-size: 48px;
    ${"" /* padding-left: 52px; */}
  }
  .desc {
    font-weight: 700;
    font-size: 80px;
    line-height: 100px;
    width: 300px;
    font-family: "Playfair Display";
    font-style: normal;
    margin-top: 20px;
    ${"" /* padding-left: 50px; */}
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
    height: 130px;
    width: 140px !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: #ffffff;
    border-radius: 25px;
  }
  .small-swiper {
    bottom: 160px !important;
  }

  @media screen and (max-width: 1500px) {
    .content {
      margin-top: 50px;
    }
  }
  @media screen and (max-width: 570px) {
    .content {
      margin: 80px 30px 20px;
    }
    .name {
      font-size: 35px;
    }
    .desc {
      font-size: 70px;
      line-height: 90px;
    }
  }
`;

export default function App() {
  return (
    <SliderWrapper>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide className="slide">
          <video
            src={"/craftedVideo.mp4"}
            autoPlay={true}
            loop={true}
            muted
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
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
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_) => {
          return (
            <SwiperSlide className="small-slider">
              <Image src={Sweater} alt="sweater" />
              <Link href="/question">
                <div>Poplin Cotton Fabric</div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </SliderWrapper>
  );
}
