// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { isMobile } from "react-device-detect";

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
//     return <div>Загрузка...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return null;
// };

// export default TimeLocationChecker;









import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";

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
        if (isInFinland) {
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
    return <Loader/>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return null;
};

export default TimeLocationChecker;
