import React from "react";
import styled from "styled-components";
import { AiFillDollarCircle } from "react-icons/ai";
import { IoPeople } from "react-icons/io5";
import { IoWallet } from "react-icons/io5";
import { CgFileDocument } from "react-icons/cg";

const HomeTotalBoxWrapper = styled.div`
  width: 100%;
  height: 100%;
  .div {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 20px;
    .total-data {
      width: 100%;
      height: 100%;
      background: #ffffff;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 20px;
      .up-data {
        display: flex;
        justify-content: space-between;
        div {
          color: #5372e7;
        }
        h4 {
          font-weight: 600;
          font-size: 18px;
          line-height: 17px;
          color: #5372e7;
        }
      }
      .down-data {
        display: flex;
        flex-direction: column;
        gap: 5px;
        h5 {
          font-weight: 700;
          font-size: 18px;
          line-height: 17px;
          color: #333333;
        }
        p {
          font-weight: 400;
          font-size: 14px;
          line-height: 14px;
          color: #999999;
        }
      }
    }
  }
`;
const box = [
  {
    logo: <AiFillDollarCircle size={25} />,
    per: "+24%",
    total: "$ 28,300.00",
    name: "Total Revenue",
  },
  {
    logo: (
      <div style={{ color: "#64C882" }}>
        <IoPeople size={25} />
      </div>
    ),
    per: <div style={{ color: "#64C882" }}>+25%</div>,
    total: "29.289",
    name: "Total Customers",
  },
  {
    logo: (
      <div style={{ color: "#21BDCA" }}>
        <IoWallet size={25} />
      </div>
    ),
    per: <div style={{ color: "#21BDCA" }}>+18%</div>,
    total: "24.683",
    name: "Total Transactions",
  },
  {
    logo: (
      <div style={{ color: "#FF9F24" }}>
        <CgFileDocument size={25} />
      </div>
    ),
    per: <div style={{ color: "#FF9F24" }}>+12%</div>,
    total: "18.289",
    name: "Total Orders",
  },
];
const HomeTotalBox = () => {
  return (
    <>
      <HomeTotalBoxWrapper>
        <div className="div">
          {box.map((data) => {
            return (
              <div className="total-data" key={data.per}>
                <div className="up-data">
                  <div>{data.logo}</div>
                  <h4>{data.per}</h4>
                </div>
                <div className="down-data">
                  <h5>{data.total}</h5>
                  <p>{data.name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </HomeTotalBoxWrapper>
    </>
  );
};

export default HomeTotalBox;
