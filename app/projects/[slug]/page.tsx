import Opacity from "@/components/motion/Opacity";
import Section from "@/components/Section";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { getProject, getProjects } from "@/lib/api/projects";
import { buildMetadata } from "@/lib/metadata";
import type { Project } from "@/types/project";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectCTA } from "../_project/project-detail/ProjectCTA";
import { ProjectFacts } from "../_project/project-detail/ProjectFacts";
import { ProjectHero } from "../_project/project-detail/ProjectHero";
import { ProjectStory } from "../_project/project-detail/ProjectStory";
import { ProjectTechnical } from "../_project/project-detail/ProjectTechnical";

export const revalidate = 60;

type Props = {
  params: Promise<{ slug: string }>;
};

// --- SEO ---
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    return buildMetadata({
      title: "Projet introuvable",
      description: "Ce projet n'existe pas ou n'est plus disponible.",
      path: `/projects/${slug}`,
      index: false,
    });
  }

  return buildMetadata({
    title: project.title,
    description: project.tagline,
    path: `/projects/${project.slug}`,
    image: project.coverImage ?? undefined,
    imageAlt: project.coverAlt ?? project.title,
    type: "article",
  });
}

// --- Static params (ISR / SSG) ---
export async function generateStaticParams() {
  const projects = await getProjects();
  return (projects as Project[]).map((p) => ({ slug: p.slug }));
}

// --- Page ---
export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = await getProject(slug);

  if (project === null) notFound();

  const all = (await getProjects()) as Project[];
  const index = all.findIndex(
    (p) => p._id === project.slug || p.slug === project.slug,
  );
  const others = [...all.slice(index + 1), ...all.slice(0, Math.max(index, 0))]
    .filter((p) => p.slug !== project.slug)
    .slice(0, 2);

  return (
    <Section className="space-y-10 px-4 py-8 sm:px-6 lg:px-8">
      <Link
        href="/projects"
        className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground"
      >
        <ArrowLeft
          className="size-3.5 transition-transform duration-150 group-hover:-translate-x-0.5"
          aria-hidden
        />
        Retour aux projets
      </Link>

      {/* 1 — Titre, ce que fait le projet, liens, capture */}
      <ProjectHero project={project} />

      {/* 2 — Récit (besoin → réalisation → résultat) + fiche projet */}
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-start lg:gap-14">
        <ProjectStory project={project} />
        <ProjectFacts project={project} />
      </div>

      {/* 3 — Partie technique, repliée par défaut */}
      <ProjectTechnical project={project} />

      {others.length > 0 && (
        <section aria-labelledby="other-projects" className="space-y-6">
          <div className="flex items-end justify-between gap-4">
            <h2
              id="other-projects"
              className="text-2xl font-semibold tracking-tight"
            >
              Autres réalisations
            </h2>
            <Link
              href="/projects"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Tous les projets
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {others.map((p) => (
              <ProjectCard key={p._id} project={p} />
            ))}
          </div>
        </section>
      )}

      {/* 4 — CTA final */}
      <Opacity delay={0.04}>
        <ProjectCTA />
      </Opacity>
    </Section>
  );
}
