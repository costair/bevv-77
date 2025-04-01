
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
    <section className="relative min-h-screen bg-cover bg-center py-24 md:py-32" style={{ backgroundImage: "url('/lovable-uploads/649ab51b-82eb-44a2-a966-f29aa810c672.png')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">
              Envíos internacionales a tu alcance con Costair
            </h1>
            <p className="mt-4 text-white text-xl max-w-3xl mx-auto">
              Especialistas en servicios de courier y logística internacional. Conectamos tus productos con el mundo de manera rápida, segura y al mejor precio.
            </p>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
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
                    <SelectContent align="end" sideOffset={8}>
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

                <Button className="w-full bg-red-500 hover:bg-red-600">
                  Solicitar Envío
                </Button>
              </div>
            </div>
            
            <div className="flex flex-col justify-center">
              <div className="bg-white bg-opacity-95 rounded-xl shadow-lg p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-4">¿Por qué elegir Costair?</h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="bg-red-500 rounded-full p-1 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span>Tarifas competitivas en el mercado</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-red-500 rounded-full p-1 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span>Seguimiento en tiempo real de tus envíos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-red-500 rounded-full p-1 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span>Soporte al cliente 24/7</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-red-500 rounded-full p-1 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span>Envíos seguros y garantizados</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Button className="w-full bg-red-500 hover:bg-red-600">
                    Comenzar ahora
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
