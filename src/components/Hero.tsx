
import React from "react";
import HeroBackground from "./hero/HeroBackground";
import HeroContent from "./hero/HeroContent";
import ShippingCalculator from "./shipping/ShippingCalculator";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[680px] py-24 md:py-32 overflow-hidden">
      {/* Background Image */}
      <HeroBackground imageUrl="/lovable-uploads/30b44d7e-d7d0-40b6-8baf-427e46e79e58.png" />
      
      <div className="container px-4 md:px-6 w-full max-w-full mx-auto relative z-10">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          {/* Text Content */}
          <HeroContent />
          
          {/* Calculator Card */}
          <ShippingCalculator />
        </div>
      </div>
    </section>
  );
};

export default Hero;
