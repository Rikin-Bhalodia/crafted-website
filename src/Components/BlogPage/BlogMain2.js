import React from "react";
import styled from "styled-components";
import Blogbox2 from "./Blogbox2";
import BlogHeading from "./BlogHeading";

const BlogHeader2Wrapper = styled.div`
  /* padding: 0px 200px 100px 200px; */
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const BlogHeader2 = () => {
  return (
    <BlogHeader2Wrapper>
      <BlogHeading
        heading="Recent Articles"
        para="Heres what weve been up to recently."
      />
      <Blogbox2 />
    </BlogHeader2Wrapper>
  );
};

export default BlogHeader2;
