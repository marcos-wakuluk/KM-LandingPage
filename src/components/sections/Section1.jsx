import React from "react";
import { KMWhite } from "../../utils/Constants";
import ScrollToButton from "./ScrollToButton";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const Section1 = () => {
  return (
    <div className="section-container flex flex-col md:flex-row bg-custom-black relative">
      <div className="image-container w-full md:w-1/2 flex items-center justify-center relative">
        <img src={KMWhite} alt="Logo" className="w-auto h-64 object-contain hidden md:block" />
      </div>

      <div className="content-container md:w-1/2 w-full text-white py-4 px-8 relative flex flex-col justify-center h-full">
        <h2 className="bg-red-900 mt-10 mb-4 p-2 uppercase rounded-lg text-2xl" style={{ boxShadow: "10px 10px 20px rgb(127 29 29)" }}>
          cambia tus habitos tu mente y cuerpo
        </h2>
        <h3 className="text-3xl font-semibold mb-4">Conviertete en la persona que siempre soñaste.</h3>
        <div className="flex justify-start mb-4">
          <ul className="space-y-6">
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

        <h3 className="text-3xl mb-4 break-all font-thin">
          Nuestra misión es guiarte paso a paso en tu proceso, brindarte todas las herramientas y secretos para que puedas transformarte en tu mejor versión en
          tiempo récord.
        </h3>
        <h3 className="text-2xl font-semibold mb-4 break-all animate-pulse">
          App movil exclusiva, plan 100% a medida, soporte diario, comunidad fitness privada.
        </h3>
        <h3 className="text-3xl font-semibold mb-10 text-justify">
          No es cualquier membresía, somos las personas y el entorno que va a cambiar tu vida por completo como ya lo hicimos con más de 2000 personas por el
          mundo.
        </h3>

        <ScrollToButton text="Quiero unirme" className="border-2 border-blue-500" />
      </div>
    </div>
  );
};

export default Section1;
