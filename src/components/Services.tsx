
import React from "react";
import { ArrowRight } from "lucide-react";

const Services = () => {
  return (
    <section
      id="services"
      className="w-full py-12 md:py-24 lg:py-32 bg-gray-50"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">
              Servicios
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Soluciones logísticas globales
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              En Costair facilitamos el comercio internacional con servicios de courier confiables y eficientes.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 pt-12">
          <div className="grid gap-1">
            <h3 className="text-xl font-bold">Courier Internacional</h3>
            <p className="text-gray-500">
              Envíos rápidos y seguros desde y hacia cualquier parte del mundo, con tarifas competitivas y tiempos de entrega optimizados.
            </p>
            <a href="#" className="group mt-2 inline-flex items-center text-sm font-medium text-primary">
              Ver más
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
          <div className="grid gap-1">
            <h3 className="text-xl font-bold">Compras Asistidas</h3>
            <p className="text-gray-500">
              Te ayudamos a comprar en tiendas internacionales y facilitamos el envío hasta tu puerta, con gestión de impuestos y trámites aduaneros.
            </p>
            <a href="#" className="group mt-2 inline-flex items-center text-sm font-medium text-primary">
              Ver más
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
          <div className="grid gap-1">
            <h3 className="text-xl font-bold">Logística e-Commerce</h3>
            <p className="text-gray-500">
              Soluciones integrales para tiendas online con cumplimiento de pedidos, gestión de devoluciones y almacenamiento.
            </p>
            <a href="#" className="group mt-2 inline-flex items-center text-sm font-medium text-primary">
              Ver más
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
          <div className="grid gap-1">
            <h3 className="text-xl font-bold">Carga Aérea</h3>
            <p className="text-gray-500">
              Transporte aéreo de mercancías con tarifas especiales para distintos tipos de productos, desde electrónicos hasta repuestos.
            </p>
            <a href="#" className="group mt-2 inline-flex items-center text-sm font-medium text-primary">
              Ver más
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
          <div className="grid gap-1">
            <h3 className="text-xl font-bold">Trámites Aduaneros</h3>
            <p className="text-gray-500">
              Gestión de aduanas y documentación para garantizar que tus envíos cumplan con todas las regulaciones internacionales.
            </p>
            <a href="#" className="group mt-2 inline-flex items-center text-sm font-medium text-primary">
              Ver más
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
          <div className="grid gap-1">
            <h3 className="text-xl font-bold">Seguimiento en Tiempo Real</h3>
            <p className="text-gray-500">
              Monitorea el estado de tus envíos con nuestra plataforma online, recibiendo actualizaciones en cada etapa del proceso.
            </p>
            <a href="#" className="group mt-2 inline-flex items-center text-sm font-medium text-primary">
              Ver más
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
