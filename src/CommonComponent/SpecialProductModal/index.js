import { Modal } from "antd";
import React from "react";
import Image from "next/image";
import styled from "styled-components";
import "antd/dist/antd.css";

const SingleProductModalWrapper = styled.div``;

import { IoCloseCircle } from "react-icons/io5";
const SingleProductModal = ({
  handleCancel,
  selectedProduct,
  setColor,
  color,
}) => {
  const handleOk = () => {
    handleCancel();
  };
  const handleClose = () => {
    handleCancel();
  };

  const handleClick = (data) => {
    if (color.includes(data[0].toUpperCase())) {
      setColor((prev) =>
        prev.filter((color) => color !== data[0].toUpperCase())
      );
    }
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
                <div className="modaldata" key={ele}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      paddingBottom: "5px",
                    }}
                  >
                    {ele.name}
                    <div>
                      <IoCloseCircle onClick={() => handleClick(ele.color)} />
                    </div>
                  </div>
                  <Image src={ele.image} width={150} height={130} />
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
