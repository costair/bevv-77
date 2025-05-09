import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { openWhatsApp } from "../utils/contact";

const Contact = () => {
  return (
    <section className="bg-muted/40 py-24 md:py-32" id="contact">
      <div className="container px-4 md:px-6">
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center lg:text-left">
                Contáctenos
              </h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 text-center lg:text-left">
                ¿Necesita enviar o recibir paquetes desde EE.UU. a Argentina? Contáctenos para acceder a nuestro servicio de courier puerta a puerta confiable, rápido y eficiente.
              </p>
            </div>
            <ul className="grid gap-2 py-4 mx-auto lg:mx-0">
              <li className="flex items-center gap-2 justify-center lg:justify-start">
                <div className="flex h-2 w-2 rounded-full bg-primary" />
                <span>contact@costairglobal.com</span>
              </li>
              <li className="flex items-center gap-2 justify-center lg:justify-start">
                <div className="flex h-2 w-2 rounded-full bg-primary" />
                <span>+541123687997</span>
              </li>
              <li className="flex items-center gap-2 justify-center lg:justify-start">
                <div className="flex h-2 w-2 rounded-full bg-primary" />
                <span>8140 NW 29th St, Doral, FL 33122</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="grid gap-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Input
                    id="name"
                    placeholder="Nombre completo"
                    className="rounded-full"
                  />
                </div>
                <div className="space-y-2">
                  <Input
                    id="email"
                    placeholder="Correo electrónico"
                    type="email"
                    className="rounded-full"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Input
                  id="subject"
                  placeholder="Asunto"
                  className="rounded-full"
                />
              </div>
              <div className="space-y-2">
                <Textarea
                  id="message"
                  placeholder="Su mensaje"
                  className="min-h-[150px] resize-none rounded-2xl"
                />
              </div>
            </div>
            <Button 
              className="rounded-full w-full"
              onClick={openWhatsApp}
            >
              Enviar mensaje
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
