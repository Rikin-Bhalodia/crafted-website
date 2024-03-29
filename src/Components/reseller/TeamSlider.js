import React, { useRef, useState } from "react";
import styled from "styled-components";
// import Link from "next/link";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
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
      margin: 10px 0px 0px;
      width: 35%;
    }
    h5 {
      font-size: 38px;
      line-height: 52px;
      margin-top: 25px;
    }
  }
  .team-slider {
    height: 700px;
    margin: 20px;
    .slider {
      overflow: hidden;
      position: relative;
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
  @media screen and (max-width: 500px) {
    padding: 0px;
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
        font-size: 30px;
        line-height: 45px;
        margin-bottom: 15px;
        margin-top: 10px;
      }
      h5 {
        font-size: 30px;
        margin-top: 0px;
        margin-bottom: 10px;
      }
    }
  }
`;

const ReviewSlider = () => {
  return (
    <>
      <ReviewSliderWrapper>
        <>
          <div className="team-slider">
            <div className="team-heading">
              <p>What our customers say</p>
              <h4>Our customers love us</h4>
              <h5>
                4.8 stars &nbsp;&nbsp;
                <AiFillStar
                  style={{ marginBottom: "-7px", color: "#F5CC47" }}
                />
                <AiFillStar
                  style={{ marginBottom: "-7px", color: "#F5CC47" }}
                />
                <AiFillStar
                  style={{ marginBottom: "-7px", color: "#F5CC47" }}
                />
                <AiFillStar
                  style={{ marginBottom: "-7px", color: "#F5CC47" }}
                />
                <AiFillStar
                  style={{ marginBottom: "-7px", color: "#F5CC47" }}
                />
              </h5>
            </div>
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
                      src={review1}
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

// import React from "react";
// import styled from "styled-components";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { FreeMode, Pagination } from "swiper";
// import {
//   FaInstagram,
//   FaLinkedinIn,
//   FaFacebookF,
//   FaTwitter,
// } from "react-icons/fa";
// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/pagination";

// const TeamSliderWrapper = styled.div`
//   padding: 100px 0px 150px;
//   background: #f3f4f6;
//   .team-heading {
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     p {
//       font-size: 16px;
//       line-height: 28px;
//       color: #fd346e;
//       margin: 0;
//     }
//     h4 {
//       font-size: 48px;
//       line-height: 62px;
//       letter-spacing: -1px;
//       text-align: center;
//       color: #262729;
//       margin: 10px 0px 0px;
//       width: 35%;
//     }
//     h5 {
//       font-size: 38px;
//       line-height: 52px;
//       margin-top: 25px;
//     }
//   }
//   .team-slider {
//     height: 450px;
//     margin: 20px;
//     .slider {
//       width: 100%;
//       height: 450px;
//       background: #c4c4c4;
//       border-radius: 15px;
//       overflow: hidden;
//       position: relative;

//       .data-desc {
//         position: absolute;
//         bottom: 0;
//         left: 0;
//         width: 100%;
//         height: 50%;
//         background: linear-gradient(
//           360deg,
//           #fd346e 0%,
//           rgba(253, 52, 110, 0.69) 38.45%,
//           rgba(253, 52, 110, 0) 79.35%,
//           rgba(253, 52, 110, 0) 111.11%
//         );
//         border-radius: 0px 0px 15px 15px;
//         display: flex;
//         flex-direction: column;
//         justify-content: flex-end;
//         align-items: flex-start;
//         transform: translateY(100%);
//         opacity: 0;
//         transition: all 0.3s linear;
//         padding: 0px 0px 10px 10px;
//         visibility: hidden;
//         p {
//           font-size: 13px;
//           line-height: 22px;
//           color: #ffffff;
//           opacity: 0.7;
//           padding-left: 40px;
//           margin: 0px;
//         }
//         ul {
//           list-style: none;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           gap: 12px;
//           li {
//             color: #ffffff;
//           }
//         }
//       }
//     }
//     .slider:hover > .data-desc {
//       cursor: pointer;
//       transform: translateY(0%);
//       opacity: 0.8;
//       visibility: visible;
//     }
//   }
//

//
// `;

// const TeamSlider = () => {
//   return (
//     <>
//       <TeamSliderWrapper>
//         <div className="team-heading">
//           <p>What our customers say</p>
//           <h4>Our customers love us</h4>
//           <h5>
//             4.8 stars &nbsp;&nbsp;
//             <AiFillStar style={{ marginBottom: "-7px", color: "#F5CC47" }} />
//             <AiFillStar style={{ marginBottom: "-7px", color: "#F5CC47" }} />
//             <AiFillStar style={{ marginBottom: "-7px", color: "#F5CC47" }} />
//             <AiFillStar style={{ marginBottom: "-7px", color: "#F5CC47" }} />
//             <AiFillStar style={{ marginBottom: "-7px", color: "#F5CC47" }} />
//           </h5>
//         </div>
//         <div className="team-slider">
//           <Swiper
//             freeMode={true}
//             grabCursor={true}
//             pagination={{
//               clickable: true,
//             }}
//             modules={[FreeMode, Pagination]}
//             className="mySwiper"
//             breakpoints={{
//               0: {
//                 slidesPerView: 1,
//                 spaceBetween: 10,
//               },
//               750: {
//                 slidesPerView: 2,
//                 spaceBetween: 20,
//               },
//               1075: {
//                 slidesPerView: 3,
//                 spaceBetween: 20,
//               },
//               1500: {
//                 slidesPerView: 4,
//                 spaceBetween: 30,
//               },
//             }}
//           >
//             {[1, 2, 3, 4, 5, 6, 7].map((_) => {
//               return (
//                 <SwiperSlide key={_}>
//                   <div className="slider">
//                     <div className="data-desc">
//                       <p>CEO, Colabrio Media</p>
//                       <ul>
//                         <li>
//                           <FaInstagram />
//                         </li>
//                         <li>
//                           <FaLinkedinIn />
//                         </li>
//                         <li>
//                           <FaFacebookF />
//                         </li>
//                         <li>
//                           <FaTwitter />
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                 </SwiperSlide>
//               );
//             })}
//           </Swiper>
//         </div>
//       </TeamSliderWrapper>
//     </>
//   );
// };

// export default TeamSlider;
