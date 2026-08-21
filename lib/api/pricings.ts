// lib/api/pricings.ts
import type { Pricing } from "@/types/pricing"; // adapte le type à ton besoin côté portfolio

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
