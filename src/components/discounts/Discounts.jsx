import React, { useState, useEffect } from "react";
import ScrollToButton from "../sections/ScrollToButton";

const Discount = () => {
  const [minutes, setMinutes] = useState(15);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (minutes === 0 && seconds === 0) {
        clearInterval(interval);
      } else if (seconds === 0) {
        setMinutes((prevMinutes) => prevMinutes - 1);
        setSeconds(59);
      } else {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [minutes, seconds]);

  return (
    <>
      <h2 className="bg-black text-white text-3xl font-bold p-6 w-full text-center">
        KM Pro App - Asesoria fitness completa
      </h2>
      <div className="text-center bg-blue-500 p-4 w-full desktop-sticky">
        <div className="flex flex-col md:flex-row justify-between items-center bg-blue-500 text-black p-4 md:p-8">
          <h3 className="text-2xl font-bold uppercase mb-2 md:mb-0">
            Últimos cupos
          </h3>
          <h3 className="text-lg font-semibold mb-2 md:mb-0">
            {minutes} minutos {seconds} segundos
          </h3>
          <ScrollToButton text="Quiero unirme" className="text-2xl" />
        </div>
      </div>
    </>
  );
};

export default Discount;
