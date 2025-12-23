// src/config/tariff.ts

export type ConsumerType = "normal" | "protected";

export interface Slab {
  from: number;
  to: number | typeof Infinity;
  rate: number | typeof Infinity;
}

export interface TariffConfig {
  maxUnits?: number;
  slabs: Slab[];
}

/**
 * IMPORTANT RULES:
 * - Protected consumers cannot exceed 200 units
 * - Lifeline applies only to protected consumers
 * - Normal consumers have optional TOU (peak/off-peak)
 */

export const TARIFF_CONFIG = {
  protected: {
    lifeline: {
      maxUnits: 100, // implied by slabs
      slabs: [
        { from: 0, to: 50, rate: 3.95 },
        { from: 51, to: 100, rate: 7.74 },
      ],
    } satisfies TariffConfig,

    nonLifeline: {
      maxUnits: 200,
      slabs: [
        { from: 0, to: 100, rate: 10.54 },
        { from: 101, to: 200, rate: 13.01 },
      ],
    } satisfies TariffConfig,
  },

  normal: {
    nonTOU: {
      slabs: [
        { from: 0, to: 100, rate: 22.44 },
        { from: 101, to: 200, rate: 28.91 },
        { from: 201, to: 300, rate: 33.1 },
        { from: 301, to: 400, rate: 37.99 },
        { from: 401, to: 500, rate: 40.2 },
        { from: 501, to: 600, rate: 41.62 },
        { from: 601, to: 700, rate: 42.76 },
        { from: 701, to: Infinity, rate: 47.69 },
      ],
    } satisfies TariffConfig,

    tou: {
      peak: {
        slabs: [{ from: 0, to: "above", rate: 46.85 }],
      },
      offPeak: {
        slabs: [{ from: 0, to: "above", rate: 40.53 }],
      },
    },
  },
} as const;
