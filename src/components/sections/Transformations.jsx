import React, { useEffect, useState } from "react";
import ScrollToButton from "./ScrollToButton";
import { TransformationsImages } from "../../utils/Images";

const Transformations = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleImages = 5;

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prevIndex) =>
        prevIndex === TransformationsImages.length - visibleImages
          ? 0
          : prevIndex + 1
      );
    }, 2000);

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
        <div className="flex bg-blue-500">
          {TransformationsImages.map((image, index) => {
            const actualIndex =
              (startIndex + index) % TransformationsImages.length;
            const display =
              index >= startIndex && index < startIndex + visibleImages
                ? "flex"
                : "hidden";
            return (
              <div
                key={index}
                className={`${display} duration-700 ease-in-out`}
                data-carousel-item
              >
                <img
                  src={TransformationsImages[actualIndex]}
                  className="block w-full object-cover"
                  alt="transformation"
                />
              </div>
            );
          })}
        </div>
      </div>

      <ScrollToButton text="Quiero unirme" className="mb-8 mt-8" />
    </div>
  );
};

export default Transformations;
