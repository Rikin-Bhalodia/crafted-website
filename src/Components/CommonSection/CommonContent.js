import React from "react";
import styled from "styled-components";

const CommonContentWrapper = styled.div`
  padding: 0px 200px 50px;

  .content {
    h4 {
      font-weight: 700;
      font-size: 36px;
      line-height: 48px;
      letter-spacing: 0.2px;
      color: #183b56;
      width: 85%;
      margin: 0px;
    }
    p {
      font-weight: 400;
      font-size: 18px;
      line-height: 32px;
      color: #183b56;
    }
    ul {
      li {
        font-size: 20px;
        color: #183b56;
      }
    }
  }
  @media screen and (max-width: 1440px) {
    padding: 0px 80px 50px;
  }

  @media screen and (max-width: 657px) {
    padding: 0px 30px 30px;
    .content {
      h4 {
        font-weight: 500;
        font-size: 26px;
        line-height: 38px;
      }
      p {
        font-weight: 400;
        font-size: 15px;
        line-height: 28px;
      }
      ul {
        li {
          font-size: 15px;
        }
      }
    }
  }
`;

const CommonContent = (props) => {
  return (
    <>
      <CommonContentWrapper>
        <div className="content">{props.content}</div>
      </CommonContentWrapper>
    </>
  );
};

export default CommonContent;
