import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import ProductSlider from "../../../src/CommonComponent/Swiper/ProductSlider";
import CartImage from "/public/svg/cart-white.svg";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { getDatabase, onValue, ref, set } from "firebase/database";
import { ColorRing } from "react-loader-spinner";
import { CartItems, getAllProducts } from "../../../src/utils";
import Timer from "../../../src/CommonComponent/CustomHooks/timer";
import { useAuth } from "../../../src/auth/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SingleProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  .product-section {
    padding: 70px 150px 50px;
    display: flex;
    gap: 50px;
  }
  .left-part {
    display: flex;
    flex-direction: column;
    width: 45%;
    gap: 20px;
  }
  .main-product {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    height: 450px;
    object-fit: cover;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    position: relative;
    img {
      height: 450px;
      width: 450px;
    }
  }
  section {
    display: flex;
    width: 100%;
    height: 200px;
    justify-content: center;
    gap: 20px;

    img {
      width: 150px;
      height: 150px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
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
    width: 55%;
    align-items: flex-start;
  }
  .title {
    font-weight: 700;
    font-size: 40px;
    padding-top: 10px;
    line-height: 55px;
  }
  .route {
    font-weight: 500;
    font-size: 18px;
    color: #9f9f9f;
    line-height: 28px;
    text-align: justify;
  }
  .route-1 {
    padding-top: 20px;
    margin-top: 20px;
    border-top: 1px solid #cdcfd1;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .route-1:hover {
    display: -webkit-flex;
  }
  .amount {
    color: #9f9f9f;
    font-weight: 400;
    font-size: 30px;
    padding-top: 25px;
  }
  .quantity {
    font-weight: 500;
    color: #393d46;
    margin-top: 35px;
    font-size: 18px;
    .btn-minus {
      border: 1px solid #f6f7fb;
      height: 40px;
      background: #f6f7fb;
      width: 40px;
      margin-left: 15px;
    }
    input {
      width: 60px;
      border: 1px solid #f6f7fb;
      height: 40px;
      text-align: center;
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
  .tools {
    width: 100%;
    position: absolute;
    gap: 15px;
    right: 15px;
    top: 15px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    button {
      height: 40px;
      width: 40px;
      border: none;
      padding: 0px;
    }
    .f-20 {
      font-size: 20px;
    }
  }
  @media (max-width: 1400px) {
    .product-section {
      padding: 50px;
    }
  }
  @media (max-width: 1000px) {
    .product-section {
      padding: 50px 150px;
      display: flex;
      gap: 50px;
      flex-direction: column;
      align-items: center;
    }
    .right-part {
      width: 100%;
    }
    .left-part {
      width: 100%;
    }
    .title {
      font-size: 30px;
      line-height: 45px;
    }
    .amount {
      font-size: 25px;
      text-align: left;
    }
    .route {
      font-size: 15px;
      line-height: 23px;
      text-align: left;
    }
    .quantity,
    .cart-btn {
      text-align: left;
    }
  }

  @media screen and (max-width: 700px) {
    .main-section {
      flex-direction: column;
    }
    .product-section {
      padding: 50px;
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
    }

    .similar-product {
      width: 100%;
      padding: 20px 0 0 40px;
      text-align: left;
    }
    .quantity {
      font-size: 15px;
      margin-top: 30px;
    }
    .btn-minus {
      height: 25px;
      width: 25px;
    }
    input {
      width: 40px;
      height: 25px;
    }
    .btn-plus {
      height: 25px;
      width: 25px;
    }
    .cart-btn {
      width: 150px;
      height: 40px;
      font-size: 15px;
      margin-top: 30px;
    }
    .route-1 {
      padding-top: 10px;
      margin-top: 10px;
    }
    .amount {
      padding-top: 15px;
    }
  }
  @media screen and (max-width: 500px) {
    .main-section {
      flex-direction: column;
    }
    .variance {
      width: 100px;
      height: 100px;
    }
    .variance1 {
      width: 100px;
      height: 100px;
    }
    section {
      gap: 10px;
      height: 100px;

      img {
        width: 100px;
        height: 100px;
      }
    }
    .main-product {
      width: 100%;
      height: 350px;
      img {
        height: 350px;
        width: 350px;
      }
    }
    .product-section {
      gap: 20px;
      padding: 20px;
    }
    .title {
      font-size: 25px;
      line-height: 40px;
    }
    .amount {
      font-size: 20px;
      text-align: left;
    }
    .route {
      font-size: 12px;
      line-height: 20px;
      text-align: left;
    }
    .quantity,
    .cart-btn {
      text-align: left;
    }
  }
`;

const SingleProduct = () => {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [query] = useState(router?.query?.ids);
  const [category] = useState(router?.query?.category);
  const [totalProduct, setTotalProduct] = useState([]);
  const [cartProduct, setCartProduct] = useState([]);
  const { currentUser } = useAuth();

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

  useEffect(() => {
    const db = getDatabase();
    const starCountRef = ref(db, `cartItem/${currentUser?.uid}/`);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      let cartDatalist = [];
      for (let id in data) {
        cartDatalist.push(data[id]);
      }
      if (cartDatalist.length) {
        setCartProduct(cartDatalist);
      } else {
        setCartProduct([]);
      }
    });
  }, []);

  const AddToCart = (product, id) => {
    const db = getDatabase();
    if (cartProduct.find((data) => data.id === id)) {
      toast(`Your ${product.name} is already in Cart !!`);
      return;
    } else {
      set(ref(db, `cartItem/${currentUser.uid}/${id}/`), {
        ...product,
        totalUserItem:
          totalProduct?.find((data) => data.id === id)?.quantity || 1,
        uid: currentUser?.uid || "",
      });
      toast("Your Item is added in Cart");
      router.push("/cart");
    }
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
          specialProducts.map((product) => {
            const totalItems = totalProduct.filter(
              (item) => item.id === product.id
            );
            return (
              <div className="product-section">
                <div className="left-part">
                  <TransformWrapper initialScale={1}>
                    {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                      <React.Fragment>
                        <div className="main-product">
                          <div className="tools">
                            <button className="f-20" onClick={() => zoomIn()}>
                              +
                            </button>
                            <button className="f-20" onClick={() => zoomOut()}>
                              -
                            </button>
                            <button onClick={() => resetTransform()}>
                              Reset
                            </button>
                          </div>
                          <TransformComponent>
                            <img src={product?.image[0]} layout="responsive" />
                          </TransformComponent>
                        </div>
                      </React.Fragment>
                    )}
                  </TransformWrapper>
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
                  <div className="amount">₹{product?.mrp}</div>
                  <div className="route route-1">{product?.description}</div>
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
      <ToastContainer />
    </SingleProductWrapper>
  );
};
export default SingleProduct;
