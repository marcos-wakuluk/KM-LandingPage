import React from "react";
import { lucasBottomless4 } from "../../utils/Images";
import ScrollToButton from "./ScrollToButton";

const Section1 = () => {
  return (
    <div className="flex bg-custom-black">
      <div className="w-1/2 text-white py-4 px-8">
        <h2 className="bg-red-600 mt-10 mb-10 p-2 uppercase rounded-md" style={{ boxShadow: "10px 10px 10px red" }}>
          Pierde grasa, gana músculos o mejora tu rendimiento deportivo. <br />
          Logra un autoestima indestructible
        </h2>
        <h3 className="text-4xl font-semibold mb-4">
          El paso a paso definitivo para lograr los resultados que siempre
          soñaste. Vas a ver como todo cambia
        </h3>
        <ScrollToButton text="Quiero unirme" />
      </div>
      <div className="w-1/2 ">
        <img className="w-2/3" src={lucasBottomless4} alt="Logo" />
      </div>
    </div>
  );
};

export default Section1;
