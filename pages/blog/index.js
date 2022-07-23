import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Verified from "../../public/svg/verified.svg";
import BlogMain4 from "../../src/Components/BlogPage/BlogMain4";
import BlogMain from "../../src/Components/BlogPage/BlogMain";
import BlogMain3 from "../../src/Components/BlogPage/BlogMain3";
import BlogMain2 from "../../src/Components/BlogPage/BlogMain2";
import BlogHeader from "../../src/Components/BlogPage/BlogHeader";

const BlogHeaderBox1Wrapper = styled.div`
  height: 850px;
  .header-box {
    position: relative;
    display: flex;
    justify-content: center;
    bottom: 240px;
    display: flex;
    width: 1500px;
    height: 380px;
    display: flex;
    justify-content: center;
    background: #ffffff;
    border: 1px solid #e5eaf4;
    box-shadow: 0px 10px 35px rgba(0, 0, 0, 0.03);
    border-radius: 16px;

    .header-img {
      width: 50%;
      background: #c4c4c4;
      border-radius: 16px 0px 0px 16px;
      z-index: 2;
    }
    .header-desc {
      width: 50%;
      position: relative;

      .blog-box1-btn {
        padding: 40px 0px 0px;
        position: absolute;
        left: -150px;
        z-index: 1;

        button {
          font-weight: 600;
          font-size: 14px;
          color: #36b37e;
          width: 450px;
          height: 28px;
          padding-left: 120px;
          background: #a8f6d6;
          border: none;
          border-radius: 2000px;
        }
      }
      .blog-bottom1 {
        padding: 80px 0 0 50px;
      }
      .blog-head1 {
        div {
          font-weight: 400;
          color: #183b56;
          font-size: 36px;
        }
        p {
          color: #848484;
          font-weight: 400;
          font-size: 18px;
        }
      }
      .profile-data {
        display: flex;
        justify-content: space-between;
        padding-top: 40px;
      }
      .profile {
        height: 50px;
        width: 60px;
        display: flex;
        background: #cccccc;
        border-radius: 50%;
        margin-right: 15px;
      }
      .name {
        color: #183b56;
        font-weight: 600;
        font-size: 16px;
      }
      .verified {
        font-family: "Open Sans";
        font-style: italic;
        font-weight: 400;
        font-size: 14px;
        color: #5a7184;
        padding-left: 8px;
      }
      .date {
        font-weight: 600;
        font-size: 16px;
        color: #5a7184;
        padding-right: 40px;
      }
    }
  }
  @media screen and (max-width: 1400px) {
    .header-box {
      width: 1000px;
    }
    .header-box .header-desc .blog-head1 div {
      font-size: 28px;
      width: 410px;
    }
    .header-box .header-desc .blog-head1 p {
      font-size: 14px;
      width: 410px;
    }
  }
  @media screen and (max-width: 1000px) {
    .header-box {
      width: 700px;
      height: 500px;
      flex-direction: column;
      .header-img {
        width: 100%;
        height: 50%;
        border-radius: 16px;
      }
      .header-desc {
        width: 100%;
        height: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .blog-bottom1 {
          padding: 20px 0 0 0;
        }
        .blog-head1 div {
          width: 100%;
        }
        .blog-head1 p {
          width: 100%;
        }
        .profile-data {
          padding: 10px 0 0 0;
        }
        .blog-box1-btn {
          left: 0;
          position: unset;
          button {
            width: 200px;
            padding: 0;
          }
        }
      }
    }
  }
  @media screen and (max-width: 700px) {
    .header-box {
      margin: 10px;
      width: 450px;
      bottom: 200px;
      text-align: center;
    }
    .header-box .header-desc {
      .blog-head1 div {
        font-size: 17px;
        width: 100%;
      }
      .blog-head1 p {
        font-size: 14px;
        width: 100%;
      }
      .profile-data {
        padding: 10px 50px 0 50px;
      }
    }
  }
  @media screen and (max-width: 500px) {
    .header-box {
      margin: 10px;
      width: 350px;
      bottom: 200px;
      text-align: center;
    }
    .header-box .header-desc {
      .blog-head1 div {
        font-size: 17px;
        width: 100%;
      }
      .blog-head1 p {
        font-size: 14px;
        width: 100%;
      }
      .profile-data {
        padding: 10px 50px 0 50px;
      }
    }
  }
`;
const BlogHeaderBox1 = () => {
  return (
    <>
      <BlogHeaderBox1Wrapper>
        <BlogHeader />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            alignItems: "center",
          }}
        >
          <div className="header-box">
            <div className="header-img"></div>
            <div className="header-desc">
              <div className="blog-box1-btn">
                <button>FEATURED</button>
              </div>
              <div className="blog-bottom1">
                <div className="blog-head1">
                  <div>Finding matching color petticoat got so Easy</div>
                  <p>
                    In this digital generation where information can be easily
                    obtained within seconds, business cards ...
                  </p>
                </div>
                <div className="profile-data">
                  <div style={{ display: "flex" }}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <div className="name">Viola Manisa</div>
                      <div style={{ display: "flex", margin: "8px 0 0 0" }}>
                        <Image src={Verified} alt="verified" />
                        <div className="verified">Verified writer</div>
                      </div>
                    </div>
                  </div>
                  <div className="date">02 May</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BlogHeaderBox1Wrapper>
      <BlogMain />
      <BlogMain2 />
      <BlogMain3 />
      <BlogMain4 />
    </>
  );
};

export default BlogHeaderBox1;
