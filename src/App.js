import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Loader from "./components/Loader"; // Заглушка для Suspense
import "./css/styles.scss";

// Загружаем компоненты лениво
const ProductList = React.lazy(() => import("./pages/Home/Products/Man/ProductListMan"));
const ProductDetails = React.lazy(() => import("./pages/Home/Products/Man/ProductDetailsMan"));
const ProductListWomen = React.lazy(() => import("./pages/Home/Products/Woman/ProductListWoman"));
const ProductDetailsWomen = React.lazy(() => import("./pages/Home/Products/Woman/ProductDetailsWoman"));
const AddProduct = React.lazy(() => import("./pages/Home/Products/Man/AddProductMan"));
const AddProductWomen = React.lazy(() => import("./pages/Home/Products/Woman/AddProductWoman"));

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/kisi-etirleri"
          element={
            <Suspense fallback={<Loader />}>
              <ProductList />
            </Suspense>
          }
        />
        <Route
          path="/kisi-etirleri/:productName"
          element={
            <Suspense fallback={<Loader />}>
              <ProductDetails />
            </Suspense>
          }
        />
        <Route
          path="/qadin-etirleri"
          element={
            <Suspense fallback={<Loader />}>
              <ProductListWomen />
            </Suspense>
          }
        />
        <Route
          path="/qadin-etirleri/:productName"
          element={
            <Suspense fallback={<Loader />}>
              <ProductDetailsWomen />
            </Suspense>
          }
        />
        <Route
          path="/add"
          element={
            <Suspense fallback={<Loader />}>
              <AddProduct />
            </Suspense>
          }
        />
        <Route
          path="/addwomen"
          element={
            <Suspense fallback={<Loader />}>
              <AddProductWomen />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
}

export default App;