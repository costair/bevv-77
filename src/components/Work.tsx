
import React from "react";

const Work = () => {
  return (
    <section className="py-24 md:py-32" id="work">
      <div className="container px-4 md:px-6">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Nuestro Trabajo
          </h2>
          <p className="max-w-[85%] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Explora algunos de nuestros proyectos recientes que muestran nuestro enfoque creativo y atención al detalle.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="group relative overflow-hidden rounded-lg">
            <img
              src="/lovable-uploads/49a6017a-a56b-49b0-b214-852f106c03c6.png"
              alt="Packaging de zumo orgánico"
              className="aspect-[4/5] h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-6 flex items-end opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div>
                <h3 className="text-xl font-bold text-white">Zumo Orgánico Fresa</h3>
                <p className="text-white/80">Diseño de packaging y desarrollo de marca</p>
              </div>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg">
            <img
              src="/lovable-uploads/3d337ad1-465b-44a4-b74b-6052d0bdc727.png"
              alt="Campaña de marketing para café"
              className="aspect-[4/5] h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-6 flex items-end opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div>
                <h3 className="text-xl font-bold text-white">Café de Especialidad</h3>
                <p className="text-white/80">Estrategia de marca y campaña de marketing</p>
              </div>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg">
            <img
              src="/lovable-uploads/9a683ae9-10a4-46c9-bb18-463f038b29c0.png"
              alt="Colección de botellas de vino"
              className="aspect-[4/5] h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-6 flex items-end opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div>
                <h3 className="text-xl font-bold text-white">Bodega Terra Nova</h3>
                <p className="text-white/80">Rediseño de etiquetas y estrategia de marca</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
