import React from "react";
import { Features, HeroSection, Navbar, Social } from "./Components";

const App = () => {
  return (
    <div className="fkex flex-col">
      <Navbar />
      <HeroSection />

      <div className="relative w-full min-h-[296px]">
        <Social />
        <hr className="bottom-0" />
      </div>

      <Features />
    </div>
  );
};

export default App;
