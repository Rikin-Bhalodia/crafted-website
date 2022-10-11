import Image from "next/image";
import React, { useMemo } from "react";
import Countdown from "react-countdown";
import styled from "styled-components";
import Timer from "../../../CommonComponent/CustomHooks/timer";
import BackGround from "/public/svg/background.svg";
import ProductImg from "/public/svg/product.svg";

const CommonCardWrapper = styled.div`
  position: relative;
  top: 50px;
  .container {
    display: flex;
    gap: 30px;
    justify-content: center;
    align-items: center;
    position: relative;
    bottom: -130px;
    padding: 0 50px;
  }
  .card {
    width: 680px;
    height: 310px;
    display: flex;
    background: #f6f7fb;
    box-shadow: 0px 16px 50px rgba(0, 0, 0, 0.1);
    border-radius: 30px;
    align-items: center;
    ${"" /* margin-right: 30px; */}
  }
  .card-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 20px;
    gap: 15px;
    .deal-img {
      height: 200px;
    }
  }
  .limited {
    font-weight: 400;
    font-size: 24px;
    color: #393d46;
  }
  .title {
    color: #ffffff;
    font-weight: 700;
    font-size: 26px;
    position: absolute;
    top: 30px;
    left: 60px;
  }
  .time {
    display: flex;
  }
  .time-table {
    width: 70px;
    height: 75px;
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-right: 15px;
    justify-content: center;
    align-items: center;
    border: 1px solid #9f9f9f;
    margin-top: 10px;
  }
  button {
    width: 100%;
    height: 40px;
    color: #ffffff;
    font-weight: 700;
    font-size: 18px;
    background: #393d46;
    border-radius: 45px;
    border: none;
  }
  .des {
    font-weight: 700;
    font-size: 20px;
    margin-top: 10px;
    padding: 0 20px;
  }
  .main-price {
    text-decoration: line-through;
    margin-right: 15px;
    margin-top: 10px;
    color: #9f9f9f;
    font-size: 23px;
  }
  .discount-price {
    margin-right: 15px;
    margin-top: 10px;
    font-size: 20px;
  }
  .banner3-img {
    object-fit: cover;
    background-size: cover;
    background-attachment: fixed;
  }

  @media screen and (max-width: 1286px) {
    .time-table {
      width: 100%;
    }
    .card {
      width: 100%;
      height: 280px;
    }
    .card-content {
      .deal-img {
        height: 160px;
      }
    }
  }
  @media screen and (max-width: 1000px) {
    .container {
      flex-direction: column;
      margin: 0px 20px;
      padding: 0 0px;
    }
    .card-content {
      padding: 10px 0px;
      margin-left: 20px;
    }
    .card {
      width: 600px;
      height: 270px;
    }
    .card-content {
      .deal-img {
        height: 180px;
      }
    }
  }
  @media screen and (max-width: 700px) {
    .time-table > div {
      font-size: 15px;
    }
    .des {
      font-size: 17px;
    }
    .card {
      width: 100%;
    }
    .card-content {
      margin-left: 10px;
      .deal-img {
        height: 160px;
      }
    }
  }

  @media screen and (max-width: 450px) {
    .limited {
      font-size: 15px;
    }
    .time-table > div {
      font-size: 10px;
    }
    .des {
      font-size: 12px;
    }
    .main-price {
      font-size: 15px;
    }
    .discount-price {
      font-size: 15px;
    }
    .card-content {
      padding: 10px 0px;
    }
    button {
      font-size: 10px;
      height: 30px;
    }
    .title {
      font-size: 22px;
      top: 48px;
      left: 35px;
    }
    .card {
      width: 100%;
      height: 210px;
    }
    .card-content {
      .deal-img {
        height: 110px;
      }
    }
  }
`;

const CommonCard = ({ products }) => {
  const limitedDealData = useMemo(() => {
    return products?.filter((data) => data.type === "limited");
  });
  return (
    <CommonCardWrapper>
      <Image
        src={BackGround}
        alt="background"
        layout="fill"
        className="banner3-img"
      />
      <div className="title">Today’s The Crafted Deal</div>
      <div className="container">
        {limitedDealData?.map(({ id, image, name, mrp, sale_price }) => {
          return (
            <div className="card" key={id}>
              <div className="card-content">
                <img src={image[0]} alt="product" className="deal-img" />
                <button>Add to Cart</button>
              </div>
              <div style={{ margin: "0 0 0 20px" }}>
                <div className="limited">Limited Deals</div>
                <Timer />
                <div className="des">{name}</div>
                <div style={{ display: "flex", padding: "0 20px" }}>
                  <div className="main-price">₹{mrp}</div>
                  <div className="discount-price">₹{sale_price}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </CommonCardWrapper>
  );
};

export default CommonCard;
