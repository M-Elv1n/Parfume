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
  ratingComment,
}) => {
  const renderStars = () => {
    if (rating > 9.7) {
      return (
        <>
          <span className="star filled">★</span>
          <span className="star filled">★</span>
          <span className="star filled">★</span>
          <span className="star filled">★</span>
          <span className="star filled">★</span>
        </>
      );
    } else if (rating <= 9.7 && rating >= 9.5) {
      return (
        <>
          <span className="star filled">★</span>
          <span className="star filled">★</span>
          <span className="star filled">★</span>
          <span className="star filled">★</span>
          <span className="star half">★</span>
        </>
      );
    } else {
      return (
        <>
          <span className="star filled">★</span>
          <span className="star filled">★</span>
          <span className="star filled">★</span>
          <span className="star filled">★</span>
          <span className="star empty">☆</span>
        </>
      );
    }
  };

  return (
    <div className="casino-card container">
      {/* Тег (бейдж) */}
      {tag && <div className={`tag ${tag.style}`}>{tag.text}</div>}

      <div className="casino-card-content">
        {/* Логотип */}
        <div className="casino-logo">
          <img src={logo} alt="Kasinon logo" />
        </div>

        {/* Бонус */}
        <div className="casino-bonus">
          <h3>Tervetuliaisbonus</h3>
          <p>{bonus}</p>
        </div>

        {/* Рейтинг */}
        <div className="casino-rating">
          <p className="rating">
            <h1>{rating}</h1> Arvosana ({votes}) Upea
            <div className="stars">{renderStars()}</div>
            <span>{ratingComment}</span>
          </p>
        </div>

        {/* Минимальный депозит */}
        <div className="casino-min-deposit">
          <h3>Minimitalletus</h3>
          <h1>{minDeposit} EUR</h1>
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
