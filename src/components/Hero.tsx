
import React from "react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Expandiendo los límites de la innovación en alimentos y bebidas
            </h1>
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Bevv es un estudio integral de diseño y desarrollo para la industria de alimentos y bebidas. Transformamos ideas en experiencias memorables a través del diseño de packaging, identidad de marca y desarrollo de productos.
            </p>
            <div className="flex flex-col gap-2 sm:flex-row">
              <Button className="rounded-full" size="lg">
                Comenzar ahora
              </Button>
              <Button
                className="rounded-full"
                variant="outline"
                size="lg"
              >
                Ver nuestro trabajo
              </Button>
            </div>
          </div>
          <div className="mx-auto aspect-video overflow-hidden rounded-xl object-cover lg:order-last">
            <video
              src="/lovable-uploads/bevv2.mp4"
              autoPlay
              loop
              muted
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
