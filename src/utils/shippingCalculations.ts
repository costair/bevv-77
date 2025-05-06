
// Shipping rate categories
export const shippingRates = {
  "indumentaria": 70,
  "accesorios": 70,
  "cremas": 70,
  "repuestos-coche": 70,
  "repuestos-avion": 130,
  "manicura": 70,
  "iphones": 130,
  "macbooks": 160,
  "fundas": 70,
  "hardware": 90,
  "electrodomesticos": 70,
  "telefonia": 90,
  "accesorios-tecnologia": 70,
};

// Format currency in ARS
export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 2
  }).format(value);
};

// Round weight according to Costair's rounding rules
export const roundWeight = (weight: number): number => {
  const decimalPart = weight % 1;
  if (decimalPart <= 0.3) {
    return Math.floor(weight);
  } else {
    return Math.ceil(weight);
  }
};

// Calculate shipping cost
export const calculateShippingCost = (weight: number, category: string): number => {
  if (!category) return 0;
  
  const rate = shippingRates[category as keyof typeof shippingRates] || 0;
  const roundedWeight = roundWeight(weight);
  return rate * roundedWeight;
};
