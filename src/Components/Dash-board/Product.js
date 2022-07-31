import React from "react";
import styled from "styled-components";
// import { IoSearchOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";

import { Breadcrumb } from "antd";
import ProductDropDown from "./ProductDropDown";
import ProductTable from "./ProductTable";
import ProductDrawer from "./ProductDrawer";

const ProductWrapper = styled.div`
  padding-top: 20px;
  .product-header {
    display: flex;
    justify-content: space-between;
    gap: 30px;

    .header-left {
      h3 {
        font-weight: 600;
        font-size: 20px;
        line-height: 27px;
        color: #333333;
      }
      .header-btn {
        display: flex;
        flex-direction: row;
        gap: 10px;
        button {
          width: 90px;
          height: 25px;
          border-radius: 20px;
          border: 1px solid #999999;
          padding: 0px 10px;
          font-weight: 600;
          font-size: 14px;
          line-height: 19px;
          color: rgba(0, 0, 0, 0.8);
          background: #ffffff;
        }
        .ant-drawer
          .ant-drawer-right
          .ant-drawer-open
          > .ant-drawer-mask
          > .ant-drawer-content-wrapper
          > .ant-drawer-content
          > .ant-drawer-wrapper-body
          > .ant-drawer-body {
          label {
            font-weight: 400;
            font-size: 18px;
            line-height: 47px;
            text-align: center;
            color: #9f9f9f;
          }
          input {
            width: 100%;
            height: 50px;
            margin-bottom: 10px;
            border: 1px solid #cdcfd1;
            font-weight: 400;
            font-size: 18px;
            line-height: 27px;
            color: #9f9f9f;
            padding-left: 20px;
          }
        }
      }
    }
    .header-center {
      display: flex;
      justify-content: flex-start;
      input {
        width: 300px;
        height: 40px;
        background: #ebeaea;
        border-radius: 10px;
        border: none;
        padding: 0px 0px 0px 30px;
      }
    }
    .header-right {
      display: flex;
      align-items: center;
      gap: 30px;
      .notification {
        width: 40px;
        height: 40px;
        background: #f2f2f2;
        display: flex;
        justify-content: center;
        padding: 10px;
        border-radius: 20px;
      }
      .profile-icon {
        width: 50px;
        height: 50px;
        background: #c4c4c4;
        display: flex;
        justify-content: center;
        border-radius: 25px;
      }
    }
  }
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
        <div className="product-header">
          <div className="header-left">
            <h3>Products</h3>
            <div className="header-btn">
              <ProductDrawer />
            </div>
          </div>
          <div className="header-center">
            <input
              type="text"
              id="search"
              name="search"
              placeholder="Search anything here"
            />
          </div>
          <div className="header-right">
            <div className="notification">
              <p>
                <IoNotificationsOutline />
              </p>
            </div>
            <div className="profile-icon"></div>
          </div>
        </div>
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
