// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { isMobile } from "react-device-detect";
// import Loader from "./Loader";

// const TimeLocationChecker = () => {
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const checkConditions = async () => {
//       try {
//         const response = await fetch("https://ipapi.co/json/");
//         if (!response.ok) {
//           throw new Error(`API Error: ${response.statusText}`);
//         }
//         const data = await response.json();
//         const isInFinland = data?.country === "FI";
//         if (isMobile && isInFinland) {
//           navigate("/1");
//         } else {
//           navigate("/home");
//         }
//       } catch (err) {
//         console.error("Ошибка проверки:", err);
//         setError("Не удалось загрузить данные.");
//         navigate("/");
//       } finally {
//         setLoading(false);
//       }
//     };

//     checkConditions();
//   }, [navigate]);

//   if (loading) {
//     return <Loader/>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return null;
// };

// export default TimeLocationChecker;

// both

// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Loader from "./Loader";

// const TimeLocationChecker = () => {
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const checkConditions = async () => {
//       try {
//         const response = await fetch("https://ipapi.co/json/");
//         if (!response.ok) {
//           throw new Error(`API Error: ${response.statusText}`);
//         }
//         const data = await response.json();
//         const isInFinland = data?.country === "FI";
//         if (isInFinland) {
//           navigate("/1");
//         } else {
//           navigate("/home");
//         }
//       } catch (err) {
//         console.error("Ошибка проверки:", err);
//         setError("Не удалось загрузить данные.");
//         navigate("/");
//       } finally {
//         setLoading(false);
//       }
//     };

//     checkConditions();
//   }, [navigate]);

//   if (loading) {
//     return <Loader/>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return null;
// };

// export default TimeLocationChecker;

// for Poland

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { isMobile } from "react-device-detect";
import Loader from "./Loader";

const TimeLocationChecker = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const checkConditions = async () => {
      try {
        // Запрос на API для определения местоположения
        const response = await fetch("https://ipapi.co/json/");
        if (!response.ok) {
          throw new Error(`API Error: ${response.statusText}`);
        }

        const data = await response.json();
        console.log("Данные от API:", data);

        // Проверка, что пользователь из Польши
        const isInPoland = data?.country === "PL";
        console.log("Пользователь в Польше:", isInPoland);

        // Проверка, что пользователь использует мобильное устройство
        console.log("Мобильное устройство:", isMobile);

        // Перенаправление на основе условий
        if (isMobile && isInPoland) {
          console.log("Перенаправление на /1");
          navigate("/1");
        } else {
          console.log("Перенаправление на /home");
          navigate("/home");
        }
      } catch (err) {
        console.error("Ошибка проверки:", err);
        setError("Не удалось загрузить данные.");
        navigate("/home"); // Перенаправление в случае ошибки
      } finally {
        setLoading(false); // Завершаем загрузку
      }
    };

    checkConditions();
  }, [navigate]);

  if (loading) {
    return (
      <div>
        <Loader />;
      </div>
    ); // Отображаем лоадер при загрузке
  }

  if (error) {
    return <div>Ошибка: {error}</div>; // Отображаем ошибку, если она произошла
  }

  return null; // Ничего не отображаем после перенаправления
};

export default TimeLocationChecker;
