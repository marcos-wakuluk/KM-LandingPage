import React from "react";
import { lucasBottomless1 } from "../../utils/Constants";
import ScrollToButton from "./ScrollToButton";

const Section4 = () => {
  return (
    <>
      <div className="flex bg-custom-black">
        <div className="w-1/2 text-white py-4 px-8">
          <h2 className="text-3xl font-bold mb-2 uppercase">
            Imaginate tener todo en un sólo lugar Si sabes lo que queres lograr
            pero no sabes exactamente como hacerlo, vas a seguir perdiendo el
            tiempo
          </h2>
          <h3 className="text-lg font-semibold mb-4">
            Beneficios adicionales Programa integral, no va a faltarte nada APP
            móvil exclusiva Experiencia única desde tu teléfono celular, donde
            tendrás acceso tanto a tus entrenamientos como a tu plan de comidas
            personalizado. Desde tu app tendrás un registro fotográfico de tus
            progresos además un registro de medidas corporales. También podrás
            encontrar contenido extra como “como lograr mi objetivo de cero a
            100” ”lsta de compras saludables” Vamos a renovar tu plan completo
            de manera mensual, ajustándolo acorde a tu progreso. ATENCIÓN!
            Cuando te anotes, necesitamos que completes todos tus datos. Peso,
            altura, preferencias de comida, si entrenas en gym o casa y que
            subas fotos actuales. Con esto vamos a poder armarte un plan
            perfectamente a medida. El cual tardamos aproximadamente 48hs en
            realizarlo
          </h3>
          <h3>¿Que opina la gente de nuestro servicio?</h3>
          <ScrollToButton text="Quiero unirme" className="text-2xl" />
        </div>
        <div className="w-2/3">
          {" "}
          <img src={lucasBottomless1} alt="Logo" />
        </div>
      </div>
    </>
  );
};

export default Section4;
