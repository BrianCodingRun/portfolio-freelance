import Column from "@/components/Column";
import Section from "@/components/Section";
import { ProjectCard } from "@/components/shared/project/ProjectCard";
import Subtitle from "@/components/Subtitle";
import Title from "@/components/Title";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import type { Project } from "@/types/project";
import { Construction } from "lucide-react";
import Link from "next/link";

export default function Projects({ projects }: { projects: Project[] }) {
  const [featured] = projects;

  return (
    <Section className="xl:max-w-7xl">
      <Column>
        <div className="text-center md:mb-10">
          {/* LABEL */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <Separator
              orientation="horizontal"
              className="bg-primary data-horizontal:w-10 data-horizontal:h-0.5"
            />
            <span className="max-sm:text-xs 2xl:text-lg text-base text-primary uppercase tracking-widest font-semibold">
              Ce que {"j'ai"} produit
            </span>
            <Separator
              orientation="horizontal"
              className="bg-primary data-horizontal:w-10 data-horizontal:h-0.5"
            />
          </div>
          {/* TITLE */}
          <Title
            level={2}
            className="max-sm:text-3xl 2xl:text-3xl text-5xl font-bold text-neutral-800 dark:text-zinc-200 md:leading-snug leading-tight max-w-xl mx-auto"
          >
            Une sélection de mes{" "}
            <span className="text-primary">réalisations.</span>
          </Title>
          {/* DESCRIPTION */}
          <Subtitle className="max-sm:text-lg 2xl:text-xl text-xl leading-relaxed sm:max-w-lg sm:mx-auto">
            Chaque projet répond à un besoin différent, avec la stack la plus
            adaptée — pour un client ou à titre personnel.
          </Subtitle>
        </div>

        {projects.length > 0 && (
          <div
            className={cn(
              "mt-8 grid grid-cols-1",
              "md:grid-cols-2 xl:grid-cols-3",
              "border-l border-t border-border",
            )}
          >
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        )}

        <div className="flex items-center justify-between flex-wrap gap-4 px-5 py-4 border border-border bg-card my-6">
          <div className="space-y-1">
            <p className="text-xl font-semibold text-neutral-800 dark:text-zinc-200">
              Chaque projet a son histoire.
            </p>
            <p className="max-w-xl text-base text-muted-foreground mt-0.5">
              Contexte, choix techniques, résultats : retrouve le détail complet
              de chaque réalisation sur la page dédiée.
            </p>
          </div>
          <Link
            href="/projects"
            className={cn(
              buttonVariants({ variant: "default" }),
              "shadow-none",
            )}
          >
            <Construction className="w-3.5 h-3.5" />
            Tous mes projets
          </Link>
        </div>
      </Column>
    </Section>
  );
}
