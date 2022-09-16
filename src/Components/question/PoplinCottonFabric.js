import React, { useState } from "react";
import styled from "styled-components";
import { Select } from "antd";
import { useRouter } from "next/router";
import { toast, ToastContainer } from "react-toastify";
import "antd/dist/antd.variable.min.css";

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
`;

const PoplinCottonFabric = () => {
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");

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
  return (
    <>
      <PoplinCottonFabricWrapper>
        <div className="questions">
          <div className="body">
            <div>
              <h5>1. What is the basic color you need?</h5>
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
