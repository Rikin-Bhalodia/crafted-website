import React, { useState } from 'react';
import "antd/dist/antd.css";
import styled from "styled-components";
import { Tabs } from 'antd';
import Link from "next/link";
import { Breadcrumb } from 'antd';

const { TabPane } = Tabs;



const AccountDetailsWrapper = styled.div`
    padding: 50px 100px 100px;
    h2 {
        font-weight: 700;
        font-size: 36px;
        line-height: 54px;
        color: #000000;
        width: 100%;
        text-align: center;
        padding-bottom: 20px;
    }

    .tabs {   
        color: #000000;
        height: 550px;

        .tabpane {
            margin-left: 50px;
            padding-right: 100px;
            h3 {
                font-weight: 700;
                font-size: 36px;
                line-height: 54px;
                color: #000000;
                padding: 20px 60px;
                margin-bottom: 0px;
                background: #D9D9D9;
                border: 1px solid #343434;
                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                border-radius: 20px;
                display : flex;
            }
            .account-data {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                justify-content: space-between;
                align-items: center;
                border: 1px solid #343434;
                margin: 30px 0px;
                padding: 20px 60px;
                filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
                border-radius: 20px;
                /* height: 120px; */

                h5 {
                    font-weight: 700;
                    font-size: 24px;
                    /* line-height: 36px; */
                    color: #000000;
                }

                p {
                    font-weight: 400;
                    font-size: 20px;
                    line-height: 30px;
                    color: #000000;
                    
                }

                a {
                    font-weight: 500;
                    font-size: 24px;
                    /* line-height: 36px; */
                    color: #1565D8;
                    display : flex;
                    justify-content: flex-end;
                }
            }
        }
    }
    .ant-tabs > .ant-tabs-nav .ant-tabs-nav-list, .ant-tabs > div > .ant-tabs-nav .ant-tabs-nav-list {
        padding: 20px 20px 0px 0px;
        align-items: flex-end;
        gap:20px;
    }
    .ant-tabs-tab-btn {
        font-weight: 700;
        font-size: 20px;
    }

    @media screen and (max-width: 1047px){
        padding: 50px 50px 50px !important;
        .tabs {   
            .tabpane {
                margin-right: 10px !important;

                h3,.account-data {
                    padding: 20px;
                }
            }
        }
    }
    @media screen and (max-width: 869px){
        .tabs {   
            .tabpane {
                h3 {
                    font-size: 25px !important;
                }
                .account-data {

                    h5 {
                        font-weight: 600;
                        font-size: 24px;
                    }

                    p {
                        font-size: 20px;
                        display : grid;
                        justify-content: flex-start;
                        grid-area: 2/1/3/4;
                    }

                    a {
                        font-size: 24px;
                        grid-area: 1/3/2/4;

                    }
                }
            }
        }
        .ant-tabs-tab-btn {
            font-weight: 600;
            font-size: 17px;
        }
    }

    @media screen and (max-width: 747px){
        padding: 20px 20px 20px !important;
        .tabs {   
            height: 100%;
            .tabpane {
                margin-right: 10px !important;

                .account-data {
                    grid-template-columns: 1fr;
                    grid-template-rows: 1fr 1fr ;

                   
                }
            }
        }
        .ant-tabs {
            flex-direction: column;
        }
        .ant-tabs > .ant-tabs-nav .ant-tabs-nav-list, .ant-tabs > div > .ant-tabs-nav .ant-tabs-nav-list {
        padding: 10px 20px 0px 0px;
        gap:10px;
    }
    }
    @media screen and (max-width: 577px){
        padding: 20px 0px 20px !important;

        .tabs {   
            height: 100%;
            .tabpane {
                margin-left: 10px !important;
                margin-right: 0px !important;
                padding-right: 50px;
            }
        }
        
    }

`;

const account = [
    {
        heading: "Name:",
        text: "ABC",
    },
    {
        heading: "Email:",
        text: "ABC@gmail.com",
    },
    {
        heading: "Password:",
        text: "ABC@123",
    },
    {
        heading: "Birthday:",
        text: "1st Jan 2020",
    },
];


const AccountDetails = () => {
    const [tabPosition] = useState('left');

  return (
    <>
    <Breadcrumb separator=">" style={{marginLeft:'120px'}} >
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item>Contact us</Breadcrumb.Item>
    </Breadcrumb>
    <AccountDetailsWrapper>
        <h2>My Profile</h2>
        <Tabs tabPosition={tabPosition} className='tabs'>
            <TabPane tab="Account Information" key="1" className='tabpane'>
                <h3>My Profile</h3>
                {account.map((data) => {
                    return (
                        <div className='account-data'>
                            <h5>{data.heading}</h5>
                            <p>{data.text}</p>
                            <Link href='#'>Edit</Link>
                        </div>
                    );
                })}
            </TabPane>
            <TabPane tab="My Order History" key="2" className='tabpane'>
                <h3>My Orders History</h3>
            </TabPane>
      </Tabs>
    </AccountDetailsWrapper>
    </>
  );
};

export default AccountDetails;


