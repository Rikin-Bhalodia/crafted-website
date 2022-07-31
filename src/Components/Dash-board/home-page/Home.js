import React from 'react';
import styled from "styled-components";
import { IoNotificationsOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import HomeTotalBox from './HomeTotalBoxs';
import HomeChart from './HomeChart';
import HomeOrder from './HomeOrder';
import HomeTran from './HomeTran';
import HomeStac from './HomeStac';

const HomeHeadingWrapper = styled.div`
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
            .header-date {
                font-style: normal;
                font-weight: 400;
                font-size: 12px;
                line-height: 16px;
                color: #999999;                
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
    .body-section {
        display: grid;
        gap: 30px;
        grid-template-columns: 1.8fr 1fr;
        width: 100%;
        height: 120vh;
        padding: 30px 0px;
        .body-left {
            width: 100%;
            height: 100%;
            display: grid;
            grid-template-rows: 1fr 2fr 2fr;
            gap: 30px;
        }
        .body-right {
            width: 100%;
            height: 100%;   
            display: grid;
            grid-template-rows: 1fr 1fr;
            gap: 30px;
            margin-right: 30px;

        }
    }
`;

const HomeHeading = () => {

    return (
        <>
            <HomeHeadingWrapper>
                <div className='product-header'>
                    <div className='header-left'>
                        <h3>Dashboard</h3>
                        <div className='header-date'>
                            Tuesday, 29 March 2022 
                        </div>
                    </div>
                    <div className='header-center'>
                        <FiSearch /><input type="text" id='search' name='search' placeholder='Search anything here'/>
                    </div>
                    <div className='header-right'>
                        <div className='notification'>
                        <p><IoNotificationsOutline/></p>
                        </div>
                        <div className='profile-icon'></div>
                    </div>
                </div>

                <div className="body-section">
                    <div className='body-left'>
                        <HomeTotalBox/>
                        <HomeChart/>
                        <HomeOrder/>
                    </div>
                    <div className='body-right'>
                        <HomeTran/>
                        <HomeStac/>
                    </div>
                </div>
            </HomeHeadingWrapper>
        </>
    );
};

export default HomeHeading;