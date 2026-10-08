import type { Project } from "@/types/project";
import type { ReactNode } from "react";
import { ProjectMetrics } from "./ProjectMetrics";

type Props = { project: Project };

export function ProjectStory({ project }: Props) {
  // `context` sert de repli tant que `need` n'est pas renseigné en base
  const need = project.need ?? project.context;
  const features = project.features ?? [];
  const hasResult = !!project.description || project.metrics.length > 0;

  return (
    <div className="space-y-12">
      {need && (
        <StorySection title="Le besoin">
          <p className="max-w-[65ch] text-base leading-relaxed">{need}</p>
        </StorySection>
      )}

      {features.length > 0 && (
        <StorySection title="Ce que j'ai réalisé">
          <ul className="max-w-[65ch] space-y-3">
            {features.map((feature) => (
              <li key={feature} className="flex gap-3 leading-relaxed">
                <span
                  aria-hidden
                  className="mt-2.5 size-1.5 shrink-0 bg-primary"
                />
                {feature}
              </li>
            ))}
          </ul>
        </StorySection>
      )}

      {hasResult && (
        <StorySection title="Le résultat">
          {project.description && (
            <p className="max-w-[65ch] text-base leading-relaxed">
              {project.description}
            </p>
          )}
          <ProjectMetrics metrics={project.metrics} />
        </StorySection>
      )}
    </div>
  );
}

function StorySection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      {children}
    </section>
  );
}
