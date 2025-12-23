interface QTAInput {
    units: number;
    isLifeline: boolean;
  }
  
  const QTA_RATE = 0.33;
  
  export function calculateQTA({
    units,
    isLifeline,
  }: QTAInput): number {
    if (isLifeline) {
      return 0;
    }
  
    return units * QTA_RATE;
  }
  