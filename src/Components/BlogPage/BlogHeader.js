import React from "react";
import styled from "styled-components";
import Image from "next/image";
import SearchIcon from "../../../public/svg/grey-search-icon.svg";


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

  @media screen and (max-width: 1400px) {
    svg {
      bottom: -50px;
    }
    .header-menu .blog-searchbar input {
      width: 700px;
    }
  }

  @media screen and (max-width: 1000px) {
    svg {
      bottom: -70px;
    }
    .header-menu .blog-searchbar input {
      width: 500px;
      margin-left: 40px;
    }
  }
  @media screen and (max-width: 1000px) {
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
                <a href="/">Design</a>
                <a href="/">User Experience</a>
                <a href="/">User Interfaces</a>
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
        </BlogHeaderWrapper>
    </>
  );
};

export default BlogHeader;