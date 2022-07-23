import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import styled from "styled-components";

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
    background: #cdcfd1;
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
const product = [
  {
    name: "Black Briefcase",
    price: "$299",
  },
  {
    name: "Pink Shirt",
    price: "$299",
  },
  {
    name: "Gray T-shirt",
    price: "$299",
  },
  {
    name: "Red Flannel",
    price: "$299",
  },
  {
    name: "Black Briefcase",
    price: "$299",
  },
  {
    name: "Black Briefcase",
    price: "$299",
  },
];
export default function ProductSlider() {
  return (
    <ProductWrapper>
      <Swiper slidesPerView={4} grabCursor={true} spaceBetween={15}>
        {product.map((ele) => {
          return (
            <SwiperSlide className="swiperSlide">
              <div className="productImg"></div>
              <div className="product-name">{ele.name}</div>
              <div className="product-price">{ele.price}</div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </ProductWrapper>
  );
}
