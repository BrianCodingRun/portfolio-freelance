// lib/project-utils.ts
import type { Project } from "@/types/project";

export function getBrowserFrameProps(project: Project) {
  const demoLink = project.links?.find((link) => link.type === "demo");

  return {
    deployed: Boolean(demoLink),
    url: demoLink?.href.replace(/^https?:\/\//, ""),
  };
}
