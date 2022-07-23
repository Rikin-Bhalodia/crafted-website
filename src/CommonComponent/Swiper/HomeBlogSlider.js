import React from "react";
import styled from "styled-components";
import { Navigation, Mousewheel, Keyboard } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Verified from "/public/svg/verified.svg";
import BtnRightArrow from "/public/svg/btn-right-arrow.svg";

const HomeBlogWrapper = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  bottom: 100px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .mySwiper {
    width: 1500px;
    background: #ffffff;
    border: 1px solid #e5eaf4;
    box-shadow: 0px 10px 35px rgba(0, 0, 0, 0.03);
    border-radius: 16px;
    height: 410px;
  }
  .blank-card {
    position: relative;
    background: #848484;
    border-radius: 16px 0px 0px 16px;
    width: 50%;
    height: 420px;
    z-index: 0;
    right: -1px;
    margin-right: 70px;
  }
  .parts {
    display: flex;
  }
  .btn-feature {
    background: rgb(54, 179, 126, 0.1);
    mix-blend-mode: normal;
    border-radius: 2000px;
    font-weight: 600;
    width: 100px;
    border: none;
    font-size: 12px;
    height: 30px;
    color: #36b37e;
    margin-top: 50px;
  }
  .des-part {
    width: 550px;
    overflow: hidden !important;
  }
  .des-title {
    color: #183b56;
    font-weight: 400;
    font-size: 36px;
    padding-top: 40px;
  }
  .des {
    font-weight: 400;
    font-size: 16px;
    padding-top: 20px;
    color: #5a7184;
  }
  .profile-data {
    display: flex;
    justify-content: space-between;
    padding-top: 40px;
  }
  .profile {
    height: 50px;
    width: 60px;
    display: flex;
    background: #cccccc;
    border-radius: 50%;
    margin-right: 15px;
  }
  .name {
    color: #183b56;
    font-weight: 600;
    font-size: 16px;
  }
  .verified {
    font-family: "Open Sans";
    font-style: italic;
    font-weight: 400;
    font-size: 14px;
    color: #5a7184;
    padding-left: 8px;
  }
  .date {
    font-weight: 600;
    font-size: 16px;
    color: #5a7184;
    padding-right: 25px;
  }
  .view-all-btn {
    border: 2px solid #1565d8;
    border-radius: 8px;
    color: #1565d8;
    display: flex;
    align-items: center;
    width: 160px;
    font-weight: 700;
    font-size: 16px;
    background: #fff;
    height: 48px;
    justify-content: space-around;
  }
  .head {
    color: #183b56;
    font-weight: 700;
    font-size: 36px;
    padding-left: 10px;
  }
  .tips {
    font-weight: 400;
    padding-left: 10px;
    font-size: 18px;
    color: #5a7184;
  }
  .head-part {
    width: 1500px;
    display: flex;
    margin-bottom: 30px;
    justify-content: space-between;
  }
  .profile-verified {
    display: flex;
    margin: 8px 0 0 0;
  }

  @media screen and (max-width: 1400px) {
    .mySwiper {
      width: 1200px;
    }
    .head-part {
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding: 0 20px 0 20px;
    }
  }
  @media screen and (max-width: 1200px) {
    .mySwiper {
      width: 1000px;
    }
    .btn-feature {
      margin-top: 30px;
    }
    .des-title {
      padding-top: 20px;
      font-size: 32px;
    }
    .des {
      padding-right: 20px;
    }
  }
  @media screen and (max-width: 1000px) {
    .mySwiper {
      width: 700px;
      height: 600px;
    }
    .blank-card {
      margin-right: 40px;
    }
    .des {
      padding-right: 20px;
    }
    .parts {
      flex-direction: column;
    }
    .des-part {
      width: 100%;
      padding: 20px 30px 40px 30px;
      height: 350px;
    }
    .blank-card {
      width: 100%;
      height: 250px;
    }
  }
  @media screen and (max-width: 700px) {
    .mySwiper {
      width: 500px;
      height: 500px;
    }
    .btn-feature {
      margin-top: 20px;
    }
    .des-title {
      padding-top: 20px;
      font-size: 28px;
    }
    .des {
      padding-right: 20px;
    }
    .des-part {
      width: 100%;
      padding: 0px 30px 10px 30px;
      height: 300px;
    }
    .blank-card {
      width: 100%;
      height: 200px;
    }
    .profile-data {
      padding: 20px 0 0 0;
    }
  }
  @media screen and (max-width: 500px) {
    .mySwiper {
      width: 400px;
      height: 400px;
    }
    .des-title {
      font-size: 20px;
    }
    .des {
      font-size: 12px;
    }
    .des-part {
      width: 100%;
      padding: 0px 30px 0px 30px;
      height: 250px;
    }
    .blank-card {
      width: 100%;
      height: 150px;
    }
    .profile-data {
      padding: 20px 0 0 0;
    }
    .name {
      font-size: 12px;
    }
    .verified {
      font-size: 12px;
    }
    .date {
      font-size: 12px;
    }
  }
  @media screen and (max-width: 400px) {
    .mySwiper {
      width: 350px;
      height: 350px;
    }
    .des-title {
      font-size: 14px;
    }
    .des {
      font-size: 10px;
    }
    .des-part {
      width: 100%;
      padding: 0px 30px 0px 30px;
      height: 200px;
    }
    .blank-card {
      width: 100%;
      height: 150px;
    }
    .profile-data {
      padding: 20px 0 0 0;
    }
    .name {
      font-size: 10px;
    }
    .verified {
      font-size: 10px;
    }
    .date {
      font-size: 10px;
    }
    .btn-feature {
      margin-top: 10px;
    }
    .profile {
      height: 30px;
      width: 40px;
    }
    .profile-verified {
      margin-top: 4px;
    }
  }
`;

const HomeBlogSlider = () => {
  const router = useRouter();
  return (
    <HomeBlogWrapper>
      {router.pathname === "/blog" ? (
        <div className="head-part">
          <div>
            <div className="head">Case Studies</div>
            <div className="tips">Here’s what we've been up to recently.</div>
          </div>
          <button className="view-all-btn">
            View all{" "}
            <Image src={BtnRightArrow} alt="btn-arrow" height={15} width={15} />
          </button>
        </div>
      ) : (
        <div className="head-part">
          <div>
            <div className="head">The Crafted Blogs</div>
            <div className="tips">Fashion and Lifestyle Tips</div>
          </div>
          <Link href="/blog">
            <button className="view-all-btn">
              View all{" "}
              <Image
                src={BtnRightArrow}
                alt="btn-arrow"
                height={15}
                width={15}
              />
            </button>
          </Link>
        </div>
      )}
      <Swiper
        cssMode={true}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {[1, 2, 3, 4].map((_) => {
          return (
            <SwiperSlide>
              <div className="parts">
                <div className="blank-card"></div>
                <div className="des-part">
                  <button className="btn-feature">FEATURED</button>
                  <div className="des-title">
                    Finding Matching color bottoms and accessories got so Easy
                  </div>
                  <div className="des">
                    In this digital generation where information can be easily
                    obtained within seconds, business cards ...
                  </div>
                  <div className="profile-data">
                    <div style={{ display: "flex" }}>
                      <div className="profile"></div>
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <div className="name">Viola Manisa</div>
                        <div className="profile-verified">
                          <Image src={Verified} alt="verified" />
                          <div className="verified">Verified writer</div>
                        </div>
                      </div>
                    </div>
                    <div className="date">02 May</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </HomeBlogWrapper>
  );
};

export default HomeBlogSlider;
