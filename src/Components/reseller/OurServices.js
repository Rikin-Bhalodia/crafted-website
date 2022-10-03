import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import services1 from "../../../public/svg/servicess/services1.svg";
import services2 from "../../../public/svg/servicess/services2.svg";
import services3 from "../../../public/svg/servicess/services3.svg";

const OurServicesWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 100px;
  padding: 100px 150px;
  .services-heading {
    width: 100%;
    p {
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 28px;
      color: #fd346e;
      margin: 0px;
    }
    h4 {
      width: 80%;
      font-size: 38px;
      line-height: 52px;
      font-weight: 400;
      letter-spacing: -1px;
      color: #262729;
      margin: 20px 0px 60px;
    }
    a {
      font-size: 15px;
      line-height: 26px;
      text-align: center;
      color: #ffffff;
      background: #fd346e;
      box-shadow: 0px 20px 20px rgba(253, 52, 110, 0.3);
      border-radius: 50px;
      padding: 15px 60px;
    }
  }
  .services-data {
    width: 100%;
    p {
      font-weight: 400;
      font-size: 18px;
      line-height: 28px;
      align-items: center;
      color: #262729;
      opacity: 0.7;
    }
    .services-box {
      background: #f3f4f6;
      border-radius: 15px;
      display: flex;
      padding: 0px 30px;
      align-items: center;
      gap: 30px;
      margin-bottom: 20px;

      h5 {
        font-size: 21px;
        line-height: 30px;
        font-weight: 400;
        display: flex;
        align-items: center;
        color: #262729;
        margin: 0px 0px 10px;
      }
      .para {
        font-weight: 400;
        font-size: 16px;
        line-height: 25px;
        display: flex;
        color: #262729;
        opacity: 0.7;
        margin: 0px;
      }
    }
  }
  @media screen and (max-width: 1440px) {
    padding: 80px;
    gap: 50px;
  }
  @media screen and (max-width: 1240px) {
    gap: 20px;
    flex-direction: column;
    h4 {
      width: 80%;
    }
  }
  @media screen and (max-width: 920px) {
    flex-direction: column;
    .services-heading {
      h4 {
        width: 100%;
      }
    }
  }
  @media screen and (max-width: 686px) {
    padding: 50px 30px;
    .services-heading {
      display: grid;
      align-items: center;
      h4 {
        font-size: 25px;
        line-height: 42px;
      }
    }
  }
  @media screen and (max-width: 456px) {
    gap: 30px;
    .services-heading {
      h4 {
        font-size: 28px;
        line-height: 42px;
        margin: 20px 0px 20px;
      }
      a {
        padding: 8px 50px;
      }
    }
    .services-data {
      p {
        font-size: 15px;
        line-height: 28px;
        text-align: center;
      }
      .services-box {
        flex-direction: column;
        align-items: center;
        gap: 10px;
        padding: 20px;
        h5 {
          justify-content: center;
        }
      }
    }
  }
`;

const services = [
  {
    img: <Image src={services1} width={80} layout="fixed" />,
    head: "Manufacturing Partners",
    para: "To become The Crafted Manufacturer you can register with us and can earn by selling your products under our brand name through our website.",
  },
  {
    img: <Image src={services2} width={80} layout="fixed" />,
    head: "Reselling Partners",
    para: "Women Entrepreneur can join as The Crafted Selling Partners and sell our products directly to customers and also in bulk to retailers and earn with us.",
  },
  {
    img: <Image src={services3} width={80} layout="fixed" />,
    head: "Stitching Partners",
    para: "Local women can join us as The Crafted Stitching Partners netwrok and stitch our quality products  and earn with in the comfort of their home.",
  },
];

const OurServices = () => {
  return (
    <>
      <OurServicesWrapper>
        <div className="services-heading">
          <p>The Crafted Associate Partner</p>
          <h4>
            Welcome to one of the world’s best Associate Partnership program.{" "}
          </h4>
          <h4>Join now and become The Crafted Associate Partner.</h4>
          <Link href="#" className="btn">
            Sign Up
          </Link>
        </div>
        <div className="services-data">
          <p>
            Join our Associate Partnership program and sales network. Be a part
            of our huge and continuously growing community of Manufacturers,
            Selling Partners, Stitching partners and Customers across India and
            subsequently worldwide.
          </p>
          {services.map((data) => {
            return (
              <div className="services-box" key={data.head}>
                <div className="services-logo">{data.img}</div>
                <div className="services-des">
                  <h5>{data.head}</h5>
                  <p className="para">{data.para}</p>
                </div>
              </div>
            );
          })}
        </div>
      </OurServicesWrapper>
    </>
  );
};

export default OurServices;
