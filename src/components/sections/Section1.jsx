import React from "react";
import { lucas5 } from "../../utils/Constants";
import ScrollToButton from "./ScrollToButton";

const Section1 = () => {
  return (
    <div className="section-container flex flex-col md:flex-row bg-custom-black">
      <div className="content-container md:w-1/2 w-full text-white py-4 px-8 relative">
        <h2
          className="bg-red-900 mt-10 mb-10 p-2 uppercase rounded-lg text-2xl"
          style={{ boxShadow: "10px 10px 20px rgb(127 29 29)" }}
        >
          PIERDE GRASA, GANA MÚSCULOS O MEJORA TU RENDIMIENTO DEPORTIVO. LOGRA
          UNAUTOESTIMA INDESTRUCTIBLE
        </h2>
        <h3 className="text-4xl font-semibold mb-4">
          El paso a paso definitivo para lograr los resultados que siempre
          soñaste.
        </h3>
        <h3 className="text-4xl font-semibold mb-4">
          No es una aplicación mas, no es cualquier asesoría, somos las personas
          que vamos a cambiar tu vida por completo como ya lo hicimos con mas de
          4000 mil personas de todo el mundo.
        </h3>

        <ScrollToButton text="Quiero unirme" className="text-2xl" />
      </div>
      <div className="image-container w-full md:w-1/2 hidden md:block">
        <img src={lucas5} alt="Logo" className="w-full h-auto object-cover" />
      </div>
    </div>
  );
};

export default Section1;
