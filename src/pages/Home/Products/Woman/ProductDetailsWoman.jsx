// import React from "react";
// import { useParams } from "react-router-dom";
// import productsData from "../../../../data/productsWoman.json";
// import "./css/productlistwoman.scss";
// import { Link } from "react-router-dom";

// function ProductDetailsWomen() {
//   const { id } = useParams();
//   const product = productsData.find((product) => product.id === parseInt(id));

//   if (!product) {
//     return <div>Loading...</div>;
//   }

//   return (
//     // <div className="container man__product--detail">
//     //   <h2>{product.name}</h2>
//     //   <p>Description: {product.description}</p>
//     //   <p>Price: {product.price}</p>
//     //   {/* Добавьте другие детали продукта, если необходимо */}
//     // </div>
//     <div className="woman__product--detail__container">
//       <Link to="/">
//         <h3 className="back">Əsas Səhifə</h3>
//       </Link>
//       <div className="container woman__product--detail">
//         {console.log(product)}
//         <img src={`../../${product.image}`} alt={product.name} />
//         <h2>{product.name}</h2>
//         <p>{product.description}</p>
//         <p>{product.price}azn</p>
//       </div>
//     </div>
//   );
// }

// export default ProductDetailsWomen;




import React from "react";
import { useParams } from "react-router-dom";
import productsData from "../../../../data/productsWoman.json";
import "./css/productlistwoman.scss";
import { Link } from "react-router-dom";

function ProductDetailsWomen() {
  const { productName } = useParams();
  const product = productsData.find((product) => product.name.toLowerCase().replace(/\s+/g, '-') === productName);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="woman__product--detail__container">
      <Link to="/">
        <h3 className="back">Əsas Səhifə</h3>
      </Link>
      <div className="woman__product--detail">
        <img src={`../../${product.image}`} alt={product.name} />
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>{product.price}azn</p>
      </div>
    </div>
  );
}

export default ProductDetailsWomen;