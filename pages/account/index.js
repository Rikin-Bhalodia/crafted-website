import React, { useCallback, useEffect, useMemo, useState } from "react";
import "antd/dist/antd.css";
import styled from "styled-components";
import { Tabs } from "antd";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Breadcrumb } from "antd";
import MyOrder from "../../src/Components/order-history-page/MyOrder";
import { useAuth } from "../../src/auth/AuthContext";
import { useRouter } from "next/router";

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
        background: #d9d9d9;
        border: 1px solid #343434;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
        display: flex;
      }
      .account-data {
        display: grid;
        grid-template-columns: 1fr 1fr 0.3fr 0.3fr;
        justify-content: space-between;
        align-items: center;
        border: 1px solid #343434;
        margin: 30px 0px;
        padding: 15px 60px;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        border-radius: 20px;

        h5 {
          font-weight: 700;
          font-size: 24px;
          color: #000000;
          margin: 0px;
        }

        p {
          font-weight: 400;
          font-size: 20px;
          line-height: 30px;
          color: #000000;
          margin: 0px;
        }
        input {
          width: 200px;
          height: 36px;
          font-size: 20px;
          border: 0px solid black;
          border-radius: 5px;
          padding: 0px 10px;
        }

        div {
          font-weight: 500;
          font-size: 24px;
          color: #1565d8;
          display: flex;
          justify-content: flex-end;
          grid-area: 1/4/2/5;
        }
        .btn {
          grid-area: 1/3/2/4;
        }
      }
    }
  }
  .ant-tabs > .ant-tabs-nav .ant-tabs-nav-list,
  .ant-tabs > div > .ant-tabs-nav .ant-tabs-nav-list {
    padding: 20px 20px 0px 0px;
    align-items: flex-end;
    gap: 20px;
  }
  .ant-tabs-tab-btn {
    font-weight: 700;
    font-size: 20px;
  }

  @media screen and (max-width: 1047px) {
    padding: 50px 50px 50px !important;
    .tabs {
      .tabpane {
        margin-right: 10px !important;

        h3,
        .account-data {
          padding: 20px;

          p,
          input {
            font-size: 20px;
            display: grid;
            justify-content: flex-start;
            grid-area: 1/2/2/5;
          }

          div {
            font-size: 24px;
            grid-area: 3/4/4/5;
          }
          .btn {
            grid-area: 3/3/4/4;
            justify-content: center;
          }
        }
      }
    }
  }
  @media screen and (max-width: 869px) {
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

          p,
          input {
            font-size: 20px;
            display: grid;
            justify-content: flex-start;
            grid-area: 2/1/3/4;
          }

          div {
            font-size: 24px;
            grid-area: 3/1/4/2;
            justify-content: flex-start;
          }
          .btn {
            grid-area: 3/3/4/4;
          }
        }
      }
    }
    .ant-tabs-tab-btn {
      font-weight: 600;
      font-size: 17px;
    }
  }

  @media screen and (max-width: 747px) {
    height: 100%;

    padding: 20px 20px 20px !important;
    .tabs {
      height: 100%;
      .tabpane {
        margin-right: 10px !important;

        .account-data {
          grid-template-columns: 1fr;
          grid-template-rows: 1fr 1fr;
        }
      }
    }
    .ant-tabs > .ant-tabs-nav .ant-tabs-nav-list,
    .ant-tabs > div > .ant-tabs-nav .ant-tabs-nav-list {
    }
    .ant-tabs {
      flex-direction: column;
    }
    .ant-tabs > .ant-tabs-nav .ant-tabs-nav-list,
    .ant-tabs > div > .ant-tabs-nav .ant-tabs-nav-list {
      flex-direction: row;
      padding: 10px 10px 30px 0px;
      gap: 0px;
      justify-content: center;
    }
    .ant-tabs-left > .ant-tabs-nav .ant-tabs-ink-bar,
    .ant-tabs-left > div > .ant-tabs-nav .ant-tabs-ink-bar {
      display: none;
    }
  }
  @media screen and (max-width: 577px) {
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

const AccountDetails = () => {
  const [tabPosition] = useState("left");
  const { currentUser, updateUserEmail, updateUserDisplayName } = useAuth();
  const [accountData, setAccountData] = useState({
    displayName: "",
    email: "",
    password: "",
    birthdate: "",
  });
  const [user, setUser] = useState();
  const [id, setId] = useState();
  const router = useRouter();

  const handleClick = (id) => {
    setId(id);
    if (id === "2") {
      toast("if you want to change email you must be login again !!!");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAccountData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleAdd = async () => {
    if (id === "1") {
      if (accountData.displayName) {
        await updateUserDisplayName(accountData.displayName);
      }
      setId("");
    }
    if (id === "2") {
      if (accountData.email) {
        await updateUserEmail(accountData.email);
        router.push("/login");
      }
      setId("");
    }
  };

  const handleCancel = () => {
    if (id) {
      setId("");
    }
  };
  return (
    <>
      <Breadcrumb separator=">" style={{ marginLeft: "120px" }}>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item>Contact us</Breadcrumb.Item>
      </Breadcrumb>
      <AccountDetailsWrapper>
        <h2>My Account Page</h2>
        <Tabs tabPosition={tabPosition} className="tabs">
          <TabPane tab="Account Information" key="1" className="tabpane">
            <h3>My Profile</h3>
            <div className="account-data">
              <h5>Name:</h5>
              {id && id === "1" ? (
                <input
                  placeholder="enter your name"
                  name="displayName"
                  value={accountData.displayName}
                  onChange={handleChange}
                />
              ) : (
                <p>{currentUser?.displayName}</p>
              )}
              {id && id === "1" ? (
                <div onClick={(e) => handleAdd(e)}>Add</div>
              ) : (
                <div onClick={() => handleClick("1")}>Edit</div>
              )}
            </div>
            <div className="account-data">
              <h5>Email:</h5>
              {id && id === "2" ? (
                <input
                  placeholder="enter your email"
                  name="email"
                  value={accountData.email}
                  onChange={handleChange}
                />
              ) : (
                <p>{currentUser?.email}</p>
              )}
              {id && id === "2" ? (
                <>
                  <div onClick={(e) => handleAdd(e)}>Add</div>
                  <div className="btn" onClick={() => handleCancel()}>
                    Cancel
                  </div>
                </>
              ) : (
                <div onClick={() => handleClick("2")}>Change</div>
              )}
            </div>
            <div className="account-data">
              <h5>Password:</h5>
              <p>ABC@123</p>
              <div onClick={() => handleClick("3")}>Reset</div>
            </div>
            <div className="account-data">
              <h5>Birthday:</h5>
              <p>1st Jan 2020</p>
              <div onClick={() => handleClick("4")}>Update</div>
            </div>
          </TabPane>
          <TabPane tab="My Order History" key="2" className="tabpane">
            <MyOrder />
          </TabPane>
        </Tabs>
      </AccountDetailsWrapper>
      <ToastContainer />
    </>
  );
};

export default AccountDetails;
