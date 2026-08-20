"use client";

import FadeUp from "@/components/motion/FadeUp";
import Opacity from "@/components/motion/Opacity";
import StaggerContainer from "@/components/motion/StaggerContainer";
import StaggerItem from "@/components/motion/StaggerItem";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Project, TechBadge } from "@/types/project";
import { ArrowUpRight, ExternalLink, FileText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const badgeVariantMap: Record<TechBadge["color"], string> = {
  blue: "bg-blue-950/60 text-blue-300 border-blue-800",
  teal: "bg-teal-950/60 text-teal-300   border-teal-800",
  amber: "bg-amber-950/60 text-amber-300 border-amber-800",
  purple: "bg-purple-950/60 text-purple-300 border-purple-800",
  green: "bg-green-950/60 text-green-300 border-green-800",
  coral: "bg-orange-950/60 text-orange-300 border-orange-800",
  pink: "bg-pink-950/60 text-pink-300 border-pink-800",
  red: "bg-red-950/60 text-red-300 border-red-800",
};

const linkIconMap = {
  demo: <ExternalLink className="w-4 h-4" />,
  github: <FaGithub className="w-4 h-4" />,
  pdf: <FileText className="w-4 h-4" />,
  external: <ArrowUpRight className="w-4 h-4" />,
};

const statusMap = {
  completed: {
    label: "Terminé",
    className:
      "bg-green-50 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-300",
  },
  "in-progress": {
    label: "En cours",
    className:
      "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950 dark:text-amber-300",
  },
  archived: {
    label: "Archivé",
    className:
      "bg-zinc-100 text-zinc-500 border-zinc-200 dark:bg-zinc-800 dark:text-zinc-400",
  },
};

type Props = { project: Project };

export function ProjectHero({ project }: Props) {
  const status = statusMap[project.status];

  return (
    <section className="space-y-8">
      {/* Cover image */}
      <Opacity delay={0.04}>
        <div className="relative w-full aspect-video overflow-hidden border-2 border-neutral-800">
          {project.coverImage ? (
            <Image
              src={project.coverImage}
              alt={`Aperçu du projet ${project.title}`}
              fill
              className="object-cover"
              priority
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-zinc-400 dark:text-zinc-600 text-sm">
              Aperçu non disponible
            </div>
          )}
          {/* Status badge flottant */}
          <span
            className={`absolute top-4 right-4 text-xs font-medium px-3 py-1 border backdrop-blur-sm ${status.className}`}
          >
            {status.label}
          </span>
        </div>
      </Opacity>

      {/* Title + meta */}
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <FadeUp delay={0.02}>
            <div className="flex flex-col gap-2">
              <p className="text-xs text-muted-foreground mb-1">
                {project.year} · {project.duration}
                {project.client && ` · ${project.client}`}
              </p>
              <h1 className="text-4xl font-bold tracking-tight">
                {project.title}
              </h1>
            </div>
          </FadeUp>
        </div>
        <FadeUp delay={0.02}>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            {project.tagline}
          </p>
        </FadeUp>

        {/* Tech badges */}
        <StaggerContainer className="flex flex-wrap gap-2">
          {project.badges.map((badge) => (
            <StaggerItem key={badge.label}>
              <span
                className={`inline-flex items-center text-xs font-medium px-3 py-1 border ${badgeVariantMap[badge.color]}`}
              >
                {badge.label}
              </span>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA buttons */}
        {project.links.length > 0 && (
          <div className="flex flex-wrap gap-3 pt-2">
            {project.links.map((link, i) => (
              <Opacity key={i} delay={0.04}>
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({
                      variant: link.type === "demo" ? "default" : "outline",
                      size: "sm",
                    }),
                  )}
                >
                  {linkIconMap[link.type]}
                  {link.label}
                </Link>
              </Opacity>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
