import type { ProjectMetric } from "@/types/project";

type Props = { metrics: ProjectMetric[] };

export function ProjectMetrics({ metrics }: Props) {
  if (!metrics.length) return null;

  return (
    <dl className="grid grid-cols-[repeat(auto-fit,minmax(9rem,1fr))] gap-3 pt-2">
      {metrics.map((metric) => (
        // dt (le libellé) avant dd (la valeur) dans le DOM, inversés visuellement
        <div
          key={metric.label}
          className="flex flex-col-reverse border bg-card px-4 py-3"
        >
          <dt className="text-sm text-muted-foreground">{metric.label}</dt>
          <dd className="text-2xl font-semibold tracking-tight">
            {metric.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
