import { Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white text-black w-full">
      <div className="container mx-auto px-6 py-8">
        {/* Logo, subtitle and social icons */}
        <div className="flex flex-col items-start mb-8">
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

        {/* Navigation links */}
        <div className="flex justify-end space-x-12 lg:space-x-24">
          <div className="space-y-3">
            <h3 className="font-semibold">Products</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-black transition-colors">Beverages</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Food</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Snacks</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Organic</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold">Services</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-black transition-colors">Branding</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Packaging</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Marketing</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Consulting</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-black transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Guides</a></li>
              <li><a href="#" className="hover:text-black transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 mt-8 border-t border-gray-200">
          <p className="text-sm text-gray-600">
            © 2024 Bevv Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;