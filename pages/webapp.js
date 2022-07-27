import React from "react";
import styled from "styled-components";
import Footer from "../src/CommonComponent/Footer/FooterContact";
import "antd/dist/antd.css";

import { Breadcrumb } from 'antd';


const WebAppWrapper = styled.div`
  .section {
    display: flex;
    justify-content: space-around;
  }
  .heading-section {
    font-weight: 700;
    font-size: 30px;
    text-align: center;
    margin-top: 20px;
  }
  .label {
    display: flex;
    font-weight: 400;
    font-size: 16px;
    padding-left: 50px;
    margin-bottom: 10px;
    margin-top: 20px;
  }
  .label2 {
    font-weight: 700;
    font-size: 16px;
    text-align: center;
    margin-top: 20px;

    padding-bottom: 20px;
    span {
      font-weight: 400;
    }
  }
  select {
    background: #d9d9d9;
    border-radius: 25px;
    border: none;
    width: 100px;
    font-weight: 700;
    height: 30px;
    text-align: center;
    margin-left: 25px;
  }
  .match-color-box {
    background: #efefef;
    mix-blend-mode: normal;
    border: 1px solid #000000;
    border-radius: 45px;
    height: 550px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 650px;
  }
  .color-shade {
    width: 500px;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 20px;
    text-align: center;
    color: #ffffff;
  }
  .red-shade {
    background: #ff0000;
    border: 1px solid #000000;
    width: 20%;
    height: 100%;
  }
  .orange-shade {
    background: #ff9f24;
    width: 20%;
    height: 100%;
    border: 1px solid #000000;
    border-left: none;
  }
  .blue-shade {
    background: #1565d8;
    width: 20%;
    height: 100%;
    border: 1px solid #000000;
    border-left: none;
    border-right: none;
  }
  .pink-shade {
    background: #fc5ad8;
    border: 1px solid #000000;
    width: 40%;
    height: 100%;
  }
  .btn {
    display: flex;
    justify-content: space-between;
    width: 500px;
  }
  .button-add {
    background: #d9d9d9;
    border: 1px solid #000000;
    border-radius: 45px;
    height: 60px;
    font-weight: 400;
    font-size: 24px;
    width: 200px;
    margin-top: 30px;
  }
  .container {
    display: flex;
    flex-wrap: wrap;
    overflow: auto;
    height: 100%;
    width: 100%;
    gap: 15px;
    margin: 20px 0 20px 0;
    justify-content: center;
  }
  .box-container {
    overflow: auto;
  }
  .box {
    width: 130px;
    height: 70px;
    background: #d9d9d9;
    border: 1px solid #000000;
    border-radius: 30px;
    display: flex;
  }
  @media screen and (max-width: 1400px) {
    .match-color-box {
      width: 500px;
      height: 500px;
    }
    .color-shade {
      width: 450px;
      height: 350px;
    }
    .btn {
      width: 450px;
    }
    .box {
      width: 100px;
    }
  }
  @media screen and (max-width: 1100px) {
    .match-color-box {
      width: 400px;
      height: 400px;
    }
    .color-shade {
      width: 350px;
      height: 250px;
    }
    .btn {
      width: 350px;
    }
    .box {
      width: 80px;
    }
    .label {
      margin-bottom: 30px;
    }
    .label2 {
      width: 400px;
    }
  }
  @media screen and (max-width: 800px) {
    .section {
      flex-direction: column;
      align-items: center;
    }
  }
  @media screen and (max-width: 400px) {
    .match-color-box {
      width: 350px;
      height: 400px;
    }
    .color-shade {
      width: 250px;
      height: 250px;
    }
    .btn {
      width: 300px;
    }
    .box {
      width: 75px;
    }
    .button-add {
      height: 40px;
      width: 120px;
      font-size: 20px;
    }
    .label2 {
      width: 350px;
    }
  }
`;

const WebApp = () => {
  return (
    <>
    <Breadcrumb separator=">" style={{marginLeft:'120px'}} >
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item>TCOMaC</Breadcrumb.Item>
    </Breadcrumb>
      <WebAppWrapper>
        <div>
          <div className="heading-section">
            TCOMaC - The Crafted Online Matching Center
          </div>
          <div className="section">
            <section>
              <div className="label">
                <div>Select a Product</div>
                <select>
                  <option>Petticoat</option>
                  <option>hello</option>
                  <option>hello</option>
                  <option>hello</option>
                  <option>hello</option>
                </select>
              </div>
              <div className="match-color-box">
                <div className="color-shade">
                  <div className="red-shade">Image 1</div>
                  <div className="orange-shade">Image 2</div>
                  <div className="blue-shade">Image 3</div>
                  <div className="pink-shade">Image 4</div>
                </div>
                <div className="btn">
                  <button className="button-add">Add to Cart</button>
                  <button className="button-add">Buy Now</button>
                </div>
              </div>
            </section>
            <section>
              <div className="label2">
                Choose your desired colors -{" "}
                <span>max upto 4 colors for discounted price </span>
              </div>
              <div className="match-color-box">
                <div className="container">
                  {[
                    1,
                    2,
                    1,
                    1,
                    1,
                    1,
                    1,
                    ,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    ,
                    1,
                    1,
                    1,
                    1,
                    ,
                    11,
                    1,
                    1,
                    ,
                    11,
                    1,
                    1,
                    1,
                    ,
                    ,
                    1,
                    ,
                    1,
                    1,
                    1,
                    1,
                    1,
                    ,
                    1,
                    1,
                    1,
                    ,
                    1,
                    ,
                    1,
                    1,
                    1,
                    1,
                    1,
                    ,
                    1,
                  ].map((_) => {
                    return (
                      <div className="box-container">
                        <div className="box"></div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          </div>
        </div>
      </WebAppWrapper>
      <Footer />
    </>
  );
};

export default WebApp;
