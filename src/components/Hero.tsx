import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/lovable-uploads/bevv2.mp4" type="video/mp4" />
        </video>
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-3 py-1 mb-6 text-sm font-medium bg-black text-white rounded-full animate-fade-in">
            Food & Beverage Design Agency
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 animate-fade-up text-white">
            We Create Delicious Digital Experiences
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Elevating food & beverage brands through strategic design, marketing, and digital solutions
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-white text-black rounded-full hover:bg-gray-100 transition-colors"
            >
              Start a Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="#work"
              className="inline-flex items-center px-6 py-3 border border-white text-white rounded-full hover:bg-white/10 transition-colors"
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