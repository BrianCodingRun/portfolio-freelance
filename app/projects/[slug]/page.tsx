import Opacity from "@/components/motion/Opacity";
import Section from "@/components/Section";
import { getProject, getProjects } from "@/lib/api/projects";
import type { Project } from "@/types/project";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectCTA } from "../_project/project-detail/ProjectCTA";
import { ProjectHero } from "../_project/project-detail/ProjectHero";
import { ProjectMetrics } from "../_project/project-detail/ProjectMetrics";
import { ProjectTabs } from "../_project/project-detail/ProjectTabs";

export const revalidate = 60;

type Props = {
  params: Promise<{ slug: string }>;
};

// --- SEO ---
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    return {
      title: "Projet introuvable",
    };
  }

  return {
    title: `${project.title}`,
    description: project.tagline,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title: project.title,
      description: project.tagline,
      images: project.coverImage
        ? [{ url: project.coverImage, alt: project.title }]
        : [],
      type: "article",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
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

  return (
    <Section className="space-y-4 px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-6xl mx-auto">
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 text-muted-foreground font-medium text-sm"
        >
          <ArrowLeft
            className="w-3.5 h-3.5 transition-transform duration-150 group-hover:-translate-x-0.5"
            aria-hidden
          />{" "}
          Retour
        </Link>
      </div>
      {/* A — Hero : image, titre, badges, CTA */}
      <ProjectHero project={project} />

      {/* B — Métriques clés */}
      {project.metrics.length > 0 && (
        <ProjectMetrics metrics={project.metrics} />
      )}

      {/* C / D / E — Onglets : contexte, défis, stack, résultats */}
      <ProjectTabs project={project} />

      {/* F — CTA final */}
      <Opacity delay={0.04}>
        <ProjectCTA />
      </Opacity>
    </Section>
  );
}
