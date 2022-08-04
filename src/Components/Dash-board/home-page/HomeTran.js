import React from "react";
import styled from "styled-components";
import Link from "next/link";

const HomeTranWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #ffffff;
  border-radius: 10px;
  padding: 30px 30px 20px;

  .tran-heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 35px;
    h5 {
      font-weight: 700;
      font-size: 20px;
      line-height: 22px;
      color: #333333;
    }
    a {
      font-weight: 600;
      font-size: 14px;
      line-height: 16px;
      color: #5372e7;
    }
  }
  .tran-data {
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    align-items: center;
    margin-bottom: 20px;
    .tran-img {
      width: 50px;
      height: 50px;
      background: #c4c4c4;
      border-radius: 25px;
    }
    .tran-name {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: 10px;
      h5 {
        font-weight: 600;
        font-size: 15px;
        line-height: 16px;
        color: #333333;
        margin-bottom: 0px;
      }
      p {
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        color: #999999;
        margin-bottom: 0px;
      }
    }
    .tran-money {
      display: flex;
      justify-content: flex-end;
      font-weight: 600;
      font-size: 15px;
      line-height: 16px;
      text-align: right;
      color: #5372e7;
    }
  }
`;
const tran = [
  {
    img: "",
    name: "Rishab",
    time: "3 Minutes Ago",
    money: "+$120.00",
  },
  {
    img: "",
    name: "Rishab",
    time: "3 Minutes Ago",
    money: <div style={{ color: "#FF9F24" }}>+$120.00</div>,
  },
  {
    img: "",
    name: "Rishab",
    time: "3 Minutes Ago",
    money: "+$120.00",
  },
  {
    img: "",
    name: "Rishab",
    time: "3 Minutes Ago",
    money: "+$120.00",
  },
  {
    img: "",
    name: "Rishab",
    time: "3 Minutes Ago",
    money: <div style={{ color: "#FF9F24" }}>+$120.00</div>,
  },
];
const HomeTran = () => {
  return (
    <>
      <HomeTranWrapper>
        <div className="tran-heading">
          <h5>Recent Transactions</h5>
          <Link href="/">View all</Link>
        </div>
        {tran.map((data) => {
          return (
            <div className="tran-data">
              <div className="tran-img">{data.img}</div>
              <div className="tran-name">
                <h5>{data.name}</h5>
                <p>{data.time}</p>
              </div>
              <div className="tran-money">{data.money}</div>
            </div>
          );
        })}
      </HomeTranWrapper>
    </>
  );
};

export default HomeTran;
