import React from "react";
import { Link } from "react-router-dom";

const PlanSection = () => {
  return (
    <div className="py-8" id="planSection">
      <h2 className="text-2xl font-bold text-center mb-8">
        Elige el plan que más se adapte a tus necesidades
      </h2>
      <div className="flex justify-around">
        <div className="w-1/3 px-4">
          <div className="bg-gray-950 bg-opacity-75 p-6 rounded-lg mb-6">
            <h3 className="text-4xl font-bold mb-2 uppercase text-white">
              Aumento muscular
            </h3>
            <p className="mb-4 text-xl font-bold">Plan 100% a medida</p>
            <p className="mb-2 text-7xl">$100</p>
            <p className="mb-4 font-bold">USD/mensual*</p>

            <p className="mb-4">+ Más músculos y menos grasa</p>
            <p className="mb-4">+ Más autoestima y presencia</p>
            <p className="mb-4">+ Mejor calce y estética</p>
            <h4 className="font-bold mb-2">Qué incluye?</h4>
            <ul className="list-disc ml-6 mb-4">
              <li>Guía de entrenamiento a medida + videos</li>
              <li>Guía de alimentación personalizada</li>
              <li>Chequeos cada 30 días</li>
              <li>Acompañamiento y motivación</li>
              <li>Atención permanente vía WhatsApp</li>
            </ul>
            <p className="font-bold">
              Precios mensuales recurrentes con tarjeta de crédito/débito
            </p>
            <Link to="/subscribe">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4">
                Quiero empezar
              </button>
            </Link>
          </div>
        </div>
        <div className="w-1/3 px-4">
          <div className="bg-gray-950 bg-opacity-75 p-6 rounded-lg mb-6">
            <h3 className="text-3xl font-bold mb-2 uppercase text-white">
              Perdida de grasa y recomposición corporal
            </h3>
            <p className="mb-4 text-xl font-bold">Plan 100% a medida</p>
            <p className="mb-2 text-7xl">$30</p>
            <p className="mb-4 font-bold">USD/mensual*</p>

            <p className="mb-4">+ Chau grasa y hola músculos</p>
            <p className="mb-4">+ Chau celulitis y flacidez</p>
            <p className="mb-4">+ Hola abs y tono muscular</p>
            <p className="mb-4">+ Más autoestima y seguridad</p>
            <h4 className="font-bold mb-2">Qué incluye?</h4>
            <ul className="list-disc ml-6 mb-4">
              <li>Guía de entrenamiento a medida + videos</li>
              <li>Guía de alimentación personalizada</li>
              <li>Chequeos cada 30 días</li>
              <li>Acompañamiento y motivación</li>
              <li>Atención permanente vía WhatsApp</li>
            </ul>
            <p className="font-bold">
              Precios mensuales recurrentes con tarjeta de crédito/débito
            </p>
            <Link to="/subscribe">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4">
                Quiero empezar
              </button>
            </Link>
          </div>
        </div>
        <div className="w-1/3 px-4">
          <div className="bg-gray-950 bg-opacity-75 p-6 rounded-lg mb-6">
            <h3 className="text-4xl font-bold mb-2 uppercase text-white">
              Deportista de alto nivel
            </h3>
            <p className="mb-4 text-xl font-bold">Plan 100% a medida</p>
            <p className="mb-2 text-7xl">$500</p>
            <p className="mb-4 font-bold">USD/mensual*</p>

            <p className="mb-4">+ Mayor rendimiento y competibilidad</p>
            <p className="mb-4">+ Marca la diferencia con tus adversarios</p>
            <p className="mb-4">+ Evita lesiones y poténciate</p>
            <h4 className="font-bold mb-2">Qué incluye?</h4>
            <ul className="list-disc ml-6 mb-4">
              <li>Guía de entrenamiento a medida + videos</li>
              <li>Guía de alimentación personalizada</li>
              <li>Chequeos cada 30 días</li>
              <li>Acompañamiento y motivación</li>
              <li>Atención permanente vía WhatsApp</li>
            </ul>
            <p className="font-bold">
              Precios mensuales recurrentes con tarjeta de crédito/débito
            </p>
            <Link to="/subscribe">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4">
                Quiero empezar
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanSection;
