import React, { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { toast, ToastContainer } from "react-toastify";
import "antd/dist/antd.variable.min.css";
import { QUColors } from "../../utils/other";
import colorRight from "/public/svg/color-right.svg";
import colorLeft from "/public/svg/color-left.svg";

const PoplinCottonFabricWrapper = styled.div`
  .questions {
    .body {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: relative;
      div {
        h5 {
          font-size: 20px;
          font-weight: 600;
        }

        button {
          border: none;
          background: #757575;
          border-radius: 8px;
          margin-top: 30px;
          color: #fff;
          width: 130px;
          height: 40px;
          cursor: pointer;
        }
      }
    }

    .container {
      display: flex;
      flex-wrap: wrap;
      overflow: auto;
      height: 400px;
      position: relative;
      z-index: 999;
      width: 630px;
      background: #fefefe;
      mix-blend-mode: normal;
      box-shadow: 0px 8px 19px rgba(0, 0, 0, 0.35);
      border-radius: 20px;
      gap: 15px;
      padding: 30px;
      margin: 40px 0 20px 0;
      justify-content: center;
      ::-webkit-scrollbar {
        display: none;
      }
    }
    .box-container {
      overflow: auto;
    }
    .box {
      width: 130px;
      height: 70px;
      background: #d9d9d9;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-size: 14px;
      position: relative;
      overflow: hidden;
      cursor: pointer;
    }
    .color-image-left {
      position: absolute;
      left: -5px;
      height: 70px;
      width: 15px;
    }
    .color-image-right {
      position: absolute;
      right: -5px;
      height: 70px;
      width: 15px;
    }
    .popup {
      height: 60px;
      width: 98%;
      position: absolute;
      border-radius: 50%;
      right: 0;
      top: 50px;
      z-index: 1;
      margin-right: 5px;
    }
    .popup1 {
      height: 60px;
      width: 98%;
      border-radius: 50%;
      position: relative;
      left: 0;
      top: -60px;
      z-index: 1;
      margin-left: 5px;
    }
    .free-size {
      width: 95px;
      height: 100px;
      font-weight: 600;
      font-size: 26px;
      background: #fefefe;
      padding-top: 5px;
      box-shadow: 0px 8px 19px rgba(0, 0, 0, 0.23);
      border-radius: 20px;
    }
    .question2 {
      width: 100%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
    }
  }
  .choose-size {
    display: flex;
    justify-content: center;
    gap: 10px;
  }
  .choose-size > div {
    width: 30px;
    height: 30px;
    border-radius: 5px;
    background: #ededed;
    line-height: 29px;
  }
  @media screen and (max-width: 650px) {
    .questions {
    .body {
      div {
        h5 {
          font-size: 18px;
          font-weight: 600;
          padding-top: 30px;
        }
      }
    }
  }
  @media screen and (max-width: 520px) {
    .questions {
      .container {
        width: 350px;
      }
      .popup {
        right: 65px;
        width: 72%;
      }
    }
    @media screen and (max-width: 385px) {
      .questions {
        .container {
          margin: 10px;
        }
        .free-size {
          width: 80px;
          height: 90px;
          font-size: 24px;
        }
        .box {
          width: 85px;
          height: 45px;
        }
        .color-image-left {
          height: 60px;
          width: 13px;
        }
        .color-image-right {
          height: 60px;
          width: 13px;
        }
      }
    }
  }
`;

const PoplinCottonFabric = () => {
  const [colorName, setColorName] = useState({
    value: "",
    color: "",
  });
  const [size, setSize] = useState("");

  const handleClick = (value, color) => {
    setColorName({ value, color });
  };

  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (colorName && size) {
      router.push({
        pathname: "/webapp",
        query: {
          type: "poplin-cotton",
          color: colorName.value.toLowerCase(),
          size: size,
        },
      });
    } else {
      toast("please fill the data ");
    }
  };

  const handleChange = (e) => {
    setSize(e.target.value);
  };

  return (
    <>
      <PoplinCottonFabricWrapper>
        <div className="questions">
          <div className="body">
            <div>
              <h5>1. What is the basic color you need?</h5>
              <div>
                {colorName.color && (
                  <div
                    style={
                      colorName.color
                        ? { background: colorName.color }
                        : { background: "none" }
                    }
                    className="popup"
                  ></div>
                )}
              </div>
              <div className="container">
                {QUColors.map((data, i) => {
                  return (
                    <div className="box-container" key={i}>
                      <div
                        className="box"
                        style={
                          colorName.value === data.name
                            ? data.name === "Black"
                              ? {
                                  color: "white",
                                  background: data.color,
                                  textTransform: "uppercase",
                                  fontWeight: "600",
                                  fontSize: "16px",
                                }
                              : {
                                  color: "black",
                                  background: data.color,
                                  textTransform: "uppercase",
                                  fontWeight: "700",
                                  fontSize: "16px",
                                }
                            : data.name === "Cream" || data.name === "White"
                            ? {
                                background: data.color,
                                color: "black",
                              }
                            : {
                                background: data.color,
                              }
                        }
                        onClick={() => handleClick(data.name, data.color)}
                      >
                        <img
                          src={colorLeft.src}
                          alt="whitespace"
                          className="color-image-left"
                        />
                        <div>{data.name}</div>
                        <img
                          src={colorRight.src}
                          alt="whitespace"
                          className="color-image-right"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
              {colorName.color && (
                <div
                  style={
                    colorName.color
                      ? { background: colorName.color }
                      : { background: "none" }
                  }
                  className="popup1"
                ></div>
              )}
            </div>
            <div>
              <h5>2. How many meter fabric you require?</h5>
              <div className="choose-size">
                <div className="size-2">2</div>
                <div className="size-4">4</div>
                <div className="size-6">6</div>
                <div className="size-8">8</div>
                <div className="size-10">10</div>
              </div>
            </div>
            <div>
              <button onClick={handleSubmit}>Next</button>
            </div>
          </div>
        </div>
      </PoplinCottonFabricWrapper>
      <ToastContainer />
    </>
  );
};
export default PoplinCottonFabric;
