import { BrowserFrame } from "@/components/BrowserFrame";
import Subtitle from "@/components/Subtitle";
import Title from "@/components/Title";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getBrowserFrameProps } from "@/lib/project-utils";
import { cn } from "@/lib/utils";
import type { Project } from "@/types/project";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

/**
 * Nombre maximum de badges techniques affichés.
 * À répercuter dans le dashboard (limite de saisie) pour qu'aucun badge
 * ne disparaisse sans explication.
 */
const MAX_BADGES = 5;

type Props = {
  project: Project;
  /** Affiche la card en version horizontale (image à gauche) pour les featured */
  featured?: boolean;
};

/**
 * Champs optionnels à ajouter à `Project` (types + schéma Mongoose + dashboard) :
 *  - result?: string         → bénéfice concret, ex. « 3 rôles gérés : admin, instructeur, apprenant »
 *  - coverAlt?: string       → texte alternatif descriptif de la capture
 *  - coverPosition?: string  → object-position CSS, ex. "left top" ou "50% 20%"
 *                              pour recadrer la capture sur l'élément clé
 */
export function ProjectCard({ project, featured = false }: Props) {
  const { result, coverAlt, coverPosition } = project as Project & {
    result?: string;
    coverAlt?: string;
    coverPosition?: string;
  };

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden border bg-card",
        "transition-colors duration-200 hover:border-primary",
        // Anneau de focus uniquement pour la navigation clavier
        "has-[a:focus-visible]:ring-2 has-[a:focus-visible]:ring-primary",
        "has-[a:focus-visible]:ring-offset-2 has-[a:focus-visible]:ring-offset-background",
        featured && "sm:flex-row",
      )}
    >
      {/* Cover */}
      <div
        className={cn(
          "relative shrink-0 border-b border-border bg-card",
          featured
            ? "h-44 w-full sm:h-auto sm:w-56 sm:border-b-0 sm:border-r"
            : "h-56 w-full",
        )}
      >
        {project.coverImage ? (
          <BrowserFrame {...getBrowserFrameProps(project)} className="h-full">
            <Image
              src={project.coverImage}
              alt={coverAlt ?? `Aperçu du projet ${project.title}`}
              fill
              sizes="(max-width: 640px) 100vw, 540px"
              className="object-cover object-top"
              style={
                coverPosition ? { objectPosition: coverPosition } : undefined
              }
            />
          </BrowserFrame>
        ) : (
          <CoverPlaceholder />
        )}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="space-y-2">
          {/* Contexte : pour qui a été fait le projet */}
          {project.client && (
            <p className="flex items-center gap-2 text-sm text-muted-foreground">
              <span
                aria-hidden
                className="size-1.5 shrink-0 rounded-full bg-primary"
              />
              {project.client}
            </p>
          )}

          <Title
            level={3}
            className="font-medium text-current max-sm:text-2xl md:text-3xl"
          >
            <Link
              href={`/projects/${project.slug}`}
              // Le pseudo-élément étend la zone cliquable à toute la card
              className="outline-none before:absolute before:inset-0 before:content-['']"
            >
              {project.title}
            </Link>
          </Title>

          {/* Ce que fait le projet, en langage client */}
          <Subtitle className="py-0 text-base leading-snug max-sm:text-sm">
            {project.tagline}
          </Subtitle>
        </div>

        {/* Bénéfice concret (optionnel) */}
        {result && (
          <p className="border-l-2 border-primary pl-3 text-sm leading-snug">
            {result}
          </p>
        )}

        {/* Stack : discrète, une seule teinte issue de la palette */}
        {project.badges.length > 0 && (
          <ul
            aria-label="Technologies utilisées"
            className="flex flex-wrap gap-1.5"
          >
            {project.badges.slice(0, MAX_BADGES).map((badge) => (
              <li
                key={badge.label}
                className="border border-border bg-muted px-1.5 py-0.5 text-xs font-medium text-muted-foreground"
              >
                {badge.label}
              </li>
            ))}
          </ul>
        )}

        <Separator />

        {/* Faux bouton : le lien du titre couvre déjà toute la card,
            donc pas d'élément interactif caché (aria-hidden + tabIndex) */}
        <div className="mt-auto flex items-center justify-between gap-2 pt-1">
          <span
            aria-hidden
            className={cn(
              buttonVariants({ size: "lg" }),
              "pointer-events-none gap-1.5 text-sm font-medium shadow-none",
            )}
          >
            Voir le projet
            <ArrowRight className="size-3.5 transition-transform duration-150 group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </article>
  );
}

function CoverPlaceholder() {
  // color-mix : mieux supporté que la relative color syntax `rgb(from …)`
  const line = "color-mix(in srgb, currentColor 15%, transparent)";

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div
        aria-hidden
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            `repeating-linear-gradient(0deg,${line} 0,${line} 0.5px,transparent 0.5px,transparent 32px),` +
            `repeating-linear-gradient(90deg,${line} 0,${line} 0.5px,transparent 0.5px,transparent 32px)`,
        }}
      />
      <span className="relative text-xs text-muted-foreground">
        Aperçu non disponible
      </span>
    </div>
  );
}
