import React from "react";
import styled from "styled-components";
// import Link from "next/link";
// import Image from "next/image";
import DashBoardHead from "./../DashBoardHead";
import ProductTable from "../ProductTable";

const OrderWrapper = styled.div``;

const Order = () => {
  return (
    <>
      <OrderWrapper>
        <DashBoardHead name="Order" sec="" />
        <ProductTable />
      </OrderWrapper>
    </>
  );
};

export default Order;
