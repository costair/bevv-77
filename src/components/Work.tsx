
import React from "react";
import { Coffee, UtensilsCrossed, Package, Target, Megaphone, PenTool } from "lucide-react";

const workCapabilities = [
  {
    id: "01",
    title: "Brand Strategy",
    description: "Develop distinctive identities that resonate with food & beverage audiences and stand out in crowded markets.",
    icon: <Target className="h-8 w-8 text-black" />
  },
  {
    id: "02",
    title: "Visual Identity",
    description: "Create captivating visual systems that bring your culinary or beverage brand to life across all touchpoints.",
    icon: <PenTool className="h-8 w-8 text-black" />
  },
  {
    id: "03",
    title: "Packaging Design",
    description: "Design packaging that enhances shelf presence and communicates your product's unique story and value.",
    icon: <Package className="h-8 w-8 text-black" />
  }
];

const Work = () => {
  return (
    <section id="work" className="py-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="bg-black text-white rounded-full px-6 py-2 text-xs uppercase tracking-wider font-medium">
            SELECTED WORK
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 mt-3">
            Crafting Success Stories
          </h2>
          <p className="text-gray-600">
            Transforming food & beverage brands through strategic design and marketing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          {/* Left side - Image */}
          <div className="relative">
            <div className="bg-gray-100 rounded-xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-transform duration-300">
              <img 
                src="/lovable-uploads/f4f1d62c-748a-40d7-9b47-3fecd545756f.png" 
                alt="Bevv Agency Dashboard" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white rounded-full py-3 px-6 shadow-lg flex items-center gap-2 hover:bg-gray-50 transition-colors cursor-pointer">
              <span className="font-medium">Schedule a consultation</span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.16675 7.00008H12.8334M12.8334 7.00008L7.00008 1.16675M12.8334 7.00008L7.00008 12.8334" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          {/* Right side - Capabilities */}
          <div className="space-y-8">
            {workCapabilities.map((capability) => (
              <div key={capability.id} className="flex gap-6 items-start border-b border-gray-200 pb-6">
                <div className="text-xl font-bold text-gray-400 min-w-[40px]">{capability.id}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    {capability.icon}
                    <h3 className="text-xl font-bold">{capability.title}</h3>
                  </div>
                  <p className="text-gray-600">{capability.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats section - Moved from bottom to replace the additional capabilities */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="bg-black text-white p-8 rounded-xl flex flex-col items-center justify-center text-center">
            <span className="text-5xl font-bold mb-2">40%</span>
            <p>Average increase in brand recognition for our clients</p>
          </div>
          <div className="bg-gray-100 p-8 rounded-xl col-span-2">
            <h3 className="text-xl font-bold mb-4">Tailored to Your Needs</h3>
            <p className="text-gray-700 mb-4">
              Explore our comprehensive suite of services, meticulously tailored to meet the unique needs of food & beverage businesses. From startups to established brands, we provide the creative solutions you need to thrive.
            </p>
            <a href="#contact" className="inline-flex items-center text-black font-medium hover:opacity-80">
              Discuss your project with us
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
