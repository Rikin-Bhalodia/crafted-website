import { Modal } from "antd";
import React, { useState } from "react";
import Image from "next/image";

const SingleProductModal = ({ handleCancel, selectedProduct }) => {
  const handleOk = () => {
    handleCancel();
  };
  const handleClose = () => {
    handleCancel();
  };
  return (
    <>
      <Modal
        title="Basic Modal"
        visible={true}
        onOk={handleOk}
        onCancel={handleClose}
        style={{ width: "1000px" }}
      >
        {selectedProduct.map((ele) => {
          return (
            <>
              <div>{ele.name}</div>
              <Image src={ele.image} width={200} height={200} />
              <div>{ele.mrp}</div>
              <div>{ele.size}</div>
              <div>X</div>
            </>
          );
        })}
      </Modal>
    </>
  );
};

export default SingleProductModal;
