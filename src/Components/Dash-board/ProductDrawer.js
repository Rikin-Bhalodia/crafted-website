import React, { useState } from 'react';

import styled from "styled-components";
import { PlusOutlined } from '@ant-design/icons';
import { Drawer } from 'antd';
import { Button, Form, Input,Upload,DatePicker } from 'antd';
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
                    background: #FFFFFF;
                }
`;

const PrductDrawer = () => {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
      };
    
      const onClose = () => {
        setVisible(false);
      };
    return (
        <>
            <PrductDrawerWrapper>
            <button onClick={showDrawer}>Add New</button>
                <Drawer title="Add Items" placement="right" onClose={onClose} visible={visible}>
                    <Form autoComplete='off' layout='vertical' onFinish={(values) => {console.log({values})}}>
                        <Form.Item label="Upload" valuePropName="fileList"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please enter valid data',
                                },]}
                        >
                            <Upload action="/upload.do" listType="picture-card">
                            <div>
                                <PlusOutlined />
                                <div style={{ marginTop: 8 }}>Upload</div>
                            </div>
                            </Upload>
                        </Form.Item>
                        <Form.Item
                            name='name'
                            label="Name"
                            rules={[
                            {
                                required: true,
                                message: 'Please enter valid data',
                            },
                            { whitespace : true },
                            { min : 3 },
                            ]}
                        >
                        <Input placeholder="" />
                        </Form.Item>
                        <Form.Item
                            name='sku'
                            label="SKU"
                            rules={[
                            {
                                required: true,
                                message: 'Please enter valid data',
                            },
                            { whitespace : true },
                            { min : 3 },
                            ]}
                        >
                        <Input placeholder="" />
                        </Form.Item>
                        <Form.Item
                            name='stock'
                            label="Stock"
                            rules={[
                            {
                                required: true,
                                message: 'Please enter valid data',
                            },
                            { whitespace : true },
                            { min : 3 },
                            ]}
                        >
                        <Input placeholder="" />
                        </Form.Item>
                        <Form.Item
                            name='mrp'
                            label="MRP"
                            rules={[
                            {
                                required: true,
                                message: 'Please enter valid data',
                            },
                            { whitespace : true },
                            { min : 3 },
                            ]}
                        >
                        <Input placeholder="" />
                        </Form.Item>
                        <Form.Item
                            name='sale price'
                            label="Sale Price"
                            rules={[
                            {
                                required: true,
                                message: 'Please enter valid data',
                            },
                            { whitespace : true },
                            { min : 3 },
                            ]}
                        >
                        <Input placeholder="" />
                        </Form.Item>
                        <Form.Item
                            name='category'
                            label="Category"
                            rules={[
                            {
                                required: true,
                                message: 'Please enter valid data',
                            },
                            { whitespace : true },
                            { min : 3 },
                            ]}
                        >
                        <Input placeholder="" />
                        </Form.Item>
                        <Form.Item
                            name='tags'
                            label="Tags"
                            rules={[
                            {
                                required: true,
                                message: 'Please enter valid data',
                            },
                            { whitespace : true },
                            { min : 3 },
                            ]}
                        >
                        <Input placeholder="" />
                        </Form.Item>
                        <Form.Item
                            name='date'
                            label="Date"
                            rules={[
                            {
                                required: true,
                                message: 'Please enter valid data',
                            },
                            { whitespace : true },
                            { min : 3 },
                            ]}
                        >
                        <DatePicker />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" block htmlType='submit'>
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