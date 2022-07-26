import React from "react";
import styled from "styled-components";
import { CgClose } from "react-icons/cg";
import { BiPlus,BiMinus } from "react-icons/bi";

const ShoppingCartWrapper = styled.div`
padding-top: 50px;
width: 100%;
    .shop-heading {
        display: grid;
        grid-template-columns: 2fr 1fr 1fr 1fr .1fr;
        justify-content: start;
        align-items: center;
        gap:30px;
        padding: 10px 0px;
        border-bottom: 1px solid #CDCFD1;

        p {
            font-weight: 500;
            font-size: 18px;
            line-height: 27px;
            color: #9F9F9F;
        }
    }
    .select-product{
        display: grid;
        grid-template-columns: 2fr 1fr 1fr 1fr .1fr;
        justify-content: start;
        align-items: center;
        gap:30px;
        padding: 20px 0px;
        border-bottom: 1px solid #CDCFD1;

        .products {
            display : flex;
            align-items: center;
            gap:70px;
            div {
                height: 150px;
                width: 150px;
                border: 1px solid #CDCFD1;
                div {
                    margin: 9px 0px 0px 9px;
                    height: 130px;
                    width: 130px;
                    background: #CDCFD1;
                }
            }
        }
        .add-item {
            display : flex;
            justify-content: flex-start;
            align-items: center;
            
            a {
                padding: 4px;
                font-weight: 700;
                font-size: 28px;
                line-height: 27px;
                text-align: center;
                color: #FFFFFF;
                background: #393D46;
            }
            input {
                height: 38px;
                width: 70px;
                text-align: center;
            }
        }

        div {
            font-weight: 500;
            font-size: 24px;
            line-height: 36px;
            color: #393D46;
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
                border: 1px solid #CDCFD1;
                font-weight: 400;
                font-size: 18px;
                color: #9F9F9F;
                padding-left: 10px;
            }

            a {
                padding: 13px;
                font-weight: 400;
                font-size: 18px;
                line-height: 27px;
                text-align: center;
                color: #FFFFFF;
                background: #393D46;
            }
        }

        .total {
            text-align: end;
           p {
            font-weight: 500;
            font-size: 18px;
            line-height: 27px;
            color: #9F9F9F;
           }
           h5 {
            font-weight: 700;
            font-size: 36px;
            line-height: 54px;
            color: #393D46;
           }
        }
    }

  @media screen and (max-width:1271px){
    .products {
        flex-direction: column;
        align-items: flex-start !important;
        gap:30px !important;  
    }
    
  }
  @media screen and (max-width:810px){
    .add-item {
        input {
            width: 38px !important;
        }
    } 
    .products {
        gap:10px !important;  

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
  @media screen and (max-width:727px){
    .shop-heading,.select-product {
        grid-template-columns: 1.5fr 1fr 1fr 1fr .1fr;
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
            display : flex;
            align-items: flex-start;
            
        }
    }
  }
  @media screen and (max-width:444px){
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
    return (
      <ShoppingCartWrapper>
        <div className="shop-heading">
            <p>Product</p>
            <p>Quantity</p>
            <p>Price</p>
            <p>Price</p>
        </div>
        <div className="shop-product">
            {[1, 2].map((_) => {
            return (
                <>
                <div className="select-product">
                    <div className="products">
                        <div>
                            <div></div>
                        </div>
                        <p>Gray T-shirt</p>
                    </div>
                    <div className="add-item">
                        <a href="/"><BiMinus/></a>
                        <input type="text" name="qut" value='1' readOnly/>
                        <a href="/"><BiPlus/></a>
                    </div>
                    <div>$100.99</div>
                    <div>$100.99</div>
                    <div className="close"><CgClose size={30}/></div>
                </div>
                </>
                );
            })}
        </div>
        <div className="code-total">
            <div className="code">
                <input type="text" name="code" value='Enter coupon code'/>
                <a href="/">Apply Code</a>
            </div>
            <div className="total">
                <p>Total</p>
                <h5>$202.00</h5>
            </div>
        </div>
      </ShoppingCartWrapper>
    );
};

export default ShoppingCart;