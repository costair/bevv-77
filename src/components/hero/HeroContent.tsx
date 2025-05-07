
import React from "react";
import { Button } from "../ui/button";
import { openWhatsApp } from "../../utils/contact";

const HeroContent: React.FC = () => {
  return (
    <div className="flex flex-col justify-center space-y-6">
      <h1 className="hero-title">
        De EE.UU. a Argentina en 7-10 días
      </h1>
      <p className="hero-subtitle">
        Hacemos que sus compras lleguen con eficiencia. Nuestro servicio courier aéreo le conecta con el mundo de forma rápida, segura y a precios competitivos.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 mt-2 justify-center">
        <Button 
          className="rounded-full bg-red-500 hover:bg-red-400" 
          size="lg"
          onClick={openWhatsApp}
        >
          Comenzar ahora
        </Button>
        <Button
          className="rounded-full border-red-500 text-red-500 hover:bg-red-50"
          variant="outline"
          size="lg"
          onClick={() => {
            const servicesSection = document.getElementById("services");
            if (servicesSection) {
              servicesSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Ver nuestros servicios
        </Button>
      </div>
    </div>
  );
};

export default HeroContent;
