import React from "react";
import { Link } from "react-router-dom";
import { lucas2, lucas3, PlansPrices } from "../../utils/Constants";

const PlanSection = () => {
  return (
    <div className="py-8 bg-custom-black" id="planSection">
      <h2 className="text-4xl font-bold text-white text-center">Seleccioná el plan</h2>
      <h2 className="text-4xl font-bold text-center mb-8 text-blue-500">que más se adapte a tus necesidades</h2>
      <div className="flex flex-wrap justify-around">
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
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
            <p className="mb-2 text-7xl font-bold">{PlansPrices.aumentoMasa[1]}</p>

            <p className="mb-4">+ Más músculos y menos grasa</p>
            <p className="mb-4">+ Más autoestima y presencia</p>
            <p className="mb-4">+ Mejor calce y estética</p>
            <h4 className="font-bold mb-2">¿Qué incluye?</h4>
            <ul className="list-disc text-left ml-6 mb-4">
              <p>✅ Guía de entrenamiento a medida + videos</p>
              <p>✅ Guía de alimentación personalizada</p>
              <p>✅ Chequeos cada 30 días</p>
              <p>✅ Acompañamiento y motivación</p>
              <p>✅ Atención personal vía WhatsApp</p>
            </ul>
            <p className="font-bold">* Precios mensuales recurrentes con tarjeta de crédito/débito</p>
            <Link to={`/subscribe/aumentoMasa`}>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4 text-2xl">
                Quiero empezar
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
          <div
            className="p-6 rounded-lg mb-6 text-white bg-image-overlay"
            style={{
              backgroundImage: `url(${lucas3})`,
              backgroundSize: "cover",
            }}
          >
            <h3 className="text-3xl font-bold mb-2 uppercase">Perdida de grasa y recomposición corporal</h3>
            <p className="mb-6 text-xl font-bold">Plan 100% a medida</p>
            <p className="mb-2 text-7xl font-bold">{PlansPrices.perdidaGrasa[1]}</p>

            <p className="mb-4">+ Chau grasa, hola músculos</p>
            <p className="mb-4">+ Chau celulitis y flacidez</p>
            <p className="mb-4">+ Más seguridad y autoestima</p>
            <h4 className="font-bold mb-2">¿Qué incluye?</h4>
            <div className="list-disc text-left ml-6 mb-4">
              <p>✅ Guía de entrenamiento a medida + videos</p>
              <p>✅ Guía de alimentación personalizada</p>
              <p>✅ Chequeos cada 30 días</p>
              <p>✅ Acompañamiento y motivación</p>
              <p>✅ Atención personal vía WhatsApp</p>
            </div>
            <p className="font-bold">* Precios mensuales recurrentes con tarjeta de crédito/débito</p>
            <Link to={`/subscribe/perdidaGrasa`}>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4 text-2xl">
                Quiero empezar
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
          <div
            className="p-6 rounded-lg mb-6 text-white bg-image-overlay"
            style={{
              backgroundImage: `url(${lucas2})`,
              backgroundSize: "cover",
            }}
          >
            <h3 className="text-4xl font-bold mb-2 uppercase">
              Deportista de <br />
              alto nivel
            </h3>
            <p className="mb-4 text-xl font-bold">Plan 100% a medida</p>
            <p className="mb-2 text-7xl font-bold">{PlansPrices.altoRendimiento[1]}</p>

            <p className="mb-4">+ Mayor rendimiento y competitividad</p>
            <p className="mb-4">+ Marcá la diferencia con tus adversarios</p>
            <p className="mb-4">+ Evita lesiones y potanciate</p>
            <h4 className="font-bold mb-2">¿Qué incluye?</h4>
            <div className="list-disc text-left ml-6 mb-4">
              <p>✅ Guía de entrenamiento a medida + videos</p>
              <p>✅ Guía de alimentación personalizada</p>
              <p>✅ Chequeos cada 30 días</p>
              <p>✅ Acompañamiento y motivación</p>
              <p>✅ Atención personal vía WhatsApp</p>
            </div>
            <p className="font-bold">* Precios mensuales recurrentes con tarjeta de crédito/débito</p>
            <Link to={`/subscribe/altoRendimiento`}>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4 text-2xl">
                Quiero empezar
              </button>
            </Link>
          </div>
        </div>
      </div>
      <h3 className="text-4xl text-center text-white font-light leading-relaxed animate-pulse p-8 mx-4 md:mx-24">
        Todos los planes incluyen acceso a la app Fitness en donde encontrarás el método PPR que es la forma de
        brindarte organización y claridad para afrontar tu cambio, haciéndolo al proceso mas didáctico y educativo para
        poder mantener la constancia y lograr cambios verdaderos.
      </h3>
    </div>
  );
};

export default PlanSection;
