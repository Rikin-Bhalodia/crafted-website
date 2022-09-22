import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { CgClose } from "react-icons/cg";
import { BiPlus, BiMinus } from "react-icons/bi";
import { getDatabase, set, ref, onValue, remove } from "firebase/database";
import { useAuth } from "../../auth/AuthContext";

const ShoppingCartWrapper = styled.div`
  padding-top: 50px;
  width: 100%;
  .shop-heading {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr 0.1fr;
    justify-content: start;
    align-items: center;
    gap: 30px;
    padding: 10px 0px;
    border-bottom: 1px solid #cdcfd1;

    p {
      font-weight: 500;
      font-size: 18px;
      line-height: 27px;
      color: #9f9f9f;
    }
  }
  .select-product {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr 0.1fr;
    justify-content: start;
    align-items: center;
    gap: 30px;
    padding: 20px 0px;
    border-bottom: 1px solid #cdcfd1;

    .products {
      display: flex;
      align-items: center;
      gap: 70px;
      div {
        height: 150px;
        width: 150px;
        border: 1px solid #cdcfd1;
        div {
          margin: 9px 0px 0px 9px;
          height: 130px;
          width: 130px;
          background: #cdcfd1;
        }
      }
    }
    .add-item {
      display: flex;
      justify-content: flex-start;
      align-items: center;

      a {
        padding: 4px;
        font-weight: 700;
        font-size: 28px;
        line-height: 27px;
        text-align: center;
        color: #ffffff;
        background: #393d46;
      }
      input {
        height: 37px;
        width: 70px;
        text-align: center;
      }
    }

    div {
      font-weight: 500;
      font-size: 24px;
      line-height: 36px;
      color: #393d46;
    }
  }

  .code-total {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 20px 0px;

    .code {
      input {
        width: 250px;
        height: 50px;
        margin-bottom: 10px;
        border: 1px solid #cdcfd1;
        font-weight: 400;
        font-size: 18px;
        color: #9f9f9f;
        padding-left: 10px;
      }

      a {
        padding: 13px;
        font-weight: 400;
        font-size: 18px;
        line-height: 27px;
        text-align: center;
        color: #ffffff;
        background: #393d46;
      }
    }

    .total {
      text-align: end;
      p {
        font-weight: 500;
        font-size: 18px;
        line-height: 27px;
        color: #9f9f9f;
      }
      h5 {
        font-weight: 700;
        font-size: 36px;
        line-height: 54px;
        color: #393d46;
      }
    }
  }

  @media screen and (max-width: 1271px) {
    .products {
      flex-direction: column;
      align-items: flex-start !important;
      gap: 30px !important;
    }
  }
  @media screen and (max-width: 810px) {
    .add-item {
      input {
        width: 38px !important;
      }
    }
    .products {
      gap: 10px !important;

      div {
        height: 100px !important;
        width: 100px !important;
        div {
          height: 80px !important;
          width: 80px !important;
        }
      }
    }
    p {
      font-size: 15px !important;
    }

    .code-total {
      flex-direction: column;

      .code {
        input {
          width: 200px;
        }
      }
    }
  }
  @media screen and (max-width: 727px) {
    .shop-heading,
    .select-product {
      grid-template-columns: 1.5fr 1fr 1fr 1fr 0.1fr;
      gap: 10px !important;
    }
    .add-item {
      flex-direction: column-reverse;
      justify-content: flex-end !important;
      height: 100%;

      input {
        width: 30px !important;
      }
      a {
        padding: 1px !important;
      }
    }
    .select-product {
      div {
        font-size: 15px;
      }
      .close {
        height: 100%;
        display: flex;
        align-items: flex-start;
      }
    }
  }
  @media screen and (max-width: 444px) {
    .products {
      div {
        height: 90px !important;
        width: 90px !important;
        div {
          height: 70px !important;
          width: 70px !important;
        }
      }
    }
  }
`;

const ShoppingCart = () => {
  const [cartProduct, setCartProduct] = useState("");
  const { currentUser } = useAuth();

  const cartItems =
    cartProduct &&
    cartProduct.map(([key, value]) => {
      return value;
    });

  useEffect(() => {
    const db = getDatabase();
    const starCountRef = ref(db, "cartItem/");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        setCartProduct(Object.entries(data));
      } else {
        setCartProduct([]);
      }
    });
  }, []);

  const array =
    cartItems &&
    cartItems?.map((data) => {
      const { cartData } = data;
      return Number(cartData?.mrp) * cartData?.totalUserItem;
    });

  const handleChangeQuantity = (type, id) => {
    const db = getDatabase();
    const cartItemData = cartItems?.filter((data) => data?.cartData?.id === id);
    type === "minus"
      ? set(ref(db, "cartItem/" + id), {
          cartData: {
            ...cartItemData[0].cartData,
            totalUserItem: cartItemData[0]?.cartData?.totalUserItem
              ? cartItemData[0]?.cartData?.totalUserItem - 1
              : 1,
          },
          uid: currentUser?.uid || "",
        })
      : set(ref(db, "cartItem/" + id), {
          cartData: {
            ...cartItemData[0].cartData,
            totalUserItem: cartItemData[0]?.cartData?.totalUserItem
              ? cartItemData[0]?.cartData?.totalUserItem + 1
              : 1,
          },
          uid: currentUser?.uid || "",
        });
  };

  const deleteCartItem = (id) => {
    const db = getDatabase();
    remove(ref(db, "cartItem/" + id));
  };

  return (
    <ShoppingCartWrapper>
      <div className="shop-heading">
        <p>Product</p>
        <p>Quantity</p>
        <p>Price</p>
        <p>Price</p>
      </div>
      <div className="shop-product">
        {cartItems &&
          cartItems?.map((product) => {
            return (
              <>
                <div className="select-product" key={product.cartData?.id}>
                  <div className="products">
                    <div>
                      <img
                        src={product?.cartData?.image}
                        alt="product-image"
                        style={{ height: "100%", width: "100%" }}
                      />
                    </div>
                    <p>{product.cartData?.name}</p>
                  </div>
                  <div className="add-item">
                    <a
                      onClick={() =>
                        handleChangeQuantity("minus", product.cartData?.id)
                      }
                    >
                      <BiMinus />
                    </a>
                    <input
                      type="text"
                      value={product?.cartData?.totalUserItem}
                    />
                    <a
                      onClick={() =>
                        handleChangeQuantity("add", product.cartData?.id)
                      }
                    >
                      <BiPlus />
                    </a>
                  </div>
                  <div>
                    ₹{product.cartData?.mrp * product?.cartData?.totalUserItem}
                  </div>
                  <div>
                    ₹{product.cartData?.mrp * product?.cartData?.totalUserItem}
                  </div>
                  <div
                    className="close"
                    onClick={() => deleteCartItem(product?.cartData?.id)}
                  >
                    <CgClose size={30} />
                  </div>
                </div>
              </>
            );
          })}
      </div>
      <div className="code-total">
        <div className="code">
          <input type="text" name="code" value="Enter coupon code" />
          <a href="/">Apply Code</a>
        </div>
        <div className="total">
          <p>Total</p>

          <h5>
            ₹
            {array &&
              array.reduce(
                (previousValue, currentValue) => previousValue + currentValue,
                0
              )}
          </h5>
        </div>
      </div>
    </ShoppingCartWrapper>
  );
};

export default ShoppingCart;
