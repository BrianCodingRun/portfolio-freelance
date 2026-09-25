import { Spacing } from "@/components/Spacing";
import { buildMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import HeroContact from "./_contact/HeroContact";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Discutons de votre projet ! Contactez-moi par email, téléphone ou via les réseaux sociaux. Disponible pour de nouvelles missions en développement web et mobile.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <Spacing size="sm" />
      <HeroContact />
      <Spacing size="sm" />
    </>
  );
}
