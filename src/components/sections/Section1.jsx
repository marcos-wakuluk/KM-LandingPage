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

      <div className="content-container lg:w-1/2 w-full text-white py-4 px-6 md:px-8 relative flex flex-col justify-center h-full">
        <h2 className="bg-red-900 mt-10 mb-4 p-2 uppercase rounded-lg text-2xl text-center" style={{ boxShadow: "10px 10px 20px rgb(127 29 29)" }}>
          cambia tus habitos tu mente y cuerpo
        </h2>

        <h3 className="text-3xl font-semibold mb-4 text-center">Conviértete en la persona que siempre soñaste.</h3>

        <div className="flex justify-center items-center mb-4">
          <ul className="space-y-4">
            <li className="text-2xl flex items-center">
              <CheckCircleIcon className="h-6 w-6 text-green-500 mr-4" />
              <span>Perdé grasa</span>
            </li>
            <li className="text-2xl flex items-center">
              <CheckCircleIcon className="h-6 w-6 text-green-500 mr-4" />
              <span>Ganá músculo</span>
            </li>
            <li className="text-2xl flex items-center">
              <CheckCircleIcon className="h-6 w-6 text-green-500 mr-4" />
              <span>Mejora tu rendimiento</span>
            </li>
          </ul>
        </div>

        <h3 className="text-justify text-2xl font-semibold mb-6 leading-relaxed break-words">
          Nuestra misión es guiarte paso a paso en tu proceso, brindarte todas las herramientas y secretos para que puedas transformarte en tu mejor versión en
          tiempo récord.
        </h3>
        <h3 className="text-justify text-xl font-thin mb-6 leading-relaxed break-words animate-pulse">
          App móvil exclusiva, plan 100% a medida, soporte diario, comunidad fitness privada.
        </h3>
        <h3 className="text-justify text-2xl font-thin mb-10 leading-relaxed break-words">
          No es cualquier membresía, somos las personas y el entorno que va a cambiar tu vida por completo como ya lo hicimos con más de 2000 personas por el
          mundo.
        </h3>

        <div className="flex justify-center">
          <ScrollToButton text="Quiero unirme" className="border-2 border-blue-500" />
        </div>
      </div>
    </div>
  );
};

export default Section1;
