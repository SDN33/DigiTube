// constants.ts
interface Pack {
  vues: string;
  prix: number;
  prixNormal: number;
  rawViews: number;
}

export const packs: Pack[] = [
  { vues: "1,000", prix: 7, prixNormal: 9, rawViews: 1000 },
  { vues: "2,500", prix: 17.5, prixNormal: 19, rawViews: 2500 },
  { vues: "5,000", prix: 32.5, prixNormal: 45, rawViews: 5000 },
  { vues: "10,000", prix: 54.5, prixNormal: 75, rawViews: 10000 },
  { vues: "25,000", prix: 115, prixNormal: 159, rawViews: 25000 },
  { vues: "100,000", prix: 298.5, prixNormal: 399, rawViews: 100000 },
  { vues: "250,000", prix: 823.5, prixNormal: 823.5, rawViews: 250000 },
  { vues: "500,000", prix: 1298.5, prixNormal: 1598.5, rawViews: 500000 },
];

export const PRICE_MAP: Record<number, { unit_amount: number }> = {
  1000: { unit_amount: 700 }, // 7€ in cents
  2500: { unit_amount: 1750 }, // 17.50€ in cents
  5000: { unit_amount: 3250 }, // 32.50€ in cents
  10000: { unit_amount: 5450 }, // 54.50€ in cents
  25000: { unit_amount: 11500 }, // 115€ in cents
  100000: { unit_amount: 29850 }, // 298.50€ in cents
  250000: { unit_amount: 82350 }, // 823.50€ in cents
  500000: { unit_amount: 129850 }, // 1298.50€ in cents
};
