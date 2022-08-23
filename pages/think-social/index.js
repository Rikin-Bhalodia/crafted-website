import React from "react";
import styled from "styled-components";
import CommonValue from "../../src/Components/CommonSection/CommonValue";
import CommonHead from "../../src/Components/CommonSection/CommonHeading";
import CommonMain from "../../src/Components/CommonSection/CommonMain";
import CommonImage from "../../src/Components/CommonSection/CommonImage";
import AboutTcomac from "../../src/Components/CommonSection/AboutTcomac";
import CommonContent from "../../src/Components/CommonSection/CommonContent";

const ThinkSocialWrapper = styled.div``;

const ThinkSocial = () => {
  return (
    <>
      <ThinkSocialWrapper>
        <CommonHead
          heading="The Crafted Community"
          para="Community of Manufacturers, Sellers, Stitching partners and Customers."
          btn="Read our story"
        />
        <CommonMain
          head="ABOUT the Crafted"
          left="We provide enterprises with innovative technology for small to space enterprises"
          righttop="We supply enterprises, organizations and institutes of high-tech industries with modern components. We build long-term trusting relationships with our customers and partnes for further fruitful cooperations."
          rightbottom="From year to year we strive to invent the most innovative technology that is used by both small enterprises and space enterprises."
        />
        <CommonImage />
        <CommonContent
          content={[
            <>
              <h4>The Crafted Network</h4>
              <p>
                We are not trying to jump to achieve short term goals. We are
                here to expand our network of:
              </p>
              <ul>
                <li>The Crafted Manufactures</li>
                <li>The Crafted Selling Partners</li>
                <li>The Crafted Stitching Partners </li>
                <li>The Crafted Customers</li>
              </ul>
              <p>
                across India. Subsequently, the network will find its way beyond
                the borders.
              </p>
              <p>
                The purpose of our sales network is to make matching colour
                products available within the shortest time span and help
                empower women by making them Earn from the comfort of their
                home.
              </p>
              <h4>Empowering Women</h4>
              <p>
                Our mission includes Empowering women and we are making that
                happen in three ways:
              </p>
              <p>
                1. The Crafted has created a pioneer Online Matching Centre tech
                tool - TCOMaC to help Indian women find matching color bottoms
                and accessories at the comfort of their home in just few clicks
                and get it delivered at the door.
              </p>
              <p>
                2. There are more than 50 women working independently with us.
                They are responsible for stitching women’s garment. These
                skilful women are constantly guided and trained by The Crafted
                to maintain a high standard of quality.
              </p>
              <p>
                2. The Crafted has also come up with unique opportunities for
                Women Entrepreneurs to be the distributors and sellers to
                existing and new female clients. This process makes it easy for
                the buyer and the seller to interact.
              </p>
              <p>
                Both the skilled workers and the entrepreneurs are able to make
                a reasonable amount of money for self-sustenance. The Crafted
                has the necessary infrastructure, human resources, skills and
                technology for organic and inorganic growth.
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
      </ThinkSocialWrapper>
    </>
  );
};

export default ThinkSocial;
