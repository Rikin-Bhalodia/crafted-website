import React from "react";
import styled from "styled-components";
// import Link from "next/link";
import Image from "next/image";
import value1 from "../../../public/svg/value/value1.svg";
import value2 from "../../../public/svg/value/value2.svg";
import value3 from "../../../public/svg/value/value3.svg";
import value4 from "../../../public/svg/value/value4.svg";

const value = [
  {
    logo: <Image src={value1} alt="icon" />,
    head: "Collaboration",
    para: "Collaboration is the process of two or more people or organizations working together to complete a task or achieve a goal. ",
  },
  {
    logo: <Image src={value2} alt="icon" />,
    head: "Transparency",
    para: "Transparency, as used in science is operating in such a way that it is easy for others to see what actions are performed.",
  },
  {
    logo: <Image src={value3} alt="icon" />,
    head: "Trust",
    para: "Trust will help us foster a positive and productive environment that delivers value to our users and customers.",
  },
  {
    logo: <Image src={value4} alt="icon" />,
    head: "Integrity",
    para: "Integrity is the practice of showing a consistent and uncompromising adherence to strong moral and ethical principles.",
  },
];

const CommonValueWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  padding: 100px;
  justify-content: center;
  align-items: center;
  .value-heading {
    text-align: center;
    h3 {
      font-weight: 400;
      font-size: 36px;
      line-height: 48px;
      text-align: center;
      letter-spacing: 0.2px;
      color: #183b56;
    }
    p {
      font-weight: 400;
      font-size: 24px;
      line-height: 32px;
      text-align: center;
      color: #5a7184;
    }
  }
  .value-section {
    display: grid;
    grid-template-columns: auto auto;
    text-align: center;
    gap: 100px;
    h6 {
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;
      text-align: center;
      letter-spacing: 0.2px;
      color: #183b56;
      margin-bottom: 30px;
    }
    p {
      font-weight: 400;
      font-size: 16px;
      line-height: 28px;
      text-align: center;
      color: #5a7184;
    }
  }
  @media screen and (max-width: 1100px) {
    padding: 50px;
    .value-section {
      gap: 50px;
    }
  }
  @media screen and (max-width: 650px) {
    padding: 30px 0px 50px;
    gap: 50px;
    .value-section {
      grid-template-columns: auto;
      gap: 20px;
      h6 {
        margin-top: 20px;
      }
    }
  }
`;

const CommonValue = () => {
  return (
    <>
      <CommonValueWrapper>
        <div className="value-heading">
          <h3>Our values</h3>
          <p>We strive to redefine the standard of excellence.</p>
        </div>
        <div className="value-section">
          {value.map((data) => {
            return (
              <div className="value-box">
                <div>{data.logo}</div>
                <h6>{data.head}</h6>
                <p>{data.para}</p>
              </div>
            );
          })}
        </div>
      </CommonValueWrapper>
    </>
  );
};

export default CommonValue;
