import React from "react";
import { lucas4 } from "../../utils/Constants";

const Section3 = () => {
  return (
    <div className="section-container flex flex-col md:flex-row bg-custom-black">
      <div className="image-container w-full lg:w-1/3 hidden lg:block">
        <img src={lucas4} alt="Logo" className="w-full h-auto object-cover" />
      </div>
      <div className="w-full lg:w-2/3 text-white py-4 px-8 section3-container">
        <h2 className="text-3xl font-bold mb-2 uppercase mt-40 md:text-left">¿Te falta organización en tu vida fit?</h2>
        <h2 className="text-3xl font-bold mb-2 uppercase md:text-left">¿Sientes que pierdes tiempo y no progresas lo suficiente?</h2>
        <h2 className="text-3xl font-bold mb-2 uppercase md:text-left">¿Te sientes solo, desmotivado y que malgastas tu dinero?</h2>
        <h3 className="text-2xl font-semibold mb-4 mt-20 whitespace-pre-line  md:text-left">Sabemos exactamente por lo que estás pasando.</h3>
        <h3 className="text-2xl font-semibold mb-4 whitespace-pre-line md:text-left">
          También estuvimos en tu lugar y por ello creamos este asesoramiento online, para hacerte mucho más fácil el proceso, para que logres resultados a
          corto, mediano y largo plazo.
        </h3>
        <h3 className="text-2xl font-semibold mb-4 whitespace-pre-line  md:text-left">
          Nunca más tires tu dinero. La idea es que crees hábitos saludables y duraderos para mantener tus resultados siempre.
        </h3>
      </div>
    </div>
  );
};

export default Section3;
