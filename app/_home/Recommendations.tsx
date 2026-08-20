import Section from "@/components/Section";
import Subtitle from "@/components/Subtitle";
import Title from "@/components/Title";
import FadeUp from "@/components/motion/FadeUp";
import Opacity from "@/components/motion/Opacity";
import StaggerContainer from "@/components/motion/StaggerContainer";
import StaggerItem from "@/components/motion/StaggerItem";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import RecommendationCard from "./components/RecommendationCard";

const recommendations = [
  {
    id: 1,
    name: "Julien Dupont",
    role: "Développeur Full Stack",
    context: "PimpMyApp 2025",
    content:
      "Brian est une personne impliquée qui sait prendre des initiatives et collaborer efficacement avec son équipe.",
  },
  {
    id: 2,
    name: "Sarah Martin",
    role: "Développeuse Frontend",
    context: "Formation Développeur Web",
    content:
      "Toujours force de proposition, Brian est quelqu'un de rigoureux et agréable avec qui travailler.",
  },
];

export default function Recommendations() {
  return (
    <Section>
      <div className="w-full flex flex-col">
        <FadeUp delay={0.4}>
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Separator orientation="horizontal" className="bg-primary w-8" />

              <span className="text-primary uppercase text-sm font-display">
                Recommandations
              </span>

              <Separator orientation="horizontal" className="bg-primary w-8" />
            </div>

            <Title level={2} className="text-current">
              Ils me <span className="text-primary">recommandent</span>
            </Title>

            <Subtitle className="text-muted-foreground not-italic py-2 max-w-lg mx-auto">
              Des retours de personnes ayant collaboré avec moi lors de
              formations, projets collaboratifs et événements professionnels.
            </Subtitle>
          </div>
        </FadeUp>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {recommendations.map((recommendation, index) => (
            <StaggerItem key={index}>
              <RecommendationCard recommendation={recommendation} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
      <Opacity delay={0.04}>
        <div className="flex items-center justify-between flex-wrap gap-4 px-5 py-4 rounded-md border border-primary/20 bg-primary/5 my-4">
          <div>
            <p className="text-base font-semibold text-foreground">
              Vous avez travaillé avec moi ?
            </p>

            <p className="text-xs text-muted-foreground mt-0.5">
              Votre retour {"d'"}expérience peut aider de futurs clients à mieux
              me connaître.
            </p>
          </div>

          <Link
            href="mailto:dev.contact@briancoupama.re?subject=Recommandation"
            className={cn(
              buttonVariants({
                variant: "default",
                size: "sm",
              }),
              "group",
            )}
          >
            Me recommander
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </Opacity>
    </Section>
  );
}
