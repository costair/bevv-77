
import React from "react";
import { Button } from "./ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  return (
    <section className="py-24 md:py-32" id="pricing">
      <div className="container px-4 md:px-6">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Nuestros Planes de Envío
          </h2>
          <p className="max-w-[85%] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Ofrecemos diferentes opciones para adaptarnos a tus necesidades, desde envíos pequeños hasta cargas completas.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 lg:grid-cols-3">
          <div className="flex flex-col justify-between rounded-lg border bg-background p-6 shadow-sm">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Básico</h3>
              <div className="text-4xl font-bold">
                $70<span className="text-sm font-normal text-gray-500">/kg</span>
              </div>
              <p className="text-gray-500">
                Para envíos personales y pequeñas compras internacionales.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-red-500" />
                  <span>Indumentaria y Accesorios</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-red-500" />
                  <span>Productos de belleza</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-red-500" />
                  <span>Tracking internacional</span>
                </li>
              </ul>
            </div>
            <Button className="mt-6 rounded-full w-full hover:bg-red-500">Cotizar envío</Button>
          </div>
          <div className="relative flex flex-col justify-between rounded-lg border bg-background p-6 shadow-sm">
            <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-red-500 px-3 py-1 text-xs font-medium text-white">
              Popular
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Premium</h3>
              <div className="text-4xl font-bold">
                $130<span className="text-sm font-normal text-gray-500">/kg</span>
              </div>
              <p className="text-gray-500">
                Para envíos de alta prioridad y productos de tecnología valiosos.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-red-500" />
                  <span>iPhones y electrónicos premium</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-red-500" />
                  <span>Repuestos de avión</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-red-500" />
                  <span>Seguro incluido</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-red-500" />
                  <span>Entrega prioritaria</span>
                </li>
              </ul>
            </div>
            <Button className="mt-6 rounded-full w-full hover:bg-red-500">Cotizar envío</Button>
          </div>
          <div className="flex flex-col justify-between rounded-lg border bg-background p-6 shadow-sm">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Empresarial</h3>
              <div className="text-4xl font-bold">
                Personalizado<span className="text-sm font-normal text-gray-500">/kg</span>
              </div>
              <p className="text-gray-500">
                Soluciones de logística para empresas con envíos regulares.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-red-500" />
                  <span>Tarifas corporativas</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-red-500" />
                  <span>Gestión aduanera integral</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-red-500" />
                  <span>API de integración</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-red-500" />
                  <span>Asesoría logística personalizada</span>
                </li>
              </ul>
            </div>
            <Button className="mt-6 rounded-full w-full hover:bg-red-500">Contactar ventas</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
