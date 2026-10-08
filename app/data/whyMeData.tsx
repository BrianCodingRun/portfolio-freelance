import {
  DraftingCompass,
  MapPin,
  Sparkles,
  User,
  type LucideIcon,
} from "lucide-react";

export type WhyMeVisualId = "map" | "steps" | "code" | "chart";

export type WhyMeItem = {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  visual?: WhyMeVisualId;
  featured?: boolean; // carte inversée (fond primary)
  className?: string; // placement dans la grille bento
};

export const whyMeData: WhyMeItem[] = [
  {
    id: "local",
    icon: MapPin,
    title: "Ancré à La Réunion.",
    description:
      "Basé sur l'île de La Réunion, je me déplace pour vous rencontrer — pas besoin de visio, on peut se voir autour d'un café.",
    visual: "map",
    featured: true,
    className: "lg:col-span-2 lg:row-span-2",
  },
  {
    id: "unique-contact",
    icon: User,
    title: "Un guide, pas un intermédiaire.",
    description:
      "Pas d'agence, pas de chef de projet entre nous — je vous accompagne du premier échange à la mise en ligne.",
    visual: "steps",
    className: "lg:col-span-2",
  },
  {
    id: "custom",
    icon: DraftingCompass,
    title: "Sur mesure, vraiment.",
    description:
      "Pas de template recyclé — chaque site est pensé pour votre activité, pas pour n'importe qui.",
  },
  {
    id: "convert",
    icon: Sparkles,
    title: "Pensé pour convertir.",
    description:
      "Un beau site c'est bien, un site qui attire de vrais clients c'est mieux.",
  },
];
