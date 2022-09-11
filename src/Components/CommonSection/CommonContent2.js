import React from "react";
import styled from "styled-components";
// import Link from "next/link";
// import Image from "next/image";

const CommonContent2Wrapper = styled.div`
  padding: 0 200px 30px;
  .content-head {
    h3 {
      font-weight: 700;
      font-size: 48px;
      line-height: 60px;
      letter-spacing: 0.2px;
      color: #183b56;
      margin: 0 0 30px;
    }
  }
  .content-body {
    display: flex;
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
    .content-head {
      h3 {
        font-size: 38px;
        line-height: 50px;
      }
    }
    .content-body {
      .content-img {
        .img {
          width: 650px;
          height: 650px;
        }
      }
      .content-data {
        p {
          font-size: 25px;
          line-height: 35px;
        }
      }
    }
  }

  @media screen and (max-width: 1500px) {
    padding: 0 80px;
    .content-head {
      h3 {
        font-weight: 700;
        font-size: 48px;
        line-height: 60px;
      }
    }
    .content-body {
      .content-img {
        .img {
          width: 600px;
          height: 600px;
        }
      }
      .content-data {
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
    .content-head {
      h3 {
        font-size: 30px;
        line-height: 40px;
      }
    }
    .content-body {
      .content-img {
        .img {
          width: 450px;
          height: 450px;
        }
      }
      .content-data {
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
    }
  }
  @media screen and (max-width: 657px) {
    padding: 0px 30px 0px;
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

const CommonContent2 = () => {
  return (
    <>
      <CommonContent2Wrapper>
        <div className="content-head">
          <h3>The Care</h3>
        </div>
        <div className="content-body">
          <div className="content-data">
            <p>
              There is just one word that sums up the values and the philosophy
              of The Crafted brand. The word is, “Care”. The “Care” for the
              women instigated us to conduct a survey. One thousand women were
              asked if they felt the need for a platform where they could order
              their favourite colour-matching piece of cloth.
            </p>
            <p>
              An overwhelming number of 983 women responded in affirmative. The
              loud and clear answer “yes” triggered the passion to set up an
              e-commerce website and a mobile app to facilitate Indian women to
              order their matching colour cloth material from the comforts of
              their homes. Thus, “The Crafted” came into being. The appreciation
              for the hub called “The Crafted” has been widespread, satisfying
              and growing.
            </p>
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
