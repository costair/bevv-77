
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Slider } from "./ui/slider";
import { Label } from "./ui/label";

const Hero = () => {
  const [amount, setAmount] = useState<number>(100000);
  const [period, setPeriod] = useState<number>(12);
  const [purpose, setPurpose] = useState<string>("");

  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 2
    }).format(value);
  };

  const handleSliderChange = (value: number[]) => {
    setAmount(value[0]);
  };

  const handlePeriodChange = (value: number[]) => {
    setPeriod(value[0]);
  };

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
              <Button className="rounded-full hover:bg-accent" size="lg">
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
          <div className="mx-auto overflow-hidden rounded-xl bg-white shadow-lg">
            <div className="p-6 md:p-8">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-2xl font-semibold">¿Cuánto cuesta tu proyecto?</h2>
                  <div className="flex justify-between">
                    <p className="text-lg font-bold">{formatCurrency(amount)}</p>
                    <p className="text-sm text-gray-500">Máx. {formatCurrency(500000)}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Presupuesto</Label>
                  <Slider 
                    defaultValue={[amount]} 
                    min={10000} 
                    max={500000} 
                    step={10000}
                    onValueChange={handleSliderChange}
                    className="py-4"
                  />
                </div>

                <div className="space-y-2">
                  <Label>¿En cuánto tiempo?</Label>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>2 Semanas</span>
                    <span>12 Meses</span>
                  </div>
                  <Slider 
                    defaultValue={[period]} 
                    min={2} 
                    max={52} 
                    step={2}
                    onValueChange={handlePeriodChange}
                    className="py-4"
                  />
                  <p className="text-right text-sm">{period} {period === 1 ? 'semana' : (period <= 4 ? 'semanas' : 'semanas')}</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="purpose">Razón del proyecto</Label>
                  <Select onValueChange={setPurpose} value={purpose}>
                    <SelectTrigger id="purpose">
                      <SelectValue placeholder="Seleccionar..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="branding">Branding</SelectItem>
                      <SelectItem value="packaging">Packaging</SelectItem>
                      <SelectItem value="website">Sitio Web</SelectItem>
                      <SelectItem value="product">Desarrollo de Producto</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button className="w-full bg-accent hover:bg-accent/90">
                  Solicitar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
