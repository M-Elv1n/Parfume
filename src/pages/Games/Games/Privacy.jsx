import React from "react";
import HeaderGames from "../../../components/HeaderGames";
import GamesFooter from "../../../components/GamesFooter";
import "../css/privacy.scss";

function Privacy() {
  return (
    <div className="privacy">
      <HeaderGames />
      <div className="privacy__text">
        <div className="container">
          <div className="">
            <h2>Tietosuojakäytäntö</h2>
            <p>
              Tämä tietosuojaseloste on laadittu tarjoamaan tietoa ja tukea
              verkkosivuston asiakkaille, jotka ovat huolissaan siitä, miten
              heidän henkilötietojaan käytetään verkossa. Lue tämä
              tietosuojakäytäntö huolellisesti saadaksesi selkeän ja tarkan
              kuvan siitä, miten keräämme, käytämme, suojaamme ja/tai muuten
              käsittelemme henkilötietojasi ja muita tietoja käytäntöjemme
              mukaisesti.
            </p>
          </div>
          <div className="">
            <h2>Evästeet</h2>
            <p>Our website does NOT use cookies for user data.</p>
          </div>
          <div className="">
            <h2>Analytiikka</h2>
            <p>
              Verkkosivustomme käyttää analytiikkatyökaluja, kuten Google
              Analyticsia, mainostaakseen verkkosivustollamme ja/tai kolmansien
              osapuolien verkkosivustoilla vierailusi jälkeen.
            </p>
            <p>
              Google Analytics on Googlen tarjoama verkkoanalyysipalvelu, joka
              tallentaa ja seuraa verkkosivustojen käyttöä. Google käyttää
              kerättyjä tietoja verkkosivuston käytön seuraamiseen ja
              analysointiin. Näitä tietoja jaetaan muille Googlen palveluille.
              Google voi käyttää kerättyjä tietoja mainonnan kontekstointiin ja
              mukauttamiseen omassa mainosverkossaan.
            </p>
          </div>
          <div className="">
            <h2>Käyttäjistä keräämämme tiedot</h2>
            <p>
              Keräämme, käytämme ja säilytämme erilaisia henkilötietoja, jotka
              olemme ryhmitelleet seuraavasti:
            </p>
            <p>
              <strong>Yhteystiedot:</strong>Sisältää sähköpostiosoitteen.
            </p>
            <p>
              <strong>Tekniset tiedot:</strong>Sisältää IP-osoitteen,
              kirjautumistiedot, selaimen tyypin ja version, aikavyöhykkeen
              asetukset ja sijainnin, selaimen lisäosien tyypit ja versiot,
              käyttöjärjestelmän ja alustan sekä muut teknologiat laitteilla,
              joilla käytät tätä verkkosivustoa.
            </p>
            <p>
              <strong>Käyttötiedot:</strong>Sisältää tietoja siitä, miten käytät
              verkkosivustoamme ja palveluitamme.
            </p>
            <p>
              <strong>Markkinointi- ja viestintätiedot:</strong>Sisältää
              mieltymyksesi vastaanottaa markkinointiviestintää meiltä sekä
              viestintäasetuksesi.
            </p>
          </div>
        </div>
      </div>
      <GamesFooter />
    </div>
  );
}

export default Privacy;
