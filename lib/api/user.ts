// lib/api/user.ts
import type { UserType } from "@/types/user";

export async function getProfile(): Promise<UserType | null> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_WEBSITE_URL}/profile`,
    );

    if (!res.ok) return null;

    return res.json();
  } catch (error) {
    console.error(`Erreur récupération projets: ${error}`);
    return null;
  }
}
