import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import Footer from "../src/CommonComponent/Footer/FooterContact";
import "antd/dist/antd.css";
import SingleProductModal from "../src/CommonComponent/SpecialProductModal";
import { Select } from "antd";
import { Breadcrumb } from "antd";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../src/Firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getDatabase, onValue, ref, set } from "firebase/database";
import { useAuth } from "../src/auth/AuthContext";
import { useRouter } from "next/router";
import { ColorRing } from "react-loader-spinner";
import {
  black,
  blue,
  brown,
  Colors,
  cream,
  gajri,
  gray,
  green,
  mehendi,
  metal,
  orange,
  pink,
  purple,
  red,
  white,
  yellow,
} from "../src/CommonComponent/Colors";
import { images } from "../src/CommonComponent/BlankImages";
import Image from "next/image";

const WebAppWrapper = styled.div`
  .section {
    display: flex;
    justify-content: center;
  }
  .heading-section {
    font-weight: 700;
    font-size: 30px;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 30px;
  }
  .label {
    display: flex;
    align-items: center;
    font-weight: 400;
    font-size: 16px;
    padding-left: 50px;
    margin-bottom: 20px;
    margin-top: 20px;
    width: 450px;
  }
  .label2 {
    font-weight: 700;
    font-size: 16px;
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
    border: 1px solid #000000;
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
    padding: 20px 30px;
  }
  .button-add {
    background: #d9d9d9;
    border: 1px solid #000000;
    border-radius: 45px;
    height: 60px;
    font-weight: 500;
    font-size: 20px;
    width: 100%;
    margin-top: 30px;
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
    height: 60px;
    background: #d9d9d9;
    border: 1px solid #000000;
    border-radius: 30px;
    display: flex;
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
  }
  @media screen and (max-width: 1200px) {
    .match-color-box {
      width: 500px;
    }
    .btn {
      width: 420px;
      gap: 10px;
      padding: 20px 10px;
    }
    .button-add {
      height: 40px;
      width: 140px;
      font-size: 13px;
    }
  }
  @media screen and (max-width: 1100px) {
    .match-color-box {
      width: 400px;
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
    }
    .container {
      gap: 10px;
    }
    .label {
      margin-bottom: 30px;
    }
    .label2 {
      width: 400px;
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
  }

  @media screen and (max-width: 1000px) {
    margin: 0;
    width: 100%;
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
const AllColors = Colors;

const WebApp = () => {
  const router = useRouter();
  console.log(router, "routeer");

  const [category, setCategory] = useState(router.query.type || "");
  const [products, setProducts] = useState([]);
  const [color, setColor] = useState([]);
  const [ids, setIds] = useState([]);
  const [colorTag, setColorTag] = useState(router.query.color || "" || []);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [cartProduct, setCartProduct] = useState([]);
  const { currentUser } = useAuth();

  const handleSelectChange = (value) => {
    setCategory(value);
  };
  const productsCollection = collection(db, "specialProducts");
  const getAllProducts = async () => {
    console.time();
    const data = await getDocs(productsCollection);
    console.timeEnd();
    setProducts(data.docs.map((data) => ({ ...data.data(), id: data.id })));
  };
  useEffect(() => {
    getAllProducts();
  }, []);

  const selectedProduct = useMemo(() => {
    return products.filter((ele) => {
      return ele.category === category &&
        ele?.tag?.includes(colorTag) &&
        ele?.color[0]?.color
        ? color.includes(ele?.color[0]?.color?.toUpperCase())
          ? ele
          : null
        : null;
    });
  }, [color, category]);
  console.log(selectedProduct, "product");
  const onSelect = (data) => {
    if (color.includes(data)) {
      setColor((prev) => prev.filter((color) => color !== data));
    } else {
      if (color.length < 4) {
        setColor((prev) => {
          return [...prev, data];
        });
      } else {
        toast("You can choose only max upto 4 colors !!");
      }
    }
  };

  const handleClick = () => {
    const ids = selectedProduct.map((data) => data?.id);
    console.log(ids, "ids");
    router.push({
      pathname: "/product/1",
      query: { ids: ids, category: router?.query?.type },
    });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
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
    selectedProduct.map((ele) => {
      if (cartProducts.includes(ele.id.toString())) {
        toast(`Your ${ele.name} is already in Cart !!`);
      } else {
        set(ref(db, "cartItem/" + ele.id), {
          cartData: ele,
          uid: currentUser.uid,
        });
        toast("Your Item is added in Cart");
      }
    });
  };
  const { Option } = Select;

  const colors = [
    { data: red, key: "red" },
    { data: blue, key: "blue" },
    { data: cream, key: "cream" },
    { data: green, key: "green" },
    { data: yellow, key: "yellow" },
    { data: gray, key: "gray" },
    { data: white, key: "white" },
    { data: black, key: "black" },
    { data: mehendi, key: "mehendi" },
    { data: brown, key: "brown" },
    { data: metal, key: "metal" },
    { data: purple, key: "purple" },
    { data: orange, key: "orange" },
    { data: gajri, key: "gajri" },
    { data: pink, key: "pink" },
  ];

  const Colors = colors.find((data) => {
    if (data.key === router?.query?.color) {
      return data;
    } else {
      return "";
    }
  });
  const renderColors = router?.query?.color ? Colors?.data : AllColors;

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
    <>
      <Breadcrumb separator=">" style={{ marginLeft: "120px" }}>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item>TCOMaC</Breadcrumb.Item>
      </Breadcrumb>
      <WebAppWrapper>
        <div>
          <div className="heading-section">
            TCOMaC - The Crafted Online Matching Center
          </div>
          <div className="section">
            <section className="sec-toc1">
              <div className="match-color-box">
                <div className="label">
                  <div>Select a Product</div> &nbsp;&nbsp;&nbsp;
                  <Select
                    style={{
                      width: "50%",
                    }}
                    value={category}
                    onChange={handleSelectChange}
                  >
                    <Option value="petticoat">Saree Petticoat</Option>
                    <Option value="poplin-cotton">Poplin Cotton Fabric</Option>
                    <Option value="patiala">Patiala Salwar</Option>
                    <Option value="full-patiala">Full Patiala Salwar</Option>
                    <Option value="semi-patiala">Semi Patiala Salwar</Option>
                  </Select>
                </div>
                <div className="color-shade">
                  {selectedProduct.length ? (
                    selectedProduct.map((ele, i) => {
                      return (
                        <img
                          src={ele?.image[0]}
                          height={350}
                          width={300}
                          key={i}
                          alt="image"
                          style={
                            i === 0
                              ? { position: "relative" }
                              : i === 1
                              ? { position: "absolute", left: "140px" }
                              : i === 2
                              ? { position: "absolute", right: "150px" }
                              : { position: "absolute", left: "200px" }
                          }
                        />
                      );
                    })
                  ) : (
                    <div>
                      {images.map((image) => {
                        console.log(image, "image");
                        return (
                          image.category === category && (
                            <Image
                              src={image.img}
                              alt="images"
                              height={350}
                              width={300}
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
                  <button className="button-add" style={{ cursor: "pointer" }}>
                    Buy Now
                  </button>
                </div>
              </div>
            </section>
            <section className="sec-tco">
              <div className="match-color-box">
                <div className="label2">
                  Choose your desired colors -{" "}
                  <span>max upto 4 colors for discounted price </span>
                </div>
                <div className="container">
                  {renderColors &&
                    renderColors.map((data, i) => {
                      return (
                        <div className="box-container" key={i}>
                          <div
                            className="box"
                            style={
                              color.includes(data[0])
                                ? {
                                    border: "4px solid black",
                                    background: data,
                                    cursor: "pointer",
                                  }
                                : { background: data, cursor: "pointer" }
                            }
                            onClick={() => onSelect(data[0])}
                          ></div>
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
      {isModalVisible && color.length > 0 && (
        <SingleProductModal
          handleCancel={handleCancel}
          selectedProduct={selectedProduct}
          setColor={setColor}
          color={color}
        />
      )}
      <ToastContainer />
    </>
  );
};

export default WebApp;
