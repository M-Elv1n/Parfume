import React from "react";
import HeaderGames from "../../../components/HeaderGames";
import GamesFooter from "../../../components/GamesFooter";
import "../css/contact.scss";

function Contact() {
  return (
    <div className="contact">
      <HeaderGames />
      <div className="contact__text">
        <div className="container">
          <h2>Kuinka voimme auttaa?</h2>
          <p>
            Meillä on tukitiimi, joka on omistautunut ratkaisemaan kaikki
            kasinoihin liittyvät ongelmasi palautteen avulla. Jos sinulla on
            kysymyksiä tai haluat ehdottaa jotain, älä epäröi ottaa meihin
            yhteyttä milloin tahansa. Olemme tavoitettavissa 24/7 numerosta{" "}
            <strong>+358 50 466 46 66.</strong>
          </p>
        </div>
      </div>
      <GamesFooter />
    </div>
  );
}

export default Contact;
