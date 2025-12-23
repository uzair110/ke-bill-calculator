interface FixedChargeInput {
    units: number;
    isTimeOfUse: boolean;
  }
  
  export function calculateFixedCharges({
    units,
    isTimeOfUse,
  }: FixedChargeInput): number {
    // Rule 1: TOU always pays maximum fixed charge
    if (isTimeOfUse) {
      return 1000;
    }
  
    // Rule 2: Non-TOU based on units
    if (units > 700) return 1000;
    if (units > 600) return 800;
    if (units > 500) return 600;
    if (units > 400) return 400;
    if (units > 300) return 200;
  
    // Units <= 300
    return 0;
  }
  