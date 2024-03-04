import React from "react";
import { Link } from "react-router-dom";
import "./css/home.scss";
import Logo from "../logo.jpeg";
import celebrateImage from '../celebrate.png';

export default function Home() {
  return (
    <div className="">
      <div className="home__celebrate">
        <img src={celebrateImage} alt="" />
      </div>
      <div className="container">
        <div className="home">
          <img src={Logo} className="logo" alt="" />
          <div className="home__container">
            <div className="home__men">
              <div className="home__men--text">
                <h2>Kişi</h2>
                <span>ətirləri</span>
              </div>
              <div >
                <Link to={"/man"}>Sifariş et</Link>
              </div>
            </div>
            <div className="home__women">
              <div className="home__women--text">
                <h2>Qadın</h2>
                <span>ətirləri</span>
              </div>
              <div>
                <Link to={"/man"}>Sifariş et</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
