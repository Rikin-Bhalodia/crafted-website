import React, { useState } from "react";
import styled from "styled-components";
// import Image from "next/image";
// import logo from "./../../public/svg/dashboard/logo.svg";
import "antd/dist/antd.css";
import { BsFillGridFill } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { CgFileDocument } from "react-icons/cg";
import { BsPeople } from "react-icons/bs";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { BsQuestionCircle } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { TbLogout } from "react-icons/tb";

import { Layout, Menu } from "antd";
import Product from "../../src/Components/Dash-board/Product";
import Home from "../../src/Components/Dash-board/home-page/Home";
import Order from "../../src/Components/Dash-board/OrderPage/Order";
import SpecialProduct from "../../src/Components/Dash-board/SpecialProductPage";
const { Content, Sider } = Layout;

const items = [
  {
    name: "Home",
    key: "1",
    icon: <BsFillGridFill />,
  },
  {
    name: "Products",
    key: "2",
    icon: <HiOutlineShoppingBag />,
  },
  {
    name: "SpecialProducts",
    key: "3",
    icon: <HiOutlineShoppingBag />,
  },
  {
    name: "Orders",
    key: "4",
    icon: <CgFileDocument />,
  },
  {
    name: "Customers",
    key: "5",
    icon: <BsPeople />,
  },
  {
    name: "Feedback",
    key: "6",
    icon: <BiMessageRoundedDetail />,
  },
  {
    name: "Blog",
    key: "7",
    icon: <BsQuestionCircle />,
  },
  {
    name: "Settings",
    key: "8",
    icon: <IoSettingsOutline />,
  },
  {
    name: "Logout",
    key: "9",
    icon: <TbLogout />,
  },
];

const DashBoardWrapper = styled.div`
  .ant-layout {
    background-color: #f6fbf4;
  }
  .logo {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 40px;
    margin-top: 30px;
    div {
      height: 40px;
      width: 40px;
      border-radius: 20px;
      background: #5372e7;
      h3 {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #ffffff;
        font-weight: 400;
        font-size: 20px;
      }
    }
    h3 {
      margin-top: 10px;
      font-weight: 700;
      font-size: 16px;
      line-height: 22px;
      color: #333333;
    }
  }
  .ant-menu .ant-menu-root .ant-menu-inline .ant-menu-light {
    width: 100%;
    .ant-menu-item .ant-menu-item-active .ant-menu-item-selected {
      margin-top: 100%;
    }
  }
`;

const DashBoard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [key, setKey] = useState("1");

  const handleClick = (key) => {
    if (key) {
      setKey(key);
    }
  };
  return (
    <>
      <DashBoardWrapper>
        <Layout
          style={{
            minHeight: "100vh",
          }}
        >
          <Sider
            theme="light"
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
          >
            <div className="logo" style={{ padding: "20px" }}>
              <div>
                <h3>TC</h3>
              </div>
              <h3>The Crafted</h3>
            </div>
            <Menu theme="light" mode="inline">
              {items.map((data) => {
                return (
                  <Menu.Item onClick={() => handleClick(data.key)}>
                    {data.icon}&nbsp;&nbsp;&nbsp;
                    {data.name}
                  </Menu.Item>
                );
              })}
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Content
              style={{
                margin: "0 16px",
              }}
            >
              <div
                className="site-layout-background"
                style={{
                  padding: 24,
                  minHeight: 360,
                }}
              >
                {key === "1" && <Home />}
                {key === "2" && <Product />}
                {key === "3" && <SpecialProduct />}
                {key === "4" && <Order />}
              </div>
            </Content>
          </Layout>
        </Layout>
      </DashBoardWrapper>
    </>
  );
};

export default DashBoard;
