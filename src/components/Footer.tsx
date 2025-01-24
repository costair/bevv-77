import { Instagram, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-black py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-3 space-y-4">
            <a href="/" className="text-2xl font-bold tracking-tighter">
              Bevv
            </a>
            <p className="text-muted-foreground text-sm">
              Elevating food & beverage brands through strategic design and creative excellence.
            </p>
          </div>

          <div className="md:col-span-3 space-y-4">
            <h3 className="font-semibold text-lg">Services</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#services" className="hover:text-black transition-colors">Packaging Design</a></li>
              <li><a href="#services" className="hover:text-black transition-colors">Brand Identity</a></li>
              <li><a href="#services" className="hover:text-black transition-colors">Marketing Campaigns</a></li>
              <li><a href="#services" className="hover:text-black transition-colors">Social Media</a></li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-4">
            <h3 className="font-semibold text-lg">Resources</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#work" className="hover:text-black transition-colors">Case Studies</a></li>
              <li><a href="#work" className="hover:text-black transition-colors">Portfolio</a></li>
              <li><a href="#pricing" className="hover:text-black transition-colors">Pricing Guide</a></li>
              <li><a href="#contact" className="hover:text-black transition-colors">Contact Sales</a></li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-4">
            <h3 className="font-semibold text-lg">Legal</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-black transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Licensing</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-300 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Bevv Studio. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-black transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-black transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-black transition-colors">
              <Youtube className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;