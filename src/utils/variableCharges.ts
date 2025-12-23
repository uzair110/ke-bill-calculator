import { TARIFF_CONFIG } from "../config/tariff";

interface VariableChargeInput {
  units: number;
  consumerType: "normal" | "protected";
  isLifeline: boolean;
  isTimeOfUse: boolean;
}

export function calculateVariableCharges({
  units,
  consumerType,
  isLifeline,
  isTimeOfUse,
}: VariableChargeInput): number {
  // ---------------- NORMAL ----------------
  if (consumerType === "normal") {
    // TOU case
    if (isTimeOfUse) {
      const peakRate = TARIFF_CONFIG.normal.tou.peak.slabs[0].rate;
      const offPeakRate = TARIFF_CONFIG.normal.tou.offPeak.slabs[0].rate;

      return units * (peakRate * 0.2 + offPeakRate * 0.8);
    }

    // Non-TOU flat-rate slabs
    const slabs = TARIFF_CONFIG.normal.nonTOU.slabs;

    for (const slab of slabs) {
      if (slab.to === Infinity && units >= slab.from) {
        return units * slab.rate;
      }

      if (units >= slab.from && units <= slab.to) {
        return units * slab.rate;
      }
    }

    return 0;
  }

  // ---------------- PROTECTED ----------------
  if (consumerType === "protected") {
    if (isLifeline) {
      if (units <= 50) return units * 3.95;
      if (units <= 100) return units * 7.74;
      return 0; // not allowed
    }

    // Non-lifeline protected
    if (units <= 100) return units * 10.54;
    if (units <= 200) return units * 13.01;
    return 0; // not allowed
  }

  return 0;
}
