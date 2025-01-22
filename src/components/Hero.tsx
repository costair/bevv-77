import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20">
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