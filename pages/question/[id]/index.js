import React, { useState } from "react";
import styled from "styled-components";
import SareePetticoat from "../../../src/Components/question/SareePetticoat";
import PatialaSalwar from "../../../src/Components/question/PatialaSalwar";
import FullPatialaSalwar from "../../../src/Components/question/FullPatialaSalwar";
import SemiPatialaSalwar from "../../../src/Components/question/SemiPatialaSalwar";
import PoplinCottonFabric from "../../../src/Components/question/PoplinCottonFabric";
import "antd/dist/antd.variable.min.css";
import { TCOMaCPageImage } from "../../../src/utils/other";
import { useRouter } from "next/router";

const QuestionWrapper = styled.div`
  padding: 80px 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  .que-head {
    h3 {
      font-size: 36px;
      font-weight: 500;
      width: 100vw;
    }
  }
  .que-body {
    .que-category {
      padding-bottom: 50px;
      display: flex;
      justify-content: center;
    }
  }
  .label {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 400;
    font-size: 16px;
    margin-bottom: 5px;
    margin-top: 10px;
    width: 500px;
    gap: 13px;
  }
  .tc-image {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    height: 65px;
    width: 90px;
    font-size: 13px;
    text-align: center;
    font-weight: 500;
  }
  .tc-img {
    height: 40px;
    width: 40px;
  }
  @media screen and (max-width: 1000px) {
    .que-head {
      h3 {
        font-size: 30px;
      }
    }
  }
  @media screen and (max-width: 850px) {
    .que-head {
      h3 {
        font-size: 26px;
      }
    }
  }
  @media screen and (max-width: 550px) {
    padding: 40px 20px;
    .tc-image {
      height: 50px;
      width: 55px;
      font-size: 10px;
    }
    .tc-img {
      height: 30px;
      width: 30px;
    }
    .que-head {
      h3 {
        font-size: 24px;
        font-weight: 500;
      }
    }
    .que-head {
      h3 {
        font-size: 22px;
      }
    }
  }
  @media screen and (max-width: 450px) {
    .tc-image {
      height: 40px;
      width: 40px;
      font-size: 8px;
    }
    .tc-img {
      height: 20px;
      width: 20px;
    }
    .que-head {
      h3 {
        font-size: 21px;
      }
    }
  }
`;

const Question = () => {
  const router = useRouter();

  const [name, setName] = useState(router.query.id || "");
  const [id, setId] = useState("");

  const onMouse = (id, category) => {
    setId(id);
    setName(category);
  };

  return (
    <>
      <QuestionWrapper>
        <div className="que-head">
          <h3>Help us find you perfect match!</h3>
        </div>
        <div className="que-body">
          <div className="que-category">
            <div className="label">
              {TCOMaCPageImage.map((ele) => {
                const elementId =
                  [router.query.id].includes(ele.category) && ele.id;
                return (
                  <div
                    className="tc-image"
                    onClick={() => onMouse(ele.id, ele.category)}
                    style={
                      (id || elementId) === ele.id
                        ? { background: "#393D46", color: "white" }
                        : { background: "#ededed" }
                    }
                  >
                    {ele.icon ? (
                      ele.id === (id || elementId) ? (
                        <div>{ele.name}</div>
                      ) : (
                        <img
                          src={ele.icon.src}
                          alt="image"
                          className="tc-img"
                        />
                      )
                    ) : (
                      <div>more</div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          {name === "petticoat" && <SareePetticoat />}
          {name === "poplin-cotton" && <PoplinCottonFabric />}
          {name === "patiala" && <PatialaSalwar />}
          {name === "full-patiala" && <FullPatialaSalwar />}
          {name === "semi-patiala" && <SemiPatialaSalwar />}
        </div>
      </QuestionWrapper>
    </>
  );
};

export default Question;
