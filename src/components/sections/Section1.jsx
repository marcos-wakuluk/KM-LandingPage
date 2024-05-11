import React from "react";
import { lucasBottomless4 } from "../../utils/Images";
import ScrollToButton from "./ScrollToButton";

const Section1 = () => {
  return (
    <div className="flex">
      <div className="w-1/2 bg-gray-800 text-white py-4 px-8">
        <h2 className="bg-red-600 mb-4 p-2 uppercase rounded-md">
          ¿queres estar en forma? que la ropa te calze 10 puntos? Ganar un
          autoestima indestructible y ver resultados de una vez por todas?
        </h2>
        <h3 className="text-4xl font-semibold mb-4">
          El paso a paso definitivo para lograr los resultados que siempre
          soñaste. Vas a ver como todo cambia
        </h3>
        <ScrollToButton text="Quiero unirme" />
      </div>
      <div className="w-1/2" style={{ backgroundColor: "#4B5563" }}>
        <img className="bg-gray-800" src={lucasBottomless4} alt="Logo" />
      </div>
    </div>
  );
};

export default Section1;
