import React from "react";
import {
  BlogSection,
  Features,
  Footer,
  FrequentlyAsked,
  HeroSection,
  Navbar,
  Social,
  Testimonials,
} from "./Components";
import CTAsection from "./Components/CTAsection";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <div className="relative w-full min-h-[296px]">
        <Social />
      </div>
      <Features />
      <Testimonials />
      <FrequentlyAsked />
      <BlogSection />
      <CTAsection />
      <Footer />
    </>
  );
};

export default App;
