import React from "react";
import styled from "styled-components";
import CommonValue from "../../src/Components/CommonSection/CommonValue";
import CommonHead from "../../src/Components/CommonSection/CommonHeading";
import CommonMain from "../../src/Components/CommonSection/CommonMain";
import CommonImage from "../../src/Components/CommonSection/CommonImage";
import AboutTcomac from "../../src/Components/CommonSection/AboutTcomac";
import CommonContent from "../../src/Components/CommonSection/CommonContent";

const AboutUsWrapper = styled.div``;

const AboutUs = () => {
  return (
    <AboutUsWrapper>
      <CommonHead
        heading="Brand Empowering Women Building The Crafted New India"
        para="From year to year we strive to invent the most innovative technology that is used by both our end customers and retailers."
        btn="Read our story"
      />
      <CommonMain
        head="ABOUT the Crafted"
        left="We provide enterpriseswith innovative technology for small to space enterprises"
        righttop="The Crafted is an Indian revolutionary brand that focuses on crafting a new India. Founded with the vision of Empower Women, Educate Youth, and Helping in crafting a New India."
        rightbottom="It is on a mission of enabling social entrepreneurship throughout India by empowering Indian women to work from home and educating youth to become focused and self-reliant."
      />
      <CommonImage />
      <CommonContent
        content={[
          <>
            <h4>AI integration with technology</h4>
            <p>
              The management of The Crafted strongly believes in and focuses on
              skill and technology up-gradation. The process of integration of
              AI has been set in motion. We expect the AI and technology to make
              a selection of choosing and buying easy for the shoppers as well
              as our associates. Our upskilling team is meant to impart
              necessary training to skilled workers and entrepreneurs at regular
              intervals.
            </p>
            <h4>Easy colour matching </h4>
            <p>
              Now you can relax and use the TCOMaC web app by ‘The Crafted’ on
              your phone to search for the colour shade of your choice. The
              Crafted has developed a TCOMaC web app that makes it a breeze to
              find the colour of your choice to match your apparel. You may need
              a scarf, a petticoat, a skirt or a pair of trousers to match your
              saree or any other garment of your choice.{" "}
            </p>
            <h4>The Opportunity </h4>
            <p>
              A woman can understand another woman and her needs better. There
              are those women who can design and stitch according to the exact
              requirement of a potential customer. Both may be scattered and
              poles apart. This is why “The Crafted” has come up with a platform
              where the focus is on Empowering Women. The platform is
              technology-driven with AI integration to make it convenient for
              the manufacturer and the buyer to give and take. The women can
              demonstrate their skills not only to Indian women but to those
              living across the globe. The Crafted also provides a great
              opportunity for women entrepreneurs to use their business acumen
              and show their skills to attract the buyers of their products.{" "}
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
    </AboutUsWrapper>
  );
};

export default AboutUs;
