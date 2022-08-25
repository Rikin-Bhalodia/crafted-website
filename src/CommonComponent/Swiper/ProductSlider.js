import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import styled from "styled-components";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Firebase";

const ProductWrapper = styled.div`
  display: flex;
  margin: 0 60px;
  height: 300px;
  justify-content: center;
  align-items: center;
  .swiperSlide {
    width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 200px;
  }
  .productImg {
    height: 150px;
    width: 180px;
  }
  .product-name {
    padding-top: 15px;
    font-weight: 500;
    font-size: 20px;
    color: #393d46;
  }
  .product-price {
    padding-top: 5px;
    color: #9f9f9f;
    font-weight: 500;
    font-size: 18px;
  }
  @media screen and (max-width: 1000px) {
    margin: 0;
    width: 100%;
    .swiperSlide {
      margin: 0;
      width: 150px;
    }
    .productImg {
      width: 150px;
    }
  }
  @media screen and (max-width: 700px) {
    .productImg {
      width: 130px;
      height: 130px;
    }
    .product-name {
      font-size: 16px;
    }
  }
  @media screen and (max-width: 520px) {
    .productImg {
      width: 100px;
      height: 100px;
    }
    .product-name {
      font-size: 12px;
    }
    .product-price {
      font-size: 14px;
    }
  }
  @media screen and (max-width: 400px) {
    .productImg {
      width: 60px;
      height: 60px;
    }
    .product-name {
      font-size: 10px;
    }
    .product-price {
      font-size: 12px;
    }
  }
`;

export default function ProductSlider() {
  const productsCollection = collection(db, "products");
  const [products, setProducts] = useState([]);
  const getAllProducts = async () => {
    const data = await getDocs(productsCollection);
    setProducts(data.docs.map((data) => data.data()));
  };
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <ProductWrapper>
      <Swiper slidesPerView={4} grabCursor={true} spaceBetween={15}>
        {products &&
          products.map((ele, i) => {
            return (
              <SwiperSlide className="swiperSlide" key={i}>
                <div className="productImg">
                  <Image
                    src={ele?.image}
                    layout="responsive"
                    height={60}
                    width={80}
                  />
                </div>
                <div className="product-name">{ele.name}</div>
                <div className="product-price">${ele.mrp}</div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </ProductWrapper>
  );
}
