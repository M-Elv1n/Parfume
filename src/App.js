import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import Home from "./pages/Home/Home";
import Loader from "./components/Loader"; // Заглушка для Suspense
import "./css/styles.scss";

// Компонент для Google Tag Manager
const GoogleTagManager = () => (
  <Helmet>
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=AW-16807421415"
    ></script>
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

// Обертка для ленивой загрузки компонентов
const LazyWrapper = ({ Component }) => (
  <Suspense fallback={<Loader />}>
    <Component />
  </Suspense>
);

// Ленивые компоненты
const TimeLocationChecker = React.lazy(() =>
  import("./components/TimeLocationChecker")
);
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
const Games = React.lazy(() => import("./pages/Games/Games/Game"));
const Privacy = React.lazy(() => import("./pages/Games/Games/Privacy"));
const Terms = React.lazy(() => import("./pages/Games/Games/Terms"));
const About = React.lazy(() => import("./pages/Games/Games/About"));
const Contact = React.lazy(() => import("./pages/Games/Games/Contact"));

function App() {
  return (
    <div>
      <GoogleTagManager />
      <Routes>
        <Route
          path="/"
          element={<LazyWrapper Component={TimeLocationChecker} />}
        />
        <Route path="/home" element={<Home />} />
        <Route
          path="/kisi-etirleri"
          element={<LazyWrapper Component={ProductList} />}
        />
        <Route
          path="/kisi-etirleri/:productName"
          element={<LazyWrapper Component={ProductDetails} />}
        />
        <Route
          path="/qadin-etirleri"
          element={<LazyWrapper Component={ProductListWomen} />}
        />
        <Route
          path="/qadin-etirleri/:productName"
          element={<LazyWrapper Component={ProductDetailsWomen} />}
        />
        <Route path="/add" element={<LazyWrapper Component={AddProduct} />} />
        <Route
          path="/addwomen"
          element={<LazyWrapper Component={AddProductWomen} />}
        />
        <Route path="/1" element={<LazyWrapper Component={Games} />} />
        <Route
          path="/1/tietosuoja"
          element={<LazyWrapper Component={Privacy} />}
        />
        <Route
          path="/1/käyttöehdot"
          element={<LazyWrapper Component={Terms} />}
        />
        <Route path="/1/noin" element={<LazyWrapper Component={About} />} />
        <Route
          path="/1/otayhteyttä"
          element={<LazyWrapper Component={Contact} />}
        />
      </Routes>
    </div>
  );
}

export default App;
