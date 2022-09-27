import React, { useState } from "react";
import styled from "styled-components";
import { Select } from "antd";
import { useRouter } from "next/router";
import { toast, ToastContainer } from "react-toastify";
import "antd/dist/antd.variable.min.css";
import { QUColors } from "../../utils/other";

const { Option } = Select;
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
  }
`;

const FullPatialaSalwar = () => {
  const [colorName, setColorName] = useState("");
  const [size, setSize] = useState("");
  const handleChange = (value) => {
    setColorName(value);
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
        query: { type: "full-patiala", color: colorName, size: size },
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
              <h5>2. What is the size of your waist?</h5>
              <p>
                <input
                  type="radio"
                  id="free-size"
                  value="free-size"
                  name="free-size"
                  checked={size === "free-size"}
                  className="input2"
                  onChange={onSizeChange}
                />
                <label htmlFor="free-size" className="label1">
                  Free Size
                </label>
              </p>
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
