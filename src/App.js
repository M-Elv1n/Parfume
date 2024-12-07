import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import Home from "./pages/Home/Home";
import Loader from "./components/Loader"; // Заглушка для Suspense
import "./css/styles.scss";


const GoogleTagManager = () => (
  <Helmet>
    {/* Добавляем скрипт Google Tag Manager */}
    <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16807421415"></script>
    <script>
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'AW-16807421415');
      `}
    </script>
  </Helmet>
);

// Загружаем компоненты лениво
const ProductList = React.lazy(() =>
  import("./pages/Home/Products/Man/ProductListMan")
);
const ProductDetails = React.lazy(() =>
  import("./pages/Home/Products/Man/ProductDetailsMan")
);
const ProductListWomen = React.lazy(() =>
  import("./pages/Home/Products/Woman/ProductListWoman")
);
const ProductDetailsWomen = React.lazy(() =>
  import("./pages/Home/Products/Woman/ProductDetailsWoman")
);
const AddProduct = React.lazy(() =>
  import("./pages/Home/Products/Man/AddProductMan")
);
const AddProductWomen = React.lazy(() =>
  import("./pages/Home/Products/Woman/AddProductWoman")
);

function App() {
  return (
    <div>
      <div>
        <GoogleTagManager />
      </div>
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
