
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "../hooks/use-mobile";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <NavLink to="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold text-xl sm:text-2xl">Bevv</span>
        </NavLink>
        <div className="hidden md:flex flex-1 items-center justify-between">
          <nav className="flex items-center gap-6 text-sm">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "transition-colors text-foreground font-medium"
                  : "transition-colors text-muted-foreground hover:text-foreground"
              }
            >
              Inicio
            </NavLink>
            <NavLink
              to="/servicios"
              className={({ isActive }) =>
                isActive
                  ? "transition-colors text-foreground font-medium"
                  : "transition-colors text-muted-foreground hover:text-foreground"
              }
            >
              Servicios
            </NavLink>
            <NavLink
              to="/nosotros"
              className={({ isActive }) =>
                isActive
                  ? "transition-colors text-foreground font-medium"
                  : "transition-colors text-muted-foreground hover:text-foreground"
              }
            >
              Nosotros
            </NavLink>
            <NavLink
              to="/contacto"
              className={({ isActive }) =>
                isActive
                  ? "transition-colors text-foreground font-medium"
                  : "transition-colors text-muted-foreground hover:text-foreground"
              }
            >
              Contacto
            </NavLink>
          </nav>
          <div className="flex items-center gap-2">
            <Button 
              variant="default" 
              className="rounded-full bg-red-500 hover:bg-red-400 transition-colors"
            >
              Contáctanos
            </Button>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-end md:hidden">
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
                  <NavLink
                    to="/"
                    className="flex items-center"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="font-bold text-xl">Bevv</span>
                  </NavLink>
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
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? "transition-colors text-foreground font-medium"
                        : "transition-colors hover:text-foreground"
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    Inicio
                  </NavLink>
                  <NavLink
                    to="/servicios"
                    className={({ isActive }) =>
                      isActive
                        ? "transition-colors text-foreground font-medium"
                        : "transition-colors hover:text-foreground"
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    Servicios
                  </NavLink>
                  <NavLink
                    to="/nosotros"
                    className={({ isActive }) =>
                      isActive
                        ? "transition-colors text-foreground font-medium"
                        : "transition-colors hover:text-foreground"
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    Nosotros
                  </NavLink>
                  <NavLink
                    to="/contacto"
                    className={({ isActive }) =>
                      isActive
                        ? "transition-colors text-foreground font-medium"
                        : "transition-colors hover:text-foreground"
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    Contacto
                  </NavLink>
                </nav>
                <div className="mt-8 flex flex-col gap-2">
                  <Button
                    className="w-full rounded-full bg-red-500 hover:bg-red-400 transition-colors"
                    onClick={() => setIsOpen(false)}
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
