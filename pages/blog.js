import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Verified from "/public/svg/verified.svg";
import SearchIcon from "/public/svg/grey-search-icon.svg";
import BlogMain4 from "../src/Components/BlogPage/BlogMain4";
import BlogMain from "../src/Components/BlogPage/BlogMain";
import BlogMain3 from "../src/Components/BlogPage/BlogMain3";
import BlogMain2 from "../src/Components/BlogPage/BlogMain2";
import Link from "next/link";

const BlogHeaderWrapper = styled.div`
  width: 100vw;
  height: 740px;
  background: #b4b3b3;
  position: relative;

  .header-menu {
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: hidden;
    text-align: center;
    top: 119px;

    h2 {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 700;
      font-size: 48px;
      line-height: 60px;
      letter-spacing: 0.2px;
      color: #000000;
    }
    .blog-searchbar {
      position: relative;

      input {
        width: 1240px;
        height: 56px;
        background: #ffffff;
        border-radius: 8px;
        border: none;
        padding-left: 90px;
        font-weight: 600;
        font-size: 16px;
        color: #959ead;
      }
      .search-icon {
        position: absolute !important;
        left: 40px !important;
      }
      .search-btn {
        position: relative;
        right: 110px;
        background: #1565d8;
        border-radius: 8px;
        width: 94px;
        height: 40px;
        font-weight: 700;
        font-size: 16px;
        text-align: center;
        color: #ffffff;
        border: none;
      }
    }
    .blog-tags {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 10px;

      p {
        font-weight: 700;
        font-size: 16px;
        color: #979797;
      }
      .tags {
        margin-left: 50px;

        a {
          color: #979797;
          font-weight: 700;
          font-size: 14px;
          border: 1px solid rgba(0, 0, 0, 0.8);
          border-radius: 4px;
          padding: 6px 24px;
          margin-right: 20px;
        }
      }
    }
  }
  svg {
    position: absolute;
    bottom: -10px;
    width: 100%;
    overflow: hidden;
    path {
      bottom: -10px;
      top: 700px;
      width: 100%;
    }
  }
  .header-box {
    position: absolute;
    display: flex;
    justify-content: center;
    bottom: -90px;
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
    svg {
      bottom: -50px;
    }
    .header-menu .blog-searchbar input {
      width: 700px;
    }
  }
  @media screen and (max-width: 1000px) {
    .header-box {
      width: 700px;
    }
    .header-box .header-desc .blog-head1 div {
      font-size: 24px;
      width: 310px;
    }
    .header-box .header-desc .blog-head1 p {
      font-size: 12px;
      width: 250px;
    }
    svg {
      bottom: -70px;
    }
    .header-menu .blog-searchbar input {
      width: 500px;
      margin-left: 40px;
    }
  }
  @media screen and (max-width: 700px) {
    .header-box {
      width: 450px;
    }
    .header-box .header-desc .blog-head1 div {
      font-size: 20px;
      width: 170px;
    }
    .header-box .header-desc .blog-head1 p {
      font-size: 14px;
      width: 150px;
    }
    .header-box .header-desc .blog-box1-btn {
      padding-top: 20px;
      button {
        padding-left: 160px;
        width: 350px;
      }
    }
    .header-box .header-desc .blog-bottom1 {
      padding-top: 60px;
      padding-left: 25px;
    }
    .header-box .header-desc .profile-data {
      padding: 0px;
    }
    .header-menu .blog-tags {
      flex-direction: column;
      margin-bottom: 20px;
    }
    .header-menu .blog-searchbar input {
      margin: 0px;
    }
  }

  @media screen and (max-width: 600px) {
    .header-menu .blog-searchbar {
      top: -10px;
      .search-btn {
        right: 0;
        left: 200px;
        top: -50px;
      }
    }
    .header-menu .blog-tags {
      position: relative;
      top: -50px;
    }
  }
  @media screen and (max-width: 510px) {
    .header-menu .blog-searchbar {
      input {
        width: 365px;
        padding-left: 40px;
      }
      .search-btn {
        left: 130px;
      }
    }
    .header-menu .blog-tags {
      top: -50px;
      .tags {
        margin: 0;
        display: flex;
        gap: 10px;
        justify-content: center;
        flex-wrap: wrap;
      }
    }
  }
`;
const BlogHeader = () => {
  return (
    <>
      <BlogHeaderWrapper>
        <div className="header-menu">
          <h2>The Crafted Blogs</h2>
          <div className="blog-searchbar">
            <Image src={SearchIcon} alt="search-icon" className="search-icon" />
            <input type="text" placeholder="Search article" />
            <button className="search-btn">Search</button>
          </div>
          <div className="blog-tags">
            <p>Popular Tags :</p>
            <div className="tags">
              <Link href="/">Design</Link>
              <Link href="/">User Experience</Link>
              <Link href="/">User Interfaces</Link>
            </div>
          </div>
        </div>
        <svg
          width="1920"
          height="175"
          viewBox="0 0 1920 175"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1920 175H0V0C320 53.3333 640 80 960 80C1280 80 1600 53.3333 1920 0V175Z"
            fill="white"
          />
        </svg>
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
      </BlogHeaderWrapper>
      <BlogMain />
      <BlogMain2 />
      <BlogMain3 />
      <BlogMain4 />
    </>
  );
};

export default BlogHeader;
