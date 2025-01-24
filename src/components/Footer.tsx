import { Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-black pt-20">
      <div className="container mx-auto px-6 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
          <div className="md:col-span-3 space-y-4">
            <a href="/" className="text-2xl font-bold tracking-tighter">
              Bevv
            </a>
            <p className="text-muted-foreground text-sm">
              Transformando marcas de alimentos y bebidas a través de diseño estratégico y excelencia creativa.
            </p>
          </div>

          <div className="md:col-span-2 md:col-start-6 space-y-4">
            <h3 className="font-semibold text-lg">Productos</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#services" className="hover:text-black transition-colors">Bebidas</a></li>
              <li><a href="#services" className="hover:text-black transition-colors">Alimentos</a></li>
              <li><a href="#services" className="hover:text-black transition-colors">Snacks</a></li>
              <li><a href="#services" className="hover:text-black transition-colors">Orgánicos</a></li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-4">
            <h3 className="font-semibold text-lg">Servicios</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#work" className="hover:text-black transition-colors">Branding</a></li>
              <li><a href="#work" className="hover:text-black transition-colors">Packaging</a></li>
              <li><a href="#pricing" className="hover:text-black transition-colors">Marketing</a></li>
              <li><a href="#contact" className="hover:text-black transition-colors">Consultoría</a></li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-4">
            <h3 className="font-semibold text-lg">Empresa</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-black transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Contacto</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-300 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Bevv Studio. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-black transition-colors" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-black transition-colors" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;