import React, { useEffect, useState, useRef } from "react";
import ScrollToButton from "./ScrollToButton";
import { TestimonialImages } from "../../utils/Images";

const Testimonials = () => {
  const [startIndex, setStartIndex] = useState(0);
  const imagesRef = useRef(TestimonialImages);
  const visibleImages = 5;
  const imageWidth = 100 / visibleImages; // Porcentaje de ancho para cada imagen

  useEffect(() => {
    imagesRef.current = TestimonialImages;
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prevIndex) =>
        prevIndex === imagesRef.current.length - visibleImages ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [visibleImages]);

  return (
    <div className="relative w-full bg-custom-blue">
      <h2 className="text-white text-2xl font-bold p-4 uppercase">
        ¿Qué opina la gente de nuestro servicio?
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
          {TestimonialImages.map((image, index) => {
            return (
              <div
                key={index}
                className="flex-shrink-0 w-full"
                style={{ width: `${imageWidth}%` }}
                data-carousel-item
              >
                <img
                  src={image}
                  className="block w-full object-cover"
                  alt="testimony"
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

export default Testimonials;
