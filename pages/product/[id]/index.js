import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import ProductSlider from "../../../src/CommonComponent/Swiper/ProductSlider";
import CartImage from "/public/svg/cart-white.svg";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../../src/Firebase";
import { getDatabase, ref, set } from "firebase/database";
import { ColorRing } from "react-loader-spinner";
import useDebounce from "../../../src/CommonComponent/CustomHooks";
import { getAllProducts } from "../../../src/utils";

const SingleProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  .main-product {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 670px;
    width: 90%;
    height: 423px;
  }
  section {
    display: flex;
    max-width: 670px;
    width: 90%;
    justify-content: center;
    gap: 25px;
    margin-top: 20px;
  }
  .left-part {
    display: flex;
    flex-direction: column;
    width: 50%;
    justify-content: center;
    align-items: end;
  }
  .variance {
    background: #cdcfd1;
    width: 125px;
    height: 125px;
    border: 2px solid #9f9f9f;
  }
  .variance1 {
    background: #cdcfd1;
    width: 125px;
    opacity: 0.25;
    height: 125px;
  }
  .right-part {
    display: flex;
    flex-direction: column;
    width: 50%;
    align-items: flex-start;
  }
  .title {
    font-weight: 700;
    font-size: 40px;
    padding-top: 25px;
  }
  .route {
    font-weight: 500;
    font-size: 18px;
    color: #9f9f9f;
    max-width: 700px;
    width: 90%;
  }
  .amount {
    color: #9f9f9f;
    font-weight: 400;
    font-size: 30px;
    padding-top: 40px;
  }
  .quantity {
    font-weight: 500;
    color: #393d46;
    margin-top: 50px;
    font-size: 18px;
    .btn-minus {
      border: 1px solid #f6f7fb;
      height: 40px;
      background: #f6f7fb;
      width: 40px;
      margin-left: 15px;
    }
    input {
      width: 80px;
      border: 1px solid #f6f7fb;
      height: 40px;
    }
    .btn-plus {
      height: 40px;
      width: 40px;
      border: none;
      background: #393d46;
      color: white;
    }
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
  .similar-product {
    font-weight: 700;
    padding-top: 50px;
    padding-left: 150px;
    font-size: 30px;
    color: #393d46;
  }
  .main-section {
    display: flex;
    flex-direction: column;
    column-gap: 30px;
  }
  @media screen and (max-width: 700px) {
    .main-section {
      flex-direction: column;
      align-items: center;
    }
    .main-product {
      width: 100%;
    }
    section {
      width: 100%;
    }
    .left-part {
      width: 100%;
      max-width: 490px;
    }
    .right-part {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .route {
      padding-top: 30px;
      padding-left: 50px;
    }
    .title {
      width: 100%;
      text-align: center;
    }
    .similar-product {
      width: 100%;
      padding: 20px 0 0 40px;
      text-align: left;
    }
  }
  @media screen and (max-width: 500px) {
    .main-section {
      flex-direction: column;
      align-items: center;
    }
    .main-product {
      width: 100%;
      height: 350px;
    }
    section {
      width: 100%;
    }
    .left-part {
      width: 100%;
      max-width: 350px;
      height: 450px;
    }
    .variance {
      width: 100px;
      height: 100px;
    }
    .variance1 {
      width: 100px;
      height: 100px;
    }
  }
`;

const SingleProduct = () => {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [query] = useState(router?.query?.ids);
  const [category] = useState(router?.query?.category);
  const [totalProduct, setTotalProduct] = useState([]);

  useEffect(() => {
    getAllProducts(setProducts);
  }, []);

  const specialProducts = useMemo(() => {
    return products.filter((data) => {
      return query?.includes(data.id) ? data : null;
    });
  }, [products.length > 0]);

  const handleChangeQuantity = async (type, id) => {
    const checkProduct = totalProduct.find((item) => item.id === id);
    if (checkProduct) {
      setTotalProduct((prev) =>
        prev.map((data) =>
          data.id === id
            ? type === "minus"
              ? { quantity: data.quantity - 1, id }
              : { quantity: data.quantity + 1, id }
            : data
        )
      );
    } else {
      setTotalProduct((prev) => [...prev, { quantity: 2, id }]);
    }
  };

  const AddToCart = (product, id) => {
    const checkProduct = totalProduct.find((item) => item.id === id);
    const db = getDatabase();
    set(ref(db, "cartItem/" + id), {
      cartData: {
        ...product,
        totalUserItem: checkProduct.quantity,
      },
    });
  };

  if (!products?.length) {
    return (
      <div
        style={{
          width: "100%",
          height: "700px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
      </div>
    );
  }
  return (
    <SingleProductWrapper>
      <div className="main-section">
        {specialProducts &&
          specialProducts.map((product, i) => {
            const totalItems = totalProduct.filter(
              (item) => item.id === product.id
            );
            return (
              <div style={{ display: "flex", margin: "0 0 50px 0" }}>
                <div className="left-part">
                  <div className="main-product">
                    <img
                      src={product?.image[0]}
                      layout="responsive"
                      height={300}
                      width={350}
                    />
                  </div>
                  <section>
                    <img
                      src={product?.image[1]}
                      layout="responsive"
                      height={100}
                      width={100}
                    />
                    <img
                      src={product?.image[2]}
                      layout="responsive"
                      height={100}
                      width={100}
                    />
                    <img
                      src={product?.image[3]}
                      layout="responsive"
                      height={100}
                      width={100}
                    />
                  </section>
                </div>
                <div className="right-part">
                  <div className="route">
                    {" "}
                    Featured {">"} Purple Warm Jacket
                  </div>
                  <div className="title">{product?.name}</div>
                  <div className="amount">${product?.mrp}</div>
                  <div className="route" style={{ padding: "55px 0 0 0" }}>
                    {product?.description}
                  </div>
                  <div className="quantity">
                    Quantity{" "}
                    <button
                      className="btn-minus"
                      onClick={() => handleChangeQuantity("minus", product.id)}
                    >
                      -
                    </button>
                    <input type="number" value={totalItems[0]?.quantity || 1} />
                    <button
                      className="btn-plus"
                      onClick={() => handleChangeQuantity("add", product.id)}
                    >
                      +
                    </button>{" "}
                  </div>
                  <button
                    className="cart-btn"
                    onClick={() => AddToCart(product, product.id)}
                  >
                    Add to Cart <Image src={CartImage} alt="cart-image" />
                  </button>
                </div>
              </div>
            );
          })}
      </div>
      <div>
        <div className="similar-product">
          Similiar Product{" "}
          <span
            style={{
              fontSize: "18px",
              color: "#9F9F9F",
              padding: "0 0 0 20px",
              cursor: "pointer",
            }}
          >
            View all
          </span>
        </div>
        <div>
          <ProductSlider category={category} />
        </div>
      </div>
    </SingleProductWrapper>
  );
};
export default SingleProduct;
