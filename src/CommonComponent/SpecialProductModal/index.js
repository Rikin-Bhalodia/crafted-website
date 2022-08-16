import { Modal } from "antd";
import React, { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import "antd/dist/antd.css";

const SingleProductModalWrapper = styled.div``;

import { IoCloseCircle } from "react-icons/io5";
const SingleProductModal = ({ handleCancel, selectedProduct }) => {
  const handleOk = () => {
    handleCancel();
  };
  const handleClose = () => {
    handleCancel();
  };
  return (
    <>
      <SingleProductModalWrapper>
        <Modal
          title="Basic Modal"
          visible={true}
          onOk={handleOk}
          onCancel={handleClose}
          className="modalStyle"
          centered={true}
          width="800px"
        >
          {selectedProduct.map((ele) => {
            return (
              <>
                <div className="modaldata">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    {ele.name}
                    <div>
                      <IoCloseCircle />
                    </div>
                  </div>
                  <Image src={ele.image} width={200} height={200} />
                  <div>
                    Price: &nbsp; &nbsp;
                    {ele.mrp}
                  </div>
                  <div>Size:&nbsp; &nbsp; &nbsp;{ele.size}</div>
                </div>
              </>
            );
          })}
        </Modal>
      </SingleProductModalWrapper>
    </>
  );
};

export default SingleProductModal;
