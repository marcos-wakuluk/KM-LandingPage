import React from "react";
import { lucasBottomless1 } from "../../utils/Constants";
import ScrollToButton from "./ScrollToButton";

const Section3 = () => {
  return (
    <>
      <div className="flex bg-custom-black">
        <div className="w-1/2 text-white py-4 px-8">
          <h2 className="text-3xl font-bold mb-2 uppercase">
            ¿te falta organización en tu vida fit? Sentis que perder tiempo que
            no progresas o que lo haces muy lento? te sentís solo, desmotivado y
            que malgastas tu dinero?
          </h2>
          <h3 className="text-lg font-semibold mb-4">
            Sabemos exactamente por todo lo que estas pasando, también estuvimos
            en tu lugar y por ello creamos este asesoramiento online, para
            hacerte mucho más fácil el proceso, para que logres resultados a
            corto / mediano / largo plazo que nunca más tires tu dinero y poder
            educarte en este ámbito. De una vez por todas vas a construir el
            cuerpo que soñaste o lograr objetivos que siempre quisiste. La idea
            es que crees hábitos saludables y duraderos para mantener tus
            resultados siempre.
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

export default Section3;
