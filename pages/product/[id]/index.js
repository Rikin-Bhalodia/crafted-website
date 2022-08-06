import Image from "next/image";
import React, { useEffect, useState } from "react";
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
import { getDatabase, onValue, ref, set } from "firebase/database";

const SingleProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  .main-product {
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
    width: 300px;
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
  const [products, setProducts] = useState();
  const docRef = doc(db, "products", router?.query?.id);
  const getProducts = async () => {
    const data = await getDoc(docRef);
    setProducts(data.data());
  };
  useEffect(() => {
    getProducts();
  }, []);
  const handleChangeQuantity = async (type) => {
    type === "minus"
      ? await updateDoc(docRef, {
          ...products,
          totalUserItem: products?.totalUserItem - 1,
        })
      : await updateDoc(docRef, {
          ...products,
          totalUserItem: products?.totalUserItem + 1,
        });
    getProducts();
  };

  const AddToCart = () => {
    const db = getDatabase();
    set(ref(db, "cartItem/" + router?.query?.id), {
      cartData: products,
    });
  };
  return (
    <SingleProductWrapper>
      <div className="main-section">
        {products && (
          <>
            <div className="left-part">
              <div className="main-product">
                <Image
                  src={products?.image}
                  layout="responsive"
                  height={220}
                  width={350}
                />
              </div>
              <section>
                <div className="variance"></div>
                <div className="variance1"></div>
                <div className="variance1"></div>
              </section>
            </div>
            <div className="right-part">
              <div className="route"> Featured {">"} Purple Warm Jacket</div>
              <div className="title">{products?.name}</div>
              <div className="amount">${products?.mrp}</div>
              <div className="route" style={{ padding: "55px 0 0 0" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </div>
              <div className="quantity">
                Quantity{" "}
                <button
                  className="btn-minus"
                  onClick={() => handleChangeQuantity("minus")}
                >
                  -
                </button>
                <input type="number" value={products?.totalUserItem} />
                <button
                  className="btn-plus"
                  onClick={() => handleChangeQuantity("add")}
                >
                  +
                </button>{" "}
              </div>
              <button className="cart-btn" onClick={AddToCart}>
                Add to Cart <Image src={CartImage} alt="cart-image" o />
              </button>
            </div>
          </>
        )}
      </div>
      <div>
        <div className="similar-product">
          Similiar Product{" "}
          <span
            style={{
              fontSize: "18px",
              color: "#9F9F9F",
              padding: "0 0 0 20px",
            }}
          >
            View all
          </span>
        </div>
        <div>
          <ProductSlider />
        </div>
      </div>
    </SingleProductWrapper>
  );
};
export default SingleProduct;
