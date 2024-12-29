import React from "react";
import { NavLink } from "react-router-dom";
import "../pages/Games/css/headergames.scss";
import Logo from "../pages/logoC1.svg";
import BurgerMenu from "./BurgerMenuGame";

function HeaderGames() {
  return (
    <div className="headergame container">
      <div className="headergame__container">
        <div>
          <img src={Logo} alt="" />
        </div>
        <li className="headergame__navbar">
          <NavLink to="/1">Etusivu</NavLink>
          <NavLink to="/1/tietosuoja">Tietosuoja</NavLink>
          <NavLink to="/1/käyttöehdot">Käyttöehdot</NavLink>
        </li>
        <BurgerMenu />
      </div>
    </div>
  );
}

export default HeaderGames;
