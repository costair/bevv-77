
import { ChevronDown } from "lucide-react";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSectionProps {
  title: string;
  links: FooterLink[];
  isOpen: boolean;
  onToggle: () => void;
  onLinkClick: (href: string) => void;
}

const FooterSection = ({ title, links, isOpen, onToggle, onLinkClick }: FooterSectionProps) => {
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
      {isOpen && (
        <div className="pb-4 space-y-2 pl-4">
          {links.map((link) => (
            link.href.startsWith('/') ? (
              <button
                key={link.label}
                onClick={() => onLinkClick(link.href)}
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
