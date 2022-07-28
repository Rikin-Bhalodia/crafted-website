import React, { useState } from 'react';
import styled from "styled-components";
// import { IoSearchOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { PlusOutlined } from '@ant-design/icons';

import { Breadcrumb } from 'antd';
import ProductDropDown from './ProductDropDown';
import ProductTable from './ProductTable';

import { Drawer } from 'antd';
import { Button, Form, Input,Upload,DatePicker } from 'antd';

const ProductWrapper = styled.div`
    padding-top: 20px;
    .product-header {
        display: flex;
        justify-content: space-between;
        gap:30px;

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
                    background: #FFFFFF;
                }
                .ant-drawer .ant-drawer-right .ant-drawer-open>.ant-drawer-mask>.ant-drawer-content-wrapper>.ant-drawer-content>.ant-drawer-wrapper-body>.ant-drawer-body {
                    label {
                        font-weight: 400;
                        font-size: 18px;
                        line-height: 47px;
                        text-align: center;
                        color: #9F9F9F;
                    }
                    input {
                        width: 100%;
                        height: 50px;
                        margin-bottom: 10px;
                        border: 1px solid #CDCFD1;
                        font-weight: 400;
                        font-size: 18px;
                        line-height: 27px;
                        color: #9F9F9F;
                        padding-left: 20px;
                    }
                }
            }
        }
        .header-center {
            display : flex;
            justify-content: flex-start;
            input {
                width: 300px;
                height: 40px;
                background: #EBEAEA;
                border-radius: 10px;
                border: none;
                padding: 0px 0px 0px 30px;
            }
        }
        .header-right {
            display : flex;
            align-items: center;
            gap: 30px;
            .notification {
                width: 40px;
                height: 40px;
                background: #F2F2F2;
                display : flex;
                justify-content: center;
                padding: 10px;
                border-radius: 20px;
            }
            .profile-icon {
                width: 50px;
                height: 50px;
                background: #C4C4C4;
                display : flex;
                justify-content: center;
                border-radius: 25px;
            }
        }
    }
    .filter-data {
        display : flex;
        gap: 10px;
        margin-bottom: -10px;
    }
`;

const Product = () => {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
      };
    
      const onClose = () => {
        setVisible(false);
      };
    return (
        <>
            <ProductWrapper>
                <div className='product-header'>
                    <div className='header-left'>
                        <h3>Products</h3>
                        <div className='header-btn'>
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
                            
                        </div>
                    </div>
                    <div className='header-center'>
                        <input type="text" id='search' name='search' placeholder='Search anything here'/>
                    </div>
                    <div className='header-right'>
                        <div className='notification'>
                        <p><IoNotificationsOutline/></p>
                        </div>
                        <div className='profile-icon'></div>
                    </div>
                </div>
                <Breadcrumb
                    separator="|"
                        style={{
                        margin: '16px 0',
                        }}
                    >
                    <Breadcrumb.Item>All (05)</Breadcrumb.Item>
                    <Breadcrumb.Item>Published (05)</Breadcrumb.Item>
                    <Breadcrumb.Item>Draft (00)</Breadcrumb.Item>
                </Breadcrumb>
                <ProductDropDown/>
                <ProductTable/>
            </ProductWrapper>
        </>
    );
};

export default Product;