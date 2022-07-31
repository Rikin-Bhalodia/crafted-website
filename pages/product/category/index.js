import React from "react";
import styled from "styled-components";
import ProductComponent from "../../../src/Components/product-category/ProductComponent";
const ProductCategoryWrapper = styled.div`
  height: 2000px;
  .product-heading {
    display: flex;
    justify-content: center;
    align-items: center;

    h3 {
      font-size: 40px;
    }
  }
  .products {
  }
`;

const ProductCategory = () => {
  return (
    <>
      <ProductCategoryWrapper>
        <div className="product-heading">
          <h3>Products</h3>
        </div>
        <div className="products">
          <ProductComponent />
        </div>
      </ProductCategoryWrapper>
    </>
  );
};

export default ProductCategory;
