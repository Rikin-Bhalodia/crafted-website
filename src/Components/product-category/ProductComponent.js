import React from "react";
import styled from "styled-components";
import Image from "next/image";
import ProductImg from "../../../public/svg/product.svg";

const ProductComponentsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 50px;
  width: 100%;
  height: 300px;
  padding: 50px 150px;
  .pro-comp {
    width: 100%;
    height: 100%;
    padding: 30px;
    background-color: #f6f6f6;

    .pro-image {
      width: 200px;
      height: 200px;
    }
    .pro-details {
      display: flex;
      flex-direction: column;
      align-items: center;
      h3 {
        font-weight: 700;
        font-size: 26px;
        line-height: 54px;
        color: #393d46;
        margin: 0px;
      }
      p {
        font-weight: 400;
        font-size: 26px;
        /* line-height: 54px; */
        color: #9f9f9f;
        margin: 0px;
      }
      .cart-btn {
        margin-top: 40px;
        background: #393d46;
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 200px;
        height: 54px;
        border: none;
        font-weight: 700;
        color: #ffff;
        font-size: 18px;
      }
    }
  }
`;

const ProductComponents = () => {
  return (
    <>
      <ProductComponentsWrapper>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((_) => {
          return (
            <div className="pro-comp">
              <div className="pro-image">
                <Image src={ProductImg} alt="product" />
              </div>
              <div className="pro-details">
                <h3>Purple Warm Zip Jacket</h3>
                <p>$299</p>
                <button className="cart-btn">Add to Cart</button>
              </div>
            </div>
          );
        })}
      </ProductComponentsWrapper>
    </>
  );
};

export default ProductComponents;
