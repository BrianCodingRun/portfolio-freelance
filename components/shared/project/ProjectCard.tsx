import { cn } from "@/lib/utils";
import type { Project } from "@/types/project";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const MAX_BADGES = 4;

type Props = {
  project: Project;
  index?: number;
  featured?: boolean;
};

export function ProjectCard({ project, index = 0 }: Props) {
  const { coverAlt, coverPosition } = project as Project & {
    coverAlt?: string;
    coverPosition?: string;
  };

  return (
    <article
      className={cn(
        "group relative isolate flex h-full flex-col",
        "border-r border-b border-border bg-card p-3 sm:p-4",
        "transition-colors duration-300 hover:bg-primary/5",
        "has-[a:focus-visible]:ring-2",
        "has-[a:focus-visible]:ring-primary",
        "has-[a:focus-visible]:ring-offset-2",
        "has-[a:focus-visible]:ring-offset-background",
      )}
    >
      {/* Image du projet */}
      <div className="relative aspect-16/10 overflow-hidden border border-border bg-muted">
        {project.coverImage ? (
          <Image
            src={project.coverImage}
            alt={coverAlt ?? `Aperçu du projet ${project.title}`}
            fill
            sizes="(max-width: 639px) 100vw, (max-width: 1279px) 50vw, 33vw"
            style={{
              objectPosition: coverPosition ?? "center top",
            }}
            className={cn(
              "object-cover grayscale sepia-100",
              "transition-all duration-200",
              "group-hover:scale-105 group-hover:grayscale-0 group-hover:sepia-0",
            )}
          />
        ) : (
          <div className="flex size-full items-center justify-center text-xs text-muted-foreground">
            Aperçu non disponible
          </div>
        )}

        {/* Index du projet */}
        <span
          aria-hidden="true"
          className="absolute left-3 top-3 border border-border bg-card px-2 py-1 font-mono text-xs tracking-widest text-primary"
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Contenu éditorial */}
      <div className="flex flex-1 flex-col pt-5">
        <div className="mb-2 flex items-center justify-between gap-3 font-mono text-xs uppercase text-muted-foreground">
          <span className="truncate">
            {project.client || "Projet personnel"}
          </span>

          {project.year && <span className="shrink-0">{project.year}</span>}
        </div>

        <h3 className="text-xl font-semibold leading-tight text-card-foreground sm:text-2xl">
          <Link
            href={`/projects/${project.slug}`}
            className="outline-none before:absolute before:inset-0 before:content-['']"
          >
            {project.title}
          </Link>
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-muted-foreground font-medium">
          {project.tagline}
        </p>

        {/* Technologies */}
        {project.badges.length > 0 && (
          <ul
            aria-label="Technologies utilisées"
            className="mt-4 flex items-center flex-wrap gap-2"
          >
            {project.badges.slice(0, MAX_BADGES).map((badge, index) => (
              <li
                key={badge.label}
                className="font-mono tracking-tighter uppercase text-xs text-muted-foreground font-light"
              >
                {badge.label}
              </li>
            ))}
          </ul>
        )}

        {/* Pied de carte */}
        <div className="flex items-center justify-between gap-3 border-t border-border pt-4 mt-4 max-sm:mb-2">
          <span aria-hidden="true" className="text-sm font-medium text-primary">
            Découvrir le projet
          </span>

          <ArrowUpRight
            aria-hidden="true"
            className="size-5 text-primary transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            strokeWidth={1.5}
          />
        </div>
      </div>
    </article>
  );
}
