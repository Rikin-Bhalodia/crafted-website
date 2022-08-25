import React from "react";
import styled from "styled-components";
import BlogHeader from "./../../../src/Components/BlogPage/BlogHeader";
import BlogSecLeft from "./../../../src/Components/Blog-Single-Page/BlogSecLeft";
import BlogSecRight from "./../../../src/Components/Blog-Single-Page/BlogSecRight";
import Blogbox2 from "./../../../src/Components/BlogPage/Blogbox2";
import BlogHeading from "./../../../src/Components/BlogPage/BlogHeading";
import FollowUs from "../../../src/Components/HomePage/FollowUs/FollowusInsta";
import { blogs } from "../../../src/CommonComponent/blogdata/blogs";

const BlogSepPageWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  top: -200px;

  .blog-section {
    padding: 0px 180px;
    display: flex;
    gap: 80px;
    height: 100%;
    width: 100%;

    .blog-sec-left {
      width: 65%;
      height: 100%;
    }

    .blog-sec-right {
      width: 35%;
      height: 100%;
    }
  }

  @media screen and (max-width: 1415px) {
    .blog-section {
      flex-direction: column;
    }

    .blog-sec-left {
      width: 100% !important;
    }

    .blog-sec-right {
      width: 100% !important;
    }
  }

  @media screen and (max-width: 1015px) {
    .blog-section {
      padding: 0px 100px;
    }
  }

  @media screen and (max-width: 815px) {
    .blog-section {
      padding: 0px 50px;
    }
  }

  @media screen and (max-width: 615px) {
    .blog-section {
      padding: 0px 30px;
    }
  }
`;

const BlogSepPage = () => {
  return (
    <>
      <BlogHeader />
      <BlogSepPageWrapper>
        <section className="blog-section">
          <div className="blog-sec-left">
            <BlogSecLeft blogs={blogs} />
          </div>
          <div className="blog-sec-right">
            <BlogSecRight />
          </div>
        </section>
        <BlogHeading
          heading="More Related Articles"
          para="Heres what weve been up to recently."
        />
        <Blogbox2 blogs={blogs} />
        <FollowUs />
      </BlogSepPageWrapper>
    </>
  );
};

export default BlogSepPage;
