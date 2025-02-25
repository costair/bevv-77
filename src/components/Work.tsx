
import { useState, useRef, useEffect } from "react";

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
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentPosition, setCurrentPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        const slideWidth = sliderRef.current.clientWidth;
        const maxScroll = sliderRef.current.scrollWidth - slideWidth;

        // Si llegamos al final, volvemos al principio suavemente
        if (currentPosition >= maxScroll) {
          setCurrentPosition(0);
        } else {
          // Avanzamos una imagen
          setCurrentPosition(prev => prev + slideWidth / 3);
        }

        // Aplicamos el scroll con animación suave
        sliderRef.current.scrollTo({
          left: currentPosition,
          behavior: 'smooth'
        });
      }
    }, 2000); // Cambia de imagen cada 2 segundos

    return () => clearInterval(interval);
  }, [currentPosition]);

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
            ref={sliderRef}
            className="flex overflow-x-hidden"
          >
            {[...projects, ...projects, ...projects].map((project, index) => (
              <div
                key={index}
                className="min-w-full md:min-w-[33.333%] px-4 select-none transition-transform duration-500"
              >
                <div className="group relative overflow-hidden rounded-2xl mx-auto max-w-[400px] md:max-w-none">
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
