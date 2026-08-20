import { getProjects } from "@/lib/api/projects";
import type { Metadata } from "next";
import { ProjectsClient } from "./_project/ProjectsClient";

export const metadata: Metadata = {
  title: "Projets",
  description:
    "Découvrez une sélection de mes réalisations : sites web, applications métier et solutions sur mesure développées pour répondre à des besoins concrets d'entreprises et d'indépendants.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projets",
    description:
      "Découvrez une sélection de mes réalisations : sites web, applications métier et solutions sur mesure développées pour répondre à des besoins concrets d'entreprises et d'indépendants.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const revalidate = 60;

export default async function ProjectsPage() {
  const projects = await getProjects();

  return <ProjectsClient projects={projects} />;
}
