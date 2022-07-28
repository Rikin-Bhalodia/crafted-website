import React, { useState } from 'react';
import styled from "styled-components";
// import Image from "next/image";
// import logo from "./../../public/svg/dashboard/logo.svg";
import 'antd/dist/antd.css';
import { BsFillGridFill } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { CgFileDocument } from "react-icons/cg";
import { BsPeople } from "react-icons/bs";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { BsQuestionCircle } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { TbLogout } from "react-icons/tb";

import { Layout, Menu } from 'antd';
import Product from '../../src/Components/Dash-board/Product';

const { Content, Sider } = Layout;

function getItem(label, key, icon, children) {
return {
    key,
    icon,
    children,
    label,
};
}


  
const items = [
    getItem('Home', '1',<BsFillGridFill/>),
    getItem('Products', '2',<HiOutlineShoppingBag/> ),
    getItem('Orders', '3',<CgFileDocument/> ),
    getItem('Customers', '4',<BsPeople/> ),
    getItem('Feedback', '5',<BiMessageRoundedDetail/> ),
    getItem('Blog', '6',<BsQuestionCircle/> ),
    getItem('Settings', '7',<IoSettingsOutline/> ),
    getItem('Logout', '10',<TbLogout/> ),
];

const DashBoardWrapper = styled.div`
.ant-layout{
    background-color: #F6FBF4;
}
    .logo {
        display : flex;
        align-items: center;
        gap:10px;
        margin-bottom: 40px;
        margin-top: 30px;
        div {
            height: 40px;
            width: 40px;
            border-radius:20px;
            background: #5372E7;
            h3 {
                display : flex;
                justify-content: center;
                align-items: center;
                color:#FFFFFF;
                font-weight: 400;
                font-size: 20px;
            }
        }
        h3 {
            margin-top: 10px;
            font-weight: 700;
            font-size: 16px;
            line-height: 22px;
            color: #333333;
        }
    }
    .ant-menu .ant-menu-root .ant-menu-inline .ant-menu-light {
        width: 100%;
        .ant-menu-item .ant-menu-item-active .ant-menu-item-selected {
            margin-top: 100%;
        }
    }
`;



const DashBoard = () => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <>
            <DashBoardWrapper>
            
            <Layout
                style={{
                    minHeight: '100vh',
                }}
                >
                <Sider theme="light"sss collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                    <div className='logo' style={{padding:'20px'}}>
                        <div><h3>TC</h3></div>
                        <h3>The Crafted</h3>
                    </div>
                    <Menu theme="light" defaultSelectedKeys={['1']} mode="inline" items={items} />
                </Sider>
                <Layout className="site-layout">
                    <Content
                    style={{
                        margin: '0 16px',
                    }}
                    >
                    
                    <div
                        className="site-layout-background"
                        style={{
                        padding: 24,
                        minHeight: 360,
                        }}
                    >
                        <Product/>
                    </div>
                    </Content>
                    
                </Layout>
                </Layout>
            </DashBoardWrapper>
        </>
    );
};

export default DashBoard;