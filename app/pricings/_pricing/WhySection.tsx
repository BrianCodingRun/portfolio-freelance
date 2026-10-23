import Section from "@/components/Section";
import { Blocks, Handshake, ScanEye, UserRound } from "lucide-react";

const benefits = [
  {
    number: "01",
    icon: UserRound,
    title: "Un interlocuteur unique",
    description:
      "Vous échangez directement avec le développeur qui réalise votre projet.",
  },
  {
    number: "02",
    icon: ScanEye,
    title: "Une approche transparente",
    description:
      "Des échanges clairs, des choix expliqués et une visibilité sur l'avancement.",
  },
  {
    number: "03",
    icon: Blocks,
    title: "Des solutions adaptées",
    description:
      "Chaque projet est conçu selon vos objectifs, sans fonctionnalités superflues.",
  },
  {
    number: "04",
    icon: Handshake,
    title: "Une relation durable",
    description:
      "Un accompagnement qui ne s'arrête pas nécessairement à la mise en ligne.",
  },
];

export default function WhySection() {
  return (
    <Section aria-labelledby="why-nexmyr-title" className="py-8 md:py-16">
      <div className="space-y-12">
        {/* Introduction */}
        <div className="space-y-6">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Pourquoi Nexmyr ?
          </p>

          <h2
            id="why-nexmyr-title"
            className="max-w-xs sm:max-w-4xl text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl"
          >
            Plus qu&apos;un site web,{" "}
            <span className="text-primary">un véritable accompagnement.</span>
          </h2>

          <p className="max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Un projet digital ne se résume pas à quelques lignes de code. Je
            privilégie l&apos;écoute, la transparence et des solutions pensées
            pour répondre à vos besoins réels.
          </p>
        </div>

        {/* Engagements */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <article
                key={benefit.number}
                className="flex flex-col gap-5 border border-border p-7 md:p-9"
              >
                <Icon
                  aria-hidden="true"
                  className="size-7 text-primary"
                  strokeWidth={1.5}
                />

                <div className="space-y-3">
                  <h3 className="text-xl font-medium text-foreground md:text-2xl">
                    {benefit.title}
                  </h3>

                  <p className="text-base leading-relaxed text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
