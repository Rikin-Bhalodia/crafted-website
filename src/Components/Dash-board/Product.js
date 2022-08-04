import React from "react";
import styled from "styled-components";
import { Breadcrumb } from "antd";
import ProductDropDown from "./ProductDropDown";
import ProductTable from "./ProductTable";
import ProductDrawer from "./ProductDrawer";
import DashBoardHead from "./DashBoardHead";

const ProductWrapper = styled.div`
  .filter-data {
    display: flex;
    gap: 10px;
    margin-bottom: -10px;
  }
`;

const Product = () => {
  return (
    <>
      <ProductWrapper>
        <DashBoardHead name="Dashboard" sec={<ProductDrawer />} />

        <Breadcrumb
          separator="|"
          style={{
            margin: "16px 0",
          }}
        >
          <Breadcrumb.Item>All (05)</Breadcrumb.Item>
          <Breadcrumb.Item>Published (05)</Breadcrumb.Item>
          <Breadcrumb.Item>Draft (00)</Breadcrumb.Item>
        </Breadcrumb>
        <ProductDropDown />
        <ProductTable />
      </ProductWrapper>
    </>
  );
};

export default Product;
