import React from "react";
import styled from "styled-components";
import Blogbox1 from "./Blogbox1";
import BlogHeading from "./BlogHeading";
import { blogs } from "../../../src/CommonComponent/blogdata/blogs";

const BlogMainWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1000px) {
    position: relative;
    top: 100px;
  }
`;
const BlogHeader = () => {
  return (
    <BlogMainWrapper>
      <BlogHeading
        heading="Popular Articles"
        para="We share common trends, strategies ideas, opinions, short & long stories from the team behind company."
      />
      <Blogbox1 blogs={blogs} />
    </BlogMainWrapper>
  );
};

export default BlogHeader;
