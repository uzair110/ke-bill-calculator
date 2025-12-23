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
  const variableCharges = calculateVariableCharges({
    units,
    consumerType,
    isLifeline,
    isTimeOfUse,
  });

  const fixedCharges = calculateFixedCharges({
    units,
    isTimeOfUse,
  });

  const qta = calculateQTA({
    units,
    isLifeline,
  });

  const fca = calculateFCA({
    units,
    consumerType,
  });

  const phl = calculatePHL({
    units,
    isLifeline,
  });

  const totalElectricityCharges =
    variableCharges +
    fixedCharges +
    qta +
    fca +
    phl;

  const { electricityDuty, salesTax, incomeTax } =
    calculateTaxes({
      totalElectricityCharges,
      isIncomeTaxExempt,
    });

  const kmc = calculateKMC({ units });

  const taxesAndDuties =
    electricityDuty +
    salesTax +
    incomeTax +
    kmc;

  const totalBill =
    totalElectricityCharges +
    taxesAndDuties;

  return {
    variableCharges,
    fixedCharges,
    qta,
    fca,
    phl,

    totalElectricityCharges,

    electricityDuty,
    salesTax,
    incomeTax,
    kmc,

    taxesAndDuties,
    totalBill,
  };
}
