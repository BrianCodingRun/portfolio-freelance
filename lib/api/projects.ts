// lib/api/projects.ts
import type { Project } from "@/types/project"; // adapte le type à ton besoin côté portfolio

export async function getProjects(): Promise<Project[]> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_WEBSITE_URL}/projects`,
      {
        next: { revalidate: 60, tags: ["projects"] },
      },
    );
    if (!res.ok) throw new Error(`Erreur récupération projets: ${res.status}`);
    return res.json();
  } catch (err) {
    console.error("getProjects failed during build/render:", err);
    return []; // fallback : jamais de crash, juste une liste vide
  }
}

export async function getProject(slug: string): Promise<Project | null> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_WEBSITE_URL}/projects/${slug}`,
      {
        next: { revalidate: 60, tags: ["projects"] },
      },
    );
    if (!res.ok) return null;
    return res.json();
  } catch (err) {
    console.error("getProject failed during build/render:", err);
    return null;
  }
}

export async function getProjectFeatured(): Promise<Project[]> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_WEBSITE_URL}/projects/featured`,
      {
        next: { revalidate: 60, tags: ["projects"] },
      },
    );
    if (!res.ok)
      throw new Error(`Erreur récupération projets en favoris: ${res.status}`);
    return res.json();
  } catch (error) {
    console.error("getProjectFeatured failed during build/render:", error);
    return [];
  }
}
