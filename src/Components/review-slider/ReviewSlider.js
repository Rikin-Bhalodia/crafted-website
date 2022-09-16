import React, { useRef, useState } from "react";
import styled from "styled-components";
// import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper";
import { GoStar } from "react-icons/go";

const ReviewSliderWrapper = styled.div`
  padding: 0px 30px;
  .team-slider {
    height: 500px;
    margin: 30px 0px 70px;
    .slider {
      display: flex;
      background: #f6f7fb;
      box-shadow: 0px 16px 25px rgba(0, 0, 0, 0.1);
      border-radius: 45px;
      height: 100%;
      margin: 30px 10px 30px 20px;
      .review-img {
        padding: 30px 15px 20px 20px;
        div {
          width: 70px;
          height: 70px;
          background: #cccccc;
          border-radius: 50%;
        }
      }
      .review-data {
        padding: 30px 30px 30px 0;

        h5 {
          font-weight: 600;
          font-size: 18px;
          line-height: 22px;
          color: #183b56;
          margin: 10px 0 0;
        }
        div {
          color: yellow;
        }
        p {
          font-weight: 400;
          font-size: 12px;
          line-height: 16px;
          color: rgba(24, 59, 86, 0.5);
          margin: 5px 0;
        }

        h6 {
          font-weight: 400;
          font-size: 16px;
          line-height: 22px;
          color: #183b56;
          margin: 15px 0;
        }
      }
    }
  }
  @media screen and (max-width: 500px) {
    padding: 0 20px;
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
                  spaceBetween: 0,
                },
                750: {
                  slidesPerView: 2,
                  spaceBetween: 0,
                },
                1100: {
                  slidesPerView: 3,
                  spaceBetween: 0,
                },
                1500: {
                  slidesPerView: 4,
                  spaceBetween: 0,
                },
              }}
            >
              <div style={{ width: "100%" }}>
                <SwiperSlide>
                  <div className="slider">
                    <div className="review-img">
                      <div></div>
                    </div>
                    <div className="review-data">
                      <h5>svedha.r</h5>
                      <div>
                        <GoStar size={20} />
                        &nbsp;
                        <GoStar size={20} />
                        &nbsp;
                        <GoStar size={20} />
                        &nbsp;
                        <GoStar size={20} />
                        &nbsp;
                        <GoStar size={20} />
                      </div>
                      <h5>Comfortin</h5>
                      <p>Reviewed in India on 14 June 2021</p>
                      <p>Reviewed in India on 14 June 2021</p>
                      <h6>
                        It was soft and suits for summer , thanks for the
                        product which satisfies my mom expectations with a
                        reasonable price and more comfortable.
                      </h6>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slider">
                    <div className="review-img">
                      <div></div>
                    </div>
                    <div className="review-data">
                      <h5>svedha.r</h5>
                      <div>
                        <GoStar size={20} />
                        &nbsp;
                        <GoStar size={20} />
                        &nbsp;
                        <GoStar size={20} />
                        &nbsp;
                        <GoStar size={20} />
                        &nbsp;
                        <GoStar size={20} />
                      </div>
                      <h5>Comfortin</h5>
                      <p>Reviewed in India on 14 June 2021</p>
                      <p>Reviewed in India on 14 June 2021</p>
                      <h6>
                        It was soft and suits for summer , thanks for the
                        product which satisfies my mom expectations with a
                        reasonable price and more comfortable.
                      </h6>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slider">
                    <div className="review-img">
                      <div></div>
                    </div>
                    <div className="review-data">
                      <h5>svedha.r</h5>
                      <div>
                        <GoStar size={20} />
                        &nbsp;
                        <GoStar size={20} />
                        &nbsp;
                        <GoStar size={20} />
                        &nbsp;
                        <GoStar size={20} />
                        &nbsp;
                        <GoStar size={20} />
                      </div>
                      <h5>Comfortin</h5>
                      <p>Reviewed in India on 14 June 2021</p>
                      <p>Reviewed in India on 14 June 2021</p>
                      <h6>
                        It was soft and suits for summer , thanks for the
                        product which satisfies my mom expectations with a
                        reasonable price and more comfortable.
                      </h6>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slider">
                    <div className="review-img">
                      <div></div>
                    </div>
                    <div className="review-data">
                      <h5>svedha.r</h5>
                      <div>
                        <GoStar size={20} />
                        &nbsp;
                        <GoStar size={20} />
                        &nbsp;
                        <GoStar size={20} />
                        &nbsp;
                        <GoStar size={20} />
                        &nbsp;
                        <GoStar size={20} />
                      </div>
                      <h5>Comfortin</h5>
                      <p>Reviewed in India on 14 June 2021</p>
                      <p>Reviewed in India on 14 June 2021</p>
                      <h6>
                        It was soft and suits for summer , thanks for the
                        product which satisfies my mom expectations with a
                        reasonable price and more comfortable.
                      </h6>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slider">
                    <div className="review-img">
                      <div></div>
                    </div>
                    <div className="review-data">
                      <h5>svedha.r</h5>
                      <div>
                        <GoStar size={20} />
                        &nbsp;
                        <GoStar size={20} />
                        &nbsp;
                        <GoStar size={20} />
                        &nbsp;
                        <GoStar size={20} />
                        &nbsp;
                        <GoStar size={20} />
                      </div>
                      <h5>Comfortin</h5>
                      <p>Reviewed in India on 14 June 2021</p>
                      <p>Reviewed in India on 14 June 2021</p>
                      <h6>
                        It was soft and suits for summer , thanks for the
                        product which satisfies my mom expectations with a
                        reasonable price and more comfortable.
                      </h6>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slider">
                    <div className="review-img">
                      <div></div>
                    </div>
                    <div className="review-data">
                      <h5>svedha.r</h5>
                      <div>
                        <GoStar size={20} />
                        &nbsp;
                        <GoStar size={20} />
                        &nbsp;
                        <GoStar size={20} />
                        &nbsp;
                        <GoStar size={20} />
                        &nbsp;
                        <GoStar size={20} />
                      </div>
                      <h5>Comfortin</h5>
                      <p>Reviewed in India on 14 June 2021</p>
                      <p>Reviewed in India on 14 June 2021</p>
                      <h6>
                        It was soft and suits for summer , thanks for the
                        product which satisfies my mom expectations with a
                        reasonable price and more comfortable.
                      </h6>
                    </div>
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
