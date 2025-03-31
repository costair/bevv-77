
import React from "react";
import { Link } from "react-router-dom";
import FooterSection from "./footer/FooterSection";
import FooterLogo from "./footer/FooterLogo";
import FooterNav from "./footer/FooterNav";
import FooterNewsletter from "./footer/FooterNewsletter";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="container px-4 pb-8 pt-10 md:px-6 md:pb-12 md:pt-16 lg:pb-16 lg:pt-20">
        <div className="grid gap-8 lg:grid-cols-3">
          <FooterLogo />

          <div className="grid gap-6 md:grid-cols-2 lg:col-span-2">
            <FooterSection title="Navegación">
              <FooterNav>
                <Link to="/" className="hover:underline">
                  Inicio
                </Link>
                <Link to="#about" className="hover:underline">
                  Nosotros
                </Link>
                <Link to="#services" className="hover:underline">
                  Servicios
                </Link>
                <Link to="#work" className="hover:underline">
                  Trabajos
                </Link>
                <Link to="#pricing" className="hover:underline">
                  Precios
                </Link>
                <Link to="/faq" className="hover:underline">
                  Preguntas Frecuentes
                </Link>
              </FooterNav>
            </FooterSection>

            <FooterSection title="Legal">
              <FooterNav>
                <Link to="/privacy-policy" className="hover:underline">
                  Política de Privacidad
                </Link>
                <Link to="/terms-and-conditions" className="hover:underline">
                  Términos y Condiciones
                </Link>
              </FooterNav>
            </FooterSection>

            <FooterSection title="Contacto">
              <FooterNav>
                <span>contacto@bevvstudio.com</span>
                <span>+34 912 345 678</span>
                <span>Calle Gran Vía 123, Madrid, España</span>
              </FooterNav>
            </FooterSection>

            <FooterNewsletter />
          </div>
        </div>

        <div className="mt-8 border-t pt-8 md:mt-12 md:pt-12 lg:mt-16 lg:pt-16">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Bevv Studio. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
