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
  /** Titre du problème (idéalement compréhensible sans jargon) */
  problem: string;
  /** Titre de la solution */
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
  /** Texte détaillé du résultat (section « Le résultat » de la page de détail) */
  description: string;
  coverImage: string;
  images?: string[];
  status: "completed" | "in-progress" | "archived";
  year?: number;
  duration: string;
  role: string;
  client?: string;
  /** Ancien champ « contexte » : sert de repli si `need` est vide */
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

  // --- Nouveaux champs optionnels ---
  /** Le besoin du client, 2 à 3 phrases, sans jargon */
  need?: string;
  /** 3 à 4 fonctionnalités formulées en langage d'usage */
  features?: string[];
  /** Bénéfice en une phrase (affiché sur la carte du portfolio) */
  result?: string;
  /** Texte alternatif descriptif de la capture */
  coverAlt?: string;
  /** object-position CSS pour recadrer la capture, ex. "left top" */
  coverPosition?: string;
};
