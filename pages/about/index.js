import React from "react";
import styled from "styled-components";
// import Link from "next/link";
// import Image from "next/image";
import CommonHead from "../../src/Components/CommonSection/CommonHeading";
import CommonMain from "../../src/Components/CommonSection/CommonMain";
import AboutTcomac from "../../src/Components/CommonSection/AboutTcomac";
import CommonContent1 from "../../src/Components/CommonSection/CommonContent1";
import CommonContent2 from "../../src/Components/CommonSection/CommonContent2";

const AboutUsWrapper = styled.div``;

const AboutUs = () => {
  return (
    <>
      <AboutUsWrapper>
        <CommonHead
          heading="Building The Crafted New India"
          para="Revolutionary brand that focuses on Empowering women and Educating Youth."
          btn="Read our story"
        />
        <CommonMain
          head="ABOUT the Crafted"
          left="The Crafted is an Indian revolutionary brand that focuses on Empowering Women, Educating Youth, and Helping in crafting a New India."
          righttop="It is on a mission of enabling social entrepreneurship throughout India by empowering Indian women to work from home and educating youth to become focused and self-reliant."
          rightbottom=""
        />
        <CommonContent1
          head="AI integration with technology"
          para="The management of The Crafted strongly believes in and focuses on skill and technology up-gradation. The process of integration of AI has been set in motion. We expect the AI and technology to make a selection of choosing and buying easy for the shoppers as well as our associates. Our up skilling team is meant to impart necessary training to skilled workers and entrepreneurs at regular intervals. "
        />
        <CommonContent2
          head="Easy color matching  "
          para1="Now you can relax and use the TCOMaC web app by ‘The Crafted’ on your phone to search for the color shade of your choice. The Crafted has developed a TCOMaC web app that makes it a breeze to find the color of your choice to match your apparel. You may need a scarf, a petticoat, a skirt or a pair of trousers to match your saree or any other garment of your choice. "
        />
        <CommonContent1
          head="The Opportunity "
          para="A woman can understand another woman and her needs better. There are those women who can design and stitch according to the exact requirement of a potential customer. Both may be scattered and poles apart. This is why “The Crafted” has come up with a platform where the focus is on Empowering Women. "
          para1="The platform is technology-driven with AI integration to make it convenient for the manufacturer and the buyer to give and take. The women can demonstrate their skills not only to Indian women but to those living across the globe. The Crafted also provides a great opportunity for women entrepreneurs to use their business acumen and show their skills to attract the buyers of their products. "
        />
        <AboutTcomac
          shead="About tcomac"
          mhead="The Crafted Online Matching Center"
          para="A web app tool to help Indian women find matching color bottom and accessories for their saree and suits and get it delivered at their door step in the shortest period of time passible."
          btn="Visit TCOMaC"
        />
      </AboutUsWrapper>
    </>
  );
};

export default AboutUs;
