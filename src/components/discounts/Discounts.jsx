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
      <h2 className="bg-black text-white text-2xl font-bold p-4">
        Solo por hoy 20% OFF en todos los planes de #KMProFitness
      </h2>
      <div className="text-center sticky top-0">
        <div className="mx-auto">
          <div className="flex justify-stretch bg-blue-500 text-black p-4 items-center">
            <h3 className="flex-grow text-lg font-semibold">Últimos cupos</h3>
            <h3 className="flex-grow text-lg font-semibold">
              {minutes} minutos {seconds} segundos
            </h3>
            <ScrollToButton text="Quiero unirme" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Discount;