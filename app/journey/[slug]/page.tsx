import Section from "@/components/Section";
import Opacity from "@/components/motion/Opacity";
import StaggerContainer from "@/components/motion/StaggerContainer";
import StaggerItem from "@/components/motion/StaggerItem";
import { Separator } from "@/components/ui/separator";
import {
  getAdjacentChapters,
  getAllChapterSlugs,
  getChapterBySlug,
} from "@/lib/journey";
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
    return {
      title: "Chapitre introuvable",
    };
  }

  return {
    title: chapter.title,
    description: chapter.teaser,
    alternates: {
      canonical: `/journey/${chapter.slug}`,
    },
    openGraph: {
      title: chapter.title,
      description: chapter.teaser,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
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
      <Opacity delay={0.2}>
        <header className="bg-background text-foreground relative flex min-h-[60vh] items-end overflow-hidden border-b border-border -inset-y-24">
          {chapter.image ? (
            <>
              <Image
                src={chapter.image}
                alt={chapter.title}
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
              {/* Overlay so text stays readable over the photo, in both themes */}
              <div className="absolute inset-0 bg-background opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/60 to-background/20" />
            </>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-muted to-background" />
          )}

          <div
            aria-hidden
            className="pointer-events-none absolute right-8 top-1/2 hidden -translate-y-1/2 font-display text-[10rem] leading-none text-primary sm:block"
          >
            {String(chapter.number).padStart(2, "0")}
          </div>

          <div className="relative z-10 mx-auto w-full max-w-3xl px-6 pb-16 pt-32">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-primary">
              <span>
                Chapitre {String(chapter.number).padStart(2, "0")} /{" "}
                {totalChapters}
              </span>
              <Separator className="data-horizontal:w-3 bg-primary" />
              <span>{chapter.year}</span>
            </div>
            <h1 className="mt-4 text-balance font-semibold text-4xl sm:text-5xl">
              {chapter.title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              {chapter.teaser}
            </p>
          </div>
        </header>
      </Opacity>
      <Opacity delay={1}>
        <Section className="xl:max-w-3xl px-6 pt-8">
          <Link
            href="/journey"
            className="group inline-flex items-center gap-2 text-xs uppercase tracking-wide text-primary/70 transition hover:text-primary"
          >
            <span
              aria-hidden
              className="group-hover:-translate-x-0.5 transition-transform"
            >
              <ArrowLeft className="w-3 h-3" />
            </span>
            Retour à la timeline
          </Link>
        </Section>
      </Opacity>

      <Section className="xl:max-w-3xl py-8">
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <StaggerItem>
            <div className="border bg-card p-4">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">
                Annee
              </p>
              <p className="mt-2 font-medium">{chapter.year}</p>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="border bg-card p-4">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">
                Chapitre
              </p>
              <p className="mt-2 font-medium">
                {String(chapter.number).padStart(2, "0")} / {totalChapters}
              </p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="border bg-card p-4">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">
                Theme
              </p>
              <p className="mt-2 font-medium">{chapter.theme}</p>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </Section>

      {chapter.quote && (
        <Section className="xl:max-w-3xl">
          <blockquote className="border border-primary/20 bg-primary/5 p-6">
            <p className="text-lg italic text-foreground">
              &quot;{chapter.quote.text}&quot;
            </p>

            <footer className="mt-4 text-sm text-muted-foreground">
              — {chapter.quote.author}
            </footer>
          </blockquote>
        </Section>
      )}

      {/* Body */}
      <article className="mx-auto max-w-3xl px-6 md:px-8 py-16">
        <div className="space-y-6 text-muted-foreground">
          {chapter.body.map((paragraph, i) => (
            <p key={i} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </article>

      {chapter.achievement && (
        <Section className="max-w-2xl pb-10">
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

      {/* Navigation */}
      <nav className="mx-auto max-w-3xl px-6 md:px-8 py-10">
        <div className="mt-8 grid grid-cols-2 gap-4 border-t border-border pt-8">
          <div>
            {previous ? (
              <Link
                href={`/journey/${previous.slug}`}
                className="group block text-left"
              >
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Chapitre précédent
                </span>
                <div className="flex items-center gap-1 mt-1 group-hover:text-primary">
                  <span className="group-hover:-translate-x-0.5 transition-transform">
                    <ArrowLeft className="w-3 h-3" />
                  </span>
                  <span className="text-sm text-foreground/80 transition">
                    {previous.title}
                  </span>
                </div>
              </Link>
            ) : (
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/50">
                Premier chapitre
              </span>
            )}
          </div>

          <div className="text-right">
            {next ? (
              <Link
                href={`/journey/${next.slug}`}
                className="group block text-right"
              >
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Chapitre suivant
                </span>
                <div className="mt-1 flex items-center justify-end gap-2 group-hover:text-primary">
                  <span className="text-sm text-foreground/80">
                    {next.title}
                  </span>
                  <span className="group-hover:translate-x-0.5 transition-transform">
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ) : (
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/50">
                Dernier chapitre
              </span>
            )}
          </div>
        </div>
      </nav>
    </Section>
  );
}
