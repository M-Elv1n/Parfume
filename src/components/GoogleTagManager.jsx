import React, { useEffect } from "react";

const GoogleTagManager = () => {
  useEffect(() => {
    // Создаем тег-скрипт для загрузки gtag.js
    const script1 = document.createElement("script");
    script1.async = true;
    script1.src = "https://www.googletagmanager.com/gtag/js?id=AW-16807421415";
    document.head.appendChild(script1);

    // Создаем скрипт для конфигурации gtag
    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-16807421415');
    `;
    document.head.appendChild(script2);

    return () => {
      // Чистка, если это необходимо (опционально)
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, []);

  return null; // Этот компонент не рендерит ничего
};

export default GoogleTagManager;
