import React from "react";
import { lucasBottomless1 } from "../../utils/Constants";
import ScrollToButton from "./ScrollToButton";

const Section4 = () => {
  return (
    <>
      <div className="section4-container flex flex-col md:flex-row bg-custom-black">
        <div className="content-container md:w-1/2 w-full text-white py-4 px-8 relative">
          <h2 className="text-3xl font-bold mb-2 uppercase mt-20">
            Imaginate tener todo en un sólo lugar Si sabes lo que queres lograr
            pero no sabes exactamente como hacerlo, vas a seguir perdiendo el
            tiempo
          </h2>
          <h3 className="text-2xl font-semibold mb-4 mt-20">
            Nuestra asesoria/membresia funciona como una subscrcion mensual, una
            vez dentro, recibiras un plan de entrenamiento y alimentacion 100%
            medida que se akustara mes ame ssegun tus progresos y nuestras
            consideraciones. contaras tambien con apoyo diario en un grupo
            activo, exclusivo para miembros y mi wsp peseonal para cuando lo
            necesites.
          </h3>
          <ScrollToButton
            text="Quiero unirme"
            className="text-2xl border-2 border-blue-500 mt-20 mb-20"
          />
        </div>
        <div className="image-container w-full md:w-1/2 hidden md:block">
          <img
            src={lucasBottomless1}
            alt="Logo"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default Section4;
