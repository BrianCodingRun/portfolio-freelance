import { cn } from "@/lib/utils";
import type { Project } from "@/types/project";

const STATUS: Record<Project["status"], { label: string; dot: string }> = {
  completed: { label: "Terminé", dot: "bg-green-500" },
  "in-progress": { label: "En cours", dot: "bg-amber-500" },
  archived: { label: "Archivé", dot: "bg-zinc-400" },
};

type Props = { project: Project };

export function ProjectFacts({ project }: Props) {
  const status = STATUS[project.status];

  const rows = [
    { label: "Année", value: project.year?.toString() },
    { label: "Durée", value: project.duration },
    { label: "Mon rôle", value: project.role },
  ].filter((row): row is { label: string; value: string } => !!row.value);

  return (
    <aside
      aria-labelledby="project-facts-title"
      className="border bg-card p-5 lg:sticky lg:top-28"
    >
      <h2 id="project-facts-title" className="mb-3 text-base font-semibold">
        Fiche projet
      </h2>

      <dl className="divide-y divide-border">
        {rows.map((row) => (
          <div
            key={row.label}
            className="flex items-baseline justify-between gap-4 py-2.5 text-sm first:pt-0"
          >
            <dt className="text-muted-foreground">{row.label}</dt>
            <dd className="text-right font-medium">{row.value}</dd>
          </div>
        ))}

        <div className="flex items-baseline justify-between gap-4 pt-2.5 text-sm">
          <dt className="text-muted-foreground">Statut</dt>
          <dd className="flex items-center gap-2 font-medium">
            <span
              aria-hidden
              className={cn("size-1.5 rounded-full", status.dot)}
            />
            {status.label}
          </dd>
        </div>
      </dl>
    </aside>
  );
}
