import React from "react";
import ScrollToButton from "./ScrollToButton";

const Section6 = () => {
  return (
    <div className="flex bg-custom-black justify-center items-center">
      <div className="w-2/3 p-8">
        <h2 className="text-2xl font-bold text-center text-white mb-8">
          ¿Vas a procrastinar otra vez?
        </h2>
        <ScrollToButton text="Quiero unirme" className="text-2xl" />
      </div>
    </div>
  );
};

export default Section6;
