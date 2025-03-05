
import { Package2, Palette, Megaphone, Layout, Share2, PenTool } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Package2,
    title: "Packaging Design",
    description: "Eye-catching packaging that stands out on shelves and connects with consumers.",
    color: "#F2FCE2", // Light Green for packaging
  },
  {
    icon: Palette,
    title: "Brand Identity",
    description: "Distinctive visual identities that capture your brand's essence and values.",
    color: "#E5DEFF", // Light Purple for brand identity/creativity
  },
  {
    icon: Layout,
    title: "Web Design",
    description: "Beautiful, conversion-focused websites for food & beverage brands.",
    color: "#D3E4FD", // Light Blue for web/digital
  },
  {
    icon: Megaphone,
    title: "Marketing Campaigns",
    description: "Strategic campaigns that drive engagement and boost brand awareness.",
    color: "#FFDEE2", // Light Pink for marketing
  },
  {
    icon: Share2,
    title: "Social Media",
    description: "Engaging content strategies that build community and drive growth.",
    color: "#FDE1D3", // Light Peach for social/growth
  },
  {
    icon: PenTool,
    title: "Logo Design",
    description: "Memorable logos that become the foundation of your brand identity.",
    color: "#FEF7CD", // Light Yellow for design foundation
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="overflow-hidden transition-all duration-300 hover:shadow-md"
              style={{ backgroundColor: service.color }}
            >
              <CardContent className="p-6">
                <div className="flex items-start mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md bg-black text-white">
                    <service.icon className="h-6 w-6" />
                  </div>
                </div>
                
                {/* Fixed height title to ensure alignment */}
                <h3 className="text-xl font-semibold mb-2 h-7">{service.title}</h3>
                
                {/* Fixed height description to ensure alignment */}
                <p className="text-gray-600 h-20">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
