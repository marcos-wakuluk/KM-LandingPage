import React from "react";
import { lucas6 } from "../../utils/Constants";
import ScrollToButton from "./ScrollToButton";

const Section3 = () => {
  return (
    <div className="section-container flex flex-col md:flex-row bg-custom-black">
      <div className="image-container w-full md:w-1/2 hidden md:block">
        <img src={lucas6} alt="Logo" className="w-full h-auto object-cover" />
      </div>
      <div className="w-full md:w-1/2 text-white py-4 px-8 section3-container">
        <h2 className="text-3xl font-bold mb-2 uppercase">
          ¿Te falta organización en tu vida fit? ¿Sientes que pierdes tiempo y
          no progresas lo suficiente? ¿Te sientes solo, desmotivado y que
          malgastas tu dinero?
        </h2>
        <h3 className="text-lg font-semibold mb-4">
          Sabemos exactamente por lo que estás pasando. También estuvimos en tu
          lugar y por ello creamos este asesoramiento online, para hacerte mucho
          más fácil el proceso, para que logres resultados a corto, mediano y
          largo plazo. Nunca más tires tu dinero y poder educarte en este
          ámbito. La idea es que crees hábitos saludables y duraderos para
          mantener tus resultados siempre.
        </h3>
        <h3>¿Qué opina la gente de nuestro servicio?</h3>
        <ScrollToButton text="Quiero unirme" className="text-2xl" />
      </div>
    </div>
  );
};

export default Section3;
