import React from "react";
import { NavLink } from "react-router-dom";
import "../pages/Games/css/headergames.scss";
import BurgerMenu from "./BurgerMenu";

function HeaderGames() {
  return (
    <div className="header container">
      <div className="header__container">
        <div>
          {/* <h1>
            Best Online <br /> Casino in Finland
          </h1> */}
        </div>
        <li className="header__navbar">
          <NavLink to="/1">Etusivu</NavLink>
          <NavLink to="/1/tietosuoja">Tietosuoja</NavLink>
          <NavLink to="/1/käyttöehdot">Käyttöehdot</NavLink>
        </li>
      </div>
    </div>
  );
}

export default HeaderGames;
