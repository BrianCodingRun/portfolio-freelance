import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Project, TechBadge } from "@/types/project";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const badgeStyles: Record<TechBadge["color"], string> = {
  blue: "bg-blue-50   text-blue-700   border-blue-200   dark:bg-blue-950/60   dark:text-blue-300   dark:border-blue-800",
  teal: "bg-teal-50   text-teal-700   border-teal-200   dark:bg-teal-950/60   dark:text-teal-300   dark:border-teal-800",
  amber:
    "bg-amber-50  text-amber-700  border-amber-200  dark:bg-amber-950/60  dark:text-amber-300  dark:border-amber-800",
  purple:
    "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950/60 dark:text-purple-300 dark:border-purple-800",
  green:
    "bg-green-50  text-green-700  border-green-200  dark:bg-green-950/60  dark:text-green-300  dark:border-green-800",
  coral:
    "bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-950/60 dark:text-orange-300 dark:border-orange-800",
  pink: "bg-pink-50   text-pink-700   border-pink-200   dark:bg-pink-950/60   dark:text-pink-300   dark:border-pink-800",
  red: "bg-red-50    text-red-700    border-red-200    dark:bg-red-950/60    dark:text-red-300    dark:border-red-800",
};

type Props = { project: Project };

export function ProjectFeaturedCard({ project }: Props) {
  return (
    <article
      className={cn(
        "group relative flex flex-col sm:flex-row",
        "bg-card",
        "border",
        "overflow-hidden",
        "transition-all duration-200",
        "hover:border-primary hover:shadow-sm",
        "focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 focus-within:ring-offset-background",
      )}
    >
      {/* Cover image */}
      <div className="relative sm:w-64 lg:w-80 shrink-0 h-52 sm:h-auto bg-zinc-100 dark:bg-zinc-800 border-b sm:border-b-0 sm:border-r border-zinc-200 dark:border-zinc-800">
        {project.coverImage ? (
          <Image
            src={project.coverImage}
            alt={`Aperçu ${project.title}`}
            fill
            sizes="(max-width: 640px) 100vw, 320px"
            className="object-cover"
            priority
          />
        ) : (
          <CoverPlaceholder />
        )}
        <span className="absolute top-3 left-3 text-xs font-medium px-2.5 py-1 border bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950/70 dark:text-purple-300 dark:border-purple-800">
          Featured
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-6 gap-4">
        {/* Meta */}
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
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
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold leading-snug">
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
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
            {project.tagline}
          </p>
        </div>

        {/* Badges */}
        {project.badges.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {project.badges.map((badge) => (
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

        {/* Métriques */}
        {project.metrics.length > 0 && (
          <>
            <hr className="border-zinc-100 dark:border-zinc-800" />
            <div className="hidden md:grid grid-cols-4 gap-2">
              {project.metrics.slice(0, 4).map((metric) => (
                <div
                  key={metric.label}
                  className="flex flex-col bg-secondary px-2.5 py-2 justify-center"
                >
                  <p className="text-sm font-semibold leading-none mb-1">
                    {metric.value}
                  </p>
                  <p className="text-xs text-muted-foreground leading-tight">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}

        {/* CTA */}
        <div className="mt-auto pt-1 gap-4">
          <Button
            size="sm"
            aria-hidden="true"
            className="inline-flex items-center gap-1.5 text-xs font-medium"
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
    <span className="w-1 h-1 rounded-full bg-muted-foreground inline-block" />
  );
}

function CoverPlaceholder() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-zinc-100 dark:bg-zinc-800">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,rgb(113 113 122/0.3) 0,rgb(113 113 122/0.3) 0.5px,transparent 0.5px,transparent 28px)," +
            "repeating-linear-gradient(90deg,rgb(113 113 122/0.3) 0,rgb(113 113 122/0.3) 0.5px,transparent 0.5px,transparent 28px)",
        }}
      />
      <span className="relative text-[12px] text-zinc-400 dark:text-zinc-600">
        aperçu non disponible
      </span>
    </div>
  );
}
