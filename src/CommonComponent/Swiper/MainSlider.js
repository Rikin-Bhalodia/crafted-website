import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { whiteImage } from "../../utils/other";
import { images } from "../../utils/other";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Image from "next/image";
import styled from "styled-components";
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
    font-size: 30px;
    line-height: 75px;
  }
  .desc {
    font-weight: 700;
    font-size: 90px;
    line-height: 100%;
    width: 300px;
    font-family: "Playfair Display";
    font-style: normal;
  }
  .match-btn {
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
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
      padding-top: 15px;
      font-size: 16px;
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
  .main-slider-images {
    width: 40px;
  }
  .right-arrow {
    font-size: 40px;
    margin-left: 15px;
    top: 2px !important;
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
      font-size: 35px;
      line-height: 52px;
    }
    .desc {
      font-size: 75px;
    }
    .match-btn {
      font-size: 15px;
      line-height: 21px;
      margin-top: 10px;
      margin-left: 20px;
    }
    .small-slider {
      height: 130px;
      width: 120px !important;
      div {
        font-size: 14px;
      }
    }
    .small-swiper {
      bottom: 160px;
    }
    .main-slider-images {
      width: 35px;
      height: 45px;
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
      font-size: 30px;
      line-height: 48px;
    }
    .desc {
      font-size: 60px;
    }
    .match-btn {
      font-size: 15px;
      line-height: 22px;
      margin-top: 10px;
      margin-left: 10px;
    }
    .small-slider {
      height: 110px;
      width: 100px !important;
      div {
        font-size: 10px;
      }
    }
    .small-swiper {
      bottom: 140px;
    }
    .right-arrow {
      font-size: 30px;
      margin-left: 10px;
      top: 1px !important;
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
      font-size: 15px;
      line-height: 42px;
    }
    .desc {
      font-size: 50px;
      line-height: 55px;
    }
    .match-btn {
      font-size: 12px;
      margin-top: 10px;
      margin-left: 10px;
    }
    .small-slider {
      height: 110px;
      width: 100px !important;
    }
    .small-swiper {
      bottom: 140px;
    }
    .right-arrow {
      font-size: 25px;
      margin-left: 10px;
      top: 2px !important;
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
  const [id, setId] = useState("");

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

  const MouseOver = (id) => {
    if (id) {
      setId(id);
    }
  };

  const whiteImages = whiteImage.find((data) => data.id === id);

  return (
    <SliderWrapper>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide className="slide">
          <div>
            <video src={videoURL} autoPlay={true} loop={true} muted />
          </div>
          <div className="content">
            <div className="name">India's First</div>
            <div className="desc">Online Matching Centre</div>
            <div className="match-btn" style={{ cursor: "pointer" }}>
              Match Now{" "}
              <BsArrowRight
                // size={40}
                className="right-arrow"
              />
            </div>
          </div>
          <Swiper
            slidesPerView={4}
            centeredSlides={true}
            spaceBetween={15}
            className="small-swiper"
          >
            {images.map((data) => {
              return (
                <SwiperSlide
                  className="small-slider"
                  key={data.id}
                  onClick={() => router.push(`/question/${data.category}`)}
                  onMouseEnter={() => MouseOver(data.id)}
                  style={
                    id === data.id
                      ? { background: "#393D46", cursor: "pointer" }
                      : { background: "white" }
                  }
                >
                  <img
                    src={id === data?.id ? whiteImages.img.src : data.img.src}
                    alt="images"
                    className="main-slider-images"
                  />
                  <div
                    style={
                      id === data.id ? { color: "white" } : { color: "#393D46" }
                    }
                    className="slider-name"
                  >
                    {data.name}
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </SwiperSlide>
      </Swiper>
    </SliderWrapper>
  );
}
