import React, { useState } from "react";

import styled from "styled-components";
import { PlusOutlined } from "@ant-design/icons";
import { Drawer } from "antd";
import { db } from "../../Firebase";
import { Button, Form, Input, Upload, DatePicker, Select } from "antd";
import { addDoc, collection } from "firebase/firestore";
const PrductDrawerWrapper = styled.div`
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
`;
const { Option } = Select;

const PrductDrawer = () => {
  const [visible, setVisible] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const [category, setCategory] = useState();
  const [tag, setTag] = useState();

  const showDrawer = () => {
    setVisible(true);
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
  const productsCollection = collection(db, "products");

  const submitProductDetails = async (values) => {
    console.log(values, "value");
    await addDoc(productsCollection, {
      ...values,
      date: values.date._d,
      image: imageUrl,
      tag: tag,
      category: category,
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
              name="sale price"
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
                <Option value="jackets">Jacket</Option>
                <Option value="shirts">Shirt</Option>
                <Option value="pants">Pants</Option>
                <Option value="skirts">Skirt</Option>
                <Option value="dress">Dress</Option>
                <Option value="underwears">Underwear</Option>
                <Option value="shoes">Shoes</Option>
                <Option value="accesories">Accesories</Option>
              </Select>
            </Form.Item>
            <Form.Item label="Tags">
              <Select
                style={{
                  width: "100%",
                }}
                onChange={handleTagChange}
              >
                <Option value="jackets">Jacket</Option>
                <Option value="shirts">Shirt</Option>
                <Option value="pants">Pants</Option>
                <Option value="skirts">Skirt</Option>
                <Option value="dress">Dress</Option>
                <Option value="underwears">Underwear</Option>
                <Option value="shoes">Shoes</Option>
                <Option value="accesories">Accesories</Option>
              </Select>
            </Form.Item>

            <Form.Item name="date" label="Date">
              <DatePicker />
            </Form.Item>
            <Form.Item>
              <Button type="primary" block htmlType="submit" onClick={onClose}>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Drawer>
        <button>Import</button>
        <button>Export</button>
      </PrductDrawerWrapper>
    </>
  );
};

export default PrductDrawer;
