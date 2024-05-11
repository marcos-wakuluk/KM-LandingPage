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

const Carousel = () => {
  const images = [
    Testimonio1,
    Testimonio2,
    Testimonio3,
    Testimonio4,
    Testimonio5,
    Testimonio6,
    Testimonio7,
  ];
  const [startIndex, setStartIndex] = useState(0);
  const visibleImages = 5;

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prevIndex) =>
        prevIndex === images.length - visibleImages ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length, visibleImages]);

  return (
    <div className="relative w-full bg-custom-blue">
      <h2 className="text-black text-2xl font-bold p-4 uppercase">
        transformaciones
      </h2>
      <div
        id="default-carousel"
        className="relative w-full overflow-hidden rounded-lg md:h-96"
        data-carousel="slide"
      >
        <div className="flex bg-blue-500">
          {images.map((image, index) => {
            const actualIndex =
              (startIndex + index) % images.length;
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
                  src={images[actualIndex]}
                  className="block w-full object-cover"
                  alt="algo"
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

export default Carousel;
