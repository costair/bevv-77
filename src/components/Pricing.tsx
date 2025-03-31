
import React from "react";
import { Button } from "./ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  return (
    <section className="py-24 md:py-32" id="pricing">
      <div className="container px-4 md:px-6">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Nuestros Planes
          </h2>
          <p className="max-w-[85%] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Ofrecemos paquetes flexibles para adaptarnos a las necesidades de cada empresa, desde startups hasta marcas establecidas.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 lg:grid-cols-3">
          <div className="flex flex-col justify-between rounded-lg border bg-background p-6 shadow-sm">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Esencial</h3>
              <div className="text-4xl font-bold">
                €1,500<span className="text-sm font-normal text-gray-500">/proyecto</span>
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                Para pequeñas empresas que buscan establecer su presencia en el mercado.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Diseño de identidad básica</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Diseño de packaging simple</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>2 rondas de revisiones</span>
                </li>
              </ul>
            </div>
            <Button className="mt-6 rounded-full w-full">Comenzar</Button>
          </div>
          <div className="relative flex flex-col justify-between rounded-lg border bg-background p-6 shadow-sm">
            <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
              Popular
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Profesional</h3>
              <div className="text-4xl font-bold">
                €3,500<span className="text-sm font-normal text-gray-500">/proyecto</span>
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                Para empresas en crecimiento que necesitan una presencia de marca más completa.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Sistema de identidad completo</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Diseño de packaging premium</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Asesoría estratégica</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>4 rondas de revisiones</span>
                </li>
              </ul>
            </div>
            <Button className="mt-6 rounded-full w-full">Comenzar</Button>
          </div>
          <div className="flex flex-col justify-between rounded-lg border bg-background p-6 shadow-sm">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Empresarial</h3>
              <div className="text-4xl font-bold">
                €8,000<span className="text-sm font-normal text-gray-500">/proyecto</span>
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                Solución integral para marcas establecidas con necesidades complejas.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Sistema de identidad avanzado</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Diseño de línea completa de productos</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Consultoría estratégica de producto</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Revisiones ilimitadas</span>
                </li>
              </ul>
            </div>
            <Button className="mt-6 rounded-full w-full">Contactar ventas</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
