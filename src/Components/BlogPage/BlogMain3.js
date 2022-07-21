import React from "react";
import styled from "styled-components";
import HomeBlogSlider from "../../CommonComponent/Swiper/HomeBlogSlider";

const BlogMain3Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 200px;
`;
const BlogMain3 = () => {
  return (
    <BlogMain3Wrapper>
      <HomeBlogSlider />
    </BlogMain3Wrapper>
  );
};

export default BlogMain3;
