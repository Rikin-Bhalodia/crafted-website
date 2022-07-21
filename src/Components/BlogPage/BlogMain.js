import React from "react";
import styled from "styled-components";
import Blogbox1 from "./Blogbox1";
import BlogHeading from "./BlogHeading";

const BlogMainWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const BlogHeader = () => {
  return (
    <BlogMainWrapper>
      <BlogHeading
        heading="Popular Articles"
        para="We share common trends, strategies ideas, opinions, short & long stories from the team behind company."
      />
      <Blogbox1 />
    </BlogMainWrapper>
  );
};

export default BlogHeader;
