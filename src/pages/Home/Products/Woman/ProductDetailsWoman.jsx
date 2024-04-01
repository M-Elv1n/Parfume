import React from "react";
import { useParams, Link } from "react-router-dom";
import productsData from "../../../../data/productsWoman.json";
import "./css/productlistwoman.scss";
import "../../css/detail.scss";
import Empty from "../../../../components/Empty";
import BackBtn from "../../../../components/BackBtn";

function ProductDetailsWomen() {
  const { productName } = useParams();
  const product = productsData.find(
    (product) => product.name.toLowerCase().replace(/\s+/g, "-") === productName
  );

  if (!product) {
    return <div className="">
      <BackBtn />
      <Empty />
    </div>
  }

  return (
    <div className="detail__container">
      <BackBtn />
      <div className="detail">
        <img src={`../../${product.image}`} alt={product.name} />
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>{product.price}azn</p>
      </div>
    </div>
  );
}

export default ProductDetailsWomen;
