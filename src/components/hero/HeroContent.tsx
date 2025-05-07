
import React from 'react';
import { Button } from '../ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function HeroContent() {
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
          Estudio de Alimentos y Bebidas
        </h1>
        <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed my-6">
          Somos expertos en la creación de fotografías y videos para alimentos y bebidas, con un enfoque
          personalizado que destaca la esencia y el sabor de cada producto.
        </p>
        <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex">
          <Button size="lg" className="gap-2">
            Contáctanos <ArrowRight className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#services">Ver servicios</a>
          </Button>
        </div>

        {/* Stats Section */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-md">
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 p-2 rounded-full">
              <CheckCircle className="h-5 w-5 text-primary" />
            </div>
            <div>
              <div className="text-2xl font-bold">+1500</div>
              <div className="text-sm text-gray-500">Envíos completados</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 p-2 rounded-full">
              <CheckCircle className="h-5 w-5 text-primary" />
            </div>
            <div>
              <div className="text-2xl font-bold">Sin Límite</div>
              <div className="text-sm text-gray-500">de kg por envío</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
