import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import Footer from "../src/CommonComponent/Footer/FooterContact";
import "antd/dist/antd.css";
import { Breadcrumb } from "antd";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getDatabase, onValue, ref, set } from "firebase/database";
import { useAuth } from "../src/auth/AuthContext";
import { useRouter } from "next/router";
import { ColorRing } from "react-loader-spinner";
import { Colors } from "../src/CommonComponent/Colors";
import { images } from "../src/CommonComponent/BlankImages";
import { getAllProducts } from "../src/utils";
import { colors } from "../src/utils/other";
import colorRight from "/public/svg/color-right.svg";
import colorLeft from "/public/svg/color-left.svg";
import { TCOMaCPageImage } from "../src/utils/other";
import Tcomac from "/public/svg/tcomacImage/tcomac.svg";

const WebAppWrapper = styled.div`
  .section {
    display: flex;
    margin-top: 30px;
    justify-content: center;
  }
  .heading-section {
    font-weight: 700;
    font-size: 20px;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
  }
  .label {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 400;
    font-size: 16px;
    margin-bottom: 5px;
    margin-top: 10px;
    width: 450px;
    gap: 13px;
  }
  .label2 {
    font-weight: 700;
    font-size: 12px;
    text-align: center;
    margin-top: 20px;

    span {
      font-weight: 400;
    }
  }
  select {
    background: #d9d9d9;
    border-radius: 25px;
    border: none;
    width: 100px;
    font-weight: 700;
    height: 30px;
    text-align: center;
    margin-left: 25px;
  }
  .match-color-box {
    background: #fff;
    mix-blend-mode: normal;
    border: 1px solid #fefefe;
    box-shadow: 0px 8px 19px rgba(0, 0, 0, 0.35);
    border-radius: 20px;
    height: 535px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 650px;
  }
  .color-shade {
    width: 500px;
    height: 400px;
    display: flex;
    gap: 10px;
    margin: 0 60px;
    position: relative;
    justify-content: center;
    align-items: center;
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
  .btn {
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 20px;
    padding: 10px 30px;
  }
  .button-add {
    background: #d9d9d9;
    border: 1px solid #999999;
    border-radius: 45px;
    height: 60px;
    font-weight: 500;
    font-size: 20px;
    width: 100%;
  }
  .container {
    display: flex;
    flex-wrap: wrap;
    overflow: auto;
    height: 100%;
    width: 100%;
    gap: 15px;
    margin: 20px 0 20px 0;
    justify-content: center;
    ::-webkit-scrollbar {
      display: none;
    }
  }
  .box-container {
    overflow: auto;
  }
  .box {
    width: 130px;
    height: 70px;
    background: #d9d9d9;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 10px;
    position: relative;
    overflow: hidden;
  }

  .productImg {
    height: 100px;
    width: 450px;
  }
  .product-name {
    padding-top: 15px;
    font-weight: 500;
    font-size: 20px;
    color: #000000;
    position: relative;
    text-align: center;
  }
  .product-price {
    padding-top: 5px;
    color: #000000;
    font-weight: 500;
    font-size: 18px;
    position: relative;
    text-align: center;
  }
  .sec-tco {
    position: relative;
    right: 25px;
    margin-bottom: 70px;
  }
  .button-view-all {
    background: #d9d9d9;
    border: 1px solid #000000;
    border-radius: 45px;
    height: 50px;
    font-weight: 500;
    font-size: 15px;
    width: 300px;
    position: absolute;
    right: 20px;
    top: -60px;
  }
  .reset-all {
    background: #d9d9d9;
    border-radius: 25px;
    border: none;
    height: 30px;
    font-weight: 500;
    font-size: 10px;
    width: 90px;
    margin-left: 50px;
  }
  .dummy-image {
    height: 370px;
    width: 360px;
  }
  .dummy-image-1 {
    height: 330px;
    width: 360px;
  }
  .first-image {
    position: relative;
  }
  .second-image {
    position: absolute;
    right: -35px;
  }
  .third-image {
    position: absolute;
    left: -35px;
  }
  .color-image-left {
    position: absolute;
    left: -4px;
    height: 70px;
    width: 15px;
  }
  .color-image-right {
    position: absolute;
    right: -5px;
    height: 70px;
    width: 15px;
  }
  .tc-image {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    height: 65px;
    width: 90px;
    font-size: 13px;
    text-align: center;
    font-weight: 500;
  }
  .tc-img {
    height: 40px;
    width: 40px;
  }
  .name {
    font-size: 14px;
  }

  @media screen and (max-width: 1400px) {
    .match-color-box {
      width: 600px;
    }
    .color-shade {
      width: 450px;
      height: 350px;
    }
    .btn {
      width: 550px;
      gap: 10px;
      padding: 20px 10px;
    }
    .box {
      width: 100px;
      height: 50px;
    }
    .color-image-left {
      height: 50px;
      left: -6px;
    }
    .color-image-right {
      height: 50px;
      right: -6px;
    }
    .name {
      font-size: 12px;
    }
  }
  @media screen and (max-width: 1200px) {
    .match-color-box {
      width: 500px;
    }
    .btn {
      width: 420px;
      gap: 10px;
    }
    .button-add {
      height: 40px;
      width: 140px;
      font-size: 13px;
    }
    .tc-image {
      height: 60px;
      width: 70px;
      font-size: 11px;
    }
  }
  @media screen and (max-width: 1100px) {
    .match-color-box {
      width: 420px;
      height: 400px;
    }
    .color-shade {
      width: 350px;
      height: 250px;
    }
    .btn {
      width: 350px;
    }
    .box {
      width: 80px;
      height: 40px;
      font-size: 8px;
    }
    .container {
      gap: 10px;
    }
    .label {
      margin-bottom: 10px;
    }
    .reset-all {
      margin-left: 20px;
    }
    .label2 {
      width: 400px;
    }
    .button-view-all {
      height: 50px;
      font-size: 13px;
      width: 250px;
    }
    .dummy-image {
      height: 320px;
      width: 280px;
    }
    .dummy-image-1 {
      height: 272px;
      width: 300px;
    }
    .color-image-left {
      height: 40px;
    }
    .color-image-right {
      height: 40px;
    }
    .tc-image {
      height: 40px;
      width: 50px;
      font-size: 9px;
    }
    .tc-img {
      height: 30px;
      width: 25px;
    }
    .name {
      font-size: 10px;
    }
  }
  @media screen and (max-width: 800px) {
    .section {
      flex-direction: column;
      align-items: center;
    }
    .sec-tco {
      position: relative;
      right: 0;
    }
    .sec-toc1 {
      position: relative;
      top: 20px;
      z-index: 1;
    }
    .label {
      padding: 0 30px;
      width: 350px;
    }
    .label2 {
      margin-top: 30px;
      padding: 0 10px;
    }
    .button-view-all {
      height: 50px;
      font-size: 14px;
      right: 70px;
      top: 420px;
      width: 250px;
    }
    .dummy-image-1 {
      height: 280px;
    }
  }
  @media screen and (max-width: 400px) {
    .match-color-box {
      width: 350px;
      height: 370px;
    }
    .color-shade {
      width: 250px;
      height: 250px;
    }
    .box {
      width: 75px;
    }
    .button-add {
      height: 40px;
      width: 120px;
      font-size: 13px;
    }
    .label2 {
      width: 350px;
    }
    .button-view-all {
      height: 50px;
      font-size: 12px;
      right: 70px;
      top: 390px;
      width: 200px;
    }
    .dummy-image {
      height: 250px;
      width: 220px;
    }
    .dummy-image-1 {
      margin-bottom: 30px;
      padding-top: 20px;
      height: 230px;
      width: 240px;
    }
    .btn {
      padding: 0px 10px;
    }
    .name {
      font-size: 9px;
    }
  }

  @media screen and (max-width: 1000px) {
    margin: 0;
    width: 100%;
    .productImg {
      width: 150px;
    }
    .heading-section {
      flex-direction: column;
    }
    .none {
      display: none;
    }
    .label2 {
      font-weight: 600;
      font-size: 11px;
    }
    .reset-all {
      height: 20px;
      font-weight: 500;
      font-size: 8px;
      width: 70px;
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
    .label .labell {
      font-size: 14px;
      position: relative;
      top: 10px;
    }
  }
`;
const AllColors = Colors;

const WebApp = () => {
  const router = useRouter();

  const [category, setCategory] = useState(router.query.type || "");
  const [products, setProducts] = useState([]);
  const [color, setColor] = useState([]);
  const [colorTag] = useState(router.query.color || "" || []);
  const [checkColor, setCheckColor] = useState(false);
  const [cartProduct, setCartProduct] = useState([]);
  const { currentUser } = useAuth();

  useEffect(() => {
    getAllProducts(setProducts);
  }, []);

  const selectedProduct = useMemo(() => {
    return products?.filter((ele) => {
      return ele.category === category &&
        (ele?.tag?.includes(colorTag) || true) &&
        ele?.color[0]
        ? color.includes(
            ele?.color[0]?.color?.toUpperCase() || ele?.color[0]?.toUpperCase()
          )
          ? ele
          : null
        : null;
    });
  }, [color, category]);

  const onSelect = (data) => {
    if (color.includes(data)) {
      setColor((prev) => prev.filter((color) => color !== data));
    } else {
      if (color.length < 3) {
        setColor((prev) => {
          return [...prev, data];
        });
      } else {
        toast("You can choose only max upto 3 colors !!");
      }
    }
  };

  const handleClick = () => {
    const ids = selectedProduct.map((data) => data?.id);
    router.push({
      pathname: "/product/1",
      query: { ids: ids, category: router?.query?.type },
    });
  };

  useEffect(() => {
    const db = getDatabase();
    const starCountRef = ref(db, "cartItem/");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setCartProduct(Object.entries(data));
      }
    });
  }, []);

  const cartProducts =
    cartProduct &&
    cartProduct.map(([key]) => {
      return Object.values(key).join("");
    });

  const addToCart = () => {
    const db = getDatabase();
    selectedProduct?.map((ele) => {
      if (cartProducts.includes(ele.id.toString())) {
        toast(`Your ${ele.name} is already in Cart !!`);
      } else {
        // if (currentUser?.email) {
        set(ref(db, "cartItem/" + ele.id), {
          cartData: ele,
          uid: currentUser?.uid || "",
        });
        toast("Your Item is added in Cart");
        router.push("/cart");
        // } else {
        //   toast("Please Login!!");
        // }
      }
    });
  };

  const Colors = colors.find((data) => {
    if (data.key === router?.query?.color) {
      return checkColor ? "" : data;
    } else {
      return "";
    }
  });

  const handleAllColor = () => {
    setCheckColor(!checkColor);
  };

  const renderColors = router?.query?.color
    ? checkColor
      ? AllColors
      : Colors?.data
    : AllColors;

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
          wrapperClass="blocks-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
      </div>
    );
  }

  const onMouse = (category) => {
    setCategory(category);
  };
  return (
    <>
      <Breadcrumb separator=">" style={{ marginLeft: "120px" }}>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item>TCOMaC</Breadcrumb.Item>
      </Breadcrumb>
      <WebAppWrapper>
        <div>
          <div className="heading-section">
            <img src={Tcomac.src} alt="tcomac" height={35} />
            <h3 className="none">&nbsp;|&nbsp;</h3>
            <div style={{ paddingBottom: "12px" }}>
              The Crafted Online Matching Center
            </div>
          </div>
          <div className="section">
            <section className="sec-toc1">
              <div className="match-color-box">
                <div className="label">
                  {TCOMaCPageImage.map((ele) => {
                    return (
                      <div
                        className="tc-image"
                        onClick={() => onMouse(ele.category)}
                        style={
                          category === ele.category
                            ? { background: "#393D46", color: "white" }
                            : { background: "#ededed" }
                        }
                      >
                        {ele.icon ? (
                          category === ele.category ? (
                            <div>{ele.name}</div>
                          ) : (
                            <img
                              src={ele.icon.src}
                              alt="image"
                              className="tc-img"
                            />
                          )
                        ) : (
                          <div>more</div>
                        )}
                      </div>
                    );
                  })}
                </div>
                <div className="color-shade">
                  {selectedProduct.length ? (
                    selectedProduct.map((ele, i) => {
                      return (
                        <img
                          src={ele?.image[0]}
                          className={`dummy-image ${
                            i === 0
                              ? "first-image"
                              : i === 1
                              ? "second-image"
                              : i === 2
                              ? "third-image"
                              : "forth-image"
                          }`}
                          key={i}
                          alt="image"
                        />
                      );
                    })
                  ) : (
                    <div>
                      {images.map((image) => {
                        return (
                          image.category === category && (
                            <img
                              src={image?.img?.src}
                              alt="images"
                              className="dummy-image-1"
                            />
                          )
                        );
                      })}
                    </div>
                  )}
                </div>
                <div className="btn">
                  <button
                    className="button-add"
                    onClick={() => addToCart()}
                    style={{ cursor: "pointer" }}
                  >
                    Add to Cart
                  </button>

                  <button
                    className="button-add"
                    onClick={() => handleClick()}
                    style={{ cursor: "pointer" }}
                  >
                    View Product
                  </button>
                  <button
                    className="button-add"
                    style={{ cursor: "pointer" }}
                    onClick={() => addToCart()}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </section>
            <section className="sec-tco">
              {router?.query?.color && (
                <button
                  className="button-view-all"
                  onClick={() => handleAllColor()}
                  style={{ cursor: "pointer" }}
                >
                  {checkColor
                    ? `Back to your selected Color ${colorTag}`
                    : "View All Colors"}
                </button>
              )}
              <div className="match-color-box">
                <div className="label2">
                  Choose your desired colors - <span>max upto 3 colors </span>
                  <button
                    className="reset-all"
                    onClick={() => setColor([])}
                    style={{ cursor: "pointer" }}
                  >
                    Clear selection
                  </button>
                </div>
                <div className="container">
                  {renderColors &&
                    renderColors.map((data, i) => {
                      return (
                        <div className="box-container" key={i}>
                          <div
                            className="box"
                            style={
                              color.includes(data.code[0])
                                ? {
                                    color: "black",
                                    background: data.code,
                                    cursor: "pointer",
                                  }
                                : { background: data.code, cursor: "pointer" }
                            }
                            onClick={() => onSelect(data.code[0])}
                          >
                            <img
                              src={colorLeft.src}
                              alt="whitespace"
                              className="color-image-left"
                            />
                            <div className="name">
                              {data.id}. &nbsp; {data.color}
                            </div>
                            <img
                              src={colorRight.src}
                              alt="whitespace"
                              className="color-image-right"
                            />
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </section>
          </div>
        </div>
      </WebAppWrapper>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default WebApp;
