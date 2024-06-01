import React from "react";
import { Link } from "react-router-dom";
import { lucas2, lucas3 } from "../../utils/Constants";

const PlanSection = () => {
  return (
    <div className="py-8 bg-custom-black" id="planSection">
      <h2 className="text-4xl font-bold text-white text-center">
        Selecciona el plan
      </h2>
      <h2 className="text-4xl font-bold text-center mb-8 text-blue-500">
        que más se adapte a tus necesidades
      </h2>
      <div className="flex justify-around">
        <div className="w-1/2 px-4">
          <div
            className="p-6 rounded-lg mb-6 text-white bg-image-overlay"
            style={{
              backgroundImage: `url(${lucas2})`,
              backgroundSize: "cover",
            }}
          >
            <h3 className="text-4xl font-bold uppercase">Aumento</h3>
            <h3 className="text-4xl font-bold mb-2 uppercase">muscular</h3>
            <p className="mb-4 text-xl font-bold">Plan 100% a medida</p>
            <p className="mb-2 text-7xl font-bold">$100</p>
            <p className="mb-4 font-bold">USD/mensual*</p>

            <p className="mb-4">+ Más músculos y menos grasa</p>
            <p className="mb-4">+ Más autoestima y presencia</p>
            <p className="mb-4">+ Mejor calce y estética</p>
            <h4 className="font-bold mb-2">Qué incluye?</h4>
            <ul className="list-disc text-left ml-6 mb-4">
              <p>✅ Guía de entrenamiento a medida + videos</p>
              <p>✅ Guía de alimentación personalizada</p>
              <p>✅ Chequeos cada 30 días</p>
              <p>✅ Acompañamiento y motivación</p>
              <p>✅ Atención permanente vía WhatsApp</p>
            </ul>
            <p className="font-bold">
              Precios mensuales recurrentes con tarjeta de crédito/débito
            </p>
            <Link to="/subscribe">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4 text-2xl">
                Quiero empezar
              </button>
            </Link>
          </div>
        </div>
        <div className="w-2/3 px-4">
          <div
            className="p-6 rounded-lg mb-6 text-white bg-image-overlay"
            style={{
              backgroundImage: `url(${lucas3})`,
              backgroundSize: "cover",
            }}
          >
            <h3 className="text-3xl font-bold mb-2 uppercase">
              Perdida de grasa y recomposición corporal
            </h3>
            <p className="mb-6 text-xl font-bold">Plan 100% a medida</p>
            <p className="mb-2 text-7xl font-bold">$30</p>
            <p className="mb-4 font-bold">USD/mensual*</p>

            <p className="mb-4">+ Chau grasa y hola músculos</p>
            <p className="mb-4">+ Chau celulitis y flacidez</p>
            <p className="mb-4">+ Hola abs y tono muscular</p>
            {/* <p className="mb-4">+ Más autoestima y seguridad</p> */}
            <h4 className="font-bold mb-2">Qué incluye?</h4>
            <div className="list-disc text-left ml-6 mb-4">
              <p>✅ Guía de entrenamiento a medida + videos</p>
              <p>✅ Guía de alimentación personalizada</p>
              <p>✅ Chequeos cada 30 días</p>
              <p>✅ Acompañamiento y motivación</p>
              <p>✅ Atención permanente vía WhatsApp</p>
            </div>
            <p className="font-bold">
              Precios mensuales recurrentes con tarjeta
            </p>
            <p className="font-bold">de crédito/débito</p>
            <Link to="/subscribe">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4 text-2xl">
                Quiero empezar
              </button>
            </Link>
          </div>
        </div>
        <div className="w-1/2 px-4">
          <div
            className="p-6 rounded-lg mb-6 text-white bg-image-overlay"
            style={{
              backgroundImage: `url(${lucas2})`,
              backgroundSize: "cover",
            }}
          >
            <h3 className="text-4xl font-bold mb-2 uppercase">
              Deportista de alto nivel
            </h3>
            <p className="mb-4 text-xl font-bold">Plan 100% a medida</p>
            <p className="mb-2 text-7xl font-bold">$500</p>
            <p className="mb-4 font-bold">USD/mensual*</p>

            <p className="mb-4">+ Mayor rendimiento y competibilidad</p>
            <p className="mb-4">+ Marca la diferencia con tus adversarios</p>
            <p className="mb-4">+ Evita lesiones y poténciate</p>
            <h4 className="font-bold mb-2">Qué incluye?</h4>
            <div className="list-disc text-left ml-6 mb-4">
              <p>✅ Guía de entrenamiento a medida + videos</p>
              <p>✅ Guía de alimentación personalizada</p>
              <p>✅ Chequeos cada 30 días</p>
              <p>✅ Acompañamiento y motivación</p>
              <p>✅ Atención permanente vía WhatsApp</p>
            </div>
            <p className="font-bold">
              Precios mensuales recurrentes con tarjeta de crédito/débito
            </p>
            <Link to="/subscribe">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4 text-2xl">
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
