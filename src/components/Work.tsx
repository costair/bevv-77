
import { useRef, useState } from "react";

const projects = [
  {
    title: "Artisanal Coffee Brand",
    category: "Branding & Packaging",
    image: "/lovable-uploads/2b12d53a-7131-4dad-9ac9-45690a517e22.png",
  },
  {
    title: "Organic Juice Company",
    category: "Web Design & Marketing",
    image: "/lovable-uploads/2b12d53a-7131-4dad-9ac9-45690a517e22.png",
  },
  {
    title: "Craft Brewery",
    category: "Brand Identity",
    image: "/lovable-uploads/2b12d53a-7131-4dad-9ac9-45690a517e22.png",
  },
  {
    title: "Gourmet Restaurant",
    category: "Digital Marketing",
    image: "/lovable-uploads/2b12d53a-7131-4dad-9ac9-45690a517e22.png",
  },
  {
    title: "Organic Bakery",
    category: "Brand Strategy",
    image: "/lovable-uploads/2b12d53a-7131-4dad-9ac9-45690a517e22.png",
  },
  {
    title: "Premium Tea House",
    category: "Visual Identity",
    image: "/lovable-uploads/2b12d53a-7131-4dad-9ac9-45690a517e22.png",
  },
];

const Work = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    if (scrollContainerRef.current) {
      setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
      setScrollLeft(scrollContainerRef.current.scrollLeft);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setIsDragging(true);
    if (scrollContainerRef.current) {
      setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft);
      setScrollLeft(scrollContainerRef.current.scrollLeft);
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging || !scrollContainerRef.current) return;
    const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

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

        <div className="relative">
          <div
            ref={scrollContainerRef}
            className={`flex transition-all ${!isDragging ? 'animate-scroll' : ''} cursor-grab active:cursor-grabbing select-none`}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleMouseUp}
            onTouchMove={handleTouchMove}
          >
            {[...projects, ...projects].map((project, index) => (
              <div
                key={index}
                className="min-w-full md:min-w-[33.333%] px-4"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="group relative overflow-hidden rounded-2xl mx-auto max-w-[400px] md:max-w-none">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
                    draggable="false"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center pointer-events-none">
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
