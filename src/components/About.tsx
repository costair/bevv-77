
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Box } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="w-full py-12 md:py-24 lg:py-32"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">
              Nuestra historia
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Confianza y eficiencia en logística internacional
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Costair nació con la misión de simplificar el comercio internacional entre EE.UU. y Argentina, ofreciendo soluciones de envío accesibles para todos.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-8 py-12 lg:grid-cols-2">
          <div className="grid gap-4">
            <h3 className="text-2xl font-bold">Nuestra Experiencia</h3>
            <p className="text-gray-500">
              Con más de una década en el sector logístico internacional, contamos con una warehouse estratégicamente ubicada en Miami y nos especializamos exclusivamente en la ruta Miami-Buenos Aires.
            </p>
            <p className="text-gray-500">
              Nuestro equipo especializado domina los procesos aduaneros y las normativas específicas para envíos entre EE.UU. y Argentina, asegurando que cada paquete llegue a su destino sin complicaciones en <strong>7-10 días hábiles</strong>.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-100 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 text-red-500">
                  <path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3" />
                  <path d="M3 11v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H7v-2a2 2 0 0 0-4 0Z" />
                  <path d="M5 18v2" />
                  <path d="M19 18v2" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-center">+2000</h4>
              <p className="text-gray-500 text-center">Envíos completados</p>
            </div>
            <div className="grid gap-2">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-100 mx-auto">
                <Box className="h-10 w-10 text-red-500" />
              </div>
              <h4 className="text-xl font-bold text-center">Rapidez</h4>
              <p className="text-gray-500 text-center">Tiempos de entrega optimizados</p>
            </div>
            <div className="grid gap-2">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-100 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 text-red-500">
                  <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                  <line x1="12" x2="12" y1="8" y2="12" />
                  <line x1="12" x2="12.01" y1="16" y2="16" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-center">24/7</h4>
              <p className="text-gray-500 text-center">Atención al cliente</p>
            </div>
            <div className="grid gap-2">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-100 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 text-red-500">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-center">Miami-Buenos Aires</h4>
              <p className="text-gray-500 text-center">Ruta exclusiva</p>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-5xl space-y-8">
          <h3 className="text-2xl font-bold text-center">Lo que dicen nuestros clientes</h3>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <Avatar>
                  <AvatarImage src="/avatar-1.png" alt="Avatar" />
                  <AvatarFallback>JC</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">Juan Cruz Quevedo</p>
                  <p className="text-xs text-gray-500">Founder @powerstorearg</p>
                </div>
              </div>
              <p className="mt-4 text-gray-500">
                "Super confiable y envío muy rápido!! Recomendadísimo"
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <Avatar>
                  <AvatarImage src="/avatar-2.png" alt="Avatar" />
                  <AvatarFallback>JS</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">Jamil Soto</p>
                  <p className="text-xs text-gray-500">Importador Mayorista</p>
                </div>
              </div>
              <p className="mt-4 text-gray-500">
                "Compré una notebook en Miami y en solo 5 días ya la tenía en la puerta de mi casa en Argentina. Todo el proceso fue rápido, seguro y sin complicaciones. La atención al cliente fue muy buena."
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <Avatar>
                  <AvatarImage src="/avatar-3.png" alt="Avatar" />
                  <AvatarFallback>CG</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">Camila Gonçalves</p>
                  <p className="text-xs text-gray-500">Compradora Casual</p>
                </div>
              </div>
              <p className="mt-4 text-gray-500">
                "Genios el mejor servicio !!!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
