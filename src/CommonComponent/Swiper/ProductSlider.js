import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
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
    height: 120px;
    width: 120px;
    object-fit: cover;
    img {
      width: 120px;
      height: 120px;
    }
  }
  .product-name {
    padding-top: 15px;
    font-weight: 500;
    font-size: 18px;
    color: #393d46;
    text-align: center;
    padding: 0 30px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
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
      width: 100px;
      height: 100px;
      img {
        width: 100px;
        height: 100px;
      }
    }
    .product-name {
      font-size: 15x;
    }
    .product-price {
      font-size: 15px;
    }
  }
`;

export default function ProductSlider({ category }) {
  const productsCollection = collection(db, "specialProducts");
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
      <Swiper
        breakpoints={{
          // 0: {
          //   slidesPerView: 1,
          //   spaceBetween: 10,
          // },
          450: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1075: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1500: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        grabCursor={true}
      >
        {products &&
          products.map((ele, i) => {
            return (
              category === ele?.category && (
                <SwiperSlide
                  className="swiperSlide"
                  key={i}
                  style={{ height: "200px", width: "300px" }}
                >
                  <div className="productImg">
                    <img src={ele?.image} height={60} width={80} />
                  </div>
                  <div className="product-name">{ele.name}</div>
                  <div className="product-price">₹{ele.mrp}</div>
                </SwiperSlide>
              )
            );
          })}
      </Swiper>
    </ProductWrapper>
  );
}
