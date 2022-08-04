import React from "react";
import styled from "styled-components";
// import Link from "next/link";
// import Image from "next/image";
import CommonValue from "../../src/Components/CommonSection/CommonValue";
import CommonHead from "../../src/Components/CommonSection/CommonHeading";
import CommonMain from "../../src/Components/CommonSection/CommonMain";
import CommonImage from "../../src/Components/CommonSection/CommonImage";
import AboutTcomac from "../../src/Components/CommonSection/AboutTcomac";

const AboutUsWrapper = styled.div``;

const AboutUs = () => {
  return (
    <>
      <AboutUsWrapper>
        <CommonHead
          heading="Brand Empowering Women Building The Crafted New India"
          para="From year to year we strive to invent the most innovative technology that is used by both our end customers and retailers."
          btn="Read our story"
        />
        <CommonMain head="ABOUT the Crafted" />
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
      </AboutUsWrapper>
    </>
  );
};

export default AboutUs;
