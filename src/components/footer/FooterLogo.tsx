
import React from "react";
import { Link } from "react-router-dom";

const FooterLogo = () => {
  return (
    <div className="flex flex-col gap-4 items-center lg:items-start">
      <Link to="/" className="inline-block">
        <span className="font-bold text-2xl">Bevv</span>
      </Link>
      <p className="text-muted-foreground max-w-xs text-center lg:text-left">
        Estudio especializado en diseño y desarrollo para la industria de alimentos y bebidas, transformando visiones en marcas memorables.
      </p>
    </div>
  );
};

export default FooterLogo;
