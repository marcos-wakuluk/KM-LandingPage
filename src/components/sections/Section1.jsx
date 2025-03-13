import React from "react";
import { KMBlack2 } from "../../utils/Constants";
import ScrollToButton from "./ScrollToButton";

const Section1 = () => {
  return (
    <div className="section-container flex flex-col md:flex-row bg-custom-black relative">
      <div className="image-container w-full lg:w-1/2 flex items-center justify-center relative">
        <img
          src={KMBlack2}
          alt="Logo"
          className="w-auto h-64 object-contain hidden md:block"
          style={{
            filter: "drop-shadow(2px 4px 6px rgb(59 130 246)",
          }}
        />
      </div>

      <div
        className="content-container w-full text-white py-4 px-6 md:px-8 md:hidden absolute flex flex-col justify-center h-full "
        style={{
          backgroundImage: `url(${KMBlack2})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "drop-shadow(2px 4px 6px rgb(59 130 246)",
          width: "90%",
        }}
      ></div>

      <div className="content-container w-full lg:w-1/2 text-white py-8 px-6 md:px-10 relative flex flex-col justify-center h-full z-10">
        <h2 className="bg-red-700 mt-10 mb-6 p-3 uppercase rounded-lg text-3xl text-center shadow-lg">
          ¡Transformá tus habitos, mente y cuerpo con nuestro metodo PPR!
        </h2>

        <h3 className="text-3xl font-bold mb-4 text-center">
          Nuestra misión es guiarte paso a paso en tu proceso, brindarte todas las herramientas y secretos para que
          puedas transformarte en tu mejor versión en tiempo récord.
        </h3>

        <h3 className="text-3xl font-bold mb-4 text-center">
          App móvil exclusiva, planes 100% a medida, método PPR, soporte diario, comunidad fitness privada, guías
          extra..
        </h3>

        <div className="flex justify-center">
          <ScrollToButton
            text="Quiero unirme"
            className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Section1;
