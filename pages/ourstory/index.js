import React from "react";
import styled from "styled-components";
import CommonValue from "../../src/Components/CommonSection/CommonValue";
import CommonHead from "../../src/Components/CommonSection/CommonHeading";
import CommonMain from "../../src/Components/CommonSection/CommonMain";
import CommonImage from "../../src/Components/CommonSection/CommonImage";
import AboutTcomac from "../../src/Components/CommonSection/AboutTcomac";
// import Link from "next/link";
// import Image from "next/image";

const OurStoryWrapper = styled.div``;

const OurStory = () => {
  return (
    <>
      <OurStoryWrapper>
        <CommonHead
          heading="The Crafted Community"
          para="The story of revolutionizing Indian textile industry."
          btn="How it started?"
        />
        <CommonMain
          head="how it started"
          left="It all began with a 3-year-old child observing his age-old family business of garments. "
          righttop="Perhaps the toys didn’t inspire Asif Ahmed Subhani. The business activities, the customers, the problems did."
          rightbottom="Thus began the journey of formal and informal education. Informal education was an inheritance from a well-knit family where moral values, ethics, care and leadership are significantly embedded. The formal education polished these values."
        />
        <CommonImage />
        <AboutTcomac
          shead="About tcomac"
          mhead="The Crafted Online Matching Center"
          para="World’s First Online Matching Center to help Indian women find matching color bottoms and accessories in just a few clicks and get it delivered at their doorstep."
          btn="Visit Our Webapp"
        />
        <CommonValue />
        <AboutTcomac
          shead="OUR TEAM"
          mhead="Experience and integrity by our team"
          para="The right tools wielded by the right people to make anything possible. From year to year we strive to invent the most innovative technology produced by our creative people"
          btn="Meet our team"
          styled={{ marginBottom: "0px" }}
        />
      </OurStoryWrapper>
    </>
  );
};

export default OurStory;