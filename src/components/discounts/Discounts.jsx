import React, { useState, useEffect } from "react";
import ScrollToButton from "../sections/ScrollToButton";

const Discount = () => {
  const [minutes, setMinutes] = useState(15);
  const [seconds, setSeconds] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (minutes === 0 && seconds === 0) {
        clearInterval(interval);
        setIsVisible(false);
      } else if (seconds === 0) {
        setMinutes((prevMinutes) => prevMinutes - 1);
        setSeconds(59);
      } else {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [minutes, seconds]);

  if (!isVisible) return null;

  return (
    <div className="text-center bg-blue-500 p-1 w-full desktop-sticky">
      <div className="flex flex-col md:flex-row justify-around items-center bg-blue-500 text-black p-1 md:p-4">
        <h3 className="text-lg md:text-2xl font-bold uppercase mb-1 md:mb-0">Últimos cupos</h3>
        <h3 className="text-lg md:text-2xl font-semibold mb-1 md:mb-0">
          {minutes} minutos {seconds} segundos
        </h3>
        <ScrollToButton text="Quiero unirme" className="text-lg md:text-2xl" />
      </div>
    </div>
  );
};

export default Discount;
