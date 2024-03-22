import React, { useState, useEffect } from "react";
import "./css/loader.scss";

function Loader() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const onLoad = () => {
      setTimeout(() => {
        setLoaded(true);
      }, 1000);
    };

    window.addEventListener("load", onLoad);

    return () => {
      window.removeEventListener("load", onLoad);
    };
  }, []); // Пустой массив зависимостей для вызова useEffect только один раз

  return (
    <div id="load" className={`preloader ${loaded ? 'fade' : ''}`}>
      <div className="b-ico-preloader"></div>
      <div className="spinner"></div>
    </div>
  );
}

export default Loader;