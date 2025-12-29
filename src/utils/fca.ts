interface FCAInput {
    units: number;
    consumerType: "normal" | "protected";
  }
  
  const FCA_RATE = -0.5;
  
  export function calculateFCA({
    units,
    consumerType,
  }: FCAInput): number {
    if (consumerType === "protected") {
      return 0;
    }
  
    return units * FCA_RATE;
  }
  