import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold tracking-tighter">
            Bevv
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <NavLink onClick={() => scrollToSection('services')}>Services</NavLink>
            <NavLink onClick={() => scrollToSection('work')}>Work</NavLink>
            <NavLink onClick={() => scrollToSection('pricing')}>Pricing</NavLink>
            <Link to="/blog" className="text-sm font-medium text-gray-800 hover:text-black transition-colors">
              Blog
            </Link>
            <NavLink onClick={() => scrollToSection('about')}>About</NavLink>
            <NavLink onClick={() => scrollToSection('contact')}>Contact</NavLink>
          </div>

          <button
            className="md:hidden"
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
              onClick={() => setIsMobileMenuOpen(false)}
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

const NavLink = ({ onClick, children }: { onClick: () => void; children: React.ReactNode }) => (
  <button
    onClick={onClick}
    className="text-sm font-medium text-gray-800 hover:text-black transition-colors"
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