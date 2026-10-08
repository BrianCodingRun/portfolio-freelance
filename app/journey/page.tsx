import StaggerContainer from "@/components/motion/StaggerContainer";
import StaggerItem from "@/components/motion/StaggerItem";
import Section from "@/components/Section";
import Title from "@/components/Title";
import { Badge } from "@/components/ui/badge";
import { getAllChapters, getConclusion } from "@/lib/journey";
import { buildMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import TimelineJourney from "./_journey/TimelineJourney";

export const metadata: Metadata = buildMetadata({
  title: "Qui suis-je",
  description:
    "De 2011 à 2026 : un chemin différent, fait de pauses, de rebonds et d'une vocation trouvée en chemin.",
  path: "/journey",
});

export default function JourneyIndexPage() {
  const chapters = getAllChapters();
  const conclusion = getConclusion();

  return (
    <Section className="relative bg-background text-foreground">
      {/* Page intro */}
      <header className="mx-auto max-w-3xl px-6 space-y-4 pt-6 pb-12 my-8 text-center">
        <StaggerContainer>
          <StaggerItem>
            <span className="text-xs md:text-sm uppercase tracking-[0.3em] text-primary font-semibold">
              2011 — 2026
            </span>
          </StaggerItem>
          <StaggerItem>
            <Title
              level={1}
              className="md:text-5xl font-extrabold text-neutral-800 dark:text-zinc-300"
            >
              Qui se cache derrière{" "}
              <span className="text-primary">Nexmyr ?</span>
              <Badge variant="outline" className="text-sm">
                Brian Coupama • Développeur & Fondateur de Nexmyr
              </Badge>
            </Title>
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
