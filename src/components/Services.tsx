
import React from "react";
import { ArrowRight, Plane, Package, Clock, Shield, Map, FileCheck } from "lucide-react";
import { Button } from "./ui/button";

const Services = () => {
  return (
    <section
      id="services"
      className="w-full py-12 md:py-24 lg:py-32 bg-gray-50"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Left Side: Heading and CTA */}
          <div className="md:w-1/3 space-y-6">
            <h2 className="font-condensed text-4xl md:text-5xl font-bold text-black leading-tight">
              Explorá nuestros servicios de courier aéreo
            </h2>
            <p className="text-gray-600 md:text-lg">
              Te ofrecemos una variedad de servicios premium para conectar tus compras de EE.UU. con Argentina de manera eficiente.
            </p>
            <Button className="group rounded-full bg-red-500 hover:bg-red-400 text-white px-6 py-3">
              Saber Más
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          {/* Right Side: Service Cards */}
          <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                <Plane className="h-6 w-6 text-red-500" />
              </div>
              <h3 className="font-condensed text-lg font-semibold mb-2">Envíos Express</h3>
              <p className="text-sm text-gray-500">7-10 días desde EE.UU. a cualquier punto de Argentina</p>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                <Package className="h-6 w-6 text-red-500" />
              </div>
              <h3 className="font-condensed text-lg font-semibold mb-2">Compras Asistidas</h3>
              <p className="text-sm text-gray-500">Te ayudamos a comprar en tiendas de EE.UU. sin complicaciones</p>
            </div>
            
            {/* Card 3 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-red-500" />
              </div>
              <h3 className="font-condensed text-lg font-semibold mb-2">Seguimiento Real</h3>
              <p className="text-sm text-gray-500">Monitoreo en tiempo real de tus envíos internacionales</p>
            </div>
            
            {/* Card 4 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                <FileCheck className="h-6 w-6 text-red-500" />
              </div>
              <h3 className="font-condensed text-lg font-semibold mb-2">Trámites Aduaneros</h3>
              <p className="text-sm text-gray-500">Gestión completa de documentación y despacho de aduana</p>
            </div>
            
            {/* Card 5 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-red-500" />
              </div>
              <h3 className="font-condensed text-lg font-semibold mb-2">Seguro de Carga</h3>
              <p className="text-sm text-gray-500">Protección completa para tus envíos de alto valor</p>
            </div>
            
            {/* Card 6 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                <Map className="h-6 w-6 text-red-500" />
              </div>
              <h3 className="font-condensed text-lg font-semibold mb-2">Asesoría Logística</h3>
              <p className="text-sm text-gray-500">Consultores expertos para optimizar tus importaciones</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
