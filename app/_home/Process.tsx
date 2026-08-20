import FadeUp from "@/components/motion/FadeUp";
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
import ProcessCard from "./components/ProcessCard";

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

export default function Process() {
  return (
    <Section>
      <div className="w-full flex flex-col">
        {/* Header */}
        <FadeUp delay={0.4}>
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Separator
                orientation="horizontal"
                className="bg-primary data-horizontal:w-10"
              />
              <span className="text-primary uppercase text-sm sm:text-base font-semibold">
                Comment ca marche ?
              </span>
              <Separator
                orientation="horizontal"
                className="bg-primary data-horizontal:w-10"
              />
            </div>
            <Title level={2} className="text-current">
              Comment se déroule votre projet ?
            </Title>
            <Subtitle className="text-muted-foreground not-italic py-2 max-w-lg mx-auto">
              Un processus simple et transparent pour transformer votre idée en
              projet concret.
            </Subtitle>
          </div>
        </FadeUp>

        {/* Card */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-4 gap-2">
          {steps.map((step, index) => (
            <StaggerItem key={index}>
              <ProcessCard step={step} />
            </StaggerItem>
          ))}
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
              className={cn(
                buttonVariants({ variant: "default" }),
                "group shadow-none",
              )}
            >
              <Mail className="w-3.5 h-3.5" />
              {"Me contacter"}
            </Link>
          </div>
        </Opacity>
      </div>
    </Section>
  );
}
