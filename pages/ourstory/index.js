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
          para="Community of Manufacturers, Sellers, Stitching partners and Customers."
          btn="Read our story"
        />
        <CommonMain />
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
