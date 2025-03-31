
import React from "react";
import FooterSection from "./FooterSection";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const FooterNewsletter = () => {
  return (
    <FooterSection title="Mantente al día">
      <form
        className="flex flex-col gap-2 sm:flex-row"
        onSubmit={(e) => e.preventDefault()}
      >
        <Input
          type="email"
          placeholder="Tu correo electrónico"
          className="sm:flex-1"
        />
        <Button type="submit">Suscribirse</Button>
      </form>
      <p className="text-sm text-gray-500">
        Suscríbete a nuestro boletín para recibir las últimas noticias y
        actualizaciones.
      </p>
    </FooterSection>
  );
};

export default FooterNewsletter;
