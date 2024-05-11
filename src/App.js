import React from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Discount from "./components/discounts/Discounts";
import Section1 from "./components/sections/Section1";
import Section2 from "./components/sections/Section2";
import PlanSection from "./components/sections/PlanSection";
import Section3 from "./components/sections/Section3";
import FrequentQuestions from "./components/sections/FrequentQuestions";
import Section6 from "./components/sections/Section6";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Discount />
      <Section1 />
      <PlanSection />
      <Section2 />
      <Section3 />
      <FrequentQuestions />
      <Section6 />
      <Footer />
    </div>
  );
}

export default App;
