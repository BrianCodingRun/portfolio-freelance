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
    title: "Ancré à La Réunion.",
    description:
      "Basé sur l'île de La Réunion, je me déplace pour vous rencontrer — pas besoin de visio, on peut se voir autour d'un café.",
  },
  {
    id: "unique-contact",
    icon: User,
    title: "Un guide, pas un intermédiaire.",
    description:
      "Pas d'agence, pas de chef de projet entre nous — je vous accompagne du premier échange à la mise en ligne.",
  },
  {
    id: "custom",
    icon: Code2,
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
