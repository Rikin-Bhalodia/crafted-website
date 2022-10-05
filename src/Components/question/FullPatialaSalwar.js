import React, { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { toast, ToastContainer } from "react-toastify";
import "antd/dist/antd.variable.min.css";
import { QUColors } from "../../utils/other";
import colorRight from "/public/svg/color-right.svg";
import colorLeft from "/public/svg/color-left.svg";

const PatialaSalwarWrapper = styled.div`
  .questions {
    .body {
      div {
        h5 {
          font-size: 20px;
          font-weight: 600;
        }
        button {
          padding: 5px 50px;
          border: none;
          background: black;
          color: white;
          border-radius: 3px;
          margin-top: 20px;
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
  @media screen and (max-width: 650px) {
    .questions {
      .container {
        width: 500px;
      }
    }
  }
  @media screen and (max-width: 520px) {
    .questions {
      .container {
        width: 370px;
      }
      .popup {
        right: 65px;
        width: 72%;
      }
    }
  }
`;

const FullPatialaSalwar = () => {
  const [colorName, setColorName] = useState("");
  const [size, setSize] = useState("");
  const handleClick = (value, color) => {
    setColorName({ value, color });
  };
  const onSizeChange = (e) => {
    const value = e.target.value;
    setSize(value);
  };

  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (colorName && size) {
      router.push({
        pathname: "/webapp",
        query: { type: "full-patiala", color: colorName.value, size: size },
      });
    } else {
      toast("please fill the data ");
    }
  };
  return (
    <>
      <PatialaSalwarWrapper>
        <div className="questions">
          <div className="body">
            <div>
              <h5>1. What is the contrast color of your suit?</h5>
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
            <div className="question2">
              <h5>2. What is your waist size?</h5>
              <div className="free-size">Free Size</div>
            </div>
            <div>
              <button onClick={handleSubmit}>Next</button>
            </div>
          </div>
        </div>
      </PatialaSalwarWrapper>
      <ToastContainer />
    </>
  );
};
export default FullPatialaSalwar;
