import Section from "@/components/Section";
import { Separator } from "@/components/ui/separator";
import {
  getAdjacentChapters,
  getAllChapterSlugs,
  getChapterBySlug,
} from "@/lib/journey";
import { buildMetadata } from "@/lib/metadata";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Static generation: one page per chapter, built at build time.
export function generateStaticParams() {
  return getAllChapterSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const chapter = getChapterBySlug(slug);

  if (!chapter) {
    return buildMetadata({
      title: "Chapitre introuvable",
      description: "Ce chapitre n'existe pas ou n'est plus disponible.",
      path: `/journey/${slug}`,
      index: false,
    });
  }

  return buildMetadata({
    title: chapter.title,
    description: chapter.teaser,
    path: `/journey/${chapter.slug}`,
    image: chapter.image ?? undefined,
    imageAlt: chapter.title,
    type: "article",
  });
}

export default async function JourneyChapterPage({ params }: PageProps) {
  const { slug } = await params;
  const chapter = getChapterBySlug(slug);

  if (!chapter) {
    notFound();
  }

  const { previous, next } = getAdjacentChapters(slug);
  const totalChapters = getAllChapterSlugs().length;

  return (
    <Section className="text-foreground max-w-none xl:max-w-none w-full px-0 md:px-0 mx-auto">
      {/* Hero */}
      <header className="relative isolate -mt-24 flex min-h-[60vh] items-end overflow-hidden border-b border-border bg-background text-foreground">
        {chapter.image ? (
          <>
            {/* Même traitement que les tuiles de la grille : niveaux de gris + teinte de marque */}
            <Image
              src={chapter.image}
              alt={chapter.title}
              fill
              priority
              sizes="100vw"
              className="-z-30 object-cover opacity-80 grayscale contrast-110 dark:opacity-100"
            />
            <div
              aria-hidden
              className="absolute inset-0 -z-20 bg-primary/60 mix-blend-color"
            />
            {/* Dégradé pour la lisibilité du texte (plus couvrant en mode clair) */}
            <div
              aria-hidden
              className="absolute inset-0 -z-10 bg-linear-to-t from-background via-background/90 via-60% to-background/30 dark:via-background/75 dark:via-50% dark:to-background/20"
            />
            {/* Dégradé haut pour garder la navigation lisible sur l'image */}
            <div
              aria-hidden
              className="absolute inset-x-0 top-0 -z-10 h-40 bg-linear-to-b from-background/80 to-transparent"
            />
          </>
        ) : (
          <div className="absolute inset-0 -z-10 bg-linear-to-br from-primary/15 via-muted to-background" />
        )}

        {/* Numéro en filigrane */}
        <div
          aria-hidden
          className="pointer-events-none absolute right-8 top-1/2 hidden -translate-y-1/2 font-display text-[10rem] leading-none text-primary/20 lg:block"
        >
          {String(chapter.number).padStart(2, "0")}
        </div>

        <div className="relative z-10 mx-auto w-full max-w-3xl px-6 pb-16 pt-32">
          <Link
            href="/journey"
            className="group mb-8 flex w-fit items-center gap-2 text-sm font-medium text-primary underline-offset-4 transition hover:underline"
          >
            <ArrowLeft
              className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5"
              aria-hidden
            />
            Retour à mon parcours
          </Link>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs uppercase tracking-[0.2em] text-primary">
            <span>
              Chapitre {String(chapter.number).padStart(2, "0")} /{" "}
              {totalChapters}
            </span>
            <Separator className="data-horizontal:w-3 bg-primary" />
            <span>{chapter.year}</span>
            <span className="border border-primary/40 px-2 py-0.5 text-[10px] tracking-widest">
              {chapter.theme}
            </span>
          </div>
          <h1 className="mt-4 text-balance font-semibold text-4xl sm:text-5xl">
            {chapter.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            {chapter.teaser}
          </p>
        </div>
      </header>

      {/* Citation : filet doré, comme sur la section À propos */}
      {chapter.quote && (
        <Section className="xl:max-w-3xl pt-10">
          <blockquote className="border-l-2 border-primary pl-6 text-xl font-medium italic leading-snug text-foreground md:text-2xl">
            {chapter.quote.text}
          </blockquote>
        </Section>
      )}

      {/* Body : le premier paragraphe sert d'introduction */}
      <article className="mx-auto max-w-3xl px-6 py-12 md:px-8">
        <div className="space-y-6">
          {chapter.body.map((paragraph, i) => (
            <p
              key={i}
              className={
                i === 0
                  ? "text-lg leading-relaxed text-foreground md:text-xl"
                  : "leading-relaxed text-muted-foreground"
              }
            >
              {paragraph}
            </p>
          ))}
        </div>
      </article>

      {chapter.achievement && (
        <Section className="xl:max-w-3xl pb-10">
          <div className="border bg-primary-foreground p-6">
            <p className="text-xs uppercase tracking-widest text-primary">
              Certification obtenue
            </p>

            <h2 className="mt-2 text-xl font-semibold">
              {chapter.achievement.title}
            </h2>

            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <span className="border px-3 py-1">
                {chapter.achievement.level}
              </span>

              <span className="border px-3 py-1">
                {chapter.achievement.equivalent}
              </span>

              <span className="border px-3 py-1">
                {chapter.achievement.year}
              </span>
            </div>
          </div>
        </Section>
      )}

      {chapter.highlights && chapter.highlights.length > 0 && (
        <Section className="xl:max-w-3xl">
          <div className="border bg-card p-6">
            <h2 className="uppercase text-lg text-foreground">
              Ce que cette étape {"m'a"} apporté
            </h2>

            <ul className="mt-6 space-y-3">
              {chapter.highlights.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-muted-foreground"
                >
                  <span className="h-2 w-2 bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Section>
      )}

      {/* Navigation entre chapitres */}
      <nav
        aria-label="Navigation entre les chapitres"
        className="mx-auto max-w-3xl px-6 py-10 md:px-8"
      >
        <div className="mt-8 grid grid-cols-1 gap-4 border-t border-border pt-8 sm:grid-cols-2">
          {previous ? (
            <ChapterNavTile
              href={`/journey/${previous.slug}`}
              label="Chapitre précédent"
              title={previous.title}
              image={previous.image}
              direction="previous"
            />
          ) : (
            <ChapterNavTile
              href="/journey"
              label="Tout mon parcours"
              title="Retour aux moments forts"
              direction="previous"
            />
          )}

          {next ? (
            <ChapterNavTile
              href={`/journey/${next.slug}`}
              label="Chapitre suivant"
              title={next.title}
              image={next.image}
              direction="next"
            />
          ) : (
            <ChapterNavTile
              href="/contact"
              label="Et maintenant"
              title="Parlons de votre projet"
              direction="next"
            />
          )}
        </div>
      </nav>
    </Section>
  );
}

function ChapterNavTile({
  href,
  label,
  title,
  image,
  direction,
}: {
  href: string;
  label: string;
  title: string;
  image?: string;
  direction: "previous" | "next";
}) {
  const isNext = direction === "next";

  return (
    <Link
      href={href}
      className={cn(
        "group relative isolate flex min-h-36 flex-col justify-end overflow-hidden bg-card p-5 ring-1 ring-border transition duration-100 hover:ring-primary/50",
        isNext && "items-end text-right",
      )}
    >
      {image && (
        <>
          <Image
            src={image}
            alt=""
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            className="-z-30 object-cover opacity-80 grayscale transition duration-300 group-hover:scale-105 group-hover:grayscale-0 dark:opacity-100"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-20 bg-primary/60 mix-blend-color transition-opacity duration-200 group-hover:opacity-0"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-t from-background via-background/90 via-65% to-background/25 dark:via-background/75 dark:via-50% dark:to-background/10"
          />
        </>
      )}

      <span className="text-[10px] uppercase tracking-[0.2em] text-primary">
        {label}
      </span>
      <span className="mt-1 flex items-center gap-2 text-lg font-semibold leading-snug text-foreground">
        {!isNext && (
          <ArrowLeft
            className="h-4 w-4 shrink-0 text-primary transition-transform group-hover:-translate-x-0.5"
            aria-hidden
          />
        )}
        {title}
        {isNext && (
          <ArrowRight
            className="h-4 w-4 shrink-0 text-primary transition-transform group-hover:translate-x-0.5"
            aria-hidden
          />
        )}
      </span>
    </Link>
  );
}
