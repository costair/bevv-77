
import React from "react";
import FooterSection from "./FooterSection";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const FooterNewsletter = () => {
  return (
    <FooterSection title="Mantente al día">
      <div className="space-y-2">
        <form
          className="flex flex-col gap-2 sm:flex-row"
          onSubmit={(e) => e.preventDefault()}
        >
          <Input
            type="email"
            placeholder="Tu correo electrónico"
            className="sm:flex-1"
          />
          <Button type="submit" className="hover:bg-accent transition-colors">
            Suscribirse
          </Button>
        </form>
        <p className="text-sm text-gray-500">
          Suscríbete a nuestro boletín para recibir las últimas noticias y
          actualizaciones.
        </p>
      </div>
    </FooterSection>
  );
};

export default FooterNewsletter;
