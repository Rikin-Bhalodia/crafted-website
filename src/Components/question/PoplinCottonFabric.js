import React, { useState } from "react";
import styled from "styled-components";
import { Select } from "antd";
import { useRouter } from "next/router";
import { toast, ToastContainer } from "react-toastify";
import "antd/dist/antd.variable.min.css";
import Circle from "@uiw/react-color-circle";

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
`;

const PoplinCottonFabric = () => {
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [hex, setHex] = useState("");

  const handleChange = (value) => {
    setColor(value);
  };
  const onSizeChange = (e) => {
    setSize(e.target.value);
  };

  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (color && size) {
      router.push({
        pathname: "/webapp",
        query: { type: "poplin-cotton", color: color, size: size },
      });
    } else {
      toast("please fill the data ");
    }
  };

  const colors = [
    { color: "#0000FF", name: "Blue" },
    { color: "#FF0000", name: "Red" },
    { color: "#00FF00", name: "Green" },
    { color: "#FFFF00", name: "Yellow" },
    { color: "#FF8C00", name: "Orange" },
    { color: "#FFFFFF", name: "White" },
    { color: "#E30B5C", name: "Pink" },
    { color: "#E54D5C", name: "Gajri" },
    { color: "#821762", name: "Purple" },
    { color: "#FFFDD0", name: "Cream" },
    { color: "#6D7A86", name: "Grey" },
    { color: "#7F4534", name: "Brown" },
    { color: "#74823D", name: "Mahendi" },
    { color: "#C97A30", name: "Metal" },
    { color: "#000000", name: "Black" },
  ];
  return (
    <>
      <PoplinCottonFabricWrapper>
        <div className="questions">
          <div className="body">
            <div>
              <h5>1. What is the basic color you need?</h5>
              <div className="color-back">
                {colors.map((ele) => {
                  return (
                    <>
                      <div
                        style={{ background: ele.color }}
                        className="color-tab"
                      ></div>
                    </>
                  );
                })}
              </div>
              <p>
                <Select
                  defaultValue="Select Color"
                  style={{
                    width: "200px",
                  }}
                  id="color"
                  name="color"
                  value={color}
                  onChange={handleChange}
                >
                  <Option
                    value="blue"
                    style={{ background: "blue", color: "black" }}
                  >
                    Blue
                  </Option>
                  <Option
                    value="red"
                    style={{ background: "red", color: "black" }}
                  >
                    Red
                  </Option>
                  <Option
                    value="green"
                    style={{ background: "green", color: "black" }}
                  >
                    Green
                  </Option>
                  <Option
                    value="yellow"
                    style={{ background: "yellow", color: "black" }}
                  >
                    Yellow
                  </Option>
                  <Option
                    value="orange"
                    style={{ background: "orange", color: "black" }}
                  >
                    Orange
                  </Option>
                  <Option
                    value="white"
                    style={{ background: "white", color: "black" }}
                  >
                    White
                  </Option>
                  <Option
                    value="pink"
                    style={{ background: "#E30B5C", color: "black" }}
                  >
                    Pink
                  </Option>
                  <Option
                    value="gajri"
                    style={{ background: "#D12F49", color: "black" }}
                  >
                    Gajri
                  </Option>
                  <Option
                    value="purple"
                    style={{ background: "purple", color: "black" }}
                  >
                    Purple
                  </Option>
                  <Option
                    value="cream"
                    style={{ background: "#FFFDD0", color: "black" }}
                  >
                    Cream
                  </Option>
                  <Option
                    value="grey"
                    style={{ background: "#6D7A86", color: "black" }}
                  >
                    Grey
                  </Option>
                  <Option
                    value="brown"
                    style={{ background: "#7F4534", color: "black" }}
                  >
                    Brown
                  </Option>
                  <Option
                    value="mehendi"
                    style={{ background: "#74823D", color: "black" }}
                  >
                    Mehendi
                  </Option>
                  <Option
                    value="metal"
                    style={{ background: "#C97A30", color: "black" }}
                  >
                    Metal
                  </Option>
                  <Option
                    value="black"
                    style={{ background: "#000000", color: "white" }}
                  >
                    Black
                  </Option>
                </Select>
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
