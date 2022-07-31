import React from "react";
import styled from "styled-components";
import Image from "next/image";
import ProductImg from "../../../public/svg/product.svg";

const ProductComponentsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 50px;
  width: 100%;
  height: 100%;
  padding: 50px 150px;
  .pro-comp {
    padding: 30px 40px;
    /* box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); */
    border-radius: 30px;
    background: #f6f6f6;

    :hover {
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);
    }
    .pro-image {
      width: 100%;
      height: 250px;
      object-fit: cover;
      background-size: cover;
      background-attachment: fixed;
      .product-img {
        height: 100%;
        width: 100%;
      }
    }
    .pro-details {
      display: flex;
      flex-direction: column;
      align-items: center;
      h3 {
        font-weight: 700;
        font-size: 26px;
        line-height: 34px;
        color: #393d46;
        margin: 10px;
      }
      div {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        p {
          font-weight: 400;
          font-size: 26px;
          /* line-height: 54px; */
          color: #9f9f9f;
          margin: 0px;
        }
        .cart-btn {
          background: #393d46;
          width: 150px;
          height: 34px;
          border: none;
          font-weight: 700;
          color: #ffff;
          font-size: 15px;
        }
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
                <Image
                  src={ProductImg}
                  alt="product"
                  className="product-img"
                  layout="responsive"
                />
              </div>
              <div className="pro-details">
                <h3>Purple Warm Zip Jacket</h3>
                <div>
                  <p>$299</p>
                  <button className="cart-btn">Add to Cart</button>
                </div>
              </div>
            </div>
          );
        })}
      </ProductComponentsWrapper>
    </>
  );
};

export default ProductComponents;
