import React from "react";
import { lucas5 } from "../../utils/Constants";
import ScrollToButton from "./ScrollToButton";

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
        <h3 className="text-3xl font-semibold mb-10">
          Conviertete en la persona que siempre soñaste.
        </h3>
        <h3 className="text-4xl font-semibold mb-2">
          Perde grasa gana musculo o mejora tu rendimiento reportivo.
        </h3>
        <h3 className="text-4xl font-semibold mb-4">
          Nuestra mision es guiarte paso a paso en tu proceso y brindarte todas
          las heramientas y secretos para que peudas transformarte en tumejor
          version en tiempo record.
        </h3>
        <h3 className="text-3xl font-semibold mb-2">
          App movil exclusiva, plan 100% a medida, soporte diario, comunidad
          fitness privada.
        </h3>
        <h3 className="text-4xl font-semibold mb-10">
          No es cualquier menbresia, somos las personasy el entorno que va a
          cambiar ti vida por completo como ya lo hicimos con mas de 2000
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
