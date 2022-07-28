import React from 'react';
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import orderImg from "../../../public/svg/order-history/order1.svg";


const MyOrderWrapper = styled.div`
    display: grid;
    gap:20px;
    height: 100%;
    .order-heading {
        height: 100%;
        padding: 20px 60px;
        background: #D9D9D9;
        border: 1px solid #343434;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
        display : flex;
        justify-content:space-between;

        h4 {
            font-weight: 700;
            font-size: 26px;
            line-height: 39px;
            color: #000000;
            margin-bottom: 0px;
        }
        .right-data {
            display : flex;
            gap: 20px;
            align-items: center;
            p {
                font-weight: 400;
                font-size: 20px;
                line-height: 30px;
                color: #000000;
                margin: 4px 0;
            }
            a {
                background: #FBF9F9;
                border: 1px solid #343434;
                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                border-radius: 20px;
                font-weight: 400;
                font-size: 20px;
                color: #000000;
                padding: 0px 30px;
            }
        }
    }
    .order-history-box {
        width: 100%;
        height: 100%;
        border: 1px solid #343434;
        border-radius: 20px ;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

        .history-header {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr 1.5fr;
            background: rgba(217, 217, 217, 0.8);
            border-bottom: 1px solid #343434;
            padding: 20px 50px;
            align-items: center;
            border-radius: 20px 20px 0px 0px;


            div {
                h5 {
                    font-weight: 700;
                    font-size: 16px;
                    line-height: 24px;
                    color: #000000;
                }
                p {
                    font-weight: 400;
                    font-size: 15px;
                    line-height: 22px;
                    color: #000000;
                    margin-bottom: 0px;
                }
            }
        }
        .history-body {
            display : grid;
            grid-template-columns:1fr 3fr 2fr;
            padding: 30px 50px 30px 30px;
            align-items: center;
            width: 100%;
            justify-content: space-evenly;

            .body-left {
                width: 150px;
            }
            .body-center {
                width: 100%;
                display : flex;
                flex-direction: column;
                justify-content: flex-start;
                h6 {
                    font-weight: 400;
                    font-size: 20px;
                    line-height: 27px;
                    color: #000000;
                    margin-bottom: 0px;
                }
                p {
                    font-weight: 400;
                    font-size: 15px;
                    line-height: 22px;
                    color: #000000;
                    margin-bottom: 0px;
                }
            }
            .body-right{
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                gap: 10px;

                a {
                    width: 300px;
                    border: 1px solid #343434;
                    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
                    border-radius: 20px;
                    font-weight: 400;
                    font-size: 15px;
                    line-height: 22px;
                    color: #000000;
                    padding: 6px 0px;
                    text-align: center;
                    
                }
            }
        }
    }

    .more-btn {
        display : flex;
        justify-content: center;
        align-items: center;

        a {
            font-weight: 400;
            font-size: 18px;
            line-height: 27px;
            color: #000000;
            background: #FBF9F9;
            border: 1px solid #343434;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 20px;
            padding: 10px 30px;
            margin: 30px 0px 50px;
        }
    }
    @media screen and (max-width: 1558px){
        .order-history-box {
           .history-header {
            grid-template-columns: 1fr 1fr 1fr;
            gap:20px;
            padding: 30px;

            .grid1{
                grid-area: 1/1/2/2;
            }
            .grid2{
                grid-area: 2/1/3/2;
            }
            .grid3{
                grid-area: 2/2/3/3;
            }
            .grid4{
                grid-area: 2/3/3/4;
            }
            .grid5{
                grid-area: 1/2/2/4;
            }
           } 
           .history-body {
            grid-template-columns:1fr 1fr;
                .body-left {
                    grid-area: 1/1/2/2;
                }
                .body-center {
                    grid-area: 2/1/3/3;
                }
                .body-right {
                    grid-area: 1/2/2/3;
                    width: 100%;
                }
           }
        }
    }
    @media screen and (max-width: 1328px){
        .order-heading {
            flex-direction: column;
            padding: 20px 20px;
        }
    }
    @media screen and (max-width: 1016px){
        .order-history-box {

        .history-body {
            grid-template-columns:1fr 1fr;
                .body-left {
                    grid-area: 1/1/2/2;
                }
                .body-center {
                    grid-area: 2/1/3/3;

                }
                .body-right {
                    grid-area: 1/2/2/3;
                    a {
                        width: 100%;
                    }
                }
           }
        }
    }
       
    @media screen and (max-width: 896px){
        .right-data {
            flex-direction: column;
        }
        .order-history-box {
            height: 100%;
           .history-header {
            grid-template-columns: 1fr .5fr;
            gap:20px;
            padding: 20px;
            .grid1{
                grid-area: 1/1/2/2;
            }
            .grid2{
                grid-area: 1/2/2/3;
            }
            .grid3{
                grid-area: 2/1/3/2;
            }
            .grid4{
                grid-area: 2/2/3/3;
            }
            .grid5{
                grid-area: 3/1/4/3;
            }
           } 
           .history-body {
                padding: 20px;
                .body-left {
                    width: 100px;
                } 
                .body-right {
                    a {
                        font-size: 12px;
                    }
                } 
           }
        }
    }
`;

const history = [
    {
        date:"27th JULY 2022",
        ship1:"XYZ",
        ship2:"XYZ",
        total:"459.00",
        ordernumber:"#1001",
        img:orderImg,
        productName:"The Crafted  Premium Saree Petticoat (Dark Orange) ",
        qty:"1",
        val:"289.00",
        repDate:"4th of August",
    },
    {
        date:"27th JULY 2022",
        ship1:"XYZ",
        ship2:"XYZ",
        total:"459.00",
        ordernumber:"#1001",
        img:orderImg,
        productName:"The Crafted  Premium Saree Petticoat (Dark Orange) ",
        qty:"1",
        val:"289.00",
        repDate:"4th of August",
    }
]

const MyOrder = () => {

  return (
        <>
            <MyOrderWrapper>
                <div className='order-heading'>
                    <h4>My Orders History</h4>
                    <div className='right-data'>
                        <p>2 orders placed in</p>
                        <Link href='#'>past 3 months</Link>
                    </div>
                </div>

                {history.map((data) => {
                    return (
                        <div className='order-history-box'>
                            <div className='history-header'>
                                <div className='grid1'>
                                    <h5>ORDERED DATE</h5>
                                    <p>{data.date}</p>
                                </div>
                                <div className='grid2'>
                                    <h5>SHIP TO</h5>
                                    <p>{data.ship1}</p>
                                </div>
                                <div className='grid3'>
                                    <h5>SHIP TO</h5>
                                    <p>{data.ship2}</p>
                                </div>
                                <div className='grid4'>
                                    <h5>TOTAL</h5>
                                    <p>INR{data.total}</p>
                                </div>
                                <div className='grid5'>
                                    <h5>ORDER{data.ordernumber}</h5>
                                    <p>VIEW ORDER DETAILS &nbsp;&nbsp; | &nbsp; INVOICE</p>
                                </div>
                            </div>
                            <div className='history-body'>
                                <div className='body-left'>
                                    <Image src={data.img} alt='product-image'/>
                                </div>
                                <div className='body-center'>
                                    <h6>{data.productName}</h6>
                                    <p>Qty: {data.qty}</p>
                                    <p>Order Value: INR {data.val}</p>
                                    <p>Replacement may be possible through {data.repDate}</p>
                                </div>
                                <div className='body-right'>
                                    <Link href='#'>Track Package</Link>
                                    <Link href='#'>Write a product review</Link>
                                    <Link href='#'>Return or replace items</Link>
                                    <Link href='#'>Leave delivery feedback</Link>
                                </div>
                            </div>
                        </div>
                    );
                })}
                <div className='more-btn'>
                    <Link href='#'>More Orders</Link>
                </div>
            </MyOrderWrapper>
        </>
    );
};

export default MyOrder;