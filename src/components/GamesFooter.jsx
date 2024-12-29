import React from "react";
import Circle from "./Circle";
import "../pages/Games/css/gamesfooter.scss";
import { Link, NavLink } from "react-router-dom";
import Logo from "../pages/logoC1.svg";

function GamesFooter() {
  return (
    <div className="footergame container">
      <div className="footergame__img">
        <img src={Logo} alt="" />
        <Link to="https://www.gambleaware.org/">
          <img src="../img/games/begamble.webp" alt="" />
        </Link>
        <Circle />
        <img src="../img/games/e-cogra.webp" alt="" />
        <img src="../img/games/ssl-secure.svg" alt="" />
      </div>
      <div className="footergame__text">
        <p>Tekijänoikeus © Kaikki oikeudet pidätetään</p>
        <p>
          Jos sinulla tai jollain tuntemallasi on peliongelma ja haluat apua,
          soita numeroon 1-800 GAMBLER. Pelaamisen edellytyksenä on, että olet
          vähintään 18-vuotias ja fyysisesti paikalla.
        </p>
        <p>
          Käyttämällä sisältöämme, tuotteitamme ja palveluitamme hyväksyt
          tietosuojakäytäntömme. Sisällön täydellinen tai osittainen kopioiminen
          on ehdottomasti kielletty. Pelaajien on oltava vähintään 18-vuotiaita.
          Tämä sivusto sisältää tietoa erilaisista tuotteista ja palveluista.
          Tietyt tiedot, kuten hinnat ja erikoistarjoukset, saamme suoraan
          kumppaneiltamme. Nämä tiedot voivat muuttua milloin tahansa ilman
          ennakkoilmoitusta. Jakamamme tiedot eivät muodosta oikeudellista tai
          ammatillista neuvontaa tai ennustetta, eikä niitä tule käsitellä
          sellaisina.
        </p>
      </div>
      <div className="footergame__info">
        <NavLink to="/1/noin">Noin</NavLink>
        <NavLink to="/1/otayhteyttä">Ota yhteyttä</NavLink>
        <NavLink to="/1/tietosuoja">Tietosuoja</NavLink>
        <NavLink to="/1/käyttöehdot">Käyttöehdot</NavLink>
      </div>
    </div>
  );
}

export default GamesFooter;
