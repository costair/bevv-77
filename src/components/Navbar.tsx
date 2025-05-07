
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useMobile } from '@/hooks/use-mobile';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import WhatsAppIcon from './icons/WhatsAppIcon';

export default function Navbar() {
  const isMobile = useMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}>
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex items-center justify-between py-4 md:py-6">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl md:text-2xl font-bold text-primary">Bevv</span>
          </Link>

          {/* Desktop Navigation - Centrado */}
          <nav className="hidden md:flex items-center justify-center flex-1 px-10">
            <ul className="flex space-x-8 justify-center">
              <li>
                <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </nav>

          {/* WhatsApp Button - Desktop */}
          <div className="hidden md:block">
            <Button variant="default" size="sm" asChild>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container px-4 py-4">
            <nav>
              <ul className="space-y-4 pb-4">
                <li>
                  <a
                    href="#services"
                    onClick={toggleMenu}
                    className="block py-2 text-base font-medium hover:text-primary transition-colors"
                  >
                    Servicios
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    onClick={toggleMenu}
                    className="block py-2 text-base font-medium hover:text-primary transition-colors"
                  >
                    Nosotros
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    onClick={toggleMenu}
                    className="block py-2 text-base font-medium hover:text-primary transition-colors"
                  >
                    Contacto
                  </a>
                </li>
              </ul>
              <Button variant="default" asChild className="w-full">
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Contáctanos por WhatsApp
                </a>
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
