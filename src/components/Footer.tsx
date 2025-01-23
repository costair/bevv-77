import { Instagram, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <a href="/" className="text-2xl font-bold tracking-tighter">
              Bevv
            </a>
            <p className="text-gray-400 text-sm">
              Elevating food & beverage brands through strategic design and creative excellence.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-white transition-colors">Packaging Design</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Brand Identity</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Marketing Campaigns</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Social Media</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#work" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#work" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing Guide</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Sales</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Legal</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Licensing</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            © 2025 Bevv Studio. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Youtube className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;