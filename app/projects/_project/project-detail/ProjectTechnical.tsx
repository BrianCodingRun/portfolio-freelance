import TechIcon from "@/components/TechIcon";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Project } from "@/types/project";
import { AlertTriangle, CheckSquare2, ChevronDown } from "lucide-react";
import Link from "next/link";

type Tech = Project["techFrontend"][number];

type Props = { project: Project };

export function ProjectTechnical({ project }: Props) {
  const challenges = project.challenges ?? [];

  const groups = [
    { title: "Frontend", items: project.techFrontend },
    { title: "Backend", items: project.techBackend },
    { title: "Infra / DevOps", items: project.techInfra },
    { title: "CMS", items: project.techCMS },
    { title: "Animation", items: project.techAnimation },
  ].filter((group) => (group.items?.length ?? 0) > 0);

  if (challenges.length === 0 && groups.length === 0) return null;

  return (
    <section>
      {/* <details> natif : accessible au clavier, contenu présent dans le HTML (SEO) */}
      <details className="group border bg-card">
        <summary
          className={cn(
            "flex cursor-pointer list-none items-center justify-between gap-4 p-5",
            "outline-none focus-visible:ring-2 focus-visible:ring-primary",
            "[&::-webkit-details-marker]:hidden",
          )}
        >
          <h2 className="text-xl font-semibold">Sous le capot</h2>
          <span className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="hidden sm:inline">
              Défis rencontrés et technologies utilisées
            </span>
            <ChevronDown
              className="size-4 transition-transform duration-200 group-open:rotate-180"
              aria-hidden
            />
          </span>
        </summary>

        <div className="space-y-10 border-t p-5 pt-8">
          <p className="max-w-[65ch] text-sm text-muted-foreground">
            Cette partie s&apos;adresse aux développeurs et aux curieux : les
            obstacles techniques rencontrés et les outils choisis.
          </p>

          {challenges.length > 0 && (
            <div className="space-y-5">
              <h3 className="text-lg font-semibold">Défis rencontrés</h3>
              <ol className="divide-y divide-border">
                {challenges.map((challenge, i) => (
                  <li key={i} className="space-y-1 py-6 first:pt-0 last:pb-0">
                    <Step
                      tone="problem"
                      title={challenge.problem}
                      detail={challenge.problemDetail}
                    />
                    <div aria-hidden className="ml-3.5 h-4 w-px bg-border" />
                    <Step
                      tone="solution"
                      title={challenge.solution}
                      detail={challenge.solutionDetail}
                    />
                  </li>
                ))}
              </ol>
            </div>
          )}

          {groups.length > 0 && (
            <div className="space-y-5">
              <h3 className="text-lg font-semibold">Technologies utilisées</h3>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(14rem,1fr))] gap-4">
                {groups.map((group) => (
                  <StackGroup
                    key={group.title}
                    title={group.title}
                    items={group.items}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </details>
    </section>
  );
}

function Step({
  tone,
  title,
  detail,
}: {
  tone: "problem" | "solution";
  title: string;
  detail: string;
}) {
  const isProblem = tone === "problem";

  return (
    <div className="flex items-start gap-3">
      <div
        className={cn(
          "mt-0.5 flex size-7 shrink-0 items-center justify-center border",
          isProblem
            ? "border-red-300 bg-red-50 text-red-700 dark:border-red-800 dark:bg-red-950 dark:text-red-400"
            : "border-green-300 bg-green-50 text-green-700 dark:border-green-800 dark:bg-green-950 dark:text-green-400",
        )}
      >
        {isProblem ? (
          <AlertTriangle className="size-3.5" aria-hidden />
        ) : (
          <CheckSquare2 className="size-3.5" aria-hidden />
        )}
      </div>
      <div className="max-w-[65ch]">
        <p className="mb-0.5 text-sm font-semibold">
          <span className="sr-only">
            {isProblem ? "Problème : " : "Solution : "}
          </span>
          {title}
        </p>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {detail}
        </p>
      </div>
    </div>
  );
}

function StackGroup({ title, items }: { title: string; items: Tech[] }) {
  return (
    <div className="space-y-3 border border-border bg-background p-4">
      <h4 className="text-sm font-semibold text-muted-foreground">{title}</h4>
      <ul className="flex flex-wrap gap-2">
        {items.map((tech) => (
          <li key={tech._id}>
            <Link
              href={tech.urlDoc}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "secondary" }))}
            >
              <TechIcon name={tech.icon} className="size-3 fill-primary" />
              {tech.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
