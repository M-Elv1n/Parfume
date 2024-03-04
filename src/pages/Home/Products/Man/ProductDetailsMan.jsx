// etot kod delayetse s fetch

// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import productsData from "../Man/products.json";

// function ProductDetails() {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     // Загрузите данные о продукте с определенным ID из вашего JSON-файла
//     fetch(productsData)
//       .then((response) => response.json())
//       .then((data) => setProduct(data[id]));
//   }, [id]);

//   if (!product) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h2>{product.name}</h2>
//       <p>Description: {product.description}</p>
//       <p>Price: {product.price}</p>
//       {/* Добавьте другие детали продукта, если необходимо */}
//     </div>
//   );
// }

// export default ProductDetails;

import React from "react";
import { useParams } from "react-router-dom";
import productsData from "../../../../data/products.json";
import "./css/productlistman.scss";
import { Link } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  const product = productsData.find((product) => product.id === parseInt(id));

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="man__product--detail__container">
      <Link to="/">
        <h3 className="back">Esas Seyfe</h3>
      </Link>
      <div className="container man__product--detail">
        {console.log(product)}
        <img src={`../../${product.image}`} alt={product.name} />
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>{product.price}azn</p>
      </div>
    </div>
  );
}

export default ProductDetails;
