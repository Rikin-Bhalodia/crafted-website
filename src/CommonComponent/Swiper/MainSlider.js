import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Sweater from "/public/svg/sweater.svg";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Image from "next/image";
import styled from "styled-components";
// import Link from "next/link";
import { useRouter } from "next/router";
import { BsArrowRight } from "react-icons/bs";

const SliderWrapper = styled.div`
  height: 750px;
  .slide {
    width: 100vw;
    height: 750px;
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
    font-size: 58px;
    line-height: 87px;
  }
  .desc {
    font-weight: 700;
    font-size: 128px;
    line-height: 100%;
    width: 300px;
    font-family: "Playfair Display";
    font-style: normal;
  }
  .match-btn {
    font-weight: 500;
    font-size: 30px;
    line-height: 36px;
    color: #fff;
    margin-top: 30px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 10px;
    z-index: 1;
  }
  .small-slider {
    height: 160px;
    width: 150px !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: #ffffff;
    border-radius: 25px;
    div {
      font-size: 20px;
    }
  }
  .small-swiper {
    bottom: 200px;
    z-index: 999;
  }
  video {
    width: 100vw;
    object-fit: cover;
    height: 750px;
  }

  @media screen and (max-width: 1400px) {
    height: 540px;
    video {
      height: 540px;
    }
    .content {
      margin: 40px 100px;
    }
    .name {
      font-size: 44px;
      line-height: 66px;
    }
    .desc {
      font-size: 100px;
    }
    .match-btn {
      font-size: 18px;
      line-height: 27px;
      margin-top: 10px;
      margin-left: 20px;
    }
    .small-slider {
      height: 130px;
      width: 120px !important;
      div {
        font-size: 15px;
      }
    }
    .small-swiper {
      bottom: 160px;
    }
  }
  @media screen and (max-width: 850px) {
    height: 450px;
    video {
      height: 450px;
    }
    .content {
      margin: 30px 60px;
    }
    .name {
      font-size: 35px;
      line-height: 52px;
    }
    .desc {
      font-size: 80px;
    }
    .match-btn {
      font-size: 15px;
      line-height: 22px;
      margin-top: 10px;
      margin-left: 20px;
    }
    .small-slider {
      height: 110px;
      width: 100px !important;
      div {
        font-size: 12px;
      }
    }
    .small-swiper {
      bottom: 140px;
    }
  }
  @media screen and (max-width: 550px) {
    height: 450px;

    video {
      height: 450px;
    }
    .content {
      margin: 20px 40px;
    }
    .name {
      font-size: 20px;
      line-height: 30px;
    }
    .desc {
      font-size: 60px;
    }
    .match-btn {
      font-size: 15px;
      margin-top: 10px;
      margin-left: 10px;
    }
    .small-slider {
      height: 110px;
      width: 100px !important;
      div {
        font-size: 12px;
      }
    }
    .small-swiper {
      bottom: 140px;
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
          <div>
            <video src={videoURL} autoPlay={true} loop={true} muted />
          </div>
          <div className="content">
            <div className="name">World's First</div>
            <div className="desc">Online Matching Centre</div>
            <div className="match-btn" style={{ cursor: "pointer" }}>
              Match Now{" "}
              <BsArrowRight
                size={40}
                style={{ marginBottom: "15px", marginLeft: "20px" }}
              />
            </div>
          </div>
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
        </SwiperSlide>
      </Swiper>
    </SliderWrapper>
  );
}
