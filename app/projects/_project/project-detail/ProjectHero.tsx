import { BrowserFrame } from "@/components/BrowserFrame";
import Opacity from "@/components/motion/Opacity";
import { buttonVariants } from "@/components/ui/button";
import { getBrowserFrameProps } from "@/lib/project-utils";
import { cn } from "@/lib/utils";
import type { Project } from "@/types/project";
import { ArrowUpRight, ExternalLink, FileText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const linkIconMap = {
  demo: <ExternalLink className="size-4" aria-hidden />,
  github: <FaGithub className="size-4" aria-hidden />,
  pdf: <FileText className="size-4" aria-hidden />,
  external: <ArrowUpRight className="size-4" aria-hidden />,
};

type Props = { project: Project };

export function ProjectHero({ project }: Props) {
  return (
    <header className="space-y-8">
      <div className="space-y-4">
        {/* Pour qui a été fait le projet (même repère que sur la carte) */}
        {project.client && (
          <p className="flex items-center gap-2 text-sm text-muted-foreground md:text-base">
            <span
              aria-hidden
              className="size-1.5 shrink-0 rounded-full bg-primary"
            />
            {project.client}
          </p>
        )}

        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          {project.title}
        </h1>

        <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {project.tagline}
        </p>

        {project.links.length > 0 && (
          <div className="flex flex-wrap gap-3 pt-2">
            {project.links.map((link) => (
              <Link
                key={link.href}
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
            ))}
          </div>
        )}
      </div>

      {/* Capture : même cadre que sur la carte du portfolio */}
      <Opacity delay={0.04}>
        <div className="relative aspect-video w-full overflow-hidden border">
          {project.coverImage ? (
            <BrowserFrame {...getBrowserFrameProps(project)} className="h-full">
              <Image
                src={project.coverImage}
                alt={project.coverAlt ?? `Aperçu du projet ${project.title}`}
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover object-top"
                style={
                  project.coverPosition
                    ? { objectPosition: project.coverPosition }
                    : undefined
                }
              />
            </BrowserFrame>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-sm text-muted-foreground">
              Aperçu non disponible
            </div>
          )}
        </div>
      </Opacity>
    </header>
  );
}
