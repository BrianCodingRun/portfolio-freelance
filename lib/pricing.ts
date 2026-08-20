import type { Pricing } from "@/types/pricing";

export function getPricingsByCategory(
  pricings: Pricing[],
  category: Pricing["categorie"],
) {
  return pricings
    .filter((p) => p.categorie === category)
    .sort((a, b) => a.order - b.order);
}

export function getLowestPrice(
  pricings: Pricing[],
  category: Pricing["categorie"],
) {
  const items = getPricingsByCategory(pricings, category);

  if (!items.length) return null;

  return Math.min(...items.map((p) => p.price));
}

export function getPackPricings(pricings: Pricing[]) {
  return pricings
    .filter((p) => p.categorie === "pack")
    .sort((a, b) => a.order - b.order);
}

export function getRefontePricings(pricings: Pricing[]) {
  return pricings
    .filter((p) => p.categorie === "refonte")
    .sort((a, b) => a.order - b.order);
}

export function getMaintenancePricings(pricings: Pricing[]) {
  return pricings
    .filter((p) => p.categorie === "maintenance")
    .sort((a, b) => a.order - b.order);
}

export function getTjmPricings(pricings: Pricing[]) {
  return pricings
    .filter((p) => p.categorie === "tjm")
    .sort((a, b) => a.order - b.order);
}

export function getAppPricings(pricings: Pricing[]) {
  return pricings
    .filter((p) => p.categorie === "app")
    .sort((a, b) => a.order - b.order);
}
