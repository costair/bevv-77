
import { Package2, Palette, Megaphone, Layout, Share2, PenTool } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

const services = [
  {
    icon: Package2,
    title: "Packaging Design",
    description: "Eye-catching packaging that stands out on shelves and connects with consumers.",
    step: "01",
  },
  {
    icon: Palette,
    title: "Brand Identity",
    description: "Distinctive visual identities that capture your brand's essence and values.",
    step: "02",
  },
  {
    icon: Layout,
    title: "Web Design",
    description: "Beautiful, conversion-focused websites for food & beverage brands.",
    step: "03",
  },
  {
    icon: Megaphone,
    title: "Marketing Campaigns",
    description: "Strategic campaigns that drive engagement and boost brand awareness.",
    step: "04",
  },
  {
    icon: Share2,
    title: "Social Media",
    description: "Engaging content strategies that build community and drive growth.",
    step: "05",
  },
  {
    icon: PenTool,
    title: "Logo Design",
    description: "Memorable logos that become the foundation of your brand identity.",
    step: "06",
  },
];

const Services = () => {
  const isMobile = useIsMobile();

  return (
    <section id="services" className="py-20 bg-secondary relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-16 right-16 w-32 h-32 bg-gray-200 rounded-full opacity-20"></div>
        <div className="absolute bottom-32 left-16 w-16 h-16 bg-gray-200 rounded-full opacity-10"></div>
        <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-gray-200 rounded-full opacity-10"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="bg-black text-white rounded-full px-6 py-2 text-xs uppercase tracking-wider font-medium">
            OUR SERVICES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 mt-3">
            Comprehensive F&B Design Solutions
          </h2>
          <p className="text-gray-600">
            We offer end-to-end creative services tailored for food and beverage brands
          </p>
        </div>

        {isMobile ? (
          // Mobile Layout (Stacked)
          <div className="space-y-12">
            {services.map((service, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gray-100 rounded-full scale-[1.15] opacity-20"></div>
                  <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-[#333333] text-white">
                    <service.icon className="h-8 w-8" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-xs font-bold">
                    {service.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 max-w-xs">{service.description}</p>
              </div>
            ))}
          </div>
        ) : (
          // Desktop Layout (Connected Circular Path)
          <div className="relative mx-auto max-w-4xl">
            {/* First row */}
            <div className="flex justify-between items-center mb-12">
              {services.slice(0, 3).map((service, index) => (
                <ServiceNode 
                  key={index}
                  service={service}
                  position={index === 0 ? "left" : index === 2 ? "right" : "center"}
                />
              ))}
            </div>
            
            {/* Connection lines */}
            <div className="hidden md:block absolute top-[10%] left-[22%] w-[56%] h-20 border-dashed border-t-0 border-l-0 border-r-0 border-b-2 border-gray-300 rounded-b-3xl -z-10"></div>
            <div className="hidden md:block absolute bottom-[10%] left-[22%] w-[56%] h-20 border-dashed border-t-2 border-l-0 border-r-0 border-b-0 border-gray-300 rounded-t-3xl -z-10"></div>
            <div className="hidden md:block absolute top-[28%] left-[15%] w-[2px] h-[44%] border-dashed border-l-2 border-t-0 border-r-0 border-b-0 border-gray-300 -z-10"></div>
            <div className="hidden md:block absolute top-[28%] right-[15%] w-[2px] h-[44%] border-dashed border-r-2 border-t-0 border-l-0 border-b-0 border-gray-300 -z-10"></div>
            
            {/* Second row */}
            <div className="flex justify-between items-center">
              {services.slice(3).map((service, index) => (
                <ServiceNode 
                  key={index + 3}
                  service={service}
                  position={index === 0 ? "left" : index === 2 ? "right" : "center"}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

interface ServiceNodeProps {
  service: {
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    title: string;
    description: string;
    step: string;
  };
  position: "left" | "center" | "right";
}

const ServiceNode = ({ service, position }: ServiceNodeProps) => {
  return (
    <div className={cn(
      "flex flex-col items-center text-center",
      position === "left" && "self-start",
      position === "center" && "self-center",
      position === "right" && "self-end",
    )}>
      <div className="relative mb-6 group">
        <div className="absolute inset-0 bg-gray-100 rounded-full scale-[1.15] opacity-20 
                      group-hover:scale-[1.25] group-hover:opacity-30 transition-all duration-300"></div>
        <div className="relative flex items-center justify-center w-24 h-24 rounded-full bg-[#222222] text-white
                      group-hover:bg-[#1A1F2C] transition-colors duration-300">
          <service.icon className="h-10 w-10" />
        </div>
        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-xs font-bold">
          {service.step}
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
      <p className="text-gray-600 max-w-xs mx-auto">{service.description}</p>
    </div>
  );
};

export default Services;
