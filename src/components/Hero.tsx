import { ArrowRight, UtensilsCrossed, Coffee, Pizza, Wheat, LeafyGreen, Flower2, Sprout, Wine } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden">
      {/* Decorative Icons - With floating animations */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Left side icons */}
        <div 
          className="absolute left-4 top-1/2 -translate-y-1/2 block animate-fade-in" 
          style={{ 
            animationDelay: "0.3s",
            transform: `translateY(calc(-50% + ${scrollY * 0.1}px))`
          }}
        >
          <UtensilsCrossed className="w-16 md:w-24 h-16 md:h-24 text-[#F97316] opacity-20 mb-8 transform -rotate-12 hover:translate-x-2 transition-transform duration-300 animate-float" />
          <Pizza className="w-16 md:w-24 h-16 md:h-24 text-[#ea384c] opacity-20 transform rotate-12 mb-8 hover:translate-x-2 transition-transform duration-300 animate-float-delayed" />
          <Wheat className="w-16 md:w-24 h-16 md:h-24 text-[#84cc16] opacity-20 transform -rotate-6 hover:translate-x-2 transition-transform duration-300 animate-float" />
        </div>

        {/* Right side icons */}
        <div 
          className="absolute right-4 top-1/2 -translate-y-1/2 block animate-fade-in"
          style={{ 
            animationDelay: "0.3s",
            transform: `translateY(calc(-50% - ${scrollY * 0.1}px))`
          }}
        >
          <Coffee className="w-16 md:w-24 h-16 md:h-24 text-[#0EA5E9] opacity-20 mb-8 transform rotate-12 hover:-translate-x-2 transition-transform duration-300 animate-float-delayed" />
          <LeafyGreen className="w-16 md:w-24 h-16 md:h-24 text-[#22c55e] opacity-20 transform -rotate-12 mb-8 hover:-translate-x-2 transition-transform duration-300 animate-float" />
          <Wine className="w-16 md:w-24 h-16 md:h-24 text-[#ec4899] opacity-20 transform rotate-6 hover:-translate-x-2 transition-transform duration-300 animate-float-delayed" />
        </div>

        {/* Additional scattered icons */}
        <div 
          className="absolute left-1/4 top-1/3 block animate-fade-in"
          style={{ 
            animationDelay: "0.4s",
            transform: `translate(${scrollY * 0.05}px, ${scrollY * -0.05}px)`
          }}
        >
          <Sprout className="w-12 md:w-20 h-12 md:h-20 text-[#a3e635] opacity-20 transform rotate-45 hover:scale-110 transition-transform duration-300 animate-float" />
        </div>

        <div 
          className="absolute right-1/4 bottom-1/3 block animate-fade-in"
          style={{ 
            animationDelay: "0.4s",
            transform: `translate(${scrollY * -0.05}px, ${scrollY * 0.05}px)`
          }}
        >
          <Flower2 className="w-12 md:w-20 h-12 md:h-20 text-[#8B5CF6] opacity-20 transform -rotate-45 hover:scale-110 transition-transform duration-300 animate-float-delayed" />
        </div>

        {/* New scattered icons */}
        <div className="absolute left-[15%] top-1/4 animate-fade-in">
          <Coffee className="w-10 md:w-16 h-10 md:h-16 text-[#d97706] opacity-20 transform rotate-12 hover:scale-110 transition-transform duration-300 animate-float" />
        </div>

        <div className="absolute right-[15%] top-1/4 animate-fade-in">
          <Wheat className="w-10 md:w-16 h-10 md:h-16 text-[#059669] opacity-20 transform -rotate-12 hover:scale-110 transition-transform duration-300 animate-float-delayed" />
        </div>

        <div className="absolute left-[40%] bottom-1/4 animate-fade-in">
          <LeafyGreen className="w-8 md:w-12 h-8 md:h-12 text-[#7c3aed] opacity-20 transform rotate-45 hover:scale-110 transition-transform duration-300 animate-float" />
        </div>
      </div>

      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-3 py-1 mb-6 text-sm font-medium bg-black text-white rounded-full animate-fade-in">
            Food & Beverage Design Agency
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 animate-fade-up">
            We Create Delicious Digital Experiences
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Elevating food & beverage brands through strategic design, marketing, and digital solutions
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
            >
              Start a Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="#work"
              className="inline-flex items-center px-6 py-3 border border-gray-200 rounded-full hover:border-gray-400 transition-colors"
            >
              View Our Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;