import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
    title: "Health Food Store",
    category: "Digital Marketing",
    image: "/lovable-uploads/2b12d53a-7131-4dad-9ac9-45690a517e22.png",
  },
  {
    title: "Vegan Restaurant",
    category: "Brand Strategy",
    image: "/lovable-uploads/2b12d53a-7131-4dad-9ac9-45690a517e22.png",
  },
  {
    title: "Wine Boutique",
    category: "E-commerce Design",
    image: "/lovable-uploads/2b12d53a-7131-4dad-9ac9-45690a517e22.png",
  },
];

const Work = () => {
  return (
    <section id="work" className="py-20">
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
          <Carousel
            opts={{
              align: "start",
              loop: true,
              skipSnaps: false,
              slidesToScroll: 1,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {projects.map((project, index) => (
                <CarouselItem key={index} className="pl-4 basis-full md:basis-1/3">
                  <div className="group relative overflow-hidden rounded-2xl animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
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
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Work;