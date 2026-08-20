// data/experiences.ts
export interface Experience {
  slug: string;
  title: string;
  organizer: string;
  date: string;
  duration: string;
  tag: string;
  role: string;
  result: string;
  images: string[];
}

export const experiences: Experience[] = [
  {
    slug: "pimpmyapp-2026",
    title: "PimpMyApp",
    organizer: "Warren Walter",
    date: "Mai 2026",
    duration: "9 jours",
    tag: "Design Sprint",
    role: "Développeur — conception et développement des écrans et du prototype",
    result: '"J\'achète" — Directrice générale de la PRITH',
    images: [
      "/experiences/PimpMyAPP-2026.webp",
      "/experiences/PimpMyAPP-2026#2.webp",
      "/experiences/PimpMyAPP-2026#3.webp",
    ],
  },
];
