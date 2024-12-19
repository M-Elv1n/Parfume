import React from "react";
import "../pages/Games/css/gamescard.scss";

const GamesCard = ({
  logo,
  bonus,
  rating,
  votes,
  minDeposit,
  tag,
  buttonLink,
}) => {
  return (
    <div className="casino-card container">
      {/* Тег (бейдж) */}
      {tag && <div className={`tag ${tag.style}`}>{tag.text}</div>}

      <div className="casino-card-content">
        {/* Логотип */}
        <div className="casino-logo">
          <img src="../img/games/ssl-secure.svg" alt="Kasinon logo" />
        </div>

        {/* Бонус */}
        <div className="casino-bonus">
          <h3>Tervetuliaisbonus</h3>
          <p>{bonus}</p>
        </div>

        {/* Рейтинг */}
        <div className="casino-rating">
          <p className="rating">
            <span>⭐⭐⭐⭐⭐</span>
            <h1>{rating}</h1> Arvosana ({votes}) Upea
            <span>Äänestäthän</span>
          </p>
        </div>

        {/* Минимальный депозит */}
        <div className="casino-min-deposit">
          <h3>Minimitalletus</h3>
          <h1>{minDeposit} $</h1>
        </div>

        {/* Кнопка */}
        <div className="casino-button">
          <a href={buttonLink} target="_blank" rel="noreferrer">
            LUNASTA BONUS
          </a>
        </div>
      </div>
    </div>
  );
};

export default GamesCard;
