import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import ProductImg from "../../../public/svg/product.svg";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Firebase";

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
  const [products, setProducts] = useState();
  const productsCollection = collection(db, "products");

  useEffect(() => {
    const getProducts = async () => {
      const data = await getDocs(productsCollection);
      setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getProducts();
  }, []);
  return (
    <>
      <ProductComponentsWrapper>
        {products?.map((product) => {
          return (
            <div className="pro-comp">
              <div className="pro-image">
                <Image src={product.image} alt="product" />
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
