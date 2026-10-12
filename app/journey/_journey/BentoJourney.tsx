"use client";

import Section from "@/components/Section";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { JourneyChapter, JourneyConclusion } from "@/types/journey";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Construction } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

/**
 * Disposition desktop (grille de 4 colonnes) :
 *
 *   [  01  ] [  02  ]
 *   [      ] [  04  ]
 *   [  03  ] [      ]   <- 03 occupe 2 colonnes x 2 lignes
 *   [      ] [  05  ]
 *
 * Sur mobile, les tuiles s'empilent en une seule colonne.
 */
const FEATURED_INDEX = 2;

const TILE_LAYOUT = [
  "md:col-span-2",
  "md:col-span-2",
  "md:col-span-2 md:row-span-2",
  "md:col-span-2",
  "md:col-span-2",
];

export default function BentoJourney({
  chapters,
  conclusion,
}: {
  chapters: JourneyChapter[];
  conclusion: JourneyConclusion;
}) {
  // Le texte de conclusion est hiérarchisé : introduction, phrase clé, suite, mot de la fin.
  const [lead, pullQuote, ...others] = conclusion.body;
  const closing = others.length > 1 ? others[others.length - 1] : undefined;
  const middle = others.length > 1 ? others.slice(0, -1) : others;

  return (
    <Section className="px-0 md:px-0">
      <ol className="grid grid-cols-1 gap-4 md:grid-cols-4 md:auto-rows-72">
        {chapters.map((chapter, index) => {
          const featured = index === FEATURED_INDEX;
          const layout = TILE_LAYOUT[index] ?? "md:col-span-2";

          return (
            <motion.li
              key={chapter.slug}
              className={layout}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.2, delay: index * 0.06 }}
            >
              <Link
                href={`/journey/${chapter.slug}`}
                className="group relative isolate flex h-full min-h-72 flex-col justify-end overflow-hidden ring-1 ring-border transition duration-100 hover:ring-primary/50"
              >
                {/* Image : niveaux de gris + teinte de marque, couleurs au survol */}
                {chapter.image && (
                  <>
                    <Image
                      src={chapter.image}
                      alt={chapter.title}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="-z-30 object-cover opacity-80 grayscale contrast-110 transition duration-300 group-hover:scale-105 group-hover:grayscale-0 dark:opacity-100"
                    />
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 -z-20 bg-primary/60 mix-blend-color transition-opacity duration-100 group-hover:opacity-0"
                    />
                  </>
                )}

                {/* Dégradé pour garder le texte lisible dans les deux thèmes */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-t from-background via-background/90 via-65% to-background/25"
                />

                {/* Contenu */}
                <div className="space-y-3 p-5 sm:p-6">
                  <div className="flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-primary">
                    <span>{String(chapter.number).padStart(2, "0")}</span>
                    <span aria-hidden className="h-px w-6 bg-primary" />
                    <span>{chapter.year}</span>
                  </div>

                  <h2
                    className={cn(
                      "font-semibold leading-tight text-foreground",
                      featured ? "text-3xl md:text-4xl" : "text-2xl",
                    )}
                  >
                    {chapter.title}
                  </h2>

                  <p
                    className={cn(
                      "text-muted-foreground",
                      featured ? "text-base" : "line-clamp-3 text-sm",
                    )}
                  >
                    {chapter.teaser}
                  </p>

                  {chapter.achievement && (
                    <span className="inline-flex w-fit items-center border border-primary/40 px-2 py-1 text-xs text-primary">
                      {chapter.achievement.equivalent} ·{" "}
                      {chapter.achievement.title}
                    </span>
                  )}

                  <span className="flex items-center gap-2 text-xs uppercase tracking-wide text-primary">
                    Lire ce chapitre
                    <span
                      aria-hidden
                      className="transition-transform group-hover:translate-x-1"
                    >
                      <ArrowRight className="h-3 w-3" />
                    </span>
                  </span>
                </div>
              </Link>
            </motion.li>
          );
        })}
      </ol>

      {/* Conclusion + appel à l'action : traitée comme une dernière tuile pleine largeur */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="relative mb-14 mt-4 overflow-hidden bg-card p-6 ring-1 ring-border sm:p-10 lg:p-14"
      >
        {/* Repères d'angle, en écho au cadre de la section À propos */}
        <div
          aria-hidden
          className="pointer-events-none absolute right-3 top-3 h-8 w-8 border-r-2 border-t-2 border-primary"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-3 left-3 h-8 w-8 border-b-2 border-l-2 border-primary"
        />

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Colonne gauche : titre et introduction */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-primary">
              <span aria-hidden className="h-px w-6 bg-primary" />
              <span>Et maintenant</span>
            </div>
            <h2 className="text-4xl font-semibold leading-tight text-foreground md:text-5xl">
              {conclusion.title}
            </h2>
            {lead && (
              <p className="text-lg leading-relaxed text-muted-foreground">
                {lead}
              </p>
            )}
          </div>

          {/* Colonne droite : phrase clé, suite, mot de la fin, appel à l'action */}
          <div className="space-y-6">
            {pullQuote && (
              <blockquote className="border-l-2 border-primary pl-5 text-xl font-medium italic leading-snug text-foreground md:text-2xl">
                {pullQuote}
              </blockquote>
            )}

            {middle.map((paragraph, index) => (
              <p
                key={index}
                className="text-base leading-relaxed text-muted-foreground"
              >
                {paragraph}
              </p>
            ))}

            {closing && (
              <p className="text-lg font-medium text-primary">{closing}</p>
            )}

            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <a
                href="https://calendly.com/briancoupama/30min"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "default", size: "lg" }),
                  "w-full justify-center border-none font-semibold shadow-none sm:w-auto",
                )}
              >
                <Calendar className="h-3.5 w-3.5" aria-hidden />
                Parlons de votre projet
              </a>
              <Link
                href="/projects"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "w-full justify-center border-accent-foreground font-medium text-primary shadow-none sm:w-auto",
                )}
              >
                <Construction className="h-3.5 w-3.5" aria-hidden />
                Découvrir mes projets
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
