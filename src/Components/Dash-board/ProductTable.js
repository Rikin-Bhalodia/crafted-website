import React, { useState } from 'react';
import styled from "styled-components";
import 'antd/dist/antd.css';


import { Divider, Radio, Table } from 'antd';







const columns = [
    {
      title: 'Image',
      dataIndex: 'image',
    },
    {
        title: 'Name',
        dataIndex: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'SKU',
        dataIndex: 'sku',
    },
    {
        title: 'Stock',
        dataIndex: 'stock',
    },
    {
        title: 'MRP',
        dataIndex: 'mrp',
    },
    {
        title: 'SalePrice',
        dataIndex: 'saleprice',
    },
    {
        title: 'Category',
        dataIndex: 'category',
    },
    {
        title: 'Tags',
        dataIndex: 'tags',
    },
    {
        title: 'Date',
        dataIndex: 'date',
    },
];

const data = [
    {
    key: '1',
    Image: '',
    name: '',
    SKU: '',
    Stock: '',
    MRP: '',
    SalePrice: '',
    Category: '',
    Tags: '',
    Date: '',
  },
]; // rowSelection object indicates the need for row selection

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === 'Disabled User',
    // Column configuration not to be checked
    name: record.name,
  }),
};


const ProductTableWrapper = styled.div`
    
`;

const ProductTable = () => {
    const [selectionType, setSelectionType] = useState('checkbox');
    return (
        <>
            <ProductTableWrapper>

            
            
            
            <Radio.Group
                onChange={({ target: { value } }) => {
                setSelectionType(value);
                }}
                value={selectionType}
            >
                
            </Radio.Group>

           
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