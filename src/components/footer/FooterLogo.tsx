
import React from "react";
import { Link } from "react-router-dom";

const FooterLogo = () => {
  return (
    <div className="flex flex-col gap-4 items-center lg:items-start">
      <Link to="/" className="inline-block">
        <img 
          src="/lovable-uploads/77d44c5a-72bd-4efd-9372-efaf47b4e77a.png" 
          alt="Costair Logo" 
          className="h-10" 
        />
      </Link>
      <p className="text-muted-foreground max-w-xs text-center lg:text-left">
        Especialistas en servicios de courier y logística internacional. Conectamos tus productos con el mundo de manera rápida, segura y al mejor precio.
      </p>
    </div>
  );
};

export default FooterLogo;
