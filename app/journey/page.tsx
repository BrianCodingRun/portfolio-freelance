import Section from "@/components/Section";
import { getAllChapters, getConclusion } from "@/lib/journey";
import { buildMetadata } from "@/lib/metadata";

import type { Metadata } from "next";
import BentoJourney from "./_journey/BentoJourney";
import HeroJourney from "./_journey/HeroJourney";

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
      {/* HERO JOURNEY */}
      <HeroJourney />
      {/* BENTO GRID JOURNEY */}
      <BentoJourney chapters={chapters} conclusion={conclusion} />
    </Section>
  );
}
