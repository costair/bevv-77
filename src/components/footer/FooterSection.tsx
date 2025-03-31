import React from "react";
import { ChevronDown } from "lucide-react";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSectionProps {
  title: string;
  children?: React.ReactNode;
  links?: FooterLink[];
  isOpen?: boolean;
  onToggle?: () => void;
  onLinkClick?: (href: string) => void;
}

const FooterSection = ({ 
  title, 
  children, 
  links, 
  isOpen, 
  onToggle, 
  onLinkClick 
}: FooterSectionProps) => {
  // If children are provided, render them directly
  if (children) {
    return (
      <div className="space-y-4">
        <h3 className="font-semibold">{title}</h3>
        <div>{children}</div>
      </div>
    );
  }

  // Otherwise, render mobile accordion style with links
  return (
    <div>
      <button
        onClick={onToggle}
        className="w-full py-4 flex justify-between items-center text-left pr-4"
      >
        <span className="font-semibold pl-4">{title}</span>
        <ChevronDown
          className={`h-5 w-5 transition-transform ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && links && (
        <div className="pb-4 space-y-2 pl-4">
          {links.map((link) => (
            link.href.startsWith('/') ? (
              <button
                key={link.label}
                onClick={() => onLinkClick && onLinkClick(link.href)}
                className="block text-gray-600 hover:text-black transition-colors"
              >
                {link.label}
              </button>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="block text-gray-600 hover:text-black transition-colors"
              >
                {link.label}
              </a>
            )
          ))}
        </div>
      )}
    </div>
  );
};

export default FooterSection;
