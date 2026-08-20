export type SkillCategory = "frontend" | "backend" | "outils";

export type Skill = {
  id: number;
  icon: string;
  title: string;
  description: string;
  years: number;
  category: SkillCategory;
};

export const skillsData: Skill[] = [
  {
    id: 1,
    icon: "nextjs",
    title: "Next.js",
    description:
      "Mon framework de prédilection pour des apps web rapides, SEO-friendly et prêtes pour la prod.",
    years: 2,
    category: "frontend",
  },
  {
    id: 2,
    icon: "typescript",
    title: "TypeScript",
    description:
      "J'écris tout en TypeScript. Moins de bugs, un code plus robuste et plus facile à maintenir.",
    years: 3,
    category: "frontend",
  },
  {
    id: 3,
    icon: "tailwindcss",
    title: "Tailwind CSS",
    description:
      "Pour des interfaces soignées et cohérentes, développées deux fois plus vite.",
    years: 4,
    category: "frontend",
  },
  {
    id: 4,
    icon: "nodejs",
    title: "Node.js",
    description:
      "Pour construire des APIs solides et connecter le frontend à la base de données.",
    years: 4,
    category: "backend",
  },
  {
    id: 5,
    icon: "wordpress",
    title: "WordPress",
    description:
      "Sites vitrines et blogs clé en main, gérables en toute autonomie par mes clients.",
    years: 5,
    category: "outils",
  },
  {
    id: 6,
    icon: "prestashop",
    title: "PrestaShop",
    description:
      "Boutiques e-commerce personnalisées, optimisées pour vendre dès le premier jour.",
    years: 1,
    category: "outils",
  },
  {
    id: 7,
    icon: "git",
    title: "Git",
    description:
      "Versioning rigoureux sur chaque projet — pour travailler sereinement en solo ou en équipe.",
    years: 8,
    category: "outils",
  },
  {
    id: 8,
    icon: "symfony",
    title: "Symfony",
    description:
      "Framework php solide que j'utilise principalement pour construire des APIs robustes.",
    years: 3,
    category: "backend",
  },
  {
    id: 9,
    icon: "mysql",
    title: "MySQL",
    description:
      "Base de données relationnelle pour les projets nécessitant une structure de données stricte.",
    years: 3,
    category: "backend",
  },
  {
    id: 10,
    icon: "docker",
    title: "Docker",
    description:
      "Pour des environnements de développement reproductibles et des déploiements simplifiés.",
    years: 2,
    category: "outils",
  },
  {
    id: 11,
    icon: "flutter",
    title: "Flutter",
    description:
      "Vos applications mobile cross plateform développé pour iOS et Android sur une seule codebase.",
    years: 2,
    category: "frontend",
  },
];

export const categoryLabels: Record<SkillCategory, string> = {
  frontend: "Frontend",
  backend: "Backend & Base de données",
  outils: "Outils & CMS",
};

// Nombre max de points dans la barre (= senior reference)
export const MAX_YEARS = 8;
