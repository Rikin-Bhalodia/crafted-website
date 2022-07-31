import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "antd/dist/antd.css";

import { Radio, Table } from "antd";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Firebase";

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
    title: "Stock",
    dataIndex: "stock",
  },
  {
    title: "MRP",
    dataIndex: "mrp",
  },
  {
    title: "SalePrice",
    dataIndex: "sale_price",
  },
  {
    title: "Category",
    dataIndex: "category",
  },
  {
    title: "Tags",
    dataIndex: "tags",
  },
  {
    title: "Date",
    dataIndex: "date",
  },
];

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === "Disabled User",
    name: record.name,
  }),
};

const ProductTableWrapper = styled.div``;

const ProductTable = () => {
  const [selectionType, setSelectionType] = useState("checkbox");
  const [products, setProducts] = useState([]);
  const productsCollection = collection(db, "products");

  useEffect(() => {
    const getProducts = async () => {
      const data = await getDocs(productsCollection);
      setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getProducts();
  }, []);

  const data = [];
  {
    products.map((product, i) => {
      const formatDate = (date) => {
        var d = new Date(date),
          month = "" + (d.getMonth() + 1),
          day = "" + d.getDate(),
          year = d.getFullYear();

        if (month.length < 2) month = "0" + month;
        if (day.length < 2) day = "0" + day;

        return [year, month, day].join("-");
      };

      const currentDate = formatDate(new Date());
      return data.push({
        key: i,
        image: <img src={product?.image} alt="image" height={60} width={100} />,
        name: product?.name,
        sku: product?.sku,
        stock: product?.stock,
        mrp: product?.mrp,
        sale_price: product?.sale_price,
        category: product?.category,
        tags: product?.tags,
        date: currentDate,
      });
    });
  }

  return (
    <>
      <ProductTableWrapper>
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
          dataSource={data}
        />
      </ProductTableWrapper>
    </>
  );
};

export default ProductTable;
