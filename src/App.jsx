import React from "react";
import {
  Features,
  FrequentlyAsked,
  HeroSection,
  Navbar,
  Social,
  Testimonials,
} from "./Components";

const App = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <HeroSection />
      <div className="relative w-full min-h-[296px]">
        <Social />
      </div>
      <Features />
      <Testimonials />
      <FrequentlyAsked />
    </div>
  );
};

export default App;
