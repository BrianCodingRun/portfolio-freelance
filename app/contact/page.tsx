import { Spacing } from "@/components/Spacing";
import type { Metadata } from "next";
import HeroContact from "./_contact/HeroContact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Discutons de votre projet ! Contactez-moi par email, téléphone ou via les réseaux sociaux. Disponible pour de nouvelles missions en développement web et mobile.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact",
    description:
      "Discutons de votre projet ! Contactez-moi par email, téléphone ou via les réseaux sociaux. Disponible pour de nouvelles missions en développement web et mobile.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  return (
    <>
      <Spacing size="sm" />
      <HeroContact />
      <Spacing size="sm" />
    </>
  );
}
