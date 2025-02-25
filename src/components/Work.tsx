
import { useRef, useEffect } from "react";

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
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.style.setProperty('--move-initial', '0');
    container.style.setProperty('--move-final', '-50%');

    // Esta función se asegura de que el carrusel siga siendo infinito
    const handleAnimation = () => {
      if (container) {
        if (container.classList.contains('moving')) {
          container.classList.remove('moving');
          container.style.left = '0';
          container.classList.add('moving');
        }
      }
    };

    container.addEventListener('animationend', handleAnimation);
    return () => {
      if (container) {
        container.removeEventListener('animationend', handleAnimation);
      }
    };
  }, []);

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
          <style>
            {`
              @keyframes scroll {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-50%);
                }
              }
              .moving {
                animation: scroll 20s linear infinite;
              }
            `}
          </style>
          <div
            ref={containerRef}
            className="flex moving relative"
          >
            {/* Primer conjunto de imágenes */}
            {projects.map((project, index) => (
              <div
                key={index}
                className="min-w-[300px] md:min-w-[400px] px-4 select-none"
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
            {/* Segundo conjunto de imágenes (para el loop infinito) */}
            {projects.map((project, index) => (
              <div
                key={`clone-${index}`}
                className="min-w-[300px] md:min-w-[400px] px-4 select-none"
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
