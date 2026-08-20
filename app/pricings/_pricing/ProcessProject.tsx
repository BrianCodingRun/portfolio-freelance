import ProcessCard from "@/app/_home/components/ProcessCard";
import Opacity from "@/components/motion/Opacity";
import StaggerContainer from "@/components/motion/StaggerContainer";
import StaggerItem from "@/components/motion/StaggerItem";
import Section from "@/components/Section";
import Subtitle from "@/components/Subtitle";
import Title from "@/components/Title";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Mail } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Discussion du projet",
    description:
      "Nous échangeons sur vos besoins, vos objectifs et les fonctionnalités nécessaires pour votre projet.",
    badge: "Gratuit & sans engagement",
  },
  {
    number: "02",
    title: "Proposition et devis",
    description:
      "Je vous propose une solution adaptée avec un devis clair et détaillé.",
    badge: "Sous 48h",
  },
  {
    number: "03",
    title: "Développement",
    description:
      "Je réalise votre site ou application avec des points réguliers pour suivre l'avancement.",
    badge: "Points hebdomadaires",
  },
  {
    number: "04",
    title: "Mise en ligne",
    description:
      "Votre projet est livré, optimisé et prêt à accueillir vos premiers utilisateurs.",
    badge: "Support inclus",
  },
];

export default function ProcessProject() {
  return (
    <Section>
      <StaggerContainer className="py-6 mx-auto text-center space-y-6">
        <StaggerItem>
          <div className="flex items-center justify-center gap-2 mb-4">
            <Separator
              orientation="horizontal"
              className="bg-primary data-horizontal:w-8"
            />
            <span className="text-primary uppercase text-sm sm:text-base font-semibold">
              Comment ça se passe ?
            </span>
            <Separator
              orientation="horizontal"
              className="bg-primary data-horizontal:w-8"
            />
          </div>
        </StaggerItem>
        <StaggerItem>
          <Title level={2} className="text-current md:text-3xl">
            Une méthodologie éprouvée
          </Title>
        </StaggerItem>
        <StaggerItem>
          <Subtitle className="py-0 max-w-xl mx-auto">
            Un accompagnement structuré en quatre étapes clés pour garantir le
            succès de votre projet.
          </Subtitle>
        </StaggerItem>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 text-left">
          {steps.map((step, index) => (
            <StaggerItem key={index}>
              <ProcessCard step={step} />
            </StaggerItem>
          ))}
        </div>
      </StaggerContainer>
      <Opacity delay={0.04}>
        <div className="flex items-center justify-between flex-wrap gap-4 px-5 py-4 border border-border bg-card my-4">
          <div>
            <p className="text-lg font-semibold text-foreground">
              Prêt à vous lancer ?
            </p>
            <p className="text-sm text-muted-foreground mt-0.5">
              Envoyez-moi un message en expliquant en quelques lignes votre
              projet.
            </p>
          </div>
          <Link
            href="mailto:dev.contact@briancoupama.re"
            className={cn(buttonVariants({ variant: "default" }))}
          >
            <Mail className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            {"Me contacter"}
          </Link>
        </div>
      </Opacity>
    </Section>
  );
}
