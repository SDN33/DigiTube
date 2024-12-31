// constants.ts
interface Pack {
  vues: string;
  prix: number;
  prixNormal: number;
  rawViews: number;
}

export const packs: Pack[] = [
  { vues: "100", prix: 2, prixNormal: 4, rawViews: 100 },
  { vues: "1,000", prix: 15, prixNormal: 30, rawViews: 1000 },
  { vues: "10,000", prix: 79, prixNormal: 150, rawViews: 10000 },
  { vues: "100,000", prix: 599, prixNormal: 799, rawViews: 100000 },
];

export const PRICE_MAP: Record<number, { unit_amount: number }> = {
  100: { unit_amount: 200 }, // 2€ in cents
  1000: { unit_amount: 1500 }, // 15€ in cents
  10000: { unit_amount: 7900 }, // 79€ in cents
  100000: { unit_amount: 59900 }, // 599€ in cents
};
