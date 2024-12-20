import React from "react";
import GamesCard from "./GamesCard";

const casinos = [
  {
    logo: "/img/games/posido.jpg",
    bonus: "KASINOBONUS 100% JOPA 500EUR + 200 FS",
    rating: "9.9",
    votes: "1857",
    minDeposit: "10",
    tag: { text: "Suosituin", style: "best-choice" },
    buttonLink: "https://www.traffiqtraq.com/track/006c6c48-86bc-4a55-95c8-e93e47f9d50a?type=ppc&s1=PO_FI81&s4=",
    ratingComment: "Äänestäthän",
  },
  {
    logo: "/img/games/ocean.jpg",
    bonus: "KASINOBONUS 100% JOPA 500EUR + 200 FS + 1 BONUS CRAB",
    rating: "9.8",
    votes: "1548",
    minDeposit: "10",
    tag: { text: "Suosituin", style: "most-popular" },
    buttonLink: "https://www.traffiqtraq.com/track/163732d2-5784-45ba-9f1e-de1d1cf954a4?type=ppc&s1=OS_FI81&s4=",
    ratingComment: "Äänestäthän",
  },
  {
    logo: "/img/games/spinanga.jpg",
    bonus: "KASINOBONUS 100% JOPA 500EUR + 200FS + 1 BONUS CRAB",
    rating: "9.8",
    votes: "1491",
    minDeposit: "10",
    tag: { text: "Suosituin", style: "exclusive-offer" },
    buttonLink: "https://www.traffiqtraq.com/track/9eaf52f6-1b38-4896-8245-3514cf39b3e6?type=ppc&s1=SP_FI81&s4=",
    ratingComment: "Äänestäthän",
  },
  {
    logo: "/img/games/vegasino.jpg",
    bonus: "KASINOBONUS 100% JOPA 500EUR + 200FS + 1 BONUS CRAB",
    rating: "9.7",
    votes: "1454",
    minDeposit: "10",
    tag: null,
    buttonLink: "https://www.traffiqtraq.com/track/84ae6b3c-0be3-4371-89ac-fffeb1ec779b?type=ppc&s1=VS_FI81&s4=",
    ratingComment: "Erinomainen",
  },
  {
    logo: "/img/games/trickz.jpg",
    bonus: "KASINOBONUS 100% JOPA 500EUR + 100 FS",
    rating: "9.6",
    votes: "1374",
    minDeposit: "10",
    tag: null,
    buttonLink: "https://www.traffiqtraq.com/track/67f2e242-b168-45f0-bd25-8b1e2d382af3?type=ppc&s1=TR_FI81&s4=",
    ratingComment: "Erinomainen",
  },
  {
    logo: "/img/games/slot.jpg",
    bonus: "KASINOBONUS 120% Jopa 200EUR",
    rating: "9.6",
    votes: "1244",
    minDeposit: "10",
    tag: null,
    buttonLink: "https://www.traffiqtraq.com/track/840ee1c2-c2cf-4a90-8c11-f95daf60cdbb?type=ppc&s1=SH_FI81&s4=",
    ratingComment: "Erinomainen",
  },
  {
    logo: "/img/games/lunu.jpg",
    bonus: "KASINOBONUS 100% JOPA 500EUR + 200FS",
    rating: "9.6",
    votes: "1221",
    minDeposit: "10",
    tag: null,
    buttonLink: "https://www.traffiqtraq.com/track/50cabe3e-b3c8-497a-9ff6-417a1312b6f0?type=ppc&s1=LB_FI81&s4=",
    ratingComment: "Erinomainen",
  },
  {
    logo: "/img/games/malina.jpg",
    bonus: "KASINOBONUS 100% JOPA 500EUR + 200FS + 1 BONUS CRAB",
    rating: "9.5",
    votes: "1021",
    minDeposit: "10",
    tag: null,
    buttonLink: "https://www.traffiqtraq.com/track/3cd64490-9608-47c4-a6f1-2159555ab49f?type=ppc&s1=ML_FI81&s4=",
    ratingComment: "Erinomainen",
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
