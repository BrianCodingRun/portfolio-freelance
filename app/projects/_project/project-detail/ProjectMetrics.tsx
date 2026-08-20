import StaggerContainer from "@/components/motion/StaggerContainer";
import StaggerItem from "@/components/motion/StaggerItem";
import type { ProjectMetric } from "@/types/project";

type Props = { metrics: ProjectMetric[] };

export function ProjectMetrics({ metrics }: Props) {
  if (!metrics.length) return null;

  return (
    <StaggerContainer>
      <dl className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {metrics.map((metric) => (
          <StaggerItem key={metric.label}>
            <div className="border bg-card px-5 py-4">
              <dd className="text-3xl font-bold tracking-tight">
                {metric.value}
              </dd>
              <dt className="mt-1 text-xs text-muted-foreground">
                {metric.label}
              </dt>
            </div>
          </StaggerItem>
        ))}
      </dl>
    </StaggerContainer>
  );
}
