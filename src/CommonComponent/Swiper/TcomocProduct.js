import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import styled from "styled-components";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Firebase";

const ProductWrapper = styled.div``;

export default function TcomocProduct(products) {
  const { data } = products;
  return <ProductWrapper></ProductWrapper>;
}
