import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Accesories from "../../public/svg/product-svg/accesories.svg";
import Dress from "../../public/svg/product-svg/dress.svg";
import Jacket from "../../public/svg/product-svg/jacket.svg";
import Pants from "../../public/svg/product-svg/pants.svg";
import Shirt from "../../public/svg/product-svg/shirt.svg";
import Skirt from "../../public/svg/product-svg/skirt.svg";
import Shoes from "../../public/svg/product-svg/shoes.svg";
import Underware from "../../public/svg/product-svg/underware.svg";
// import { FiChevronRight } from "react-icons/fi";
import { GoStar } from "react-icons/go";
import "antd/dist/antd.css";
import { Collapse } from "antd";
import { Breadcrumb } from "antd";
import { useRouter } from "next/router";

const { Panel } = Collapse;

const dummyData = [
  {
    img: Jacket,
    heading: "Jacket",
    key: "jackets",
  },
  {
    img: Shirt,
    heading: "Shirt",
    key: "shirts",
  },
  {
    img: Pants,
    heading: "Pants",
    key: "pants",
  },
  {
    img: Skirt,
    heading: "Skirt",
    key: "skirts",
  },
  {
    img: Dress,
    heading: "Dress",
    key: "dress",
  },
  {
    img: Underware,
    heading: "Underwear",
    key: "underwears",
  },
  {
    img: Shoes,
    heading: "Shoes",
    key: "shoes",
  },
  {
    img: Accesories,
    heading: "Accesories",
    key: "accesories",
  },
];

const ProductWrapper = styled.div`
  padding: 0px 80px 40px;
  width: 100%;

  .product-heading {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 20px 0px 20px;

    h3 {
      font-weight: 700;
      font-size: 36px;
      line-height: 54px;
      color: #393d46;
    }
  }
  .product-section {
    width: 100%;
    display: flex;
    gap: 50px;
    .sort-product {
      width: 25%;

      .collapse {
        .panel {
          font-size: 18px;
          font-weight: 500;
          p {
            border-bottom: 3px solid #f6f7fb;
            padding-bottom: 30px;
            padding-left: 20px;

            input {
              width: 20px;
              height: 20px;
              border: 3px solid #cdcfd1;
              margin-bottom: 15px;
              cursor: pointer;
            }

            label {
              font-weight: 400;
              font-size: 18px;
              line-height: 27px;
              color: #9f9f9f;
              margin-bottom: 15px;
              cursor: pointer;
            }
          }
        }
      }
    }
    .product-data {
      width: 75%;
      display: flex;
      gap: 30px;
      flex-wrap: wrap;
      .collection {
        cursor: pointer;
        width: 48%;
        height: 220px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #f6f7fb;
        gap: 30px;

        .col-data {
          display: flex;
          flex-direction: column;
          justify-content: center;
          /* align-items: center; */

          p {
            font-weight: 400;
            font-size: 36px;
            line-height: 0.1px;
            color: #9f9f9f;
          }
        }
      }
    }
  }

  @media screen and (max-width: 1200px) {
    .product-section {
      flex-direction: column;

      .product-data {
        width: 100%;
      }
      .sort-product {
        width: 100%;
      }
    }
  }

  @media screen and (max-width: 930px) {
    .product-heading {
      padding: 20px 0px 0px;
    }
    .collection {
      width: 100% !important;
    }
  }

  @media screen and (max-width: 570px) {
    padding: 0px 20px 40px;
    .col-data {
      p {
        font-size: 30px !important;
      }
    }
  }
`;
const Product = () => {
  const router = useRouter();
  const handleClick = (key) => {
    router.push(`/product/category/${key}`);
  };
  return (
    <>
      <Breadcrumb separator=">" style={{ marginLeft: "120px" }}>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item>Categories</Breadcrumb.Item>
      </Breadcrumb>
      <ProductWrapper>
        <div className="product-heading">
          <h3>Products</h3>
        </div>

        <div className="product-section">
          <div className="sort-product">
            <Collapse className="collapse" defaultActiveKey={["1", "2"]} ghost>
              <Panel className="panel" header="Filter by Price" key="1">
                <p>
                  <input type="checkbox" id="price" name="price" value="All" />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <label htmlFor="price">All Price</label>
                  <br />
                  <input
                    type="checkbox"
                    id="price"
                    name="price"
                    value="100-250"
                  />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <label htmlFor="price">$100 - $250</label>
                  <br />
                  <input
                    type="checkbox"
                    id="price"
                    name="price"
                    value="250-500"
                  />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <label htmlFor="price">$250 - $500</label>
                  <br />
                  <input
                    type="checkbox"
                    id="price"
                    name="price"
                    value="750-1000"
                  />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <label htmlFor="price">$750 - $1000</label>
                  <br />
                  <input
                    type="checkbox"
                    id="price"
                    name="price"
                    value="1000-1500"
                  />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <label htmlFor="price">$1000 - $1500</label>
                  <br />
                </p>
              </Panel>
              <Panel className="panel" header="Filter by Rating" key="2">
                <p>
                  <input type="checkbox" id="star" name="star" value="1star" />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <label htmlFor="star" style={{ color: "#FBEA53" }}>
                    <GoStar size={25} />
                  </label>
                  <br />
                  <input type="checkbox" id="star" name="star" value="2star" />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <label htmlFor="star" style={{ color: "#FBEA53" }}>
                    <GoStar size={25} />
                    &nbsp;
                    <GoStar size={25} />
                  </label>
                  <br />
                  <input type="checkbox" id="star" name="star" value="3star" />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <label htmlFor="star" style={{ color: "#FBEA53" }}>
                    <GoStar size={25} />
                    &nbsp;
                    <GoStar size={25} />
                    &nbsp;
                    <GoStar size={25} />
                  </label>
                  <br />
                  <input type="checkbox" id="star" name="star" value="4star" />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <label htmlFor="star" style={{ color: "#FBEA53" }}>
                    <GoStar size={25} />
                    &nbsp;
                    <GoStar size={25} />
                    &nbsp;
                    <GoStar size={25} />
                    &nbsp;
                    <GoStar size={25} />
                  </label>
                  <br />
                  <input type="checkbox" id="star" name="star" value="5star" />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <label htmlFor="star" style={{ color: "#FBEA53" }}>
                    <GoStar size={25} />
                    &nbsp;
                    <GoStar size={25} />
                    &nbsp;
                    <GoStar size={25} />
                    &nbsp;
                    <GoStar size={25} />
                    &nbsp;
                    <GoStar size={25} />
                  </label>
                  <br />
                </p>
              </Panel>
              <Panel className="panel" header="Filter by Color" key="3">
                <p></p>
              </Panel>
              <Panel className="panel" header="Filter by Size" key="4">
                <p></p>
              </Panel>
            </Collapse>
          </div>
          <div className="product-data">
            {dummyData.map((data) => {
              return (
                <div
                  className="collection"
                  key={data}
                  onClick={() => handleClick(data.key)}
                >
                  <Image src={data.img} alt="Collaction-image" />
                  <div className="col-data">
                    <p style={{ fontWeight: "700", color: "#393D46" }}>
                      {data.heading}
                    </p>
                    <p>Collection</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </ProductWrapper>
    </>
  );
};

export default Product;
