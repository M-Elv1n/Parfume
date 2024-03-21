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
import "../../css/link.scss";
import { Link } from "react-router-dom";

function ProductDetails() {
  // const { id } = useParams();
  // const product = productsData.find((product) => product.id === parseInt(id));

  // {dle marwrute imeni pructa}
  const { productName } = useParams();
  const product = productsData.find(
    (product) => product.name.toLowerCase().replace(/\s+/g, "-") === productName
  );

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="man__product--detail__container">
      <Link to="/" class="link">
        <div class="link-icon">
          <svg
            class="icon"
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            clip-rule="evenodd"
          >
            {/* <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" /> */}
            <path d="M2.117 12l7.527 -6.235 -.644 -.765 -9 7.521 9 7.479 .645 -.764 -7.529 -6.236h21.884v1h-21.883z" />
          </svg>
          <svg
            class="icon"
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            clip-rule="evenodd"
          >
            {/* <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" /> */}
            <path d="M2.117 12l7.527 -6.235 -.644 -.765 -9 7.521 9 7.479 .645 -.764 -7.529 -6.236h21.884v1h-21.883z" />
          </svg>
        </div>
        <span class="mask">
          <div class="link-container">
            <span class="link-title1 title">Əsas səhifə</span>
            <span class="link-title2 title">Əsas səhifə</span>
          </div>
        </span>
      </Link>
      <div className="container man__product--detail">
        <img src={`../../${product.image}`} alt={product.name} />
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>{product.price}azn</p>
      </div>
    </div>
  );
}

export default ProductDetails;
