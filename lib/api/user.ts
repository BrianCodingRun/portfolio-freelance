// lib/api/user.ts
import type { UserType } from "@/types/user";

export async function getProfile(): Promise<UserType> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_WEBSITE_URL}/profile`);

  if (!res.ok) {
    throw new Error(`Erreur récupération projets: ${res.status}`);
  }

  return res.json();
}
