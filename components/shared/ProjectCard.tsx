import { BrowserFrame } from "@/components/BrowserFrame";
import Subtitle from "@/components/Subtitle";
import Title from "@/components/Title";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getBrowserFrameProps } from "@/lib/project-utils";
import { cn } from "@/lib/utils";
import type { Project, TechBadge } from "@/types/project";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const badgeStyles: Record<TechBadge["color"], string> = {
  blue: "bg-blue-950/60 text-blue-300 border-blue-800",
  teal: "bg-teal-950/60 text-teal-300   border-teal-800",
  amber: "bg-amber-950/60 text-amber-300 border-amber-800",
  purple: "bg-purple-950/60 text-purple-300 border-purple-800",
  green: "bg-green-950/60 text-green-300 border-green-800",
  coral: "bg-orange-950/60 text-orange-300 border-orange-800",
  pink: "bg-pink-950/60 text-pink-300 border-pink-800",
  red: "bg-red-950/60 text-red-300 border-red-800",
};

const statusStyles = {
  completed:
    "bg-teal-50   text-teal-700   border-teal-200   dark:bg-teal-950   dark:text-teal-300   dark:border-teal-800",
  "in-progress":
    "bg-amber-50  text-amber-700  border-amber-200  dark:bg-amber-950  dark:text-amber-300  dark:border-amber-800",
  archived:
    "bg-zinc-100  text-zinc-500   border-zinc-200   dark:bg-zinc-800      dark:text-zinc-400   dark:border-zinc-700",
};

const statusLabels = {
  completed: "Terminé",
  "in-progress": "En cours",
  archived: "Archivé",
};

type Props = {
  project: Project;
  /** Affiche la card en version horizontale (image à gauche) pour les featured */
  featured?: boolean;
};

export function ProjectCard({ project, featured = false }: Props) {
  return (
    <article
      className={cn(
        "group relative flex flex-col bg-card h-full",
        "border",
        "overflow-hidden",
        "transition-all duration-200",
        "hover:border-primary",
        "hover:shadow-sm",
        "focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 focus-within:ring-offset-background",
        featured && "sm:flex-row",
      )}
    >
      {/* Cover */}
      <div
        className={cn(
          "relative bg-card shrink-0",
          "border-b border-border",
          featured
            ? "sm:border-b-0 sm:border-r sm:w-56 sm:h-auto h-44 w-full"
            : "h-52 w-full",
        )}
      >
        {project.coverImage ? (
          <BrowserFrame {...getBrowserFrameProps(project)} className="h-full">
            <Image
              src={project.coverImage}
              alt={`Aperçu ${project.title}`}
              fill
              sizes="(max-width: 640px) 100vw, 540px"
              className="object-cover"
            />
          </BrowserFrame>
        ) : (
          <CoverPlaceholder />
        )}
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5 gap-4">
        {/* Meta */}
        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <span
            className={cn(
              "sm:visible hidden text-xs font-medium px-1.5 py-0.5 border",
              statusStyles[project.status],
            )}
          >
            {statusLabels[project.status]}
          </span>
          <Separator orientation="vertical" className="sm:visible hidden" />
          <span>{project.year}</span>
          <Dot />
          <span>{project.duration}</span>
          {project.client && (
            <>
              <Dot />
              <span className="truncate">{project.client}</span>
            </>
          )}
        </div>

        {/* Title + tagline */}
        <div className="space-y-1.5">
          <Title level={3} className="text-current">
            <Link
              href={`/projects/${project.slug}`}
              className={cn(
                "outline-none",
                // Pseudo-élément qui étend la zone cliquable à toute la card
                "before:absolute before:inset-0 before:content-['']",
                "before:rounded-md",
              )}
            >
              {project.title}
            </Link>
          </Title>
          <Subtitle className="py-0 md:text-base">{project.tagline}</Subtitle>
        </div>

        {/* Badges */}
        {project.badges.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {project.badges.slice(0, 5).map((badge) => (
              <span
                key={badge.label}
                className={cn(
                  "text-xs font-medium px-2 py-0.5 border",
                  badgeStyles[badge.color],
                )}
              >
                {badge.label}
              </span>
            ))}
          </div>
        )}
        <Separator />
        {/* Footer */}
        <div className="mt-auto flex justify-between items-center gap-2 pt-1">
          <Button
            size="lg"
            aria-hidden="true"
            className="inline-flex items-center gap-1.5 text-sm font-medium shadow-none"
            tabIndex={-1}
          >
            Voir le projet
            <ArrowRight
              className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-0.5"
              aria-hidden
            />
          </Button>
        </div>
      </div>
    </article>
  );
}

function Dot() {
  return (
    <span className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-600 inline-block" />
  );
}

function CoverPlaceholder() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,rgb(from currentColor r g b/0.15) 0,rgb(from currentColor r g b/0.15) 0.5px,transparent 0.5px,transparent 32px)," +
            "repeating-linear-gradient(90deg,rgb(from currentColor r g b/0.15) 0,rgb(from currentColor r g b/0.15) 0.5px,transparent 0.5px,transparent 32px)",
        }}
      />
      <span className="relative text-[12px] text-zinc-400 dark:text-zinc-600">
        aperçu non disponible
      </span>
    </div>
  );
}
