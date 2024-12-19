import React from "react";
import "../pages/Games/css/bonus.scss"

function Bonus() {
  return (
    <div className="bonus container">
      <div className="bonus__info">
        <div className="">
          <img src="../img/games/secure.svg" alt="" />
          <span>100% Laillinen ja Turvallinen</span>
        </div>
        <div className="">
          <img src="../img/games/withdraw.svg" alt="" />
          <span>Nopeat Nostot</span>
        </div>
      </div>
    </div>
  );
}

export default Bonus;
