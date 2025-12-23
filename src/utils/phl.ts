interface PHLInput {
    units: number;
    isLifeline: boolean;
  }
  
  const PHL_RATE = 2.23;
  
  export function calculatePHL({
    units,
    isLifeline,
  }: PHLInput): number {
    if (isLifeline) {
      return 0;
    }
  
    return units * PHL_RATE;
  }
  