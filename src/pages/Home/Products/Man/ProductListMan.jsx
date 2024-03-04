import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import productsData from "../../../../data/products.json";
import "./css/productlistman.scss";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10; // Количество продуктов на одной странице

  useEffect(() => {
    // Загрузка данных при монтировании компонента
    setProducts(productsData);
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderProducts = currentProducts.map((product) => (
    <li key={product.id} className="container">
      <div className="man__container">
        {/* <img src={require(product.image)} alt={product.name} /> */}
        <img src={product.image} alt={product.name} />
        <h2 className="">{product.name}</h2>
        <div className="price">
          <h4 className="new-price">{product.price}azn</h4>
          <h4 className="old-price">
            {(product.price / 0.6).toFixed(0)}.99azn
          </h4>
        </div>
        {/* <Link to={`/product/${product.id}`}>Details</Link> */}
        <Link
          to={`https://wa.me/+994552166694?text=Здравствуйте, я заинтересован в продукте ${encodeURIComponent(
            product.name
          )}, цена: ${product.price}. Подробнее: ${
            window.location.origin
          }/product/${product.id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Sifariş et
        </Link>
        {/* <Link
          to={`https://wa.me/+994552166694?text=Здравствуйте, я заинтересован в продукте ${encodeURIComponent(
            product.name
          )}, цена: ${product.price}. Подробнее: ${window.location.origin}${
            window.location.pathname
          }`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Отправить сообщение
        </Link> */}
      </div>
    </li>
  ));

  // Вычисление номеров страниц
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(products.length / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map((number) => (
    <li key={number}>
      <button onClick={() => handlePageClick(number)}>{number}</button>
    </li>
  ));

  return (
    <div className="">
      <Link to='/'><h3 className="back">Esas Seyfe</h3></Link>
      <div className="container man">
        <h1>Kişi ətirləri</h1>
        <ul className="man__product">{renderProducts}</ul>
        <ul id="page-numbers" className="container man__number">
          {renderPageNumbers}
        </ul>
      </div>
    </div>
  );
}

export default ProductList;
