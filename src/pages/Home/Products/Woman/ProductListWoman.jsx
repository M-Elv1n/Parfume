import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import productsData from "../../../../data/productsWoman.json";
import "./css/productlistwoman.scss";

function ProductListWomen() {
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
          }/qadin-etirleri/${product.name.toLowerCase().replace(/\s+/g, "-")}`}
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
    <div className="">
      <Link to="/">
        <h3 className="back">Əsas Səhifə</h3>
      </Link>
      <div className="container woman">
        <p className="woman__title">Qadın ətirləri</p>
        <ul className="woman__product">{renderProducts}</ul>
        <ul id="page-numbers" className="container woman__number">
          {renderPageNumbers}
        </ul>
      </div>
    </div>
  );
}

export default ProductListWomen;
