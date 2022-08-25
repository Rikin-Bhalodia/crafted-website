import styled from "styled-components";
// import Link from "next/link";
// import Image from "next/image";
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";

const TeamSliderWrapper = styled.div`
  padding: 100px 0px 150px;
  background: #f3f4f6;
  .team-heading {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
      font-size: 16px;
      line-height: 28px;
      color: #fd346e;
      margin: 0;
    }
    h4 {
      font-size: 48px;
      line-height: 62px;
      letter-spacing: -1px;
      text-align: center;
      color: #262729;
      margin: 20px 0px 50px;
      width: 35%;
    }
  }
  .team-slider {
    height: 450px;
    margin: 20px;
    .slider {
      width: 100%;
      height: 450px;
      background: #c4c4c4;
      border-radius: 15px;
      overflow: hidden;
      position: relative;

      .data-desc {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 50%;
        background: linear-gradient(
          360deg,
          #fd346e 0%,
          rgba(253, 52, 110, 0.69) 38.45%,
          rgba(253, 52, 110, 0) 79.35%,
          rgba(253, 52, 110, 0) 111.11%
        );
        border-radius: 0px 0px 15px 15px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-start;
        transform: translateY(100%);
        opacity: 0;
        transition: all 0.3s linear;
        padding: 0px 0px 10px 10px;
        visibility: hidden;
        p {
          font-size: 13px;
          line-height: 22px;
          color: #ffffff;
          opacity: 0.7;
          padding-left: 40px;
          margin: 0px;
        }
        ul {
          list-style: none;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 12px;
          li {
            color: #ffffff;
          }
        }
      }
    }
    .slider:hover > .data-desc {
      cursor: pointer;
      transform: translateY(0%);
      opacity: 0.8;
      visibility: visible;
    }
  }
  .swiper-free-mode > .swiper-wrapper {
    height: 510px;
  }
  .swiper-pagination-bullet {
    border-radius: 10px;
    width: var(
      --swiper-pagination-bullet-width,
      var(--swiper-pagination-bullet-size, 30px)
    );
    height: var(
      --swiper-pagination-bullet-height,
      var(--swiper-pagination-bullet-size, 6px)
    );
  }
  .swiper-pagination-bullet-active {
    opacity: var(--swiper-pagination-bullet-opacity, 1);
    background: #fd346e;
  }

  @media screen and (max-width: 1500px) {
    .team-heading {
      h4 {
        width: 50%;
      }
    }
  }
  @media screen and (max-width: 1050px) {
    .team-heading {
      h4 {
        width: 70%;
      }
    }
  }
  @media screen and (max-width: 750px) {
    padding: 50px 0px 100px;

    .team-heading {
      h4 {
        width: 90%;
        margin: 20px 0px 30px;
      }
    }
  }
  @media screen and (max-width: 580px) {
    .team-heading {
      h4 {
        width: 100%;
        font-size: 33px;
        line-height: 45px;
      }
    }
  }
`;

const TeamSlider = () => {
  return (
    <>
      <TeamSliderWrapper>
        <div className="team-heading">
          <p>Our Team</p>
          <h4>Meet the minds shaping your digital business</h4>
        </div>
        <div className="team-slider">
          <Swiper
            freeMode={true}
            grabCursor={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
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
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
          >
            {[1, 2, 3, 4, 5, 6, 7].map((_) => {
              return (
                <SwiperSlide key={_}>
                  <div className="slider">
                    <div className="data-desc">
                      <p>CEO, Colabrio Media</p>
                      <ul>
                        <li>
                          <FaInstagram />
                        </li>
                        <li>
                          <FaLinkedinIn />
                        </li>
                        <li>
                          <FaFacebookF />
                        </li>
                        <li>
                          <FaTwitter />
                        </li>
                      </ul>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </TeamSliderWrapper>
    </>
  );
};

export default TeamSlider;
