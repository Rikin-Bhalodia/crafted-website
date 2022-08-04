import React from "react";
import styled from "styled-components";
import Link from "next/link";

import "antd/dist/antd.css";

import { Table } from "antd";
const columns = [
  {
    title: "ID Order",
    dataIndex: "idorder",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Product",
    dataIndex: "product",
  },
  {
    title: "Date",
    dataIndex: "date",
  },
  {
    title: "Tracking",
    dataIndex: "tracking",
  },
  {
    title: "Price",
    dataIndex: "price",
  },
];
const data = [
  {
    key: "1",
    idorder: "#567898",
    name: "ABC",
    product: "Notebook",
    date: "18-09-2018",
    tracking: (
      <div
        style={{
          background: "#E8FFF8",
          borderRadius: "24px",
          color: "#21BDCA",
          padding: "2px 15px",
          width: "90px",
        }}
      >
        Complete
      </div>
    ),
    price: <div style={{ color: "#5372E7" }}>$ 120.00</div>,
  },
  {
    key: "2",
    idorder: "#567898",
    name: "ABC",
    product: "Notebook",
    date: "18-09-2018",
    tracking: (
      <div
        style={{
          background: "#FFEEEE",
          borderRadius: "24px",
          color: "#FF9F24",
          padding: "2px 19px",
          width: "90px",
        }}
      >
        Pending
      </div>
    ),
    price: <div style={{ color: "#5372E7" }}>$ 120.00</div>,
  },
  {
    key: "3",
    idorder: "#567898",
    name: "ABC",
    product: "Notebook",
    date: "18-09-2018",
    tracking: (
      <div
        style={{
          background: "#E8FFF8",
          borderRadius: "24px",
          color: "#21BDCA",
          padding: "2px 15px",
          width: "90px",
        }}
      >
        Complete
      </div>
    ),
    price: <div style={{ color: "#5372E7" }}>$ 120.00</div>,
  },
  {
    key: "4",
    idorder: "#567898",
    name: "ABC",
    product: "Notebook",
    date: "18-09-2018",
    tracking: (
      <div
        style={{
          background: "#FFEEEE",
          borderRadius: "24px",
          color: "#FF9F24",
          padding: "2px 19px",
          width: "90px",
        }}
      >
        Pending
      </div>
    ),
    price: <div style={{ color: "#5372E7" }}>$ 120.00</div>,
  },
  {
    key: "5",
    idorder: "#567898",
    name: "ABC",
    product: "Notebook",
    date: "18-09-2018",
    tracking: (
      <div
        style={{
          background: "#E8FFF8",
          borderRadius: "24px",
          color: "#21BDCA",
          padding: "2px 15px",
          width: "90px",
        }}
      >
        Complete
      </div>
    ),
    price: <div style={{ color: "#5372E7" }}>$ 120.00</div>,
  },
  {
    key: "6",
    idorder: "#567898",
    name: "ABC",
    product: "Notebook",
    date: "18-09-2018",
    tracking: (
      <div
        style={{
          background: "#FFEEEE",
          borderRadius: "24px",
          color: "#FF9F24",
          padding: "2px 19px",
          width: "90px",
        }}
      >
        Pending
      </div>
    ),
    price: <div style={{ color: "#5372E7" }}>$ 120.00</div>,
  },
];

const HomeOrderWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #ffffff;
  border-radius: 10px;
  padding: 20px;
  .order-heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 10px;
    h5 {
      font-weight: 600;
      font-size: 14px;
      line-height: 19px;
      color: #333333;
    }
    a {
      font-weight: 600;
      font-size: 12px;
      line-height: 16px;
      color: #999999;
    }
  }
`;

const HomeOrder = () => {
  return (
    <>
      <HomeOrderWrapper>
        <div className="order-heading">
          <h5>Last Orders</h5>
          <Link href="/">View all</Link>
        </div>
        <Table
          columns={columns}
          dataSource={data}
          size="small"
          pagination={false}
        />
      </HomeOrderWrapper>
    </>
  );
};

export default HomeOrder;
