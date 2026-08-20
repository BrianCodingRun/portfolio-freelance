import { Code2, MapPin, Sparkles, User, type LucideIcon } from "lucide-react";

export type WhyMeItem = {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
};

export const whyMeData: WhyMeItem[] = [
  {
    id: "local",
    icon: MapPin,
    title: "Ancré dans le Sud Sauvage.",
    description:
      "Basé à Saint-Joseph, je me déplace chez vous — pas besoin de visio, on peut se voir autour d'un café.",
  },
  {
    id: "unique-contact",
    icon: User,
    title: "Un seul interlocuteur.",
    description:
      "Pas d'agence, pas d'intermédiaire — vous parlez directement au développeur qui code votre site.",
  },
  {
    id: "custom",
    icon: Code2,
    title: "Sur mesure, vraiment.",
    description:
      "Pas de template recyclé — chaque site est conçu spécifiquement pour votre activité et vos clients.",
  },
  {
    id: "convert",
    icon: Sparkles,
    title: "Pensé pour convertir.",
    description:
      "Un beau site c'est bien, un site qui attire de vrais clients c'est mieux.",
  },
];
