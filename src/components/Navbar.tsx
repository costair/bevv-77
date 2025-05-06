
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "../hooks/use-mobile";
import { openWhatsApp } from "../utils/contact";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 w-full max-w-full items-center px-4 md:px-6">
        <div className="flex items-center mr-4">
          <img 
            src="/lovable-uploads/77d44c5a-72bd-4efd-9372-efaf47b4e77a.png" 
            alt="Costair Logo" 
            className="h-8"
          />
        </div>
        
        {/* Center navigation - adjusted to be truly centered */}
        <div className="hidden md:flex flex-1 items-center justify-center">
          <nav className="flex items-center gap-6 text-sm">
            <button
              onClick={() => scrollToSection("services")}
              className="transition-colors text-muted-foreground hover:text-foreground"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="transition-colors text-muted-foreground hover:text-foreground"
            >
              Nosotros
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="transition-colors text-muted-foreground hover:text-foreground"
            >
              Contacto
            </button>
          </nav>
        </div>
        
        <div className="flex items-center justify-end ml-auto md:ml-0">
          <Button 
            variant="default" 
            className="rounded-full bg-red-500 hover:bg-red-400 transition-colors"
            onClick={openWhatsApp}
          >
            Contáctanos
          </Button>
        </div>
        
        <div className="flex ml-4 md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="h-9 w-9 p-0"
                onClick={() => setIsOpen(true)}
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Alternar menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="pr-0">
              <div className="px-7">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img 
                      src="/lovable-uploads/77d44c5a-72bd-4efd-9372-efaf47b4e77a.png" 
                      alt="Costair Logo" 
                      className="h-8"
                    />
                  </div>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-9 w-9 p-0"
                    onClick={() => setIsOpen(false)}
                  >
                    <X className="h-5 w-5" />
                    <span className="sr-only">Cerrar menú</span>
                  </Button>
                </div>
                <nav className="mt-8 flex flex-col gap-6 text-base">
                  <button
                    onClick={() => scrollToSection("services")}
                    className="transition-colors hover:text-foreground text-left"
                  >
                    Servicios
                  </button>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="transition-colors hover:text-foreground text-left"
                  >
                    Nosotros
                  </button>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="transition-colors hover:text-foreground text-left"
                  >
                    Contacto
                  </button>
                </nav>
                <div className="mt-8 flex flex-col gap-2">
                  <Button
                    className="w-full rounded-full bg-red-500 hover:bg-red-400 transition-colors"
                    onClick={openWhatsApp}
                  >
                    Contáctanos
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
