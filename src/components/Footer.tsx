
import React from "react";
import { Link } from "react-router-dom";
import FooterSection from "./footer/FooterSection";
import FooterLogo from "./footer/FooterLogo";
import FooterNav from "./footer/FooterNav";
import FooterNewsletter from "./footer/FooterNewsletter";
import { Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="container px-4 pb-8 pt-10 md:px-6 md:pb-12 md:pt-16 lg:pb-16 lg:pt-20">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="flex flex-col gap-4 items-center lg:items-start mx-auto lg:mx-0 w-full max-w-xs">
            <div className="inline-block">
              <img 
                src="/lovable-uploads/77d44c5a-72bd-4efd-9372-efaf47b4e77a.png" 
                alt="Costair Logo" 
                className="h-10" 
              />
            </div>
            <p className="text-muted-foreground max-w-xs text-center lg:text-left">
              Especialistas en servicios de courier y logística internacional. Conectamos tus productos con el mundo de manera rápida, segura y al mejor precio.
            </p>
            
            <div className="flex space-x-4 mt-2">
              <a 
                href="https://www.instagram.com/costairglobal/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-red-500 transition-colors"
              >
                <Instagram size={24} />
              </a>
              <span className="text-gray-600 cursor-not-allowed">
                <Linkedin size={24} />
              </span>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:col-span-2">
            <FooterSection title="Contacto">
              <FooterNav>
                <div className="mb-2">contact@costairglobal.com</div>
                <div className="mb-2">+541123687997</div>
                <div className="mb-2">8140 NW 29th St, Doral, FL 33122</div>
              </FooterNav>
            </FooterSection>

            <FooterNewsletter />
          </div>
        </div>

        <div className="mt-8 border-t pt-8 md:mt-12 md:pt-12 lg:mt-16 lg:pt-16">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-center">
            <p className="text-sm text-gray-500 text-center">
              © {new Date().getFullYear()} Costair. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
