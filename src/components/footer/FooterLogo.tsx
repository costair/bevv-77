
import { Instagram, Linkedin } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const FooterLogo = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === "/") {
      // Si estamos en la landing page, hacer scroll hacia arriba
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Si estamos en otra página, navegar a la landing page
      navigate('/');
      // Asegurarse de que el scroll esté en la parte superior
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <div className="flex flex-col items-start px-4 md:px-0">
      <a href="/" onClick={handleLogoClick} className="text-2xl font-bold tracking-tighter">
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
