import React from "react";
import styled from "styled-components";

const ChooseUsWrapper = styled.div`
  background: #f3f4f6;
  display: flex;
  justify-content: flex-end;
  text-align: right;
  align-items: flex-start;
  gap: 100px;
  padding: 100px 150px;
  .choose-data {
    width: 100%;
    p {
      font-size: 16px;
      line-height: 28px;
      text-align: right;
      color: #fd346e;
      margin: 0px;
    }
    h4 {
      font-weight: 400;
      font-size: 48px;
      line-height: 62px;
      text-align: right;
      letter-spacing: -1px;
      color: #262729;
      margin: 21px 0px 30px;
    }
    .line1 {
      display: inline-grid;
      width: 40%;
      border-bottom: 1px solid #fd346e;
    }
    .para {
      font-weight: 400;
      font-size: 18px;
      line-height: 32px;
      text-align: right;
      color: #262729;
      opacity: 0.7;
      margin: 30px 0px 80px;
    }
    .counter-data {
      display: grid;
      grid-template-columns: 1fr 0.1fr 1fr 0.1fr 1fr;

      .data {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        .number {
          font-size: 32px;
          line-height: 42px;
          color: #fd346e;
          display: flex;
          align-items: center;
        }
        .name {
          font-weight: 400;
          font-size: 18px;
          line-height: 32px;
          text-align: center;
          color: #262729;
          opacity: 0.7;
          width: 90%;
        }
      }
      .line2 {
        margin-top: 15px;
        width: 1px;
        height: 60px;
        margin-left: 8px;
        border-left: 1px solid #fd346e;
      }
    }
  }
  .choose-video {
    width: 100%;

    div {
      width: 650px;
      height: 530px;
      background: #c4c4c4;
      border-radius: 15px;
    }
  }

  @media screen and (max-width: 1571px) {
    .choose-video {
      width: 100%;
      div {
        width: 100%;
      }
    }
  }
  @media screen and (max-width: 1440px) {
    padding: 80px;
    gap: 50px;
  }
  @media screen and (max-width: 1240px) {
    gap: 20px;
    flex-direction: column;
  }
  @media screen and (max-width: 686px) {
    padding: 50px 30px;
    .choose-data {
      width: 100%;
      h4 {
        font-size: 38px;
        line-height: 52px;
      }
      .para {
        margin: 30px 0px 50px;
      }
      .counter-data {
        display: grid;
        grid-template-columns: 1fr 0.1fr 1fr 0.1fr 1fr;

        .data {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          .number {
            font-size: 30px;
          }
          .name {
            font-size: 16px;
            line-height: 25px;
            width: 100%;
          }
        }
        .line2 {
          height: 100px;
        }
      }
    }
    .choose-video {
      width: 100%;
      div {
        width: 100%;
        height: 350px;
      }
    }
  }
`;

const ChooseUs = () => {
  return (
    <>
      <ChooseUsWrapper>
        <div className="choose-data">
          <p>Why Choose Us</p>
          <h4>We are in the business of helping you grow yours</h4>
          <div className="line1"></div>
          <p className="para">
            Stay up to date with Google company news and products. Discover
            stories about our culture, philosophy, and how Google technology is
            impacting others.
          </p>
          <div className="counter-data">
            <div className="data">
              <div className="number">576</div>
              <div className="name">Successful projects done</div>
            </div>
            <div className="line2"></div>
            <div className="data">
              <div className="number">93%</div>
              <div className="name">Increased conversion rate</div>
            </div>
            <div className="line2"></div>
            <div className="data">
              <div className="number">300+</div>
              <div className="name">Returning Happy customer</div>
            </div>
          </div>
        </div>
        <div className="choose-video">
          <div></div>
        </div>
      </ChooseUsWrapper>
    </>
  );
};

export default ChooseUs;
