import React from "react";
import styled from "styled-components";

const BlogHeadingWrapper = styled.div`
  width: 1500px;
  display: flex;
  padding: 0 20px 0 20px;
  justify-content: space-between;
  margin-top: 100px;
  .blog-head {
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
    a {
      position: relative;
      font-weight: 700;
      font-size: 16px;
      text-align: center;
      color: #1565d8;
      border: 1px solid #1565d8;
      border-radius: 4px;
      padding: 6px 24px;
      top: 50px;
      span {
        padding-left: 20px;
        top: 8px;
      }
    }
  }
  @media screen and (max-width: 1400px) {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 20px 0 20px;
    .blog-head {
      p {
        width: 400px;
      }
    }
    .blog-btn {
      padding-right: 20px;
    }
  }
  @media screen and (max-width: 700px) {
    .blog-head {
      p {
        width: 300px;
      }
    }
  }
  @media screen and (max-width: 500px) {
    .blog-head {
      p {
        width: 200px;
      }
    }
  }
`;
const BlogHeading = (props) => {
  return (
    <BlogHeadingWrapper>
      <div className="blog-head">
        <h3>{props.heading}</h3>
        <p>{props.para}</p>
      </div>
      <div className="blog-btn">
        <a href="/">
          View All
          <span>{/* <FiArrowRight /> */}</span>
        </a>
      </div>
    </BlogHeadingWrapper>
  );
};

export default BlogHeading;
