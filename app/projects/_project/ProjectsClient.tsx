"use client";

import DynamicStagger from "@/components/motion/DynamicStagger";
import DynamicStaggerItem from "@/components/motion/DynamicStaggerItem";
import FadeUp from "@/components/motion/FadeUp";
import Opacity from "@/components/motion/Opacity";
import Section from "@/components/Section";
import { ProjectCard } from "@/components/shared/ProjectCard";
import type { Project } from "@/types/project";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";

const FILTERS = [
  { id: "all", label: "Tous" },
  { id: "fullstack", label: "Fullstack" },
  { id: "backend", label: "Backend" },
  { id: "frontend", label: "Frontend" },
] as const;

type FilterId = (typeof FILTERS)[number]["id"];

const filterMap: Record<FilterId, (p: Project) => boolean> = {
  all: () => true,
  fullstack: (p) => p.techFrontend.length > 0 && p.techBackend.length > 0,
  backend: (p) => p.techBackend.length > 0 && p.techFrontend.length === 0,
  frontend: (p) => p.techFrontend.length > 0 && p.techBackend.length === 0,
};

type Props = {
  projects: Project[];
};

export function ProjectsClient({ projects }: Props) {
  const [activeFilter, setActiveFilter] = useState<FilterId>("all");

  const filtered = useMemo(() => {
    const fn = filterMap[activeFilter];
    return projects.filter(fn);
  }, [projects, activeFilter]);

  const gridProjects = useMemo(() => {
    return filtered.filter((p) => p || activeFilter !== "all");
  }, [filtered, activeFilter]);

  return (
    <Section className="xl:max-w-5xl">
      <div className="py-12 space-y-12">
        {/* En-tête */}
        <FadeUp delay={0.02}>
          <header className="space-y-2 max-w-xl">
            <p className="text-sm font-semibold tracking-widest text-primary uppercase">
              Brian Coupama · Portfolio
            </p>

            <h1 className="text-4xl font-bold tracking-tight">
              Mes réalisations
            </h1>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Chaque projet répond à un besoin différent, avec la stack la plus
              adaptée — pour un client ou à titre personnel.
            </p>
          </header>
        </FadeUp>

        {/* Filtres */}
        <FadeUp delay={0.02}>
          <div className="flex items-center gap-3 flex-wrap">
            <div className="flex items-center gap-1.5 flex-wrap">
              {FILTERS.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={[
                    "text-sm font-medium px-3.5 py-1.5 transition-all duration-200",
                    activeFilter === filter.id
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-muted border-muted-foreground text-muted-foreground hover:border-primary/40 hover:text-foreground",
                  ].join(" ")}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            <span className="sm:ml-auto text-sm text-muted-foreground">
              {filtered.length} projet{filtered.length > 1 ? "s" : ""}
            </span>
          </div>
        </FadeUp>

        {/* Grille projets */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.2,
            }}
            className="space-y-4"
          >
            {activeFilter === "all" && (
              <Opacity delay={0.2}>
                <SectionLabel>Tous les projets</SectionLabel>
              </Opacity>
            )}

            {gridProjects.length > 0 ? (
              <DynamicStagger
                animationKey={activeFilter}
                className="grid grid-cols-1 md:grid-cols-2 gap-5"
              >
                {gridProjects.map((project) => (
                  <DynamicStaggerItem key={project.slug}>
                    <ProjectCard project={project} />
                  </DynamicStaggerItem>
                ))}
              </DynamicStagger>
            ) : (
              <Opacity delay={0.1}>
                <EmptyState />
              </Opacity>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </Section>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-xs font-medium tracking-widest uppercase text-muted-foreground">
      <span>{children}</span>
      <span className="flex-1 h-px bg-muted-foreground" />
    </div>
  );
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-20 gap-3 text-center border border-dashed border-muted-foreground">
      <div className="w-10 h-10 bg-muted flex items-center justify-center">
        <svg
          className="w-4 h-4 text-muted-foreground"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
          aria-hidden
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776"
          />
        </svg>
      </div>

      <p className="text-sm font-medium">Aucun projet dans cette catégorie</p>

      <p className="text-xs text-muted-foreground">
        {"D'autres projets arrivent bientôt."}
      </p>
    </div>
  );
}
