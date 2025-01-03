interface ViewsPack {
  vues: string;
  prix: number;
  prixNormal: number;
  rawViews: number;
}

interface LikesPack {
  likes: string;
  prix: number;
  prixNormal: number;
  rawLikes: number;
}

export const viewsPacks: ViewsPack[] = [
  { vues: "1,000", prix: 7, prixNormal: 9, rawViews: 1000 },
  { vues: "2,500", prix: 17.50, prixNormal: 19, rawViews: 2500 },
  { vues: "5,000", prix: 32.50, prixNormal: 45, rawViews: 5000 },
  { vues: "10,000", prix: 54.50, prixNormal: 75, rawViews: 10000 },
  { vues: "25,000", prix: 115, prixNormal: 159, rawViews: 25000 },
  { vues: "100,000", prix: 298.50, prixNormal: 399, rawViews: 100000 },
  { vues: "250,000", prix: 823.50, prixNormal: 999, rawViews: 250000 },
  { vues: "500,000", prix: 1298.50, prixNormal: 1599, rawViews: 500000 },
];

export const likesPacks: LikesPack[] = [
  { likes: "50", prix: 4.90, prixNormal: 5.90, rawLikes: 50 },
  { likes: "100", prix: 7.90, prixNormal: 9.90, rawLikes: 100 },
  { likes: "250", prix: 12.90, prixNormal: 15.00, rawLikes: 250 },
  { likes: "500", prix: 15.90, prixNormal: 17.90, rawLikes: 500 },
  { likes: "1,000", prix: 19.90, prixNormal: 25.00, rawLikes: 1000 },
  { likes: "2,500", prix: 39.90, prixNormal: 45.00, rawLikes: 2500 },
];

export const VIEWS_PRICE_MAP: Record<number, { unit_amount: number }> = {
  1000: { unit_amount: 700 },
  2500: { unit_amount: 1750 },
  5000: { unit_amount: 3250 },
  10000: { unit_amount: 5450 },
  25000: { unit_amount: 11500 },
  100000: { unit_amount: 29850 },
  250000: { unit_amount: 82350 },
  500000: { unit_amount: 129850 },
};

export const LIKES_PRICE_MAP: Record<number, { unit_amount: number }> = {
  50: { unit_amount: 490 },    // 4.90€ in cents
  100: { unit_amount: 790 },   // 7.90€ in cents
  250: { unit_amount: 1290 },  // 12.90€ in cents
  500: { unit_amount: 1590 },  // 15.90€ in cents
  1000: { unit_amount: 1990 }, // 19.90€ in cents
  2500: { unit_amount: 3990 }, // 39.90€ in cents
};

export const PRICE_MAP = { ...VIEWS_PRICE_MAP, ...LIKES_PRICE_MAP };
