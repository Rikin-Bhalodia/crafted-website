import React from "react";
import styled from "styled-components";

import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Dropdown, Menu, message, Space } from "antd";

const handleButtonClick = (e) => {
  message.info("Click on left button.");
  console.log("click left button", e);
};

const menu = (
  <Menu
    onClick={handleButtonClick}
    items={[
      {
        label: "1st menu item",
        key: "1",
        icon: "<UserOutlined />",
      },
      {
        label: "2nd menu item",
        key: "2",
        icon: "<UserOutlined />",
      },
      {
        label: "3rd menu item",
        key: "3",
        icon: "<UserOutlined />",
      },
    ]}
  />
);

const ProductDropDownWrapper = styled.div``;

const ProductDropDown = () => {
  return (
    <>
      <ProductDropDownWrapper>
        <div className="filter-data">
          <Dropdown overlay={menu} trigger={["click"]}>
            <Button>
              <Space>
                Bulk Action
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
          <Dropdown overlay={menu} trigger={["click"]}>
            <Button>
              <Space>Apply</Space>
            </Button>
          </Dropdown>
          <Dropdown overlay={menu} trigger={["click"]}>
            <Button>
              <Space>
                Select Catagory
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
          <Dropdown overlay={menu} trigger={["click"]}>
            <Button>
              <Space>
                Filter by stock status
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
          <Dropdown overlay={menu} trigger={["click"]}>
            <Button>
              <Space>Filter</Space>
            </Button>
          </Dropdown>
        </div>
      </ProductDropDownWrapper>
    </>
  );
};

export default ProductDropDown;
