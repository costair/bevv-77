import { Instagram, Linkedin } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="bg-white text-black w-full">
      <div className="container mx-auto px-6">
        {/* Logo centered at the top */}
        <div className="flex justify-center py-8">
          <a href="/" className="text-3xl font-bold tracking-tighter">
            Bevv
          </a>
        </div>

        {/* Main footer content */}
        <div className="flex flex-col md:flex-row justify-between items-start py-16 border-b border-gray-200">
          {/* Navigation links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 lg:gap-24">
            <div className="space-y-4">
              <h3 className="font-semibold">Products</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><a href="#" className="hover:text-black transition-colors">Beverages</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Food</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Snacks</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Organic</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Services</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><a href="#" className="hover:text-black transition-colors">Branding</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Packaging</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Marketing</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Consulting</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Resources</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><a href="#" className="hover:text-black transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Success Stories</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Guides</a></li>
                <li><a href="#" className="hover:text-black transition-colors">FAQ</a></li>
              </ul>
            </div>

            {/* Newsletter subscription */}
            <div className="space-y-4 col-span-2 md:col-span-1">
              <h3 className="font-semibold">Newsletter</h3>
              <p className="text-sm text-gray-600">Subscribe to receive news and updates.</p>
              <div className="space-y-2">
                <Input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-gray-100 border-gray-200"
                />
                <Button className="w-full bg-black text-white hover:bg-black/90">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center py-6">
          <p className="text-sm text-gray-600">
            © 2024 Bevv Studio. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-600 hover:text-black transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-600 hover:text-black transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;