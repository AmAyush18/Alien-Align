import React from "react";

import FeatureCards from "./FeatureCards";
import LearnMore from "./LearnMore";
import HeroSection from "./HeroSection";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <HeroSection />

      <FeatureCards />

      <LearnMore />
    </div>
  );
};

export default HomePage;
