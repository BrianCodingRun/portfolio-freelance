// lib/api/pricings.ts
import type { Pricing } from "@/types/pricing"; // adapte le type à ton besoin côté portfolio

export async function getActivePricings(): Promise<Pricing[]> {
  const res = await fetch(`http://localhost:3002/api/pricings`, {
    next: { revalidate: 60, tags: ["pricings"] },
  });

  if (!res.ok) {
    throw new Error(`Erreur récupération projets: ${res.status}`);
  }

  return res.json();
}
