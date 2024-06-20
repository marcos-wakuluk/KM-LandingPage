import React from "react";
import Section1 from "./sections/Section1";
import Transformations from "./sections/Transformations";
import PlanSection from "./sections/PlanSection";
import Section3 from "./sections/Section3";
import Section4 from "./sections/Section4";
import FrequentQuestions from "./sections/FrequentQuestions";
import Section6 from "./sections/Section6";
import Footer from "./footer/Footer";
import Discount from "./discounts/Discounts";
import Testimonials from "./sections/Testimonials";

const Home = () => {
  return (
    <>
      <Discount />
      <Section1 />
      <Transformations />
      <PlanSection />
      <Section3 />
      <Testimonials />
      <Section4 />
      <FrequentQuestions />
      <Section6 />
      <Footer />
    </>
  );
};

export default Home;
