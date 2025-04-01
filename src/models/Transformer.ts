type VoltgageReadings = {
  timestamp: string;
  voltage: string;
};

export interface Transformer {
  assetId: number;
  name: string;
  region: string;
  health: string;
  lastTenVoltgageReadings: VoltgageReadings[];
}
