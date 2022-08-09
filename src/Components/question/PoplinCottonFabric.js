import React from "react";
import styled from "styled-components";
import QueComponent from "./QueComponent";
// import Link from "next/link";
// import Image from "next/image";

const PoplinCottonFabricWrapper = styled.div``;

const PoplinCottonFabric = () => {
  return (
    <>
      <PoplinCottonFabricWrapper>
        <QueComponent
          que1="What is the basic color you need?"
          opt1=""
          que2="How many meter fabric you require?"
          opt2={<input type="number" />}
        />
      </PoplinCottonFabricWrapper>
    </>
  );
};
export default PoplinCottonFabric;
