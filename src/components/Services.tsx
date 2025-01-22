import { Package2, Palette, Megaphone, Layout, Share2, PenTool } from "lucide-react";

const services = [
  {
    icon: Package2,
    title: "Packaging Design",
    description: "Eye-catching packaging that stands out on shelves and connects with consumers.",
  },
  {
    icon: Palette,
    title: "Brand Identity",
    description: "Distinctive visual identities that capture your brand's essence and values.",
  },
  {
    icon: Megaphone,
    title: "Marketing Campaigns",
    description: "Strategic campaigns that drive engagement and boost brand awareness.",
  },
  {
    icon: Layout,
    title: "Web Design",
    description: "Beautiful, conversion-focused websites for food & beverage brands.",
  },
  {
    icon: Share2,
    title: "Social Media",
    description: "Engaging content strategies that build community and drive growth.",
  },
  {
    icon: PenTool,
    title: "Logo Design",
    description: "Memorable logos that become the foundation of your brand identity.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium bg-black text-white rounded-full">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comprehensive F&B Design Solutions
          </h2>
          <p className="text-gray-600">
            We offer end-to-end creative services tailored for food and beverage brands
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl hover:shadow-lg transition-shadow animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <service.icon className="h-10 w-10 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;