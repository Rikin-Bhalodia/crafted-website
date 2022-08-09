import React from "react";
import styled from "styled-components";
import QueComponent from "./QueComponent";
// import Link from "next/link";
// import Image from "next/image";
import { Select } from "antd";
import "antd/dist/antd.variable.min.css";
const { Option } = Select;

const PatialaSalwarWrapper = styled.div``;

const PatialaSalwar = () => {
  return (
    <>
      <PatialaSalwarWrapper>
        <QueComponent
          que1="What is the contrast color of your suit?"
          opt1=""
          que2="What is the size of your waist?"
          opt2={
            <Select
              defaultValue="Select Size"
              style={{
                width: 200,
              }}
            >
              <Option value="s">S</Option>
              <Option value="m">M</Option>
              <Option value="l">L</Option>
              <Option value="xl">XL</Option>
              <Option value="xxl">XXL</Option>
            </Select>
          }
        />
      </PatialaSalwarWrapper>
    </>
  );
};
export default PatialaSalwar;
