
import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const projects = [
  {
    title: "Artisanal Coffee Brand",
    category: "Branding & Packaging",
    image: "/lovable-uploads/f4f1d62c-748a-40d7-9b47-3fecd545756f.png",
  },
  {
    title: "Organic Juice Company",
    category: "Web Design & Marketing",
    image: "/lovable-uploads/f4f1d62c-748a-40d7-9b47-3fecd545756f.png",
  },
  {
    title: "Craft Brewery",
    category: "Brand Identity",
    image: "/lovable-uploads/f4f1d62c-748a-40d7-9b47-3fecd545756f.png",
  },
  {
    title: "Gourmet Restaurant",
    category: "Digital Marketing",
    image: "/lovable-uploads/f4f1d62c-748a-40d7-9b47-3fecd545756f.png",
  },
  {
    title: "Organic Bakery",
    category: "Brand Strategy",
    image: "/lovable-uploads/f4f1d62c-748a-40d7-9b47-3fecd545756f.png",
  },
  {
    title: "Premium Tea House",
    category: "Visual Identity",
    image: "/lovable-uploads/f4f1d62c-748a-40d7-9b47-3fecd545756f.png",
  },
  {
    title: "Farm-to-Table Restaurant",
    category: "Brand Development",
    image: "/lovable-uploads/f4f1d62c-748a-40d7-9b47-3fecd545756f.png",
  },
  {
    title: "Artisanal Chocolatier",
    category: "Packaging Design",
    image: "/lovable-uploads/f4f1d62c-748a-40d7-9b47-3fecd545756f.png",
  },
  {
    title: "Sustainable Wine Bar",
    category: "Social Media Strategy",
    image: "/lovable-uploads/f4f1d62c-748a-40d7-9b47-3fecd545756f.png",
  },
  {
    title: "Local Food Market",
    category: "Brand Identity",
    image: "/lovable-uploads/f4f1d62c-748a-40d7-9b47-3fecd545756f.png",
  },
  {
    title: "Healthy Meal Delivery",
    category: "Digital Marketing",
    image: "/lovable-uploads/f4f1d62c-748a-40d7-9b47-3fecd545756f.png",
  },
  {
    title: "Vegan Ice Cream Shop",
    category: "Brand Strategy",
    image: "/lovable-uploads/f4f1d62c-748a-40d7-9b47-3fecd545756f.png",
  },
  {
    title: "Food Truck Festival",
    category: "Event Branding",
    image: "/lovable-uploads/f4f1d62c-748a-40d7-9b47-3fecd545756f.png",
  },
  {
    title: "Specialty Spice Store",
    category: "E-commerce Design",
    image: "/lovable-uploads/f4f1d62c-748a-40d7-9b47-3fecd545756f.png",
  },
  {
    title: "Kombucha Brewery",
    category: "Product Launch",
    image: "/lovable-uploads/f4f1d62c-748a-40d7-9b47-3fecd545756f.png",
  }
];

const Work = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = isMobile ? 1 : 3;
  const maxIndex = Math.max(0, projects.length - itemsPerPage);

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const scrollToIndex = (index: number) => {
    if (containerRef.current) {
      const itemWidth = containerRef.current.querySelector('div[class*="min-w-"]')?.clientWidth || 0;
      containerRef.current.scrollTo({
        left: index * itemWidth,
        behavior: 'smooth'
      });
    }
  };

  useState(() => {
    scrollToIndex(currentIndex);
  });

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

        <div className="relative overflow-hidden">
          <button 
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-4 shadow-lg hover:scale-110 transition-transform disabled:opacity-50 disabled:hover:scale-100"
            aria-label="Previous item"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-4 shadow-lg hover:scale-110 transition-transform disabled:opacity-50 disabled:hover:scale-100"
            aria-label="Next item"
          >
            <ArrowRight className="w-6 h-6" />
          </button>

          <div
            ref={containerRef}
            className="flex overflow-x-auto scrollbar-hide snap-x"
            style={{ 
              scrollBehavior: 'smooth',
              scrollSnapType: 'x mandatory',
              msOverflowStyle: 'none',
              scrollbarWidth: 'none'
            }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="min-w-[300px] md:min-w-[33.333%] px-4 select-none snap-start"
                style={{ scrollSnapAlign: 'start' }}
              >
                <div className="group relative overflow-hidden rounded-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
                    draggable="false"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
                    <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-white text-xl font-semibold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-white/80 text-sm">{project.category}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
