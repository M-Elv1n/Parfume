import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import productsData from "../../../../data/products.json";
import "./css/productlistman.scss";
// import "../../css/link.scss";
import "../../css/button.scss";
import "../../css/discount.scss";
import Empty from "../../../../components/Empty";
import BackBtn from "../../../../components/BackBtn";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(() => {
    const urlParams = new URLSearchParams(window.location.search);
    return parseInt(urlParams.get("page")) || 1;
  });
  const productsPerPage = 10; // Количество продуктов на одной странице
  const navigate = useNavigate(); // Используется хук useNavigate

  // Определение переменной currentProducts
  const currentProducts = products.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const productListClassName = `man__product ${
    currentProducts.length === 0 ? "empty-container" : ""
  }`;

  // Определение переменной totalPages
  const totalPages = Math.ceil(products.length / productsPerPage);

  useEffect(() => {
    // Загрузка данных при монтировании компонента
    setProducts(productsData);
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
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(
      indexOfFirstProduct,
      indexOfLastProduct
    );

    const totalPages = Math.ceil(products.length / productsPerPage);

    if (currentPage > totalPages || currentPage <= 0) {
      return (
        <>
          <Empty />
        </>
      );
    }

    // return currentProducts.map((product) => (
    //   <li key={product.id} className="container">
    //     <div className="man__container">
    //       <img src={product.image} alt={product.name} />
    //       <p className="">{product.name}</p>
    //       <div className="discount_tag label_style_2">
    //         <div className="discount_tag_graphics"></div>
    //         <div className="discount_tag_name">
    //           {Math.floor(100 - (product.price * 100) / product.oldprice)}%
    //         </div>
    //       </div>
    //       <Link
    //         to={`https://wa.me/+994552166694?text=Salam,maraqlandığım məhsul - ${encodeURIComponent(
    //           product.name
    //         )}, qiymət: ${product.price}. Daha ətraflı: ${
    //           window.location.origin
    //         }/kisi-etirleri/${product.name.toLowerCase().replace(/\s+/g, "-")}`}
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <img
    //           id="btn--bag"
    //           src="../img/svg/bag.svg"
    //           alt=""
    //           width={24}
    //           height={24}
    //         />
    //         Sifarişə başla
    //       </Link>
    //       <div className="price">
    //         <p className="new-price">{product.price}azn</p>
    //         <p className="old-price">{product.oldprice}azn</p>
    //       </div>
    //       <h1 className="sold-out">Sold Out</h1>
    //     </div>
    //   </li>
    // ));

    return currentProducts.map((product) => (
      <li key={product.id} className="container">
        <div
          className={`man__container ${
            product.price === undefined || product.price === null
              ? "disabled"
              : ""
          }`}
        >
          <img src={product.image} alt={product.name} />
          <p className="">{product.name}</p>
          {product.price !== undefined && product.price !== null ? (
            <>
              <div className="discount_tag label_style_2">
                <div className="discount_tag_graphics"></div>
                <div className="discount_tag_name">
                  {Math.floor(100 - (product.price * 100) / product.oldprice)}%
                </div>
              </div>
              <div className="price">
                <p className="new-price">{product.price}azn</p>
                <p className="old-price">{product.oldprice}azn</p>
              </div>
              <Link
                to={`https://wa.me/+994552166694?text=Salam,maraqlandığım məhsul - ${encodeURIComponent(
                  product.name
                )}, qiymət: ${product.price}. Daha ətraflı: ${
                  window.location.origin
                }/kisi-etirleri/${product.name
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  id="btn--bag"
                  src="../img/svg/bag.svg"
                  alt=""
                  width={24}
                  height={24}
                />
                Sifariş et
              </Link>
            </>
          ) : (
            <>
              <Link
                to=""
                onClick={(e) => e.preventDefault()}
                className="disabled-link"
              >
                <img
                  id="btn--bag"
                  src="../img/svg/bag.svg"
                  alt=""
                  width={24}
                  height={24}
                />
                Sifariş et
              </Link>
              <h1 className="sold-out">Sold Out</h1>
            </>
          )}
        </div>
      </li>
    ));
  };

  // Вычисление номеров страниц
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(products.length / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map((number) => (
    <li key={number}>
      <p
        className={`man__number--page ${
          number === currentPage ? "active" : ""
        }`}
        onClick={() => handlePageClick(number)} // Использование navigate для перехода на другую страницу
      >
        {number}
      </p>
    </li>
  ));

  return (
    <div className="">
      <BackBtn />
      <div className="container man">
        <p className="man__title">Kişi ətirləri</p>
        <ul className={productListClassName}>{renderProducts()}</ul>
        <ul id="page-numbers" className="container man__number">
          {/* Кнопка "Назад" */}
          <p
            className="prev"
            onClick={() => handlePageClick("prev")}
            disabled={currentPage === 1} // Отключить кнопку, если вы на первой странице
          >
            <svg
              t="1632633670584"
              class="arrow-1"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="1448"
              width="20"
              height="20"
            >
              <path
                d="M751.61600001 175.104l-360.0896 337.6128 359.67999999 336.0768a50.3296 50.3296 0 0 1 0 74.3936 58.88 58.88 0 0 1-79.4112 0.1024l-399.36-373.248a50.3296 50.3296 0 0 1 0-74.3424l399.7184-374.8864a58.88 58.88 0 0 1 79.4112-0.1024 50.3296 50.3296 0 0 1 0 74.3936z"
                p-id="1449"
                fill="#888888"
              ></path>
            </svg>
          </p>
          {renderPageNumbers}
          {/* Кнопка "Следующая" */}
          <p
            className="nex"
            onClick={() => handlePageClick("next")}
            disabled={currentPage === totalPages} // Отключить кнопку, если вы на последней странице
          >
            <svg
              t="1632633684430"
              class="arrow-1"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="1590"
              width="20"
              height="20"
            >
              <path
                d="M272.384 848.896l360.0896-337.6128-359.68-336.0768a50.3296 50.3296 0 0 1 0-74.3936 58.88 58.88 0 0 1 79.4112-0.1024l399.36 373.248a50.3296 50.3296 0 0 1 0 74.3424l-399.7184 374.8864a58.88 58.88 0 0 1-79.4112 0.1024 50.3296 50.3296 0 0 1 0-74.3936z"
                p-id="1591"
                fill="#888888"
              ></path>
            </svg>
          </p>
        </ul>
      </div>
    </div>
  );
}

export default ProductList;
