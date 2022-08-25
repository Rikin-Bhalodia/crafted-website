import React from "react";
import styled from "styled-components";
import Link from "next/link";

const ResetWrapper = styled.div`
  padding: 50px 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .reset-heading {
    width: 100vw;
    text-align: center;
    margin-right: 110px;
    h3 {
      width: 100%;
      font-weight: 700;
      font-size: 36px;
      line-height: 54px;
      color: #393d46;
    }
  }
  .reset-area {
    width: 550px;
    height: 100%;
    padding: 70px;
    box-shadow: 0px 0px 20px rgba(214, 214, 214, 0.5);
    border-radius: 45px;
    h4 {
      font-weight: 700;
      font-size: 30px;
      letter-spacing: 0.5px;
      color: #1a1a1a;
      margin: 0px 0px 30px;
    }
    label {
      font-weight: 400;
      font-size: 18px;
      line-height: 27px;
      color: #626262;
    }
    input {
      margin-top: 10px;
      width: 100%;
      height: 50px;
      margin-bottom: 10px;
      border: 1px solid #cdcfd1;
      font-weight: 400;
      font-size: 18px;
      line-height: 27px;
      color: #9f9f9f;
      padding-left: 20px;
      border-radius: 8px;
    }
    p {
      font-weight: 400;
      font-size: 14px;
      /* line-height: 26px; */
      letter-spacing: 0.25px;
      color: #595959;
      margin-top: 0px;
      margin-bottom: 40px;
    }
    a {
      font-weight: 600;
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      color: #ffffff;
      background: #333333;
      border-radius: 8px;
      border: none;
      padding: 10px 50px;
    }
  }
  @media screen and (max-width: 800px) {
    padding: 50px 50px;
  }
  @media screen and (max-width: 600px) {
    padding: 20px 30px;
    width: 100%;
    .reset-heading {
      width: 100%;
      margin-right: 0px;
    }
    .reset-area {
      width: 100%;
      padding: 40px;
    }
  }
`;

const Reset = () => {
  return (
    <ResetWrapper>
      <div className="reset-heading">
        <h3>Reset Password</h3>
      </div>
      <div className="reset-area">
        <h4>Create your new password</h4>
        <label htmlFor="npassword">New Password:</label>
        <br />
        <input type="password" id="npassword" name="npassword" />
        <br />

        <label htmlFor="cpassword">Confirm Passwordl:</label>
        <br />
        <input
          type="password"
          id="cpassword"
          name="cpassword"
          style={{ marginBottom: "30px" }}
        />
        <br />
        <Link href="#">Reset Password</Link>
      </div>
    </ResetWrapper>
  );
};

export default Reset;
