export type TechBadge = {
  label: string;
  color:
    | "blue"
    | "teal"
    | "amber"
    | "purple"
    | "green"
    | "coral"
    | "pink"
    | "red";
};

export type Challenge = {
  problem: string;
  solution: string;
  problemDetail: string;
  solutionDetail: string;
};

export type ProjectMetric = {
  value: string;
  label: string;
};

export type ProjectLink = {
  label: string;
  href: string;
  type: "demo" | "github" | "pdf" | "external";
};

export type Framework = {
  _id: string;
  name: string;
  icon: string;
  urlDoc: string;
  category: "frontend" | "backend" | "infra" | "cms" | "animation";
};

export type Project = {
  _id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  coverImage: string;
  images?: string[];
  status: "completed" | "in-progress" | "archived";
  year?: number;
  duration: string;
  role: string;
  client?: string;
  context: string;
  challenges: Challenge[];
  metrics: ProjectMetric[];
  techFrontend: Framework[];
  techBackend: Framework[];
  techInfra: Framework[];
  techCMS: Framework[];
  techAnimation: Framework[];
  badges: TechBadge[];
  links: ProjectLink[];
  featured: boolean;
  order: number;
  createdAt: string;
  updatedAt: string;
};
