import { Spacing } from "@/components/Spacing";
import { getActivePricings } from "@/lib/api/pricings";
import type { Metadata } from "next";
import FaqPricingPage from "./_pricing/FaqPricingPage";
import HeroPricing from "./_pricing/HeroPricing";
import PricingList from "./_pricing/PricingList";
import ProcessProject from "./_pricing/ProcessProject";

export const metadata: Metadata = {
  title: "Tarifications",
  description: "Des solutions web sur mesure pour propulser votre activité",
  alternates: {
    canonical: "/pricings",
  },
  openGraph: {
    title: "Tarifications",
    description: "Des solutions web sur mesure pour propulser votre activité",
  },
  robots: {
    index: true,
    follow: true,
  },
};

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
