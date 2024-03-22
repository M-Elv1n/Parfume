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

  useEffect(() => {
    // Здесь можно добавить логику загрузки данных, например, запрос к серверу
    // Здесь можно использовать setTimeout для имитации задержки загрузки данных
    setTimeout(() => {
      setLoading(false); // Устанавливаем loading в false, когда данные загружены
    }, 1000); // Имитация задержки загрузки данных на 2 секунды
  }, []);

  if (loading) {
    // Если данные еще загружаются, показываем загрузчик
    return <Loader/>
  }

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

    // if (currentProducts.length === 0) {
    //   return <p>None product</p>;
    // }

    const totalPages = Math.ceil(products.length / productsPerPage);

    if (currentPage > totalPages || currentPage <= 0) {
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
            <path
              d="M188.2112 437.2992L2.4704 715.8784 0 719.3216l52.7104 293.5552A13.4784 13.4784 0 0 0 65.9968 1024H972.032l2.0992-11.1232 53.4272-298.3168-4.5824-6.272-203.9936-265.7024-3.9552-5.2864h-626.816z m-0.1536 48.896l25.9328 144.64-34.112 78.976H38.9376z m48.4352 160.6656h544.6144l28.6464 63.0016H209.2928z m602.88 63.0016l-36.1216-79.4368 14.9376-144.4992 171.9296 223.936z m-46.08-245.568L777.2416 619.008H239.9488l-28.3264-154.7136z m156.2496 532.7104H77.2864L30.7072 736.8704h965.4272z"
              fill="#1D1F21"
              p-id="2175"
            ></path>
            <path
              d="M513.7792 235.8784a15.2192 15.2192 0 0 1-15.2192-15.2192V15.232a15.2192 15.2192 0 0 1 30.4384 0v205.44a15.2192 15.2192 0 0 1-15.2192 15.2064z"
              fill="#1D1F21"
              p-id="2176"
            ></path>
            <path
              d="M714.3808 260.8a15.2192 15.2192 0 0 1-12.1344-24.384l123.7888-163.968a15.232 15.232 0 1 1 24.32 18.3424l-123.7888 163.9552a15.1808 15.1808 0 0 1-12.1856 6.0544z"
              fill="#1D1F21"
              p-id="2177"
            ></path>
            <path
              d="M313.1648 260.8a15.1552 15.1552 0 0 1-12.1472-6.0544L177.2288 90.7904a15.232 15.232 0 1 1 24.32-18.3424l123.776 163.968a15.2064 15.2064 0 0 1-12.1344 24.384z"
              fill="#1D1F21"
              p-id="2178"
            ></path>
          </svg>
          <p className="">No product</p>
        </div>
      );
    }

    return currentProducts.map((product) => (
      <li key={product.id} className="container">
        <div className="woman__container">
          <img src={product.image} alt={product.name} />
          <p className="">{product.name}</p>
          <div className="price">
            <p className="new-price">{product.price}azn</p>
            <p className="old-price">{product.oldprice}azn</p>
          </div>
          <Link
            to={`https://wa.me/+994552166694?text=Salam,maraqlandığım məhsul - ${encodeURIComponent(
              product.name
            )}, qiymət: ${product.price}azn. Daha ətraflı: ${
              window.location.origin
            }/qadin-etirleri/${product.name
              .toLowerCase()
              .replace(/\s+/g, "-")}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Sifariş et
          </Link>
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
      <div className="container woman">
        <p className="woman__title">Qadın ətirləri</p>
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

export default ProductListWomen;
