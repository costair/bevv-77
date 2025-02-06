import { Instagram, Linkedin, Mail, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const Footer = () => {
  const isMobile = useIsMobile();
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const footerSections = [
    {
      title: "Products",
      links: [
        { label: "Beverages", href: "#" },
        { label: "Food", href: "#" },
        { label: "Snacks", href: "#" },
        { label: "Organic", href: "#" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Branding", href: "#" },
        { label: "Packaging", href: "#" },
        { label: "Marketing", href: "#" },
        { label: "Consulting", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", href: "#" },
        { label: "Success Stories", href: "#" },
        { label: "Guides", href: "#" },
        { label: "FAQ", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Food Safety", href: "#" },
        { label: "Privacy Policy", href: "#" },
        { label: "Terms & Conditions", href: "#" },
        { label: "Compliance", href: "#" },
      ],
    },
  ];

  const renderMobileFooter = () => (
    <div className="space-y-0 divide-y divide-gray-200">
      {footerSections.map((section) => (
        <div key={section.title}>
          <button
            onClick={() => toggleSection(section.title)}
            className="w-full py-4 px-4 flex justify-between items-center text-left"
          >
            <span className="font-semibold">{section.title}</span>
            <ChevronDown
              className={`h-5 w-5 transition-transform ${
                openSection === section.title ? "transform rotate-180" : ""
              }`}
            />
          </button>
          {openSection === section.title && (
            <div className="px-4 pb-4 space-y-2">
              {section.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-gray-600 hover:text-black transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );

  const renderDesktopFooter = () => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full lg:w-auto">
      {footerSections.map((section) => (
        <div key={section.title} className="space-y-3">
          <h3 className="font-semibold">{section.title}</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            {section.links.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="hover:text-black transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );

  return (
    <footer className="bg-white text-black w-full overflow-x-hidden">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8">
          {/* Logo, subtitle and social icons */}
          <div className="flex flex-col items-start">
            <a href="/" className="text-2xl font-bold tracking-tighter">
              Bevv
            </a>
            <p className="text-sm text-gray-600 mt-1">Food & Beverage Studio</p>
            <div className="flex items-center space-x-4 mt-3">
              <a href="#" className="text-gray-600 hover:text-black transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation links - Responsive Grid */}
          {isMobile ? renderMobileFooter() : renderDesktopFooter()}

          {/* Newsletter Section */}
          <div className="space-y-4 w-full lg:w-auto">
            <h3 className="font-semibold">Stay up to date</h3>
            <div className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-black w-full lg:w-auto"
              />
              <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-black/90 transition-colors flex items-center justify-center gap-2 w-full lg:w-auto">
                <Mail className="h-4 w-4" />
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 mt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-600">
            © 2025 Bevv Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;