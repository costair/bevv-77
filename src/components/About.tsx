
import React from "react";

const About = () => {
  return (
    <section className="bg-muted/40 py-24 md:py-32" id="about">
      <div className="container px-4 md:px-6">
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Sobre Nosotros
              </h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Con sede en Madrid y experiencia global, Bevv se especializa en crear conceptos innovadores para la industria de alimentos y bebidas. Nuestra atención al detalle y enfoque en la sostenibilidad nos distinguen.
              </p>
            </div>
            <ul className="grid gap-2 py-4">
              <li className="flex items-center gap-2">
                <div className="flex h-2 w-2 rounded-full bg-primary" />
                <span>Fundado en 2018 por expertos en diseño y gastronomía</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="flex h-2 w-2 rounded-full bg-primary" />
                <span>Más de 200 proyectos exitosos en todo el mundo</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="flex h-2 w-2 rounded-full bg-primary" />
                <span>Comprometidos con prácticas sostenibles y éticas</span>
              </li>
            </ul>
          </div>
          <div className="mx-auto w-full max-w-[400px] overflow-hidden">
            <img
              src="/lovable-uploads/2b12d53a-7131-4dad-9ac9-45690a517e22.png"
              alt="Equipo de Bevv trabajando en diseño de packaging"
              className="mx-auto aspect-square overflow-hidden rounded-full object-cover object-center sm:w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
