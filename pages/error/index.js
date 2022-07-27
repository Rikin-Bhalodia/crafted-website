import React from 'react';
import styled from "styled-components";
import "antd/dist/antd.css";

import { Breadcrumb } from 'antd';


const ErrorWrapper = styled.div`
    padding:50px 200px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .error-heading{
        text-align: center;

        h3 {
            font-weight: 700;
            font-size: 36px;
            line-height: 54px;
            color: #393D46;
        }
    }

    .error-box {
        padding: 70px 70px;
        width: 730px;
        height: 400px;
        background: #FFFFFF;
        box-shadow: 0px 0px 20px rgba(214, 214, 214, 0.5);
        border-radius: 45px;
        h4 {
            font-weight: 700;
            font-size: 36px;
            line-height: 50px;
            letter-spacing: 1.5px;
            color: #1A1A1A;
            margin-bottom: 50px;
        }
        p {
            font-weight: 400;
            font-size: 16px;
            line-height: 26px;
            letter-spacing: 0.25px;
            color: #595959;
            margin-bottom: 35px;
        }
        button {  
            background: #0764E3;
            border-radius: 8px;
            font-weight: 600;
            font-size: 16px;
            line-height: 20px;
            text-align: center;
            letter-spacing: 0.25px;
            color: #FFFFFF;
            border: none;
            padding: 13px 30px;
            
        }
    }

    @media screen and (max-width:797px){
        padding:50px 70px;
        .error-box {
            width: 100%;
        }
    }
    @media screen and (max-width:697px){
        padding:20px 30px;
        .error-box {
            height: 100%;
            padding: 70px 50px;

        }
    }
    @media screen and (max-width:537px){
        .error-heading {
            h3 {
                font-size: 28px;
            }
        }
        .error-box {
            padding: 30px 30px;

            h4 {
                font-size: 27px;
            }
            p {
                font-size: 16px;
            }
            button {
                font-size: 14px;
                padding: 10px 20px;
            }
        }
    }
`;


const Error = () => {

  return (
    <>
        
    <Breadcrumb separator=">" style={{marginLeft:'120px'}} >
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item>Categories</Breadcrumb.Item>
    </Breadcrumb>
    <ErrorWrapper>
        <div className='error-heading'>
            <h3>Error 404: NOT FOUND</h3>
        </div>
        <div className='error-box'>
            <h4>This is somewhat embarrassing, isn’t it?</h4>
            <p>It looks like nothing was found at this location.</p>
            <button type='button'>Back to home page</button>
        </div>
    </ErrorWrapper>
    </>

    );
};

export default Error;