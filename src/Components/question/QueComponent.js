import React from "react";
import styled from "styled-components";
// import Link from "next/link";
// import Image from "next/image";

const QueComponentWrapper = styled.div`
  .questions {
    .body {
      h5 {
        font-size: 18px;
        font-weight: 600;
      }
    }
  }
`;

const QueComponent = (data) => {
  return (
    <>
      <QueComponentWrapper>
        <div className="questions">
          {/* <div className="head">
                  <h4>{data.head}</h4>
                </div> */}
          <div className="body">
            <div>
              <h5>1. &nbsp;{data.que1}</h5>
              <p>{data.opt1}</p>
            </div>
            <div>
              <h5>2. &nbsp;{data.que2}</h5>
              <p>{data.opt2}</p>
            </div>
          </div>
        </div>
      </QueComponentWrapper>
    </>
  );
};

export default QueComponent;
