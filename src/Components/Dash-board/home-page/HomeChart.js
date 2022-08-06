import React from "react";
import styled from "styled-components";
// import Link from 'next/link';
const Chart = dynamic(import("react-apexcharts"), { ssr: false });
import dynamic from "next/dynamic";

import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, Menu, Space } from "antd";

const handleButtonClick = (e) => {
  message.info("Click on left button.");
};

const HomeChartWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #ffffff;
  border-radius: 10px;
  padding: 25px 25px 5px;
  .chart-heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 20px;
    h5 {
      font-weight: 700;
      font-size: 20px;
      line-height: 22px;
      color: #333333;
    }
  }
  .ant-btn {
    border-radius: 10px;
    color: #999999;
  }
`;

const menu = (
  <Menu
    onClick={handleButtonClick}
    items={[
      {
        label: " menu item",
        key: "1",
        icon: "",
      },
      {
        label: " menu item",
        key: "2",
        icon: "",
      },
      {
        label: " menu item",
        key: "3",
        icon: "",
      },
    ]}
  />
);

const HomeChart = () => {
  return (
    <>
      <HomeChartWrapper>
        <div className="chart-heading">
          <h5>Total Sales</h5>
          <Dropdown overlay={menu} trigger={["click"]}>
            <Button>
              <Space>
                Last week
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
        </div>
        <div className="chart">
          <Chart
            type="area"
            width={980}
            height={280}
            series={[
              { name: "Earning", data: [345, 272, 121, 76, 98, 321, 212] },
            ]}
            options={{
              title: {
                // text:"Areachart Github Style",
                style: { fontSize: 20 },
              },
              dataLabels: {
                enabled: false,
              },
              colors: ["#FF9F24"],
              stroke: { width: 3, curve: "smooth" },
              ///fill:{opacity:1, type:'solid'},
              // text:"Commit in Year",
              xaxis: {
                title: {
                  style: { fontSize: 20, color: "#f90000" },
                },
                categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
              },
              yaxis: {
                title: {
                  // text:"No of Commits",
                  style: { fontSize: 20 },
                },
              },
            }}
          ></Chart>
        </div>
      </HomeChartWrapper>
    </>
  );
};

export default HomeChart;
