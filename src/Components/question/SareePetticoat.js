import React from "react";
import styled from "styled-components";
import QueComponent from "./QueComponent";
// import Link from "next/link";
// import Image from "next/image";
import { Select } from "antd";
import "antd/dist/antd.variable.min.css";
const { Option } = Select;
const SareePetticoatWrapper = styled.div``;

const SareePetticoat = () => {
  return (
    <>
      <SareePetticoatWrapper>
        <QueComponent
          que1="What is the color of your saree?"
          opt1=""
          que2="What is your waist size?"
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
      </SareePetticoatWrapper>
    </>
  );
};
export default SareePetticoat;
