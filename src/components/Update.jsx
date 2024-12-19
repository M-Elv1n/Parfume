import React from "react";
import dd from "../pages/Games/bg.webp";
import "../pages/Games/css/update.scss"

function Update() {
  return (
    <div className="update container">
      <div className="update__info">
        <h1>Parhaat Verkkokasinot Suomessa Päivitetty - 18. joulukuuta 2024</h1>
        <p>
          Miksi odottaa? Ensimmäinen iso voitto voi olla vain muutaman
          klikkauksen päässä! Rekisteröidy nyt ja lunasta eksklusiiviset
          bonukset jopa 2 000 € asti—tarjolla vain rajoitetun ajan ja vain
          täällä! Olemme auttaneet yli 10 000 pelaajaa Suomesta voittamaan tänä
          vuonna — liity heidän joukkoonsa ja pelaa luottavaisin mielin.
          Rekisteröityminen vie vain 2 minuuttia, lunasta bonukset ja aloita
          voittaminen heti. Toimi nopeasti—tee siitä totta!
        </p>
      </div>
      <img src={dd} alt="" />
    </div>
  );
}

export default Update;
