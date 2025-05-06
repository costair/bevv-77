
import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Slider } from "../ui/slider";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { openWhatsApp } from "../../utils/contact";
import { shippingRates, formatCurrency, roundWeight, calculateShippingCost } from "../../utils/shippingCalculations";

const ShippingCalculator: React.FC = () => {
  const [weight, setWeight] = useState<number>(1);
  const [category, setCategory] = useState<string>("");
  const [total, setTotal] = useState<number>(0);
  const [inputWeight, setInputWeight] = useState<string>("1");

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

  // Calculate total cost when weight or category changes
  useEffect(() => {
    setTotal(calculateShippingCost(weight, category));
  }, [weight, category]);

  return (
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
                <SelectItem value="accesorios-tecnologia">Accesorios de Tecnología - $70/kg</SelectItem>
                <SelectItem value="cremas">Cremas Faciales - $70/kg</SelectItem>
                <SelectItem value="repuestos-coche">Repuestos de Coche/Moto/Barco - $70/kg</SelectItem>
                <SelectItem value="repuestos-avion">Repuestos de avión - $130/kg</SelectItem>
                <SelectItem value="manicura">Manicura/Estética/Pedicurista - $70/kg</SelectItem>
                <SelectItem value="iphones">iPhones - $130/kg</SelectItem>
                <SelectItem value="macbooks">Macbooks - $160/kg</SelectItem>
                <SelectItem value="fundas">Fundas de Teléfono - $70/kg</SelectItem>
                <SelectItem value="hardware">Hardware - $90/kg</SelectItem>
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

          <Button 
            className="w-full bg-red-500 hover:bg-red-400"
            onClick={openWhatsApp}
          >
            Solicitar Envío
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ShippingCalculator;
