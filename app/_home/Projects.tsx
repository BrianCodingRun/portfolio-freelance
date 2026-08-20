import FadeUp from "@/components/motion/FadeUp";
import Opacity from "@/components/motion/Opacity";
import StaggerContainer from "@/components/motion/StaggerContainer";
import StaggerItem from "@/components/motion/StaggerItem";
import Section from "@/components/Section";
import { ProjectCard } from "@/components/shared/ProjectCard";
import Subtitle from "@/components/Subtitle";
import Title from "@/components/Title";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import type { Project } from "@/types/project";
import { Construction } from "lucide-react";
import Link from "next/link";

export default function Projects({ projects }: { projects: Project[] }) {
  const [featured] = projects;

  return (
    <Section>
      <div className="w-full flex flex-col">
        <FadeUp delay={0.4}>
          <div className="text-center mb-10">
            {/* LABEL */}
            <div className="flex items-center justify-center gap-2 mb-4">
              <Separator
                orientation="horizontal"
                className="bg-primary data-horizontal:w-10"
              />
              <span className="text-primary font-semibold uppercase text-sm sm:text-base">
                Ce que {"j'ai"} produit
              </span>
              <Separator
                orientation="horizontal"
                className="bg-primary data-horizontal:w-10"
              />
            </div>
            {/* TITLE */}
            <Title level={2} className="text-current">
              Une sélection de mes réalisations.
            </Title>
            {/* DESCRIPTION */}
            <Subtitle className="py-2 max-w-xl mx-auto">
              Chaque projet répond à un besoin différent, avec la stack la plus
              adaptée — pour un client ou à titre personnel.
            </Subtitle>
          </div>
        </FadeUp>

        {projects.length > 0 && (
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            {/* Grande card — prend 2 colonnes sur md */}
            {featured &&
              projects.map((project, index) => (
                <StaggerItem key={index}>
                  <ProjectCard project={project} />
                </StaggerItem>
              ))}
          </StaggerContainer>
        )}

        <Opacity delay={0.04}>
          <div className="flex items-center justify-between flex-wrap gap-4 px-5 py-4 border border-border bg-card my-6">
            <div className="space-y-2">
              <p className="text-lg font-semibold text-foreground">
                Chaque projet a son histoire.
              </p>
              <p className="max-w-xl text-sm text-muted-foreground mt-0.5">
                Contexte, choix techniques, résultats : retrouve le détail
                complet de chaque réalisation sur la page dédiée.
              </p>
            </div>
            <Link
              href="/projects"
              className={cn(
                buttonVariants({ variant: "default" }),
                "shadow-none",
              )}
            >
              <Construction className="w-3.5 h-3.5" />
              Tous mes projets
            </Link>
          </div>
        </Opacity>
      </div>
    </Section>
  );
}
