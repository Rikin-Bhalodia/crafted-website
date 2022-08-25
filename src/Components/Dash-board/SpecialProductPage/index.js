import React, { useState } from "react";

import styled from "styled-components";
import { PlusOutlined } from "@ant-design/icons";
import { Drawer } from "antd";
import { db } from "../../../Firebase";
import { Button, Form, Input, Upload, DatePicker, Select } from "antd";
import { addDoc, collection } from "firebase/firestore";
import { SwatchesPicker } from "react-color";
import { Colors } from "../../../CommonComponent/colors";
import SpecialProductTable from "./table";
const PrductDrawerWrapper = styled.div`
  button {
    width: 90px;
    height: 25px;
    border-radius: 20px;
    border: 1px solid #999999;
    padding: 0px 10px;
    margin-right: 10px;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    color: rgba(0, 0, 0, 0.8);
    background: #ffffff;
    cursor: pointer;
  }
`;
const { Option } = Select;

const colors = Colors;
const PrductDrawer = () => {
  const [visible, setVisible] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const [category, setCategory] = useState();
  const [size, setSize] = useState();
  const [colorData, setColorData] = useState([]);
  const [tag, setTag] = useState();

  const showDrawer = () => {
    setVisible(true);
  };
  const handleSizeChange = (value) => {
    setSize(value);
  };
  const onClose = () => {
    setVisible(false);
  };
  const handleSelectChange = (value) => {
    setCategory(value);
  };
  const handleTagChange = (value) => {
    setTag(value);
  };
  const specialProductsCollection = collection(db, "specialProducts");

  const submitProductDetails = async (values) => {
    await addDoc(specialProductsCollection, {
      ...values,
      date: values.date._d,
      image: imageUrl,
      tag: tag,
      category: category,
      size: size,
      color: colorData,
      totalUserItem: 1,
      id: Math.floor(Math.random() * 100),
    });
  };

  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  const handleChange = (info) => {
    getBase64(info.file.originFileObj, (url) => {
      setImageUrl(url);
    });
  };

  return (
    <>
      <PrductDrawerWrapper>
        <button onClick={showDrawer}>Add New</button>
        <SpecialProductTable />
        <Drawer
          title="Add Items"
          placement="right"
          onClose={onClose}
          visible={visible}
        >
          <Form
            autoComplete="off"
            layout="vertical"
            onFinish={submitProductDetails}
          >
            <Form.Item
              label="Upload"
              valuePropName="fileList"
              rules={[
                {
                  required: true,
                  message: "Please enter valid data",
                },
              ]}
            >
              <Upload listType="picture-card" onChange={handleChange}>
                <div>
                  <PlusOutlined />
                  <div style={{ marginTop: 8 }}>Upload</div>
                </div>
              </Upload>
            </Form.Item>
            <Form.Item
              name="name"
              label="Name"
              rules={[
                {
                  required: true,
                  message: "Please enter valid data",
                },
                { whitespace: true },
                { min: 3 },
              ]}
            >
              <Input placeholder="" />
            </Form.Item>
            <Form.Item
              name="sku"
              label="SKU"
              rules={[
                {
                  required: true,
                  message: "Please enter valid data",
                },
                { whitespace: true },
                { min: 3 },
              ]}
            >
              <Input placeholder="" />
            </Form.Item>
            <Form.Item label="Size">
              <Select
                style={{
                  width: "100%",
                }}
                onChange={handleSizeChange}
              >
                <Option value="m">m</Option>
                <Option value="l">l</Option>
                <Option value="xl">xl</Option>
                <Option value="xxl">xxl</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="stock"
              label="Stock"
              rules={[
                {
                  required: true,
                  message: "Please enter valid data",
                },
                { whitespace: true },
                { min: 3 },
              ]}
            >
              <Input placeholder="" />
            </Form.Item>
            <Form.Item
              name="mrp"
              label="MRP"
              rules={[
                {
                  required: true,
                  message: "Please enter valid data",
                },
                { whitespace: true },
                { min: 3 },
              ]}
            >
              <Input placeholder="" />
            </Form.Item>
            <Form.Item
              name="sale_price"
              label="Sale Price"
              rules={[
                {
                  required: true,
                  message: "Please enter valid data",
                },
                { whitespace: true },
                { min: 3 },
              ]}
            >
              <Input placeholder="" />
            </Form.Item>
            <Form.Item label="Categories">
              <Select
                style={{
                  width: "100%",
                }}
                onChange={handleSelectChange}
              >
                <Option value="petticoat">Saree Petticoat</Option>
                <Option value="poplin-cotton">Poplin Cotton Fabric</Option>
                <Option value="patiala">Patiala Salwar</Option>
              </Select>
            </Form.Item>
            <Form.Item label="Tags">
              <Select
                style={{
                  width: "100%",
                }}
                onChange={handleTagChange}
              >
                <Option value="petticoat">Saree Petticoat</Option>
                <Option value="poplin-cotton">Poplin Cotton Fabric</Option>
                <Option value="patiala">Patiala Salwar</Option>
              </Select>
            </Form.Item>

            <Form.Item name="date" label="Date">
              <DatePicker />
            </Form.Item>
            <Form.Item name="color" label="Color">
              <SwatchesPicker
                color={colorData}
                colors={colors}
                onChangeComplete={(color) => {
                  if (colorData.includes(color.hex)) {
                    setColorData((prev) => [...prev]);
                  } else {
                    setColorData((prev) => {
                      return [...prev, color.hex];
                    });
                  }
                }}
              />
            </Form.Item>
            <div
              style={{
                display: "flex",
                width: "100%",
                flexWrap: "wrap",
                gap: "15px",
                margin: "0 0 20px 0",
              }}
            >
              {colorData &&
                colorData?.map((data) => {
                  return (
                    <div
                      style={{
                        background: data,
                        height: "20px",
                        width: "20px",
                      }}
                      key={data}
                    ></div>
                  );
                })}
            </div>
            <Form.Item>
              <Button type="primary" block htmlType="submit" onClick={onClose}>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Drawer>
      </PrductDrawerWrapper>
    </>
  );
};

export default PrductDrawer;
