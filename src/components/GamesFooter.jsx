import React from "react";
import Circle from "./Circle";
import "../pages/Games/css/gamesfooter.scss";
import { Link, NavLink } from "react-router-dom";

function GamesFooter() {
  return (
    <div className="footer container">
      <div className="footer__img">
        <h1>
          Best Online <br /> Casinos in Finland
        </h1>
        <Link to="https://www.gambleaware.org/">
          <img src="../img/games/begamble.webp" alt="" />
        </Link>
        <Circle />
        <img src="../img/games/e-cogra.webp" alt="" />
        <img src="../img/games/ssl-secure.svg" alt="" />
      </div>
      <div className="footer__text">
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
      <div className="footer__info">
        <NavLink to="/1/noin">Noin</NavLink>
        <NavLink to="/1/otayhteyttä">Ota yhteyttä</NavLink>
        <NavLink to="/1/tietosuoja">Tietosuoja</NavLink>
        <NavLink to="/1/käyttöehdot">Käyttöehdot</NavLink>
      </div>
    </div>
  );
}

export default GamesFooter;
