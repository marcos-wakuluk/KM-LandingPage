import React, { useEffect, useState, useRef } from "react";
import { TestimonialImages } from "../../utils/Constants";

const Testimonials = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const imagesRef = useRef([...TestimonialImages, ...TestimonialImages]);
  const isMobile = window.innerWidth <= 768;
  const visibleImages = isMobile ? 1 : 5;
  const imageWidth = 100 / visibleImages;

  useEffect(() => {
    imagesRef.current = [...TestimonialImages, ...TestimonialImages];
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setStartIndex((prevIndex) => prevIndex + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (startIndex === TestimonialImages.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setStartIndex(0);
      }, 1000);
    }
  }, [startIndex]);

  return (
    <div className="relative w-full bg-custom-blue">
      <h2 className="text-white text-2xl font-bold p-4 uppercase">¿Qué opina la gente de nuestro servicio?</h2>
      <div id="default-carousel" className="relative w-full overflow-hidden" data-carousel="slide" style={{ backgroundColor: "black" }}>
        <div
          className={`flex items-center ${isTransitioning ? "transition-transform duration-1000 ease-in-out" : ""}`}
          style={{ transform: `translateX(-${startIndex * imageWidth}%)` }}
        >
          {imagesRef.current.map((image, index) => (
            <div key={index} className="flex-shrink-0 h-full" style={{ width: `${imageWidth}%` }} data-carousel-item>
              <div className="flex items-center justify-center h-full">
                <img src={image} className="block max-h-full max-w-full object-cover" alt="testimony" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
