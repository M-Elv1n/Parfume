// import React, { useState } from "react";
// import { Routes, Route } from "react-router-dom"; // Удалите BrowserRouter
// import Home from "./pages/Home/Home";
// import ProductList from "./pages/Home/Products/Man/ProductListMan";
// import ProductDetails from "./pages/Home/Products/Man/ProductDetailsMan";
// import ProductListWomen from "./pages/Home/Products/Woman/ProductListWoman";
// import ProductDetailsWomen from "./pages/Home/Products/Woman/ProductDetailsWoman";
// import AddProductWomen from "./pages/Home/Products/Woman/AddProductWoman";
// import AddProduct from "./pages/Home/Products/Man/AddProductMan";
// import "./css/styles.scss";

// function App() {
//   const [products, setProducts] = useState([]);
//   const [productsWomen, setProductsWomen] = useState([]);

//   // Функция для добавления нового продукта и автоматического увеличения номера страницы
//   const addProduct = (newProduct) => {
//     setProducts([...products, newProduct]);
//   };
//   const addProductWomen = (newProduct) => {
//     setProductsWomen([...productsWomen, newProduct]); // Исправлено здесь
//   };

//   return (
//     <div>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route
//           path="/kisi-etirleri"
//           element={<ProductList products={products} />}
//         />
//         <Route
//           path="/product/:id"
//           element={<ProductDetails products={products} />}
//         />
//         {/* <Route path="/man/:productName" component={ProductDetails} />   */}
//         {/* {marwrut s pomowyu nazvaniya producta} */}
//         <Route
//           path="/qadin-etirleri"
//           element={<ProductListWomen productsWomen={productsWomen} />}
//         />
//         {/* <Route
//           path="/qadin-etirleri/:productName"
//           // component={ProductDetailsWomen}
//         /> */}
//         <Route
//           path="/product/:id"
//           element={<ProductDetailsWomen addProductWomen={addProductWomen} />}
//         />
//         <Route path="/add" element={<AddProduct addProduct={addProduct} />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import ProductList from "./pages/Home/Products/Man/ProductListMan";
import ProductDetails from "./pages/Home/Products/Man/ProductDetailsMan";
import ProductListWomen from "./pages/Home/Products/Woman/ProductListWoman";
import ProductDetailsWomen from "./pages/Home/Products/Woman/ProductDetailsWoman";
import AddProductWomen from "./pages/Home/Products/Woman/AddProductWoman";
import AddProduct from "./pages/Home/Products/Man/AddProductMan";
import "./css/styles.scss";

function App() {
  const [products, setProducts] = useState([]);
  const [productsWomen, setProductsWomen] = useState([]);

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const addProductWomen = (newProduct) => {
    setProductsWomen([...productsWomen, newProduct]);
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/kisi-etirleri"
          element={<ProductList products={products} />}
        />
        <Route
          path="/kisi-etirleri/:productName"
          element={<ProductDetails products={products} />}
        />
        <Route
          path="/qadin-etirleri"
          element={<ProductListWomen productsWomen={productsWomen} />}
        />
        <Route
          path="/qadin-etirleri/:productName"
          element={<ProductDetailsWomen products={productsWomen} />}
        />
        <Route path="/add" element={<AddProduct addProduct={addProduct} />} />
        <Route
          path="/addwomen"
          element={<AddProductWomen addProductWomen={addProductWomen} />}
        />
      </Routes>
    </div>
  );
}

export default App;
