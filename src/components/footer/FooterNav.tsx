
import { useState } from "react";
import FooterSection from "./FooterSection";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link } from "react-router-dom";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSectionData {
  title: string;
  links: FooterLink[];
}

const footerSections: FooterSectionData[] = [
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
      { label: "Blog", href: "/blog" },
      { label: "Success Stories", href: "#" },
      { label: "Guides", href: "#" },
      { label: "FAQ", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Food Safety", href: "#" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Compliance", href: "#" },
    ],
  },
];

const FooterNav = () => {
  const isMobile = useIsMobile();
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  if (isMobile) {
    return (
      <div className="space-y-0 divide-y divide-gray-200">
        {footerSections.map((section) => (
          <FooterSection
            key={section.title}
            title={section.title}
            links={section.links}
            isOpen={openSection === section.title}
            onToggle={() => toggleSection(section.title)}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full lg:w-auto">
      {footerSections.map((section) => (
        <div key={section.title} className="space-y-3">
          <h3 className="font-semibold">{section.title}</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            {section.links.map((link) => (
              <li key={link.label}>
                {link.href.startsWith('/') ? (
                  <Link 
                    to={link.href} 
                    className="hover:text-black transition-colors"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a 
                    href={link.href} 
                    className="hover:text-black transition-colors"
                  >
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FooterNav;
