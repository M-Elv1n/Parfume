import React from "react";
import { useParams, Link } from "react-router-dom";
import productsData from "../../../../data/products.json";
import "./css/productlistman.scss";
import "../../css/detail.scss";
import Empty from "../../../../components/Empty";
import BackBtn from "../../../../components/BackBtn";

function ProductDetails() {
  const { productName } = useParams();
  const product = productsData.find(
    (product) => product.name.toLowerCase().replace(/\s+/g, "-") === productName
  );

  if (!product) {
    return (
      <div className="">
        <BackBtn />
        <Empty />
      </div>
    );
  }

  return (
    <div className="detail__container">
      <BackBtn />
      <div className="container detail">
        <img src={`../../${product.image}`} alt={product.name} />
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>{product.price}azn</p>
      </div>
    </div>
  );
}

export default ProductDetails;
