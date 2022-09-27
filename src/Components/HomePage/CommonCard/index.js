import Image from "next/image";
import React from "react";
import styled from "styled-components";
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
    height: 330px;
    display: flex;
    background: #f6f7fb;
    box-shadow: 0px 16px 50px rgba(0, 0, 0, 0.1);
    border-radius: 45px;
    align-items: center;
    ${"" /* margin-right: 30px; */}
  }
  .card-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 20px;
    gap: 15px;
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
    width: 150px;
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
      height: 300px;
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
    }
    .card {
      width: 600px;
      height: 330px;
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
      height: 100%;
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
  }
`;

const CommonCard = () => {
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
        {[1, 2].map((_) => {
          return (
            <div className="card" key={_}>
              <div className="card-content">
                <Image src={ProductImg} alt="product" />
                <button>Add to Cart</button>
              </div>
              <div style={{ margin: "0 0 0 20px" }}>
                <div className="limited">Limited Deals</div>
                <div className="time">
                  <div className="time-table">
                    <div>08</div>
                    <div>Hours</div>
                  </div>
                  <div className="time-table">
                    <div>58</div>
                    <div>Minutes</div>
                  </div>
                  <div className="time-table">
                    <div>18</div>
                    <div>Seconds</div>
                  </div>
                </div>
                <div className="des">
                  The Crafted Premium Petticoat (Equator Slate Grey)
                </div>
                <div style={{ display: "flex" }}>
                  <div className="main-price">₹598</div>
                  <div className="discount-price">₹399</div>
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
