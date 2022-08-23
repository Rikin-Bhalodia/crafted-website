import React from "react";
import styled from "styled-components";
import Blogbox1 from "./Blogbox1";
import Blogbox2 from "./Blogbox2";
import Link from "next/link";
import { blogs } from "../../../src/CommonComponent/blogdata/blogs";

const BlogMain4Wrapper = styled.div`
  width: 100%;
  .blog-head {
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    padding-left: 180px;
    h3 {
      font-weight: 700;
      font-size: 36px;
      line-height: 48px;
      letter-spacing: 0.2px;
      color: #183b56;
    }
    p {
      font-weight: 400;
      font-size: 18px;
      line-height: 32px;
      color: #5a7184;
    }
  }
  .blog-btn {
    text-align: center;
    padding-top: 50px;
    padding-bottom: 30px;
    margin-bottom: 50px;

    a {
      font-weight: 700;
      font-size: 16px;
      line-height: 22px;
      color: #1565d8;
      border: 1px solid #1565d8;
      border-radius: 4px;
      padding: 13px 30px;

      span {
        padding-left: 20px;
        top: 8px;
      }
    }
  }

  @media screen and (max-width: 1400px) {
    .blog-head {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding-left: 0;
      p {
        padding: 0 20px 0 20px;
      }
    }
  }
  @media screen and (max-width: 700px) {
    .blog-head {
      p {
        padding: 0 40px 0 40px;
      }
    }
  }
`;
const BlogMain4 = () => {
  return (
    <BlogMain4Wrapper>
      <div className="blog-head">
        <h3>All Articles</h3>
        <p>
          We share common trends, strategies ideas, opinions, short & long
          stories from the team behind company.
        </p>
      </div>
      <Blogbox1 blogs={blogs} />
      <Blogbox2 blogs={blogs} />
      <div className="blog-btn">
        <Link href="#">More articles</Link>
      </div>
    </BlogMain4Wrapper>
  );
};

export default BlogMain4;
