import React from "react";
import styled from "styled-components";
import CommonValue from "../../src/Components/CommonSection/CommonValue";
import CommonHead from "../../src/Components/CommonSection/CommonHeading";
import CommonMain from "../../src/Components/CommonSection/CommonMain";
import CommonImage from "../../src/Components/CommonSection/CommonImage";
import AboutTcomac from "../../src/Components/CommonSection/AboutTcomac";
import CommonContent from "../../src/Components/CommonSection/CommonContent";
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
          righttop="Perhaps the toys didn’t inspire Asif Ahmed Subhani. The business activities, the customers, the problems did.Thus began the journey of formal and informal education."
          rightbottom="Informal education was an inheritance from a well-knit family where moral values, ethics, care and leadership are significantly embedded. The formal education polished these values."
        />
        <CommonImage />
        <CommonContent
          content={[
            <>
              <p>
                It all began with a 3-year-old child observing his age-old
                family business of garments. Perhaps the toys didn’t inspire
                Asif Ahmed Subhani. The business activities, the customers, the
                problems did. Thus began the journey of formal and informal
                education. Informal education was an inheritance from a
                well-knit family where moral values, ethics, care and leadership
                are significantly embedded. The formal education polished these
                values of Asif Ahmed.{" "}
              </p>
              <p>
                The new journey began with the word, “care” when the founder of
                “The Crafted” Asif Ahmed Subhani realized how his female friends
                and relatives would feel frustrated running around the markets
                to find a colour-matching piece of cloth for their costumes. A
                postgraduate degree in Business Administration from Pune, India
                helped him to look further and see the future. The Crafted came
                into being in 2018 on the following Core values:
              </p>
              <ul>
                <li>Women’s empowerment</li>
                <li>Passion</li>
                <li>Inspiration</li>
                <li>Leadership</li>
              </ul>
              <h4>The Care</h4>
              <p>
                There is just one word that sums up the values and the
                philosophy of The Crafted brand. The word is, “Care”. The “Care”
                for the women instigated us to conduct a survey. One thousand
                women were asked if they felt the need for a platform where they
                could order their favourite colour-matching piece of cloth. An
                overwhelming number of 983 women responded in affirmative. The
                loud and clear answer “yes” triggered the passion to set up an
                e-commerce website and a mobile app to facilitate Indian women
                to order their matching colour cloth material from the comforts
                of their homes. Thus, “The Crafted” came into being. The
                appreciation for the hub called “The Crafted” has been
                widespread, satisfying and growing.{" "}
              </p>
            </>,
          ]}
        />
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
