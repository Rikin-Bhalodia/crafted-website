import React, { useState } from "react";
import styled from "styled-components";
// import Link from "next/link";
// import Image from "next/image";
import SareePetticoat from "../../src/Components/question/SareePetticoat";
import PatialaSalwar from "../../src/Components/question/PatialaSalwar";
import PoplinCottonFabric from "../../src/Components/question/PoplinCottonFabric";
import { Select } from "antd";
import "antd/dist/antd.variable.min.css";

const QuestionWrapper = styled.div`
  padding: 80px 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  .que-head {
    h3 {
      font-size: 40px;
      font-weight: 500;
    }
  }
  .que-body {
    .que-category {
      padding-bottom: 50px;
    }
  }
`;

const { Option } = Select;

const Question = () => {
  const [name, setName] = useState();

  const handleSelectChange = (value) => {
    setName(value);
  };
  return (
    <>
      <QuestionWrapper>
        <div className="que-head">
          <h3>Some Question</h3>
        </div>
        <div className="que-body">
          <div className="que-category">
            <Select
              defaultValue="Select Categories"
              style={{
                width: 200,
              }}
              onChange={handleSelectChange}
            >
              <Option value="saree">Saree Petticoat</Option>
              <Option value="poplin">Poplin Cotton Fabric</Option>
              <Option value="patiala">Patiala Salwar</Option>
            </Select>
          </div>
          {name === "saree" && <SareePetticoat />}
          {name === "poplin" && <PoplinCottonFabric />}
          {name === "patiala" && <PatialaSalwar />}
        </div>
      </QuestionWrapper>
    </>
  );
};

export default Question;
