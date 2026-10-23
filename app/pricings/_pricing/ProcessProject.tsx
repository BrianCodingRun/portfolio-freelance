import Section from "@/components/Section";
import {
  ArrowUpRight,
  Check,
  CodeXml,
  FileText,
  MessagesSquare,
  Rocket,
} from "lucide-react";
import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Discutons de votre projet",
    description:
      "Nous échangeons sur vos besoins, vos objectifs et les fonctionnalités nécessaires à votre projet.",
    perk: "Gratuit & sans engagement",
    icon: MessagesSquare,
  },
  {
    number: "02",
    title: "Une proposition adaptée",
    description: "Vous recevez un devis clair, détaillé et personnalisé.",
    perk: "Sous 48h",
    icon: FileText,
  },
  {
    number: "03",
    title: "Place au développement",
    description:
      "Je réalise votre site ou application avec des points réguliers pour suivre son avancement.",
    perk: "Points hebdomadaires",
    icon: CodeXml,
  },
  {
    number: "04",
    title: "Votre projet prend vie",
    description:
      "Votre projet est livré, optimisé et prêt à accueillir vos premiers utilisateurs.",
    perk: "Support inclus",
    icon: Rocket,
  },
];

export default function ProcessProject() {
  return (
    <Section>
      <div className="mb-12 max-w-3xl">
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          Mon accompagnement
        </p>

        <h2 className="mb-6 text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl max-w-xs sm:max-w-none">
          Votre projet, <span className="text-primary">étape par étape.</span>
        </h2>

        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          De notre premier échange à la mise en ligne, je vous accompagne avec
          une méthode claire, transparente et adaptée à vos besoins.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {steps.map((step) => {
          const Icon = step.icon;

          return (
            <article
              key={step.number}
              className="group flex min-h-64 flex-col border border-border p-6 transition-colors duration-300 hover:border-primary/50 sm:p-8"
            >
              <div className="mb-5 sm:mb-10 flex items-start justify-between">
                <span className="text-xs font-medium tracking-[0.2em] text-primary">
                  {step.number}
                </span>

                <Icon
                  aria-hidden="true"
                  className="size-7 text-primary"
                  strokeWidth={1.5}
                />
              </div>

              <h3 className="mb-4 text-xl font-semibold text-foreground sm:text-2xl">
                {step.title}
              </h3>

              <p className="mb-8 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
                {step.description}
              </p>

              <div className="mt-auto flex items-center gap-2 border-t border-border pt-5 text-sm text-primary">
                <Check aria-hidden="true" className="size-4 shrink-0" />
                <span>{step.perk}</span>
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-lg text-sm leading-relaxed text-muted-foreground">
          Une idée en tête ? Échangeons sur votre projet, sans engagement.
        </p>

        <Link
          href="/contact"
          className="inline-flex items-center gap-2 border border-primary px-5 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          Discuter de mon projet
          <ArrowUpRight aria-hidden="true" className="size-4" />
        </Link>
      </div>
    </Section>
  );
}
