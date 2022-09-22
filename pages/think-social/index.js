import React from "react";
import styled from "styled-components";
import CommonHead from "../../src/Components/CommonSection/CommonHeading";
import CommonMain from "../../src/Components/CommonSection/CommonMain";
import AboutTcomac from "../../src/Components/CommonSection/AboutTcomac";
import CommonContent1 from "../../src/Components/CommonSection/CommonContent1";
import CommonContent2 from "../../src/Components/CommonSection/CommonContent2";
import Color from "/public/svg/about-story-community/color.svg";
import Making from "/public/svg/about-story-community/making.svg";
import Women from "/public/svg/about-story-community/women.svg";
import Banner from "/public/svg/think-social-banner.svg";

const ThinkSocialWrapper = styled.div``;

const ThinkSocial = () => {
  return (
    <>
      <ThinkSocialWrapper>
        <CommonHead
          img={Banner}
          heading="The Crafted Community"
          para="Community of Manufacturers, Sellers, Stitching partners and Customers."
          btn="Join our The Crafted community"
        />
        <CommonMain
          head="The Crafted community"
          left="We are not trying to jump to achieve short term goals. We are here to expand our network of:"
          righttop={[
            <>
              <ul>
                <li>The Crafted Manufactures</li>
                <li>The Crafted Selling Partners</li>
                <li>The Crafted Stitching Partners </li>
                <li>The Crafted Customers</li>
              </ul>
            </>,
          ]}
          rightbottom="across India."
        />
        <CommonContent1
          image={Color}
          para="The purpose of our sales network is to make matching colour products available within the shortest time span and help empower women by making them Earn from the comfort of their home. "
        />
        <CommonContent2
          image={Women}
          head="Empowering women"
          para1="Our mission includes Empowering women and we are making that happen in three ways:"
          para2="1. The Crafted has created a pioneer Online Matching Centre tech tool - TCOMaC to help Indian women find matching color bottoms and accessories at the comfort of their home in just few clicks and get it delivered at the door."
          para3="2. There are more than 50 women working independently with us. They are responsible for stitching women’s garment. These skilful women are constantly guided and trained by The Crafted to maintain a high standard of quality."
        />
        <CommonContent1
          image={Making}
          para="3. The Crafted has also come up with unique opportunities for Women Entrepreneurs to be the distributors and sellers to existing and new female clients. This process makes it easy for the buyer and the seller to interact. "
          para1="Both the skilled workers and the entrepreneurs are able to make a reasonable amount of money for self-sustenance. The Crafted has the necessary infrastructure, human resources, skills and technology for organic and inorganic growth."
        />
        <AboutTcomac
          shead="About tcomac"
          mhead="The Crafted Online Matching Center"
          para="A web app tool to help Indian women find matching color bottom and accessories for their saree and suits and get it delivered at their door step in the shortest period of time passible."
          btn="Visit TCOMaC"
        />
      </ThinkSocialWrapper>
    </>
  );
};

export default ThinkSocial;
