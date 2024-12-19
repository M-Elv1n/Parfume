import "./css/burger.scss";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const body = document.body;
    if (isOpen) {
      body.classList.add("lock-scroll");
    } else {
      body.classList.remove("lock-scroll");
    }
  }, [isOpen]);

  const handleNavLinkClick = () => {
    closeMenu();
  };

  return (
    <div className="burger-contan">
      <div className={`burger-menu ${isOpen ? "open" : ""}`}>
        <h1>
          Best Online <br /> Casino in Finland
        </h1>
        <button className="burger-menu__button" onClick={toggleMenu}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>
        <div className="burger-menu__items">
          <ul>
            <li>Etusivu</li>
            <li>Tietosuoja</li>
            <li>Käyttöehdot</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
