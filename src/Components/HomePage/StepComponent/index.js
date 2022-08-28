import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Step1 from "/public/svg/step1.svg";
import Step2 from "/public/svg/step2.svg";
import Step3 from "/public/svg/step3.svg";

const StepComponent = styled.div`
  position: relative;

  .step-card {
    font-weight: 400;
    font-size: 28px;
    font-family: "Poppins";
    font-style: normal;
    width: 600px;
    color: #fff;
    position: relative;
    grid-template-rows: auto;
  }
  .data-step {
    position: absolute;
    left: 100px;
    bottom: 110px;
  }
  .data-des {
    position: absolute;
    left: 100px;
    bottom: 60px;
  }
  .heading-title {
    font-weight: 700;
    font-size: 40px;
    text-align: center;
    /* padding-top: 70px; */
  }
  .card {
    display: grid;
    justify-content: center;
    gap: 40px;
    margin-top: 50px;
  }
  .card-detail {
    grid-column: 2/3;
    grid-row: 1/3;
    position: relative;
    width: 600px;
    font-weight: 400;
    font-size: 28px;
    font-family: "Poppins";
    font-style: normal;
    color: #fff;
  }

  @media screen and (max-width: 1150px) {
    padding-bottom: 50px;
    .card-detail {
      grid-row: 3/4;
      grid-column: 1/2;
      width: 100%;
    }
    .card {
      gap: 10px;
      padding: 0px 20px;
    }
    .step-card {
      width: 100%;
    }
    .step-img {
      width: 600px;
    }
  }
  @media screen and (max-width: 700px) {
    .card-detail {
      font-size: 20px;
    }
    .step-card {
      font-size: 20px;
    }
  }
`;

const data = [
  {
    img: Step1,
    step: "Step1",
    des: "Select Product to Match",
  },
  {
    img: Step2,
    step: "Step2",
    des: "Match color with costume",
  },
  {
    img: Step3,
    step: "Step3",
    des: "Get Delivered at your Doorstep.",
  },
];

const MatchComponent = () => {
  return (
    <StepComponent>
      <div className="heading-title">
        Get Matching Color costumes in 3 Easy steps
      </div>
      <div className="card">
        {data.map((data) => {
          return (
            <div
              className={data.step === "Step3" ? "card-detail" : "step-card"}
              key={data.step}
            >
              <Image src={data.img} alt="step-img" className="step-img" />
              <div className="data-step">{data.step}</div>
              <div className="data-des">{data.des}</div>
            </div>
          );
        })}
      </div>
    </StepComponent>
  );
};

export default MatchComponent;
