import React from "react";
import styled from "styled-components";
import { IoNotificationsOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";

const HomeHeadingWrapper = styled.div`
  .product-header {
    display: flex;
    justify-content: space-between;
    gap: 30px;

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
      display: flex;
      justify-content: flex-start;
      input {
        width: 300px;
        height: 40px;
        background: #ebeaea;
        border-radius: 10px;
        border: none;
        padding: 0px 0px 0px 40px;
      }
    }
    .header-right {
      display: flex;
      align-items: center;
      gap: 30px;
      .notification {
        width: 40px;
        height: 40px;
        background: #f2f2f2;
        display: flex;
        justify-content: center;
        padding: 10px;
        border-radius: 20px;
      }
      .profile-icon {
        width: 50px;
        height: 50px;
        background: #c4c4c4;
        display: flex;
        justify-content: center;
        border-radius: 25px;
      }
    }
  }
`;

const HomeHeading = (data) => {
  return (
    <>
      <HomeHeadingWrapper>
        <div className="product-header">
          <div className="header-left">
            <h3>{data.name}</h3>
            <div className="header-date">{data.sec}</div>
          </div>
          <div className="header-center" style={{ position: "relative" }}>
            <FiSearch
              style={{ position: "relative", left: "29px", bottom: "-14px" }}
            />
            <input
              type="text"
              id="search"
              name="search"
              placeholder="Search anything here"
            />
          </div>
          <div className="header-right">
            <div className="notification">
              <p>
                <IoNotificationsOutline />
              </p>
            </div>
            <div className="profile-icon"></div>
          </div>
        </div>
      </HomeHeadingWrapper>
    </>
  );
};

export default HomeHeading;
