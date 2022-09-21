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
import Journey from "/public/svg/about-story-community/journey.svg";
import Care from "/public/svg/about-story-community/thecare.svg";
import banner from "/public/svg/main-slider.svg";

const OurStoryWrapper = styled.div``;

const OurStory = () => {
  return (
    <>
      <OurStoryWrapper>
        <CommonHead
          img={banner}
          heading="The Crafted Story"
          para="The story of revolutionizing Indian textile industry."
          btn="Subscribe our Newsletter"
        />
        <CommonMain
          head="how it started"
          left="It all began with a 3-year-old child observing his age-old family business of textiles. "
          rightbottom="Perhaps the toys didn’t inspire Asif Ahmed Subhani. The business activities, the customers, the problems did.
Thus began the journey of formal and informal education. Informal education was an inheritance from a well-knit family where moral values, ethics, care and leadership are significantly embedded. The formal education polished these values.  "
        />
        <CommonContent1
          image={Journey}
          para="The new journey began with the word, “Care” when the founder of “The
            Crafted” Asif Ahmed Subhani realized how his female friends and
            relatives would feel frustrated running around the markets to find a
            colour-matching piece of cloth for their costumes. A postgraduate
            degree in Business Administration from Pune, India helped him to
            look further and see the future. The Crafted came into being in 2018
            on the following Core values:"
        />
        <CommonValue />
        <CommonContent2
          image={Care}
          head="The Care"
          para1="There is just one word that sums up the values and the philosophy
              of The Crafted brand. The word is, “Care”. The “Care” for the
              women instigated us to conduct a survey. One thousand women were
              asked if they felt the need for a platform where they could order
              their favourite colour-matching piece of cloth."
          para2="An overwhelming number of 983 women responded in affirmative. The
              loud and clear answer “yes” triggered the passion to set up an
              e-commerce website and a mobile app to facilitate Indian women to
              order their matching colour cloth material from the comforts of
              their homes. Thus, “The Crafted” came into being. The appreciation
              for the hub called “The Crafted” has been widespread, satisfying
              and growing."
        />
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
