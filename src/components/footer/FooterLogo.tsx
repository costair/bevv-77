import { Instagram, Linkedin } from "lucide-react";

const FooterLogo = () => {
  return (
    <div className="flex flex-col items-start px-4 md:px-0">
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
  );
};

export default FooterLogo;