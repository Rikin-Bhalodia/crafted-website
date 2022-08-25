import React from "react";
import styled from "styled-components";
import Link from "next/link";
const BlogHeadingWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 0 130px;
  justify-content: center;
  margin-top: 100px;
  .blog-head {
    width: 100%;
    h3 {
      font-weight: 700;
      font-size: 36px;
      line-height: 48px;
      color: #183b56;
    }
    p {
      font-weight: 400;
      font-size: 18px;
      color: #5a7184;
    }
  }

  .blog-btn {
    position: relative;
    font-weight: 700;
    font-size: 16px;
    text-align: center;
    color: #1565d8;
    border: 1px solid #1565d8;
    border-radius: 4px;
    padding: 6px 24px;
    top: 50px;
    height: 40px;
    width: 150px;
    span {
      padding-left: 20px;
      top: 8px;
    }
  }
  @media screen and (max-width: 1400px) {
    width: 100%;
    padding: 0 20px 0 20px;
    .blog-head {
      p {
        width: 100%;
      }
    }
    .blog-btn {
      padding-right: 20px;
    }
  }
  @media screen and (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 20px;
    .blog-head {
      p {
        width: 100%;
      }
    }
    .blog-btn {
      top: 0px;
    }
  }
  @media screen and (max-width: 500px) {
  }
`;
const BlogHeading = (props) => {
  return (
    <BlogHeadingWrapper>
      <div className="blog-head">
        <h3>{props.heading}</h3>
        <p>{props.para}</p>
      </div>
      <Link href="/blog">
        <div className="blog-btn" style={{ cursor: "pointer" }}>
          View All
        </div>
      </Link>
    </BlogHeadingWrapper>
  );
};

export default BlogHeading;
