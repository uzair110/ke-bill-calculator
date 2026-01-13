import { calculateVariableCharges } from "./variableCharges";
import { calculateFixedCharges } from "./fixedCharges";
import { calculateQTA } from "./qta";
import { calculateFCA } from "./fca";
import { calculatePHL } from "./phl";
import { calculateTaxes } from "./taxes";
import { calculateKMC } from "./kmc";

export interface BillingInput {
  units: number;
  consumerType: "normal" | "protected";
  isLifeline: boolean;
  isTimeOfUse: boolean;
  isIncomeTaxExempt: boolean;
}

export interface BillingBreakdown {
  variableCharges: number;
  fixedCharges: number;
  qta: number;
  fca: number;
  phl: number;

  totalElectricityCharges: number;

  electricityDuty: number;
  salesTax: number;
  incomeTax: number;
  kmc: number;

  taxesAndDuties: number;
  totalBill: number;
}

export function calculateBill({
  units,
  consumerType,
  isLifeline,
  isTimeOfUse,
  isIncomeTaxExempt,
}: BillingInput): BillingBreakdown {
  const variableCharges = Math.round(calculateVariableCharges({
    units,
    consumerType,
    isLifeline,
    isTimeOfUse,
  }));

  const fixedCharges = Math.round(calculateFixedCharges({
    units,
    isTimeOfUse,
  }));

  const qta = Math.round(calculateQTA({
    units,
    isLifeline,
  }));

  const fca = Math.round(calculateFCA({
    units,
    consumerType,
  }));

  const phl = Math.round(calculatePHL({
    units,
    isLifeline,
  }));

  const totalElectricityCharges = Math.round(
    variableCharges +
    fixedCharges +
    qta +
    fca +
    phl
  );

  const { electricityDuty, salesTax, incomeTax } =
    calculateTaxes({
      totalElectricityCharges,
      isIncomeTaxExempt,
    });

  const kmc = Math.round(calculateKMC({ units }));

  const taxesAndDuties = Math.round(
    electricityDuty +
    salesTax +
    incomeTax +
    kmc
  );

  const totalBill = Math.round(
    totalElectricityCharges +
    taxesAndDuties
  );

  return {
    variableCharges,
    fixedCharges,
    qta,
    fca,
    phl,

    totalElectricityCharges,

    electricityDuty: Math.round(electricityDuty),
    salesTax: Math.round(salesTax),
    incomeTax: Math.round(incomeTax),
    kmc,

    taxesAndDuties,
    totalBill,
  };
}
