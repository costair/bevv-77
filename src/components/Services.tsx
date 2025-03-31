
import React from "react";
import { CalendarDays, PackageOpen, PaintBucket } from "lucide-react";

const Services = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Nuestros Servicios
          </h2>
          <p className="max-w-[85%] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Ofrecemos una gama completa de servicios especializados para satisfacer todas las necesidades de tu marca de alimentos y bebidas.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="rounded-full bg-muted p-4">
              <PaintBucket className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">Diseño de Identidad de Marca</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Desde logotipos hasta sistemas de marca completos, creamos identidades distintivas que resuenan con tu audiencia.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="rounded-full bg-muted p-4">
              <PackageOpen className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">Diseño de Packaging</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Desarrollamos envases innovadores y sostenibles que destacan en los estantes y cautivan a los consumidores.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="rounded-full bg-muted p-4">
              <CalendarDays className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">Desarrollo de Productos</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Desde la conceptualización hasta la producción, te guiamos a través del proceso completo de creación de productos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
