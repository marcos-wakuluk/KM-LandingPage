import React from "react";
import { KMBlack2 } from "../../utils/Constants";

const Section4 = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row bg-custom-black">
        <div className="content-container md:w-2/3 w-full text-white py-4 px-8 relative">
          <h2 className="text-3xl font-bold mb-2 uppercase mt-20 relative" style={{ zIndex: 1 }}>
            Imaginate tener todo en un sólo lugar Si sabes lo que queres lograr pero no sabes exactamente como hacerlo, vas a seguir perdiendo el tiempo
          </h2>
          <h3 className="text-2xl font-semibold mb-4 mt-20 relative" style={{ zIndex: 1 }}>
            Nuestra asesoria/membresia funciona como una subscripción mensual, una vez dentro, recibiras un plan de entrenamiento y alimentacion 100% medida que
            se ajustará mes a mes según tus progresos y nuestras consideraciones. Contarás también con apoyo diario en un grupo activo, exclusivo para miembros
            y mi wsp personal para cuando lo necesites.
          </h3>
        </div>
        <div className="image-container w-full md:w-1/3 flex items-center justify-center relative">
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
      </div>
    </>
  );
};

export default Section4;
