interface TaxInput {
    totalElectricityCharges: number;
    isIncomeTaxExempt: boolean;
  }
  
  const ELECTRICITY_DUTY_RATE = 0.015; // 1.5%
  const SALES_TAX_RATE = 0.18;         // 18%
  const INCOME_TAX_RATE = 0.075;       // 7.5%
  const INCOME_TAX_THRESHOLD = 25000;
  
  export function calculateTaxes({
    totalElectricityCharges,
    isIncomeTaxExempt,
  }: TaxInput) {
    const electricityDuty =
      totalElectricityCharges * ELECTRICITY_DUTY_RATE;
  
    const salesTax =
      (totalElectricityCharges + electricityDuty) * SALES_TAX_RATE;
  
    const subtotal =
      totalElectricityCharges + electricityDuty + salesTax;
  
    const incomeTax =
      isIncomeTaxExempt
        ? 0
        : subtotal > INCOME_TAX_THRESHOLD
        ? subtotal * INCOME_TAX_RATE
        : 0;
  
    return {
      electricityDuty,
      salesTax,
      incomeTax,
    };
  }
  