import React, { useState } from "react";
import { Routes, Route } from "react-router-dom"; // Удалите BrowserRouter
import Home from "./pages/Home/Home";
import ProductList from "./pages/Home/Products/Man/ProductListMan";
import ProductDetails from "./pages/Home/Products/Man/ProductDetailsMan";
import AddProduct from "./pages/Home/Products/Man/AddProductMan";
import "./css/styles.scss";

function App() {
  const [products, setProducts] = useState([]);

  // Функция для добавления нового продукта и автоматического увеличения номера страницы
  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/man" element={<ProductList products={products} />} />
        <Route
          path="/product/:id"
          element={<ProductDetails products={products} />}
        />
        <Route path="/add" element={<AddProduct addProduct={addProduct} />} />
      </Routes>
    </div>
  );
}

export default App;
