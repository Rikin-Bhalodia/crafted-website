import React, { useState } from "react";
import styled from "styled-components";
import { Select } from "antd";
import { useRouter } from "next/router";
import { toast, ToastContainer } from "react-toastify";
import "antd/dist/antd.variable.min.css";
import { QUColors } from "../../utils/other";

const { Option } = Select;
const PoplinCottonFabricWrapper = styled.div`
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
    .tc-image {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      border-radius: 5px;
      height: 250px;
      width: 500px;
      font-size: 13px;
      color: white;
      gap: 15px;
      font-weight: 500;
      background: #ededed;
    }
    .color-box {
      height: 50px;
      width: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
    }
    .input2 {
      height: 40px;
      width: 20px;
    }
    .label1 {
      font-size: 16px;
      padding-left: 10px;
      position: relative;
      top: -14px;
    }
  }
  .color-back {
    background: #2e526d;
    height: 50px;
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .color-tab {
    height: 40px;
    width: 400px;
    border-radius: 20px;
  }
  @media screen and (max-width: 500px) {
    .questions {
      .tc-image {
        width: 370px;
      }
    }
  }
`;

const PoplinCottonFabric = () => {
  const [colorName, setColorName] = useState("");
  const [size, setSize] = useState("");

  const handleChange = (value) => {
    setColorName(value);
  };
  const onSizeChange = (e) => {
    setSize(e.target.value);
  };

  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (colorName && size) {
      router.push({
        pathname: "/webapp",
        query: { type: "poplin-cotton", color: colorName, size: size },
      });
    } else {
      toast("please fill the data ");
    }
  };

  return (
    <>
      <PoplinCottonFabricWrapper>
        <div className="questions">
          <div className="body">
            <div>
              <h5>1. What is the basic color you need?</h5>

              <p>
                <div className="tc-image">
                  {QUColors.map((color) => {
                    return (
                      <div
                        style={
                          colorName === color.name
                            ? {
                                background: color.color,
                                border: "2px solid black",
                              }
                            : { background: color.color, color: "black" }
                        }
                        className="color-box"
                        onClick={() => handleChange(color.name)}
                      >
                        {color.name}
                      </div>
                    );
                  })}
                </div>
              </p>
            </div>
            <div>
              <h5>2. How many meter fabric you require?</h5>
              <p>
                <input
                  type="number"
                  id="size"
                  value={size}
                  onChange={onSizeChange}
                />
              </p>
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
