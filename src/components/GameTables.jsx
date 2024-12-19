import React from "react";
import GamesCard from "./GamesCard";

const casinos = [
  {
    logo: "/img/caesars.png",
    bonus: "100% до $2,000",
    rating: "9.9",
    votes: "1500",
    minDeposit: "20",
    tag: { text: "Suosituin", style: "best-choice" },
    buttonLink: "#",
  },
  {
    logo: "/img/fanduel.png",
    bonus: "До $1000 + $100 бонус",
    rating: "9.8",
    votes: "1400",
    minDeposit: "20",
    tag: { text: "Suosituin", style: "most-popular" },
    buttonLink: "#",
  },
  {
    logo: "/img/betmgm.png",
    bonus: "100% до $1000 + $25 токен",
    rating: "9.7",
    votes: "1209",
    minDeposit: "20",
    tag: { text: "Suosituin", style: "exclusive-offer" },
    buttonLink: "#",
  },
  {
    logo: "/img/pokerstars.png",
    bonus: "100% бонус на первый депозит до $1,500",
    rating: "9.6",
    votes: "1021",
    minDeposit: "20",
    tag: { text: "Suosituin", style: "fast-withdrawals" },
    buttonLink: "#",
  },
  {
    logo: "/img/betrivers.png",
    bonus: "100% до $250 / Код: 250MATCH",
    rating: "9.5",
    votes: "1250",
    minDeposit: "20",
    tag: null,
    buttonLink: "#",
  },
];

const CasinoTable = () => {
  return (
    <div className="casino-table">
      {casinos.map((casino, index) => (
        <GamesCard key={index} {...casino} />
      ))}
    </div>
  );
};

export default CasinoTable;
