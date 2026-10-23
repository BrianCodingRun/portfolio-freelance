// lib/api/pricings.ts
import type { Pricing } from "@/types/pricing";

export type PricingComparisonCriterion = {
  key: string;
  label: string;
  type: "boolean" | "select" | "text";
  options?: string[];
};

export type PricingComparisonCatalog = {
  category: string;
  criteria: PricingComparisonCriterion[];
};

export async function getActivePricings(): Promise<Pricing[]> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_WEBSITE_URL}/pricings`,
      {
        next: { revalidate: 60, tags: ["pricings"] },
      },
    );

    if (!res.ok)
      throw new Error(`Erreur récupération des offres: ${res.status}`);

    return res.json();
  } catch (error) {
    console.error(`Erreur récupération projets: ${error}`);
    return [];
  }
}

export async function getPricingComparisonCatalog(
  category: "pack" | "maintenance" = "pack",
): Promise<PricingComparisonCatalog | null> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_WEBSITE_URL}/pricing-comparison?category=${category}`,
      {
        next: {
          revalidate: 60,
          tags: [`pricing-comparison-${category}`],
        },
      },
    );

    if (!res.ok) {
      throw new Error(
        `Erreur récupération du catalogue de comparaison (${category}): ${res.status}`,
      );
    }

    return (await res.json()) as PricingComparisonCatalog;
  } catch (error) {
    console.error(
      `Erreur récupération du catalogue de comparaison (${category}):`,
      error,
    );

    return null;
  }
}
