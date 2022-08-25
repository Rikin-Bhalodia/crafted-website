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
      font-size: 48px;
      line-height: 62px;
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
      padding: 20px 30px;
      align-items: center;
      gap: 30px;
      margin-bottom: 20px;

      h5 {
        font-size: 21px;
        line-height: 30px;
        display: flex;
        align-items: center;
        color: #262729;
        margin: 0px 0px 10px;
      }
      .para {
        font-weight: 400;
        font-size: 18px;
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
        font-size: 38px;
        line-height: 52px;
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
        font-size: 18px;
        line-height: 28px;
        text-align: center;
      }
      .services-box {
        flex-direction: column;
        align-items: center;
        gap: 10px;
        h5 {
          text-align: center;
        }
      }
    }
  }
`;

const services = [
  {
    img: <Image src={services1} width={80} layout="fixed" />,
    head: "Website Design & Development",
    para: "Refresh old out dated website or bring your business online with your first website.",
  },
  {
    img: <Image src={services2} width={80} layout="fixed" />,
    head: "Search Engine Optimisation (SEO)",
    para: "Start bringing new visitors to your website with an SEO  !",
  },
  {
    img: <Image src={services3} width={80} layout="fixed" />,
    head: "Google Ads Management (PPC)",
    para: "Appear on the top first pages of Google and generate instant traffic to your website.",
  },
];

const OurServices = () => {
  return (
    <>
      <OurServicesWrapper>
        <div className="services-heading">
          <p>Our Services</p>
          <h4>
            Get better conversion with user-friendly and mobile optimized
            websites
          </h4>
          <Link href="#" className="btn">
            Learn More
          </Link>
        </div>
        <div className="services-data">
          <p>
            If you don’t have a website or can’t be found on the first page of
            Google then you are missing out on potential visitors and sales.
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
