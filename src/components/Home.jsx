import React from "react";
import Discount from './discounts/Discounts'
import Section1 from './sections/Section1'
import PlanSection from './sections/PlanSection'
import Carousel from './sections/Carousel'
import FrequentQuestions from './sections/FrequentQuestions'
import Footer from './footer/Footer'

function Home() {
  return (
    <div className="App">
      <Discount />
      <Section1 />
      <PlanSection />
      <Carousel />
      <Section1 />
      <FrequentQuestions />
      <Section1 />
      <Footer />
    </div>
  );
}

export default Home;
