import React, { useEffect, useState, useRef } from "react";
import { TransformationsImages } from "../../utils/Constants";

const Transformations = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const imagesRef = useRef([...TransformationsImages, ...TransformationsImages]);
  const [visibleImages, setVisibleImages] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 768) {
        setVisibleImages(1);
      } else if (screenWidth < 1024) {
        setVisibleImages(3);
      } else {
        setVisibleImages(5);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const imageWidth = 100 / visibleImages;

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setStartIndex((prevIndex) => prevIndex + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (startIndex === TransformationsImages.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setStartIndex(0);
      }, 1000);
    }
  }, [startIndex]);

  return (
    <div className="relative w-full bg-custom-blue">
      <h2 className="text-white text-2xl font-bold p-4 uppercase">transformaciones</h2>
      <div id="default-carousel" className="relative w-full overflow-hidden rounded-lg md:h-96" data-carousel="slide">
        <div
          className={`flex ${isTransitioning ? "transition-transform duration-1000 ease-in-out" : ""}`}
          style={{ transform: `translateX(-${startIndex * imageWidth}%)` }}
        >
          {imagesRef.current.map((image, index) => (
            <div key={index} className="flex-shrink-0" style={{ width: `${imageWidth}%` }} data-carousel-item>
              <img src={image} className="block w-full object-cover" alt="transformation" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transformations;
