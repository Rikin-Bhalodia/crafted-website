import React from "react";
import styled from "styled-components";
import CommonValue from "../../src/Components/CommonSection/CommonValue";
import CommonHead from "../../src/Components/CommonSection/CommonHeading";
import CommonMain from "../../src/Components/CommonSection/CommonMain";
import AboutTcomac from "../../src/Components/CommonSection/AboutTcomac";
import CommonContent1 from "../../src/Components/CommonSection/CommonContent1";
import CommonContent2 from "../../src/Components/CommonSection/CommonContent2";
// import Link from "next/link";
// import Image from "next/image";

const OurStoryWrapper = styled.div``;

const OurStory = () => {
  return (
    <>
      <OurStoryWrapper>
        <CommonHead
          heading="The Crafted Story"
          para="The story of revolutionizing Indian textile industry."
          btn="Subscribe our Newsletter"
        />
        <CommonMain
          head="how it started"
          left="It all began with a 3-year-old child observing his age-old family business of garments. "
          righttop="Perhaps the toys didn’t inspire Asif Ahmed Subhani. The business activities, the customers, the problems did.Thus began the journey of formal and informal education."
          rightbottom="Informal education was an inheritance from a well-knit family where moral values, ethics, care and leadership are significantly embedded. The formal education polished these values."
        />
        <CommonContent1 />
        <CommonValue />
        <CommonContent2 />
        <AboutTcomac
          shead="About tcomac"
          mhead="The Crafted Online Matching Centre"
          para="A web app tool to help Indian women find matching color bottom and accessories for their saree and suits and get it delivered at their door step in the shortest period of time passible."
          btn="Visit TCOMaC"
        />
      </OurStoryWrapper>
    </>
  );
};

export default OurStory;
