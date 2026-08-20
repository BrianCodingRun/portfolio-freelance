import StaggerContainer from "@/components/motion/StaggerContainer";
import StaggerItem from "@/components/motion/StaggerItem";
import Section from "@/components/Section";
import { getAllChapters, getConclusion } from "@/lib/journey";
import type { Metadata } from "next";
import TimelineJourney from "./_journey/TimelineJourney";

export const metadata: Metadata = {
  title: "Mon parcours",
  description:
    "De 2011 à 2026 : un chemin différent, fait de pauses, de rebonds et d'une vocation trouvée en chemin.",
  alternates: {
    canonical: "/journey",
  },
  openGraph: {
    title: "Mon parcours",
    description:
      "De 2011 à 2026 : un chemin différent, fait de pauses, de rebonds et d'une vocation trouvée en chemin.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function JourneyIndexPage() {
  const chapters = getAllChapters();
  const conclusion = getConclusion();

  return (
    <Section className="relative bg-background text-foreground">
      {/* Page intro */}
      <header className="mx-auto max-w-3xl px-6 space-y-4 pt-6 pb-12 my-8 text-center">
        <StaggerContainer>
          <StaggerItem>
            <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-primary font-semibold">
              2011 — 2026
            </p>
          </StaggerItem>
          <StaggerItem>
            <h1 className="mt-4 text-4xl md:text-5xl font-semibold text-foreground sm:text-5xl">
              Mon parcours
            </h1>
          </StaggerItem>
          <StaggerItem>
            <p className="mt-6 md:text-lg text-balance text-muted-foreground">
              Dix chapitres, une trajectoire pas toujours linéaire, {"d'un"}{" "}
              système scolaire quitté tôt {"jusqu'au"} lancement de mon activité
              de développeur web freelance.
            </p>
          </StaggerItem>
        </StaggerContainer>
      </header>

      {/* Timeline */}
      <TimelineJourney chapters={chapters} conclusion={conclusion} />
    </Section>
  );
}
