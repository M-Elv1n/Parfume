import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./css/home.scss";
import Logo from "../logo.jpeg";
import BackgroundVideo from "../../components/BackgroundVideo";
// import BtnEmail from "../../components/BtnEmail";

export default function Home() {
  return (
    <div className="">
      <div className="container">
        <div className="home">
          <img src={Logo} className="logo" alt="" />
          <div className="home__container">
            <div className="home__men">
              <BackgroundVideo videoSource="./video/men.mp4" />
              <div className="home__women--container">
                <div className="home__men--text">
                  <h1>Men</h1>
                </div>
                <div>
                  <Link to={"/kisi-etirleri"}>Sifarişə başla</Link>
                </div>
              </div>
            </div>
            <div className="home__women">
              <BackgroundVideo videoSource="./video/women.mp4" />
              <div className="home__women--container">
                <div className="home__women--text">
                  <h1>Women</h1>
                </div>
                <div>
                  <Link to={"/qadin-etirleri"}>Sifarişə başla</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
