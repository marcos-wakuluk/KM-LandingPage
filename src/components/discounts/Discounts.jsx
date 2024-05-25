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
      <h2 className="bg-black text-white text-3xl font-bold p-6">
        KM Pro App - Asesoria fitness completa
      </h2>
      <div className="text-center sticky top-0 z-10">
        <div className="mx-auto">
          <div className="flex justify-stretch bg-blue-500 text-black p-8 items-center">
            <h3 className="flex-grow text-2xl font-bold uppercase">
              Últimos cupos
            </h3>
            <h3 className="flex-grow text-lg font-semibold">
              {minutes} minutos {seconds} segundos
            </h3>
            <ScrollToButton text="Quiero unirme" className="text-2xl" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Discount;
