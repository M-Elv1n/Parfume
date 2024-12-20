import React from "react";
import HeaderGames from "../../../components/HeaderGames";
import GamesFooter from "../../../components/GamesFooter";
import "../css/about.scss";

function About() {
  return (
    <div className="about">
      <HeaderGames />
      <div className="about__text">
        <div className="container">
          <p>
            Tervetuloa verkkosivustollemme – luotettavaan kohteeseesi parhaiden
            nettikasinoiden ja eksklusiivisten tarjousten löytämiseksi! Olemme
            kolmen intohimoisen kasinoharrastajan tiimi, joka on omistautunut
            auttamaan sinua löytämään täydellisen kasinokokemuksen.
          </p>
          <p>
            Missiomme on yksinkertainen: tuoda sinulle jännittävimmät,
            luotettavimmat ja palkitsevimmat nettikasinot. Pelaajina ymmärrämme,
            mikä tekee kasinosta loistavan – olipa kyseessä anteliaat bonukset,
            monipuoliset pelivalikoimat tai käyttäjäystävällinen käyttöliittymä.
            Siksi arvioimme ja valitsemme huolella jokaisen sivustollamme
            esitellyn kasinon varmistaen, että ne täyttävät tiukimmat
            laatustandardit.
          </p>
          <p>
            Olemme myös ylpeitä parhaiden tarjousten ja kampanjoiden
            löytämisestä, jotta voit hyödyntää pelimatkasi parhaalla
            mahdollisella tavalla. Valitessasi kasinon verkkosivustomme kautta
            voit luottaa siihen, että olemme tehneet tutkimustyön puolestasi
            tarjotaksemme sinulle parhaan mahdollisen kokemuksen.
          </p>
          <p>
            Kiitos, että annat meidän olla osa kasinoseikkailuasi. Tutustu
            arvosteluihimme, vertaile huippukasinoita ja lunasta uskomattomia
            tarjouksia jo tänään!
          </p>
        </div>
      </div>
      <GamesFooter />
    </div>
  );
}

export default About;
