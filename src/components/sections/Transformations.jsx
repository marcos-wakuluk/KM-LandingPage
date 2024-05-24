import React, { useEffect, useState } from "react";
import ScrollToButton from "./ScrollToButton";
import { TransformationsImages } from "../../utils/Images";

const Transformations = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleImages = 5;
  const imageWidth = 100 / visibleImages; // Porcentaje de ancho para cada imagen

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prevIndex) =>
        prevIndex === TransformationsImages.length - visibleImages
          ? 0
          : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [TransformationsImages.length, visibleImages]);

  return (
    <div className="relative w-full bg-custom-blue">
      <h2 className="text-white text-2xl font-bold p-4 uppercase">
        transformaciones
      </h2>
      <div
        id="default-carousel"
        className="relative w-full overflow-hidden rounded-lg md:h-96"
        data-carousel="slide"
      >
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${startIndex * imageWidth}%)` }}
        >
          {TransformationsImages.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-1/5"
              style={{ width: `${imageWidth}%` }}
              data-carousel-item
            >
              <img
                src={image}
                className="block w-full object-cover"
                alt="transformation"
              />
            </div>
          ))}
        </div>
      </div>
      <ScrollToButton text="Quiero unirme" className="mb-8 mt-8" />
    </div>
  );
};

export default Transformations;
