
import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Slider } from "./ui/slider";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

// Shipping rate categories
const shippingRates = {
  "indumentaria": 70,
  "accesorios": 70,
  "cremas": 70,
  "repuestos-coche": 70,
  "repuestos-avion": 130,
  "manicura": 70,
  "iphones": 130,
  "macbooks": 160,
  "fundas": 70,
  "hardware": 70,
  "electrodomesticos": 70,
  "telefonia": 90,
};

const Hero = () => {
  const [weight, setWeight] = useState<number>(1);
  const [category, setCategory] = useState<string>("");
  const [total, setTotal] = useState<number>(0);
  const [inputWeight, setInputWeight] = useState<string>("1");

  // Format currency in ARS
  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 2
    }).format(value);
  };

  // Handle weight slider change
  const handleSliderChange = (value: number[]) => {
    setWeight(value[0]);
    setInputWeight(value[0].toString());
  };

  // Handle weight input change
  const handleWeightInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "") {
      setInputWeight("");
      return;
    }
    
    const parsedValue = parseFloat(value);
    if (!isNaN(parsedValue) && parsedValue >= 1 && parsedValue <= 1000) {
      setInputWeight(value);
      setWeight(parsedValue);
    }
  };

  // Handle input blur to ensure valid values
  const handleWeightInputBlur = () => {
    if (inputWeight === "" || isNaN(parseFloat(inputWeight))) {
      setInputWeight("1");
      setWeight(1);
    }
  };

  // Round weight according to Costair's rounding rules
  const roundWeight = (weight: number): number => {
    const decimalPart = weight % 1;
    if (decimalPart <= 0.3) {
      return Math.floor(weight);
    } else {
      return Math.ceil(weight);
    }
  };

  // Calculate total cost when weight or category changes
  useEffect(() => {
    if (category) {
      const rate = shippingRates[category as keyof typeof shippingRates] || 0;
      const roundedWeight = roundWeight(weight);
      setTotal(rate * roundedWeight);
    }
  }, [weight, category]);

  return (
    <section className="relative w-full py-24 md:py-32">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: "url('/lovable-uploads/8284259c-6f5c-4112-8050-8f87c8f4c876.png')",
          backgroundSize: "cover"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      <div className="container px-4 md:px-6 w-full max-w-full mx-auto relative z-10">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          {/* Text Content - Adjusted vertical alignment */}
          <div className="flex flex-col justify-center space-y-6">
            <h1 className="hero-title">
              De EE.UU. a Argentina en 7-10 días
            </h1>
            <p className="hero-subtitle">
              Hacemos que sus compras lleguen con eficiencia. Nuestro servicio courier aéreo le conecta con el mundo de forma rápida, segura y a precios competitivos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-2 justify-center">
              <Button className="rounded-full bg-red-500 hover:bg-red-400" size="lg">
                Comenzar ahora
              </Button>
              <Button
                className="rounded-full border-red-500 text-red-500 hover:bg-red-50"
                variant="outline"
                size="lg"
              >
                Ver nuestros servicios
              </Button>
            </div>
          </div>
          
          {/* Calculator Card */}
          <div className="mx-auto w-full overflow-hidden rounded-xl bg-white shadow-lg">
            <div className="p-6 md:p-8">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-2xl font-semibold">Calcula el costo de tu envío</h2>
                </div>

                <div className="space-y-2">
                  <Label>Cantidad de Kilos</Label>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <div className="relative w-24">
                        <Input
                          type="number"
                          value={inputWeight}
                          onChange={handleWeightInputChange}
                          onBlur={handleWeightInputBlur}
                          min="1"
                          max="1000"
                          step="0.1"
                          className="pr-6 text-right"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                          <span className="text-gray-500">kg</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500">Redondeado: {roundWeight(weight)} kg</p>
                  </div>
                  <Slider 
                    value={[weight]} 
                    min={1} 
                    max={1000} 
                    step={0.1}
                    onValueChange={handleSliderChange}
                    className="py-4"
                  />
                  <p className="text-sm text-gray-500">*Redondeamos 1,30kg=1kg y 1,55kg=2kg</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Categoría</Label>
                  <Select onValueChange={setCategory} value={category}>
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Seleccionar categoría" />
                    </SelectTrigger>
                    <SelectContent align="start" sideOffset={8}>
                      <SelectItem value="indumentaria">Indumentaria - $70/kg</SelectItem>
                      <SelectItem value="accesorios">Accesorios/Juguetes/Deporte - $70/kg</SelectItem>
                      <SelectItem value="cremas">Cremas Faciales - $70/kg</SelectItem>
                      <SelectItem value="repuestos-coche">Repuestos de Coche/Moto/Barco - $70/kg</SelectItem>
                      <SelectItem value="repuestos-avion">Repuestos de avión - $130/kg</SelectItem>
                      <SelectItem value="manicura">Manicura/Estética/Pedicurista - $70/kg</SelectItem>
                      <SelectItem value="iphones">iPhones - $130/kg</SelectItem>
                      <SelectItem value="macbooks">Macbooks - $160/kg</SelectItem>
                      <SelectItem value="fundas">Fundas de Teléfono - $70/kg</SelectItem>
                      <SelectItem value="hardware">Hardware - $70/kg</SelectItem>
                      <SelectItem value="electrodomesticos">Electrodomésticos - $70/kg</SelectItem>
                      <SelectItem value="telefonia">Telefonía Otras Marcas - $90/kg</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg mt-4">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Total:</span>
                    <span className="text-2xl font-bold">{formatCurrency(total)}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">*Precio final con impuestos y todas las tasas incluidas.</p>
                </div>

                <Button className="w-full bg-red-500 hover:bg-red-400">
                  Solicitar Envío
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
