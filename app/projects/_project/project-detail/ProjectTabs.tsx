"use client";

import TechIcon from "@/components/TechIcon";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Framework } from "@/types/framework";
import type { Project } from "@/types/project";
import { AnimatePresence, motion } from "framer-motion";
import { AlertTriangle, CheckSquare2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type Tab = "context" | "challenges" | "stack" | "results";

const TABS: { id: Tab; label: string }[] = [
  { id: "context", label: "Contexte" },
  { id: "challenges", label: "Défis" },
  { id: "stack", label: "Stack" },
  { id: "results", label: "Résultats" },
];

type Props = { project: Project };

const tabVariants = {
  hidden: {
    opacity: 0,
    y: 8,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.22,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: {
      duration: 0.15,
    },
  },
};

export function ProjectTabs({ project }: Props) {
  const [active, setActive] = useState<Tab>("context");

  return (
    <section className="space-y-3 py-6">
      {/* Tab nav */}

      <div className="flex gap-1 border-b border-zinc-800">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={cn(
              "px-4 py-2.5 text-sm font-medium transition-colors relative",
              active === tab.id
                ? "text-primary"
                : "text-zinc-400 hover:text-zinc-300",
            )}
          >
            {tab.label}
            {active === tab.id && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
            )}
          </button>
        ))}
      </div>

      {/* Tab panels */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          variants={tabVariants}
          initial="hidden"
          animate="show"
          exit="exit"
          className="min-h-50"
        >
          {active === "context" && (
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p className="text-base">{project.context}</p>
              {project.role && (
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-zinc-500">Mon rôle :</span>
                  <span className="font-medium text-zinc-300">
                    {project.role}
                  </span>
                </div>
              )}
            </div>
          )}

          {active === "challenges" && (
            <div className="space-y-6">
              {project.challenges.map((challenge, i) => (
                <div key={i} className="space-y-3">
                  {/* Problème */}
                  <div className="flex gap-3 items-start">
                    <div className="shrink-0 w-7 h-7 bg-red-950 border border-red-800 flex items-center justify-center mt-0.5">
                      <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-zinc-100 mb-0.5">
                        {challenge.problem}
                      </p>
                      <p className="text-sm text-zinc-400 leading-relaxed">
                        {challenge.problemDetail}
                      </p>
                    </div>
                  </div>

                  {/* Connecteur */}
                  <div className="ml-3.5 h-5 w-px bg-zinc-700" />

                  {/* Solution */}
                  <div className="flex gap-3 items-start">
                    <div className="shrink-0 w-7 h-7 bg-green-950 border-green-800 flex items-center justify-center mt-0.5">
                      <CheckSquare2 className="w-3.5 h-3.5 text-green-400" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-zinc-100 mb-0.5">
                        {challenge.solution}
                      </p>
                      <p className="text-sm text-zinc-400 leading-relaxed">
                        {challenge.solutionDetail}
                      </p>
                    </div>
                  </div>

                  {/* Séparateur entre challenges */}
                  {i < project.challenges.length - 1 && (
                    <hr className="border-zinc-800 mt-4" />
                  )}
                </div>
              ))}
            </div>
          )}

          {active === "stack" && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.techFrontend?.length > 0 && (
                <StackGroup title="Frontend" items={project.techFrontend} />
              )}
              {project.techBackend?.length > 0 && (
                <StackGroup title="Backend" items={project.techBackend} />
              )}
              {project.techInfra?.length > 0 && (
                <StackGroup title="Infra / DevOps" items={project.techInfra} />
              )}
              {project.techAnimation?.length > 0 && (
                <StackGroup title="Animation" items={project.techAnimation} />
              )}
            </div>
          )}

          {active === "results" && (
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p className="text-base">{project.description}</p>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

function StackGroup({ title, items }: { title: string; items: Framework[] }) {
  return (
    <div className="border border-border bg-card p-4 space-y-3">
      <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
        {title}
      </p>
      <ul className="flex flex-wrap gap-2">
        {items.map((tech) => (
          <li key={tech._id}>
            <Link
              href={tech.urlDoc}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "secondary" }))}
            >
              <TechIcon name={tech.icon} className="fill-primary w-3 h-3" />
              {tech.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
