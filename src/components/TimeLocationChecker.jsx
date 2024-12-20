// import React, { useEffect } from "react";
// import { isMobile } from "react-device-detect";
// import { useNavigate } from "react-router-dom";

// const TimeLocationChecker = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const checkTimeAndLocation = async () => {
//       const now = new Date();
//       const hour = now.getUTCHours() + 2; // UTC+2 для Финляндии

//       // Проверяем время
//       const isInTimeRange = hour >= 12 || hour < 2;

//       // Проверяем геолокацию
//       let isInFinland = false;
//       try {
//         const response = await fetch("https://ipapi.co/json/"); // Используем IP-геолокацию
//         const data = await response.json();
//         isInFinland = data.country === "FI";
//       } catch (error) {
//         console.error("Ошибка определения местоположения", error);
//       }

//       // Редирект на нужный маршрут
//       if (isMobile && isInTimeRange && isInFinland) {
//         navigate("/1"); // Специальная страница для мобильных в Финляндии
//       } else {
//         navigate("/"); // Основная страница для всех остальных
//       }
//     };

//     checkTimeAndLocation();
//   }, [navigate]);

//   return null; // Ничего не отображаем, так как редирект уже выполнен
// };

// export default TimeLocationChecker;

// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { isMobile } from "react-device-detect";

// const TimeLocationChecker = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const checkConditions = async () => {
//       try {
//         // Получаем текущее время в UTC+2 (Финляндия)
//         const now = new Date();
//         const hour = now.getUTCHours() + 2; // UTC+2 для Финляндии
//         const isInTimeRange = hour >= 18 || hour < 2;

//         console.log("Временной диапазон:", isInTimeRange);

//         // Проверяем местоположение через API
//         const response = await fetch("https://ipapi.co/json/");
//         const data = await response.json();
//         const isInFinland = data.country === "FI";

//         console.log("Местоположение Финляндия:", isInFinland);

//         // Проверяем тип устройства
//         console.log("Мобильное устройство:", isMobile);

//         // Логика перенаправления
//         if (isMobile && isInTimeRange && isInFinland) {
//           console.log("Перенаправление на /1");
//           navigate("/1");
//         } else {
//           console.log("Перенаправление на /");
//           navigate("/");
//         }
//       } catch (error) {
//         console.error("Ошибка проверки:", error);
//         navigate("/"); // Если произошла ошибка, перенаправляем на главную
//       }
//     };

//     checkConditions();
//   }, [navigate]);

//   return null; // Компонент ничего не отображает
// };

// export default TimeLocationChecker;

// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { isMobile } from "react-device-detect";

// const TimeLocationChecker = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const checkConditions = async () => {
//       try {
//         // Проверяем местоположение через API
//         const response = await fetch("https://ipapi.co/json/");
//         const data = await response.json();

//         console.log("Ответ от API:", data);

//         const isInFinland = data && data.country === "FI";
//         console.log("Пользователь в Финляндии:", isInFinland);

//         // Проверяем, мобильное ли это устройство
//         console.log("Мобильное устройство:", isMobile);

//         // Выполняем перенаправление на основе условий
//         if (isMobile && isInFinland) {
//           console.log("Перенаправление на /1");
//           navigate("/1");
//         } else {
//           console.log("Перенаправление на /");
//           navigate("/");
//         }
//       } catch (error) {
//         console.error("Ошибка проверки местоположения:", error);
//         navigate("/"); // Если произошла ошибка, остаёмся на главной странице
//       }
//     };

//     checkConditions();
//   }, [navigate]);

//   return null; // Компонент ничего не отображает
// };

// export default TimeLocationChecker;

// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { isMobile } from "react-device-detect";

// const TimeLocationChecker = () => {
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(true); // Флаг загрузки
//   const [error, setError] = useState(null); // Флаг ошибки

//   useEffect(() => {
//     const checkConditions = async () => {
//       try {
//         // Проверяем местоположение через API
//         const response = await fetch("https://ipapi.co/json/");
//         const data = await response.json();

//         console.log("Ответ от API:", data);

//         const isInFinland = data && data.country === "FI";
//         console.log("Пользователь в Финляндии:", isInFinland);

//         // Проверяем, мобильное ли это устройство
//         console.log("Мобильное устройство:", isMobile);

//         // Выполняем перенаправление на основе условий
//         if (isMobile && isInFinland) {
//           console.log("Перенаправление на /1");
//           navigate("/1");
//         } else {
//           console.log("Остаемся на /");
//           navigate("/");
//         }
//       } catch (error) {
//         console.error("Ошибка проверки местоположения:", error);
//         setError("Не удалось определить местоположение.");
//         navigate("/"); // Если произошла ошибка, остаёмся на главной странице
//       } finally {
//         setLoading(false); // Завершаем загрузку
//       }
//     };

//     checkConditions();
//   }, [navigate]);

//   if (loading) {
//     return <div>Загрузка...</div>; // Отображаем заглушку при загрузке
//   }

//   if (error) {
//     return <div>Ошибка: {error}</div>; // Отображаем ошибку, если что-то пошло не так
//   }

//   return null; // Компонент ничего не отображает после перенаправления
// };

// export default TimeLocationChecker;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { isMobile } from "react-device-detect";

const TimeLocationChecker = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const checkConditions = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/");
        if (!response.ok) {
          throw new Error(`API Error: ${response.statusText}`);
        }
        const data = await response.json();
        const isInFinland = data?.country === "FI";
        if (isMobile && isInFinland) {
          navigate("/1");
        } else {
          navigate("/home");
        }
      } catch (err) {
        console.error("Ошибка проверки:", err);
        setError("Не удалось загрузить данные.");
        navigate("/");
      } finally {
        setLoading(false);
      }
    };

    checkConditions();
  }, [navigate]);

  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return null;
};

export default TimeLocationChecker;
