import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Step1 from "/public/svg/step1.svg";
import Step2 from "/public/svg/step2.svg";
import Step3 from "/public/svg/step3.svg";
console.log(Step1.src, "kkkkkkkkkkkk");
const StepComponent = styled.div`
  padding: 0px 200px;
  .heading-title {
    font-weight: 700;
    font-size: 40px;
    text-align: center;
    padding-top: 70px;
  }
  .card-area {
    display: flex;
    justify-content: center;
    gap: 30px;
    padding: 50px 0px;
    .left-side-area {
      display: flex;
      flex-direction: column;
      gap: 30px;

      .card-1,
      .card-2 {
        position: relative;
        width: 700px;
        height: 350px;
        background: #f6f7fb;
        box-shadow: 0px 16px 50px rgba(0, 0, 0, 0.1);
        border-radius: 45px;
        .step-img {
          position: absolute;
          right: 30px;
          top: 20px;
        }
        .text {
          position: absolute;
          bottom: 30px;
          left: 50px;
          p {
            font-weight: 400;
            font-size: 36px;
            color: #000000;
            margin: 5px;
          }
          h4 {
            font-weight: 500;
            font-size: 36px;
            color: #000000;
            margin: 0;
          }
        }
      }
    }
    .right-side-area {
      .card-3 {
        position: relative;
        width: 700px;
        height: 730px;
        background: #f6f7fb;
        box-shadow: 0px 16px 50px rgba(0, 0, 0, 0.1);
        border-radius: 45px;
        .step-img {
          position: absolute;
          right: 100px;
          top: 100px;
        }
        .text {
          position: absolute;
          bottom: 30px;
          left: 50px;
          p {
            font-weight: 400;
            font-size: 36px;
            color: #000000;
            margin: 0;
          }
          h4 {
            font-weight: 500;
            font-size: 36px;
            color: #000000;
            margin: 0;
          }
        }
      }
    }
  }
  @media screen and (max-width: 1700px) {
    .card-area {
      .left-side-area {
        .card-1,
        .card-2 {
          width: 600px;
          height: 300px;
          .step-img {
            img {
              width: 230px;
            }
          }
          .text {
            p {
              font-size: 28px;
            }
            h4 {
              font-size: 30px;
            }
          }
        }
      }
      .right-side-area {
        .card-3 {
          width: 600px;
          height: 630px;
          .step-img {
            img {
              width: 430px;
            }
          }
          .text {
            p {
              font-size: 28px;
            }
            h4 {
              font-size: 30px;
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 1320px) {
    .heading-title {
      font-weight: 700;
      font-size: 30px;
    }
    .card-area {
      .left-side-area {
        .card-1,
        .card-2 {
          width: 500px;
          height: 250px;
          .step-img {
            img {
              width: 180px;
            }
          }
          .text {
            p {
              font-size: 25px;
            }
            h4 {
              font-size: 28px;
            }
          }
        }
      }
      .right-side-area {
        .card-3 {
          width: 500px;
          height: 530px;
          .step-img {
            img {
              width: 300px;
            }
          }
          .text {
            p {
              font-size: 25px;
            }
            h4 {
              font-size: 28px;
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 1070px) {
    padding: 0px 150px;
    .card-area {
      flex-direction: column;
      .left-side-area {
        .card-1,
        .card-2 {
          width: 100%;
          height: 250px;
          .step-img {
            right: 35%;
            top: 30px;
            img {
              width: 150px;
            }
          }
          .text {
            p {
              font-size: 25px;
            }
            h4 {
              font-size: 28px;
            }
          }
        }
      }
      .right-side-area {
        .card-3 {
          width: 100%;
          height: 250px;
          .step-img {
            right: 25%;
            top: -30px;
            img {
              width: 250px;
            }
          }
          .text {
            p {
              font-size: 25px;
            }
            h4 {
              font-size: 28px;
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 850px) {
    padding: 0px 100px;
  }
  @media screen and (max-width: 700px) {
    padding: 0px 40px;
    .heading-title {
      font-size: 25px;
    }
  }
  @media screen and (max-width: 550px) {
    padding: 0px 20px;
    .card-area {
      .left-side-area {
        .card-1,
        .card-2 {
          width: 100%;
          height: 230px;
          .step-img {
            right: 30%;
            top: 40px;
            img {
              width: 120px;
            }
          }
          .text {
            bottom: 30px;
            left: 8%;
            p {
              font-size: 17px;
            }
            h4 {
              font-size: 20px;
            }
          }
        }
      }
      .right-side-area {
        .card-3 {
          width: 100%;
          height: 230px;
          .step-img {
            right: 20%;
            top: -20px;
            img {
              width: 200px;
            }
          }
          .text {
            bottom: 30px;
            left: 8%;
            p {
              font-size: 17px;
            }
            h4 {
              font-size: 20px;
            }
          }
        }
      }
    }
  }
`;

const MatchComponent = () => {
  return (
    <StepComponent>
      <div className="heading-title">
        Get Matching Color costumes in 3 Easy steps
      </div>
      <div className="card-area">
        <div className="left-side-area">
          <div className="card-1">
            <div className="step-img">
              <img src={Step1.src} className="step1" />
            </div>
            <div className="text">
              <p>Step 1</p>
              <h4>Select Product to Match</h4>
            </div>
          </div>
          <div className="card-2">
            <div className="step-img">
              <img src={Step2.src} className="step1" />
            </div>
            <div className="text">
              <p>Step 2</p>
              <h4>Match color with costume</h4>
            </div>
          </div>
        </div>
        <div className="right-side-area">
          <div className="card-3">
            <div className="step-img">
              <img src={Step3.src} className="step1" />
            </div>
            <div className="text">
              <p>Step 3</p>
              <h4>Get Delivered at your Doorstep</h4>
            </div>
          </div>
        </div>
      </div>
    </StepComponent>
  );
};

export default MatchComponent;
