import { getProjects } from "@/lib/api/projects";
import { buildMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { ProjectsClient } from "./_project/ProjectsClient";

export const metadata: Metadata = buildMetadata({
  title: "Projets",
  description:
    "Découvrez une sélection de mes réalisations : sites web, applications métier et solutions sur mesure développées pour répondre à des besoins concrets d'entreprises et d'indépendants.",
  path: "/projects",
});

export const revalidate = 60;

export default async function ProjectsPage() {
  const projects = await getProjects();

  return <ProjectsClient projects={projects} />;
}
