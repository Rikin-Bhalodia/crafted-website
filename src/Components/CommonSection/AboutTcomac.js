import React from "react";
import styled from "styled-components";
// import Link from "next/link";
import Image from "next/image";
import Oval from "../../../public/svg/oval.svg";
import Dot from "../../../public/svg/dot.svg";

const AboutTcomacWrapper = styled.div`
  position: relative;
  margin: 0 200px -200px;
  .imgOval {
    position: absolute;
    top: 0;
    z-index: 1;
  }
  .about-tcomac {
    position: absolute;
    display: flex;
    z-index: 5;
    .about-desc {
      flex-grow: 2;
      width: 50%;
      h6 {
        font-weight: 400;
        font-size: 24px;
        line-height: 29px;
        letter-spacing: 2px;
        text-transform: uppercase;
        color: #000000;
        margin-bottom: 40px;
      }
      h4 {
        font-weight: 600;
        font-size: 36px;
        line-height: 48px;
        letter-spacing: 0.2px;
        color: #183b56;
        margin: 0px 0px 50px;
      }
      p {
        font-weight: 400;
        font-size: 18px;
        line-height: 32px;
        color: #5a7184;
        margin-bottom: 60px;
      }
      .btn {
        border: 2px solid #333333;
        border-radius: 2000px;
        font-weight: 700;
        font-size: 16px;
        line-height: 22px;
        text-align: center;
        color: #333333;
        mix-blend-mode: darken;
        padding: 10px 200px;
        background-color: #fff;
        cursor: pointer !important;
      }
    }
    .about-img {
      width: 50%;
      position: relative;
      .item {
        background: #979797;
        border-radius: 13px;
      }
      .item1 {
        width: 85px;
        height: 85px;
        bottom: 90px;
        position: absolute;
        right: 315px;
      }
      .item2 {
        width: 140px;
        height: 140px;
        bottom: 140px;
        position: absolute;
        right: 520px;
        z-index: 999;
      }
      .item3 {
        width: 130px;
        height: 130px;
        bottom: -110px;
        position: absolute;
        right: 400px;
        z-index: 999;
      }
      .item4 {
        width: 190px;
        height: 190px;
        bottom: 190px;
        position: absolute;
        right: 20px;
        z-index: 999;
      }
      .item5 {
        width: 140px;
        height: 140px;
        bottom: -15px;
        position: absolute;
        right: 30px;
      }
      .item6 {
        position: absolute;
        bottom: -50px;
        right: 300px;
      }
      .item8 {
        background: #1565d8;
        position: absolute;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        bottom: 175px;
        right: -1px;
      }
    }
  }
  @media screen and (max-width: 1700px) {
    .about-tcomac {
      .about-desc {
        /* width: 70%; */
      }
      .about-img {
        .item1 {
          width: 75px;
          height: 75px;
          bottom: 90px;
          right: 255px;
        }
        .item2 {
          width: 130px;
          height: 130px;
          bottom: 140px;
          right: 470px;
        }
        .item3 {
          width: 120px;
          height: 120px;
          bottom: -110px;
          right: 350px;
        }
        .item4 {
          width: 180px;
          height: 180px;
          bottom: 195px;
          right: -10px;
        }
        .item5 {
          width: 130px;
          height: 130px;
          bottom: -15px;
          right: 0px;
        }
        .item6 {
          bottom: -50px;
          right: 270px;
        }
        .item8 {
          width: 45px;
          height: 45px;
          bottom: 175px;
          right: -30px;
        }
      }
    }
  }
  @media screen and (max-width: 1600px) {
    .about-tcomac {
      .about-img {
        .item1 {
          width: 65px;
          height: 65px;
          bottom: 90px;
          right: 180px;
        }
        .item2 {
          width: 120px;
          height: 120px;
          bottom: 140px;
          right: 360px;
        }
        .item3 {
          width: 110px;
          height: 110px;
          bottom: -90px;
          right: 240px;
        }
        .item4 {
          width: 170px;
          height: 170px;
          bottom: 195px;
          right: -70px;
        }
        .item5 {
          width: 120px;
          height: 120px;
          bottom: 0px;
          right: -60px;
        }
        .item6 {
          bottom: -50px;
          right: 170px;
        }
        .item8 {
          width: 40px;
          height: 40px;
          bottom: 180px;
          right: -85px;
        }
      }
    }
  }
  @media screen and (max-width: 1500px) {
    margin: 0 80px -200px;
    .about-img {
      margin-right: 80px;
    }
  }
  @media screen and (max-width: 1400px) {
    margin: 0 80px -150px;
    .about-tcomac {
      .about-img {
      }
    }
  }
  @media screen and (max-width: 1200px) {
    margin: 0 80px -160px;
    .about-tcomac {
      .about-desc {
        width: 40%;
        h6 {
          font-size: 22px;
          line-height: 25px;
        }
        h4 {
          font-size: 30px;
          line-height: 40px;
        }
        .btn {
          font-size: 14px;
          padding: 10px 100px;
        }
      }
      .about-img {
        width: 30%;
        .item1 {
          width: 65px;
          height: 65px;
          bottom: 90px;
          right: 180px;
        }
        .item2 {
          display: none;
        }
        .item3 {
          width: 110px;
          height: 110px;
          bottom: -110px;
          right: 160px;
        }
        .item4 {
          width: 170px;
          height: 170px;
          bottom: 195px;
          right: -70px;
        }
        .item5 {
          width: 120px;
          height: 120px;
          bottom: -10px;
          right: -45px;
        }
        .item6 {
          bottom: -60px;
          right: 140px;
        }
        .item8 {
          width: 40px;
          height: 40px;
          bottom: 180px;
          right: -85px;
        }
      }
    }
  }
  @media screen and (max-width: 900px) {
    margin: 0 80px -150px;
    .about-tcomac {
      .about-img {
        width: 30%;
        .item1 {
          width: 65px;
          height: 65px;
          bottom: 90px;
          right: 120px;
        }
        .item2 {
          display: none;
        }
        .item3 {
          width: 110px;
          height: 110px;
          bottom: -110px;
          right: 100px;
        }
        .item4 {
          width: 170px;
          height: 170px;
          bottom: 195px;
          right: -130px;
        }
        .item5 {
          width: 120px;
          height: 120px;
          bottom: -10px;
          right: -100px;
        }
        .item6 {
          bottom: -60px;
          right: 80px;
        }
        .item8 {
          width: 40px;
          height: 40px;
          bottom: 180px;
          right: -145px;
        }
      }
    }
  }
  @media screen and (max-width: 800px) {
    margin: 0 80px -80px;
    .about-tcomac {
      .about-desc {
        width: 50%;
        .btn {
          font-size: 14px;
          padding: 10px 60px;
        }
      }
      .about-img {
        width: 30%;
        .item1 {
          width: 65px;
          height: 65px;
          bottom: 60px;
          right: 90px;
        }
        .item2 {
          display: none;
        }
        .item3 {
          width: 110px;
          height: 110px;
          bottom: -130px;
          right: 100px;
        }
        .item4 {
          width: 170px;
          height: 170px;
          bottom: 175px;
          right: -130px;
        }
        .item5 {
          width: 120px;
          height: 120px;
          bottom: -30px;
          right: -100px;
        }
        .item6 {
          bottom: -80px;
          right: 80px;
        }
        .item8 {
          width: 40px;
          height: 40px;
          bottom: 160px;
          right: -145px;
        }
      }
    }
  }
  @media screen and (max-width: 660px) {
    margin: 0 30px 100px;
    .about-tcomac {
      flex-direction: column;
      align-items: center;
      .about-desc {
        width: 100%;
        text-align: center;
        .btn {
          font-size: 14px;
          padding: 10px 30px;
        }
      }
      .about-img {
        width: 30%;
        .item1 {
          width: 65px;
          height: 65px;
          bottom: -115px;
          right: 20px;
        }
        .item2 {
          display: none;
        }
        .item3 {
          width: 110px;
          height: 110px;
          bottom: -60px;
          right: 180px;
        }
        .item4 {
          width: 170px;
          height: 170px;
          bottom: -320px;
          right: -200px;
        }
        .item5 {
          width: 120px;
          height: 120px;
          bottom: -310px;
          right: 135px;
        }
        .item6 {
          bottom: -240px;
          right: 80px;
        }
        .item8 {
          display: none;
        }
      }
    }
  }
  @media screen and (max-width: 500px) {
    margin: 0 30px 130px;
    .about-tcomac {
      .about-img {
        width: 30%;
        .item1 {
          width: 65px;
          height: 65px;
          bottom: -115px;
          right: 0px;
        }
        .item2 {
          display: none;
        }
        .item3 {
          width: 110px;
          height: 110px;
          bottom: -60px;
          right: 135px;
        }
        .item4 {
          width: 170px;
          height: 170px;
          bottom: -320px;
          right: -200px;
        }
        .item5 {
          width: 120px;
          height: 120px;
          bottom: -310px;
          right: 100px;
        }
        .item6 {
          display: none;
        }
        .item8 {
          display: none;
        }
      }
    }
  }
`;

const AboutTcomac = (data) => {
  return (
    <>
      <AboutTcomacWrapper>
        <div className="about-tcomac">
          <div className="about-desc">
            <h6>{data.shead}</h6>
            <h4>{data.mhead}</h4>
            <p>{data.para}</p>
            <button className="btn">{data.btn}</button>
          </div>
          <div className="about-img">
            <div className="item item1"></div>
            <div className="item item2"></div>
            <div className="item item3"></div>
            <div className="item item4"></div>
            <div className="item item5"></div>
            <div className="item6">
              <Image src={Dot} alt="img" />
            </div>
            <div className="item7"></div>
            <div className="item8"></div>
          </div>
        </div>
        <Image
          src={Oval}
          layout="fixed"
          className="imgOval"
          alt="background-oval"
        />
      </AboutTcomacWrapper>
    </>
  );
};

export default AboutTcomac;
