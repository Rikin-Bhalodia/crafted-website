import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../Firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import { useAuth } from "../../auth/AuthContext";
import { getDatabase, onValue, ref, set } from "firebase/database";

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
  const [products, setProducts] = useState();
  const productsCollection = collection(db, "products");
  const router = useRouter();
  const [cartProduct, setCartProduct] = useState([]);
  const { currentUser } = useAuth();

  const cartProducts = cartProduct.map(([key]) => {
    return Object.values(key).join("");
  });

  useEffect(() => {
    const getProducts = async () => {
      const data = await getDocs(productsCollection);
      setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getProducts();
  }, []);

  useEffect(() => {
    const db = getDatabase();
    const starCountRef = ref(db, "cartItem/");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setCartProduct(Object.entries(data));
    });
  }, []);

  const handleClick = async (e, id) => {
    e.stopPropagation();
    const cartData = products.find((data) => data.id === id);
    const db = getDatabase();

    if (cartProducts.includes(id)) {
      toast("Your Item is already in Cart !!");
    } else {
      set(ref(db, "cartItem/" + id), {
        cartData,
        uid: currentUser.uid,
      });
      toast("Your Item is added in Cart");
    }
  };

  const redirectSingleProduct = (id) => {
    router.push(`/product/${id}`);
  };
  return (
    <>
      <ProductComponentsWrapper>
        {products?.map((product) => {
          return (
            product.category === router.query.id && (
              <div
                className="pro-comp"
                onClick={() => redirectSingleProduct(product?.id)}
              >
                <div className="pro-image">
                  <Image
                    src={product.image}
                    alt="product"
                    className="product-img"
                    height={230}
                    width={250}
                  />
                </div>
                <div className="pro-details">
                  <h3>{product.name}</h3>
                  <div>
                    <p>${product.mrp}</p>
                    <button
                      className="cart-btn"
                      onClick={(e) => handleClick(e, product.id)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            )
          );
        })}
      </ProductComponentsWrapper>
      <ToastContainer />
    </>
  );
};

export default ProductComponents;
