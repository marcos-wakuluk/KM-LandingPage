import React from "react";

const ScrollToButton = ({ text, className }) => {
  const scrollToPlanSection = () => {
    const planSection = document.getElementById("planSection");
    if (planSection) {
      planSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      className={`bg-black rounded-lg text-white font-bold py-2 px-4 rounded ${className}`}
      onClick={scrollToPlanSection}
    >
      {text}
    </button>
  );
};

export default ScrollToButton;
