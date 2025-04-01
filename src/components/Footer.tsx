
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
          <div className="flex flex-col gap-4">
            <div className="inline-block">
              <img 
                src="/lovable-uploads/373a7b6d-dbaa-4a09-8913-995e2d45cfee.png" 
                alt="Costair Logo" 
                className="h-10" 
              />
            </div>
            <p className="text-muted-foreground max-w-xs">
              Especialistas en servicios de courier y logística internacional. Conectamos tus productos con el mundo de manera rápida, segura y al mejor precio.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:col-span-2">
            <FooterSection title="Contacto">
              <FooterNav>
                <span>contacto@costair.com</span>
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
              © {new Date().getFullYear()} Costair. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
