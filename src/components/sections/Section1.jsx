import React from "react";
import { lucas5 } from "../../utils/Constants";
import ScrollToButton from "./ScrollToButton";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const Section1 = () => {
  return (
    <div className="section-container flex flex-col md:flex-row bg-custom-black">
      <div className="content-container md:w-1/2 w-full text-white py-4 px-8 relative">
        <h2
          className="bg-red-900 mt-10 mb-4 p-2 uppercase rounded-lg text-2xl"
          style={{ boxShadow: "10px 10px 20px rgb(127 29 29)" }}
        >
          cambia tus habitos tu mente y cuerpo
        </h2>
        <h3 className="text-3xl font-semibold mb-4">
          Conviértete en la persona que siempre soñaste.
        </h3>
        <ul className="space-y-6 mb-4">
          <li className="text-2xl flex items-center">
            <CheckCircleIcon className="h-6 w-6 text-green-500 mr-4" />
            <span>Perdé grasa</span>
          </li>
          <li className="text-2xl flex items-center">
            <CheckCircleIcon className="h-6 w-6 text-green-500 mr-4" />
            <span>Ganá musculo</span>
          </li>
          <li className="text-2xl flex items-center">
            <CheckCircleIcon className="h-6 w-6 text-green-500 mr-4" />
            <span>Mejorá tu rendimiento deportivo</span>
          </li>
        </ul>
        <h3 className="text-3xl mb-4 text-justify font-thin">
          Nuestra misión es guiarte paso a paso en tu proceso y brindarte todas
          las heramientas y secretos para que peudas transformarte en tumejor
          versión en tiempo record.
        </h3>
        <h3 className="text-2xl font-semibold mb-2 text-justify animate-pulse">
          App movil exclusiva, plan 100% a medida, soporte diario, comunidad
          fitness privada.
        </h3>
        <h3 className="text-3xl font-semibold mb-10">
          No es cualquier menbresia, somos las personas y el entorno que va a
          cambiar tu vida por completo como ya lo hicimos con mas de 2000
          personas por el mundo.
        </h3>

        <ScrollToButton
          text="Quiero unirme"
          className="border-2 border-blue-500"
        />
      </div>
      <div className="image-container w-full md:w-1/2 hidden md:block">
        <img src={lucas5} alt="Logo" className="w-full h-auto object-cover" />
      </div>
    </div>
  );
};

export default Section1;
