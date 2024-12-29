import "./css/burgermenugame.scss";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../pages/logoC1.svg";

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
    <div className="burgergame__container">
      <div className={`burgergame__menu ${isOpen ? "open" : ""}`}>
        <button className="burgergame__menu--button" onClick={toggleMenu}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>
        <div className="burgergame__menu--items">
          <ul>
            <NavLink to="/1">Etusivu</NavLink>
            <NavLink to="/1/tietosuoja">Tietosuoja</NavLink>
            <NavLink to="/1/käyttöehdot">Käyttöehdot</NavLink>
          </ul>
          <img src={Logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
