import { Spacing } from "@/components/Spacing";
import { getActivePricings } from "@/lib/api/pricings";
import { buildMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import FaqPricingPage from "./_pricing/FaqPricingPage";
import HeroPricing from "./_pricing/HeroPricing";
import PricingList from "./_pricing/PricingList";
import ProcessProject from "./_pricing/ProcessProject";

export const metadata: Metadata = buildMetadata({
  title: "Tarifications",
  description:
    "Tarifs de création de site web et d'application sur mesure à La Réunion : site vitrine, e-commerce et solutions métier, formules Starter à Sur-mesure.",
  path: "/pricings",
});

export default async function PricingPage() {
  const pricings = await getActivePricings();
  return (
    <>
      {/* HERO */}
      <HeroPricing />
      {/* SPACING */}
      <Spacing size="sm" />
      {/* PROCESS */}
      <ProcessProject />
      {/* SPACING */}
      <Spacing size="sm" />
      {/* PRICINGS */}
      <PricingList pricings={pricings} />
      {/* SPACING */}
      <Spacing size="sm" />
      {/* FAQ */}
      <FaqPricingPage />
      {/* SPACING */}
      <Spacing size="sm" />
    </>
  );
}
