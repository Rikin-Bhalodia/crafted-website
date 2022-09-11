import React from "react";
import styled from "styled-components";
// import Link from "next/link";
// import Image from "next/image";

const CommonContent1Wrapper = styled.div`
  display: flex;
  padding: 0 200px 30px;
  gap: 50px;
  align-items: center;
  .content-img {
    .img {
      width: 750px;
      height: 750px;
      background: #979797;
      border: 10px solid #ffffff;
      border-radius: 8px;
    }
  }
  .content-data {
    p {
      font-weight: 400;
      font-size: 32px;
      line-height: 46px;
      color: #5a7184;
    }
  }
  @media screen and (max-width: 1700px) {
    .content-img {
      .img {
        width: 650px;
        height: 650px;
      }
    }
    .content-data {
      p {
        font-size: 30px;
        line-height: 40px;
      }
    }
  }

  @media screen and (max-width: 1500px) {
    padding: 0 80px;
    .content-img {
      .img {
        width: 550px;
        height: 550px;
      }
    }
    .content-data {
      p {
        font-size: 25px;
        line-height: 34px;
      }
    }
  }
  @media screen and (max-width: 1440px) {
    .content-img {
      .img {
        width: 600px;
        height: 600px;
      }
    }
    .content-data {
      p {
        font-size: 30px;
        line-height: 40px;
      }
    }
  }
  @media screen and (max-width: 1300px) {
    .content-img {
      .img {
        width: 550px;
        height: 550px;
      }
    }
    .content-data {
      p {
        font-size: 25px;
        line-height: 34px;
      }
    }
  }
  @media screen and (max-width: 1100px) {
    .content-img {
      .img {
        width: 450px;
        height: 450px;
      }
    }
    .content-data {
      p {
        font-size: 22px;
        line-height: 30px;
      }
    }
  }
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    text-align: center;
    gap: 20px;
  }
  @media screen and (max-width: 657px) {
    padding: 0px 30px 0px;
  }
  @media screen and (max-width: 500px) {
    text-align: left;
    .content-img {
      .img {
        width: 330px;
        height: 330px;
      }
    }
  }
`;

const CommonContent1 = () => {
  return (
    <>
      <CommonContent1Wrapper>
        <div className="content-img">
          <div className="img"></div>
        </div>
        <div className="content-data">
          <p>
            The new journey began with the word, “Care” when the founder of “The
            Crafted” Asif Ahmed Subhani realized how his female friends and
            relatives would feel frustrated running around the markets to find a
            colour-matching piece of cloth for their costumes. A postgraduate
            degree in Business Administration from Pune, India helped him to
            look further and see the future. The Crafted came into being in 2018
            on the following Core values:
          </p>
        </div>
      </CommonContent1Wrapper>
    </>
  );
};

export default CommonContent1;
