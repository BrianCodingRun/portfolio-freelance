// lib/api/projects.ts
import type { Project } from "@/types/project"; // adapte le type à ton besoin côté portfolio

export async function getProjects(): Promise<Project[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_WEBSITE_URL}/projects`,
    {
      next: { revalidate: 60, tags: ["projects"] },
    },
  );

  if (!res.ok) {
    throw new Error(`Erreur récupération projets: ${res.status}`);
  }

  return res.json();
}

export async function getProject(slug: string): Promise<Project | null> {
  const res = await fetch(`http://localhost:3002/api/projects/${slug}`);

  if (!res.ok) {
    return null;
  }

  return res.json();
}

export async function getProjectFeatured(): Promise<Project[]> {
  const res = await fetch(`http://localhost:3002/api/projects/featured`, {
    next: { revalidate: 60, tags: ["projects"] },
  });

  if (!res.ok) {
    throw new Error(`Erreur récupération projets en favoris: ${res.status}`);
  }

  return res.json();
}
