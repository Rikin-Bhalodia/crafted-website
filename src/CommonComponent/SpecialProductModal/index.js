import { Modal } from "antd";
import React, { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import "antd/dist/antd.css";
const SingleProductModalWrapper = styled.div``;

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
          centered
        >
          {selectedProduct.map((ele) => {
            return (
              <>
                <div>
                  <div style={{ fontSize: "20px", fontWeight: "500" }}>
                    {ele.name}
                  </div>
                  <Image src={ele.image} width={200} height={200} />
                  <div style={{ fontSize: "15px", fontWeight: "500" }}>
                    {ele.mrp}
                  </div>
                  <div style={{ fontSize: "15px", fontWeight: "500" }}>
                    {ele.size}
                  </div>
                  <div style={{ fontSize: "15px", fontWeight: "500" }}>X</div>
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
