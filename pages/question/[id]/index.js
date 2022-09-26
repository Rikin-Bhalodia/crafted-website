import React, { useState } from "react";
import styled from "styled-components";
import SareePetticoat from "../../../src/Components/question/SareePetticoat";
import PatialaSalwar from "../../../src/Components/question/PatialaSalwar";
import FullPatialaSalwar from "../../../src/Components/question/FullPatialaSalwar";
import SemiPatialaSalwar from "../../../src/Components/question/SemiPatialaSalwar";
import PoplinCottonFabric from "../../../src/Components/question/PoplinCottonFabric";
import { Select } from "antd";
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
    }
  }
  .que-body {
    .que-category {
      padding-bottom: 50px;
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
    width: 450px;
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
          <h3>Some Question</h3>
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
