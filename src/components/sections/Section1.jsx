import React from "react";
import { KMBlack2 } from "../../utils/Constants";
import ScrollToButton from "./ScrollToButton";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

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
        <h2 className="bg-red-700 mt-10 mb-6 p-3 uppercase rounded-lg text-3xl text-center shadow-lg">cambia tus habitos tu mente y cuerpo</h2>

        <h3 className="text-3xl font-bold mb-4 text-center">Conviértete en la persona que siempre soñaste.</h3>

        <div className="flex justify-center items-center mb-4">
          <ul className="space-y-4">
            {["Perdé grasa", "Ganá músculo", "Mejora tu rendimiento"].map((text) => (
              <li key={text} className="text-2xl flex items-center">
                <CheckCircleIcon className="h-7 w-7 text-green-500 mr-4" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-xl font-medium mb-6 leading-relaxed">
          Nuestra misión es guiarte paso a paso en tu proceso, brindarte todas las herramientas y secretos para que puedas transformarte en tu mejor versión en
          tiempo récord.
        </p>

        <p className="text-lg font-light mb-6 leading-relaxed animate-pulse">
          App móvil exclusiva, plan 100% a medida, soporte diario, comunidad fitness privada.
        </p>

        <p className="text-xl font-light mb-10 leading-relaxed">
          No es cualquier membresía, somos las personas y el entorno que va a cambiar tu vida por completo, como ya lo hicimos con más de 2000 personas por el
          mundo.
        </p>

        <div className="flex justify-center">
          <ScrollToButton text="Quiero unirme" className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300" />
        </div>
      </div>
    </div>
  );
};

export default Section1;
