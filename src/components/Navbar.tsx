
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isBlogPage = location.pathname === "/blog";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      window.location.href = `/#${sectionId}`;
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBlogClick = () => {
    if (isBlogPage) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const getNavStyles = () => {
    if (isBlogPage) {
      return "bg-white shadow-sm";
    }
    return isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent";
  };

  const getLinkStyles = () => {
    if (isBlogPage) {
      return "text-gray-800 hover:text-black";
    }
    return isScrolled ? "text-gray-800 hover:text-black" : "text-white/90 hover:text-white";
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${getNavStyles()}`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className={`text-2xl font-bold tracking-tighter transition-colors duration-300 ${
              isBlogPage || isScrolled ? "text-black" : "text-white"
            }`}
          >
            Bevv
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <NavLink isScrolled={isScrolled} isBlogPage={isBlogPage} onClick={() => scrollToSection('services')}>Services</NavLink>
            <NavLink isScrolled={isScrolled} isBlogPage={isBlogPage} onClick={() => scrollToSection('work')}>Work</NavLink>
            <NavLink isScrolled={isScrolled} isBlogPage={isBlogPage} onClick={() => scrollToSection('pricing')}>Pricing</NavLink>
            <Link 
              to="/blog" 
              onClick={handleBlogClick}
              className={`text-sm font-medium transition-colors duration-300 ${getLinkStyles()}`}
            >
              Blog
            </Link>
            <NavLink isScrolled={isScrolled} isBlogPage={isBlogPage} onClick={() => scrollToSection('about')}>About</NavLink>
            <NavLink isScrolled={isScrolled} isBlogPage={isBlogPage} onClick={() => scrollToSection('contact')}>Contact</NavLink>
          </div>

          <button
            className={`md:hidden transition-colors duration-300 ${
              isBlogPage || isScrolled ? "text-black" : "text-white"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="container mx-auto px-6 py-4 space-y-4">
            <MobileNavLink onClick={() => {
              scrollToSection('services');
              setIsMobileMenuOpen(false);
            }}>
              Services
            </MobileNavLink>
            <MobileNavLink onClick={() => {
              scrollToSection('work');
              setIsMobileMenuOpen(false);
            }}>
              Work
            </MobileNavLink>
            <MobileNavLink onClick={() => {
              scrollToSection('pricing');
              setIsMobileMenuOpen(false);
            }}>
              Pricing
            </MobileNavLink>
            <Link 
              to="/blog" 
              className="block text-base font-medium text-gray-800 hover:text-black transition-colors"
              onClick={() => {
                handleBlogClick();
                setIsMobileMenuOpen(false);
              }}
            >
              Blog
            </Link>
            <MobileNavLink onClick={() => {
              scrollToSection('about');
              setIsMobileMenuOpen(false);
            }}>
              About
            </MobileNavLink>
            <MobileNavLink onClick={() => {
              scrollToSection('contact');
              setIsMobileMenuOpen(false);
            }}>
              Contact
            </MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ 
  onClick, 
  children, 
  isScrolled,
  isBlogPage 
}: { 
  onClick: () => void; 
  children: React.ReactNode;
  isScrolled: boolean;
  isBlogPage: boolean;
}) => (
  <button
    onClick={onClick}
    className={`text-sm font-medium transition-colors duration-300 ${
      isBlogPage || isScrolled ? "text-gray-800 hover:text-black" : "text-white/90 hover:text-white"
    }`}
  >
    {children}
  </button>
);

const MobileNavLink = ({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) => (
  <button
    onClick={onClick}
    className="block text-base font-medium text-gray-800 hover:text-black transition-colors w-full text-left"
  >
    {children}
  </button>
);

export default Navbar;
