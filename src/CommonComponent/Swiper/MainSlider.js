import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import RightArrow from "/public/svg/right-arrow.svg";
import Sweater from "/public/svg/sweater.svg";
import Banner from "/public/png/banner.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
// import video from "/public/home-video/craftedVideo.mp4";

const SliderWrapper = styled.div`
  .slide {
    position: relative;
    width: 100vw;
    height: 650px;
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
    margin-top: 20px;
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
    ${"" /* position: absolute !important; */}
    bottom: 160px !important;
  }
  .banner-img {
    height: 750px;
    width: 100vw;
    object-fit: cover;
    background-size: cover;
    background-attachment: fixed;
  }

  @media screen and (max-width: 1500px) {
    .content {
      margin-top: 50px;
    }
    ${
      "" /* .slide {
      height:750px;
    } */
    }
    .banner-img {
      height: 750px;
    }
  }
  @media screen and (max-width: 570px) {
    .content {
      margin: 50px 30px;
    }
    .name {
      font-size: 35px;
    }
    .desc {
      font-size: 70px;
    }
  }
`;

export default function App() {
  return (
    <SliderWrapper>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide className="slide">
          {/* <video width="750" height="500" controls autoPlay>
            <source
              src={require("/public/home-video/craftedVideo.mp4")}
              type="video/ogg"
            />
          </video> */}
          <div className="content">
            <div className="name">India’s First</div>
            <div className="desc">Online Matching Centre</div>
            <button className="match-btn">
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
              <Link href="/pages/cart/index.js">
                <div>Poplin Cotton Fabric</div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </SliderWrapper>
  );
}
