import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import productsData from "../../../../data/productsWoman.json";
import Loader from "../../../../components/Loader";
import "./css/productlistwoman.scss";
import "../../css/link.scss";
import "../../css/empty.scss";
import "../../css/button.scss";

function ProductListWomen() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(() => {
    const urlParams = new URLSearchParams(window.location.search);
    return parseInt(urlParams.get("page")) || 1;
  });
  const productsPerPage = 10; // Количество продуктов на одной странице
  const navigate = useNavigate(); // Используется хук useNavigate

  useEffect(() => {
    // Загрузка данных при монтировании компонента
    setTimeout(() => {
      setLoading(false);
      setProducts(productsData);
    }, 1000);
  }, []);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("page", currentPage);
    navigate(`?${urlParams.toString()}`);
  }, [currentPage, navigate]);

  const handlePageClick = (direction) => {
    if (direction === "prev" && currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    } else if (
      direction === "next" &&
      currentPage < Math.ceil(products.length / productsPerPage)
    ) {
      setCurrentPage((prevPage) => prevPage + 1);
    } else if (!isNaN(parseInt(direction))) {
      setCurrentPage(parseInt(direction));
    }
  };

  const renderProducts = () => {
    // Определение переменной currentProducts
    const currentProducts = products.slice(
      (currentPage - 1) * productsPerPage,
      currentPage * productsPerPage
    );

    const productListClassName = `man__product ${
      currentProducts.length === 0 ? "empty-container" : ""
    }`;

    if (currentProducts.length === 0) {
      return (
        <div className="empty">
          <svg
            t="1633674890073"
            viewBox="0 0 1027 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2174"
            width="68"
            height="68"
          >
            {/* SVG Path */}
          </svg>
          <p className="">No product</p>
        </div>
      );
    }

    return currentProducts.map((product) => (
      <li key={product.id} className="container">
        {/* Ваш код для отображения продуктов */}
      </li>
    ));
  };

  // Определение переменной totalPages
  const totalPages = Math.ceil(products.length / productsPerPage);

  // Вычисление номеров страниц
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map((number) => (
    <li key={number}>
      {/* Ваш код для отображения номеров страниц */}
    </li>
  ));

  return (
    <div className="">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Link to="/" className="link">
            {/* Ваш код для ссылки */}
          </Link>
          <div className="container woman">
            {/* Ваш код для отображения продуктов */}
            {/* Ваш код для отображения номеров страниц */}
          </div>
        </>
      )}
    </div>
  );
}

export default ProductListWomen;
