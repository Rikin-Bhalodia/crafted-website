import React, { useState } from "react";
import styled from "styled-components";
// import Link from "next/link";
// import Image from "next/image";
import DashBoardHead from "./../DashBoardHead";
import { Radio, Table } from "antd";

const OrderWrapper = styled.div``;
const columns = [
  {
    title: "Image",
    dataIndex: "image",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "SKU",
    dataIndex: "sku",
  },
  {
    title: "Size",
    dataIndex: "size",
  },
  {
    title: "Order Date",
    dataIndex: "order-date",
  },
  {
    title: "Expected Dispatch Date",
    dataIndex: "expected-dispatch-date",
  },
];

const rowSelection = {
  getCheckboxProps: (record) => ({
    disabled: record.name === "Disabled User",
    name: record.name,
  }),
};

const Order = () => {
  const [selectionType, setSelectionType] = useState("checkbox");

  return (
    <>
      <OrderWrapper>
        <DashBoardHead name="Order" sec="" />
        <Radio.Group
          onChange={({ target: { value } }) => {
            setSelectionType(value);
          }}
          value={selectionType}
        ></Radio.Group>
        <Table
          rowSelection={{
            type: selectionType,
            ...rowSelection,
          }}
          columns={columns}
          // dataSource={data}
        />
      </OrderWrapper>
    </>
  );
};

export default Order;
