import React from "react";
import { useParams } from "react-router-dom";
import productsData from "../../../../data/products.json";
import './css/productlistman.scss';

function ProductDetails() {
  const { id } = useParams();
  const product = productsData.find((product) => product.id === parseInt(id));

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container man__product--detail">
      <h2>{product.name}</h2>
      <p>Description: {product.description}</p>
      <p>Price: {product.price}</p>
      {/* Добавьте другие детали продукта, если необходимо */}
    </div>
  );
}

export default ProductDetails;
