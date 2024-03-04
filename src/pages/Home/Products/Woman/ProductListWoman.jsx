import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import productsData from "../../../../data/products.json";
import "./css/productlistwoman.scss";

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
      <div className="woman__container">
        <img src={product.image} alt={product.name} />
        <h2 className="">{product.name}</h2>
        <div className="price">
          <h4 className="new-price">{product.price}azn</h4>
          <h4 className="old-price">
            {(product.price / 0.6).toFixed(0)}.99azn
          </h4>
        </div>
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
    <div className="container woman">
      <h1>Kişi ətirləri</h1>
      <ul className="woman__product">{renderProducts}</ul>
      <ul id="page-numbers" className="container woman__number">
        {renderPageNumbers}
      </ul>
    </div>
  );
}

export default ProductList;
