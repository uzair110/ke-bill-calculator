interface KMCInput {
    units: number;
  }
  
  export function calculateKMC({ units }: KMCInput): number {
    if (units > 700) return 300;
    if (units > 600) return 175;
    if (units > 500) return 150;
    if (units > 400) return 125;
    if (units > 300) return 100;
    if (units > 200) return 40;
    if (units > 100) return 20;
  
    return 0;
  }
  