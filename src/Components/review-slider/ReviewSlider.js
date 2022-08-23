import React, { useRef, useState } from "react";
import styled from "styled-components";
// import Link from "next/link";
import Image from "next/image";
import review from "../../../public/review-image/Review.png";
import review1 from "../../../public/review-image/Review-1.png";
import review2 from "../../../public/review-image/Review-2.png";
import review3 from "../../../public/review-image/Review-3.png";
import review4 from "../../../public/review-image/Review-4.png";
import review5 from "../../../public/review-image/Review-5.png";
import review6 from "../../../public/review-image/Review-6.png";
import review7 from "../../../public/review-image/Review-7.png";
import review8 from "../../../public/review-image/Review-8.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper";

const ReviewSliderWrapper = styled.div`
  padding: 0px 30px;
  .team-slider {
    height: 700px;
    margin: 20px;
    .slider {
      overflow: hidden;
      position: relative;
    }
  }
  @media screen and (max-width: 500px) {
    padding: 0px;
  }
`;

const ReviewSlider = () => {
  return (
    <>
      <ReviewSliderWrapper>
        <>
          <div className="team-slider">
            <Swiper
              freeMode={true}
              modules={[FreeMode]}
              className="mySwiper"
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                750: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1075: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1500: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
            >
              <div style={{ width: "100%" }}>
                <SwiperSlide>
                  <div className="slider">
                    <Image
                      src={review}
                      width={500}
                      height="550"
                      layout="fixed"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slider">
                    <Image
                      src={review2}
                      width={500}
                      height="550"
                      layout="fixed"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slider">
                    <Image
                      src={review3}
                      width={500}
                      height="550"
                      layout="fixed"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slider">
                    <Image
                      src={review4}
                      width={500}
                      height="550"
                      layout="fixed"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slider">
                    <Image
                      src={review5}
                      width={500}
                      height="550"
                      layout="fixed"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slider">
                    <Image
                      src={review6}
                      width={500}
                      height="550"
                      layout="fixed"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slider">
                    <Image
                      src={review7}
                      width={500}
                      height="550"
                      layout="fixed"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slider">
                    <Image
                      src={review8}
                      width={500}
                      height="550"
                      layout="fixed"
                    />
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
        </>
      </ReviewSliderWrapper>
    </>
  );
};

export default ReviewSlider;
