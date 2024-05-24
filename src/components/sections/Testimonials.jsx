import React, { useEffect, useState, useRef } from "react";
import ScrollToButton from "./ScrollToButton";
import { TestimonialImages } from "../../utils/Images";

const Testimonials = () => {
  const [startIndex, setStartIndex] = useState(0);
  const imagesRef = useRef(TestimonialImages);
  const visibleImages = 5;

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
        ¿Que opina la gente de nuestro servicio?
      </h2>
      <div
        id="default-carousel"
        className="relative w-full overflow-hidden rounded-lg md:h-96"
        data-carousel="slide"
      >
        <div className="flex bg-blue-500">
          {TestimonialImages.map((image, index) => {
            const actualIndex =
              (startIndex + index) % TestimonialImages.length;
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
                  src={TestimonialImages[actualIndex]}
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
