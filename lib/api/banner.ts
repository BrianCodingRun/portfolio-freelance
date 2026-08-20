// lib/api/banner.ts (dans portfolio)
import type { Banner } from "@/types/banner"; // adapte le type

export async function getBanner(): Promise<Banner | null> {
  try {
    const res = await fetch(`${process.env.DASHBOARD_API_URL}/api/banner`, {
      next: { revalidate: 60, tags: ["banner"] },
    });
    if (!res.ok) throw new Error(`Erreur banner: ${res.status}`);
    return res.json();
  } catch (err) {
    console.error("getBanner failed:", err);
    return null; // pas de bannière plutôt qu'un crash de page
  }
}
