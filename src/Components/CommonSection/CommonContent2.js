import React from "react";
import styled from "styled-components";
// import Link from "next/link";
// import Image from "next/image";

const CommonContent2Wrapper = styled.div`
  padding: 50px 200px;
  background: #f9fbfe;
  .content-body {
    display: flex;
    align-items: center;
    gap: 50px;
    .content-img {
      .img {
        width: 700px;
        height: 700px;
        background: #979797;
        border: 10px solid #ffffff;
        border-radius: 8px;
      }
    }
    .content-data {
      h3 {
        font-weight: 700;
        font-size: 48px;
        line-height: 60px;
        letter-spacing: 0.2px;
        color: #183b56;
        margin: 0 0 30px;
      }
      p {
        font-weight: 400;
        font-size: 30px;
        line-height: 40px;
        color: #5a7184;
        margin: 0 0 10px;
      }
    }
  }

  @media screen and (max-width: 1700px) {
    .content-body {
      .content-img {
        .img {
          width: 650px;
          height: 650px;
        }
      }
      .content-data {
        h3 {
          font-size: 38px;
          line-height: 50px;
        }
        p {
          font-size: 25px;
          line-height: 35px;
        }
      }
    }
  }

  @media screen and (max-width: 1500px) {
    padding: 50px 80px;
    .content-body {
      .content-img {
        .img {
          width: 600px;
          height: 600px;
        }
      }
      .content-data {
        h3 {
          font-weight: 700;
          font-size: 48px;
          line-height: 60px;
        }
        p {
          font-size: 25px;
          line-height: 34px;
        }
      }
    }
  }
  @media screen and (max-width: 1480px) {
    .content-body {
      .content-img {
        .img {
          width: 550px;
          height: 550px;
        }
      }
      .content-data {
        p {
          font-size: 28px;
          line-height: 35px;
        }
      }
    }
  }
  @media screen and (max-width: 1300px) {
    .content-body {
      .content-img {
        .img {
          width: 500px;
          height: 500px;
        }
      }
      .content-data {
        p {
          font-size: 22px;
          line-height: 30px;
        }
      }
    }
  }
  @media screen and (max-width: 1150px) {
    .content-body {
      .content-img {
        .img {
          width: 450px;
          height: 450px;
        }
      }
      .content-data {
        h3 {
          font-size: 30px;
          line-height: 40px;
        }
        p {
          font-size: 20px;
          line-height: 27px;
        }
      }
    }
  }
  @media screen and (max-width: 1000px) {
    .content-body {
      flex-direction: column-reverse;
      align-items: center;
      gap: 20px;
      text-align: center;
    }
  }
  @media screen and (max-width: 657px) {
    padding: 30px;
  }
  @media screen and (max-width: 500px) {
    .content-body {
      .content-img {
        .img {
          width: 330px;
          height: 330px;
        }
      }
    }
  }
`;

const CommonContent2 = (props) => {
  return (
    <>
      <CommonContent2Wrapper>
        <div className="content-body">
          <div className="content-data">
            <h3>{props.head}</h3>
            <p>{props.para1}</p>
            <p>{props.para2}</p>
            <p>{props.para3}</p>
          </div>
          <div className="content-img">
            <div className="img"></div>
          </div>
        </div>
      </CommonContent2Wrapper>
    </>
  );
};

export default CommonContent2;
