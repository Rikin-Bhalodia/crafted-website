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
import { FiChevronRight } from "react-icons/fi";



const dummyData = [
    {
        img: Jacket,
        heading: "Jacket",
    },
    {
        img: Shirt,
        heading: "Shirt",
    },
    {
        img: Pants,
        heading: "Pants",
    },
    {
        img: Skirt,
        heading: "Skirt",
    },
    {
        img: Dress,
        heading: "Dress",
    },
    {
        img: Underware,
        heading: "Underwear",
    },
    {
        img: Shoes,
        heading: "Shoes",
    },
    {
        img: Accesories,
        heading: "Accesories",
    },
  ];

const ProductWrapper = styled.div`
    padding: 0px 80px 40px;
    width: 100%;
    .product-pagition {
        display: flex;
        gap: 10px;

        div {
            font-weight: 500;
            font-size: 18px;
            line-height: 27px;
            color: #9F9F9F;
        }
    }
    .product-heading {
        display : flex;
        justify-content: center;
        width: 100%;

        h3 {
            font-weight: 700;
            font-size: 36px;
            line-height: 54px;
            color: #393D46;
        }
    }
    .product-section {
        width: 100%;
        display : flex;
        gap:30px;
        .sort-product {
            width: 25%;
            background: #393D46;

        }
        .product-data {
            width: 75%;
            display: flex;
            gap:30px;
            flex-wrap: wrap;
            .collection {
                width: 48%;
                height: 220px;
                display : flex;
                justify-content: center;
                align-items: center;
                background: #F6F7FB;
                gap:30px;

                .col-data {
                    display : flex;
                    flex-direction: column;
                    justify-content: center;
                    /* align-items: center; */

                    p {
                        font-weight: 400;
                        font-size: 36px;
                        line-height: 0.1px;
                        color: #9F9F9F;
                    }
                }
            }
        }
    }

    @media screen and (max-width: 1200px){
        .product-section {
            flex-direction:column;

            .product-data {
                width: 100%;
            }
        }
    }

    @media screen and (max-width: 930px){
        .collection {
            width: 100% !important;
        }   
    }

    @media screen and (max-width: 570px){
        padding: 0px 20px 40px;
        .col-data {
            p{
                font-size: 30px !important;
            }
        }
    }
`;
const Product = () => {
  return (
    <ProductWrapper>
        <div className="product-pagition">
            <div>Home</div>
            <div><FiChevronRight/></div>
            <div style={{color: '#393D46'}}>Categories</div>
        </div>

        <div className="product-heading">
            <h3>Products</h3>
        </div>

        <div className="product-section">
            <div className="sort-product"></div>
            <div className="product-data">
                {dummyData.map((data) => {
                    return (
                        <div className="collection">
                            <Image src={data.img} alt='Collaction-image'/>
                            <div className="col-data">
                                <p style={{fontWeight: '700',color: '#393D46'}}>{data.heading}</p>
                                <p>Collection</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    </ProductWrapper>
    );
};

export default Product;