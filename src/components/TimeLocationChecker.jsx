import React, { useEffect } from "react";
import { isMobile } from "react-device-detect";
import { useNavigate } from "react-router-dom";

const TimeLocationChecker = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkTimeAndLocation = async () => {
      const now = new Date();
      const hour = now.getUTCHours() + 2; // UTC+2 для Финляндии

      // Проверяем время
      const isInTimeRange = hour >= 12 || hour < 2;

      // Проверяем геолокацию
      let isInFinland = false;
      try {
        const response = await fetch("https://ipapi.co/json/"); // Используем IP-геолокацию
        const data = await response.json();
        isInFinland = data.country === "FI";
      } catch (error) {
        console.error("Ошибка определения местоположения", error);
      }

      // Редирект на нужный маршрут
      if (isMobile && isInTimeRange && isInFinland) {
        navigate("/1"); // Специальная страница для мобильных в Финляндии
      } else {
        navigate("/"); // Основная страница для всех остальных
      }
    };

    checkTimeAndLocation();
  }, [navigate]);

  return null; // Ничего не отображаем, так как редирект уже выполнен
};

export default TimeLocationChecker;
