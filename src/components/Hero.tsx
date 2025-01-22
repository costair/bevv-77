import { ArrowRight, UtensilsCrossed, Coffee, Pizza } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden">
      {/* Decorative Icons */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 hidden lg:block animate-fade-in" style={{ animationDelay: "0.3s" }}>
        <UtensilsCrossed className="w-24 h-24 text-[#F97316] opacity-20 mb-8 transform -rotate-12" />
        <Pizza className="w-24 h-24 text-[#ea384c] opacity-20 transform rotate-12" />
      </div>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden lg:block animate-fade-in" style={{ animationDelay: "0.3s" }}>
        <Coffee className="w-24 h-24 text-[#0EA5E9] opacity-20 mb-8 transform rotate-12" />
        <UtensilsCrossed className="w-24 h-24 text-[#8B5CF6] opacity-20 transform -rotate-12" />
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