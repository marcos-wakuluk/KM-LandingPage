import React, { useEffect, useState } from "react";
import {
  Testimonio1,
  Testimonio2,
  Testimonio3,
  Testimonio4,
  Testimonio5,
  Testimonio6,
  Testimonio7,
} from "../../utils/Images";
import ScrollToButton from "./ScrollToButton";

const Section2 = () => {
  const images = [
    Testimonio1,
    Testimonio2,
    Testimonio3,
    Testimonio4,
    Testimonio5,
    Testimonio6,
    Testimonio7,
    Testimonio1,
    Testimonio2,
    Testimonio3,
    Testimonio4,
    Testimonio5,
    Testimonio6,
    Testimonio7,
    Testimonio1,
    Testimonio2,
    Testimonio3,
    Testimonio4,
    Testimonio5,
    Testimonio6,
    Testimonio7,
  ];
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 1000); // Intervalo de 1 segundo
    return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
  }, []);

  return (
    <div className="relative w-full bg-blue-500">
      <h2 className="bg-blue-500 text-black text-2xl font-bold p-4 uppercase">
        transformaciones
      </h2>
      <div
        id="default-carousel"
        className="relative w-full overflow-hidden rounded-lg md:h-96"
        data-carousel="slide"
      >
        <div className="flex bg-blue-500">
          {images.map((image, index) => (
            <div
              key={index}
              className={`${
                index >= startIndex && index < startIndex + 5
                  ? "flex"
                  : "hidden"
              } duration-700 ease-in-out`}
              data-carousel-item
            >
              <img
                src={image}
                className="block w-full object-cover"
                alt="algo"
              />
            </div>
          ))}
        </div>
      </div>
      <ScrollToButton text="Quiero unirme" />
    </div>
  );
};

export default Section2;
