import { notFound } from "next/navigation";

import { isPricingSlug, pricingCategories } from "@/lib/pricings/categories";

import FAQSection from "@/components/shared/faq/FAQSection";
import { Spacing } from "@/components/Spacing";
import {
  getActivePricings,
  getPricingComparisonCatalog,
} from "@/lib/api/pricings";
import { generatePricingFaqData } from "@/lib/faq/pricing";
import { buildMetadata } from "@/lib/metadata";
import { buildPricingComparison } from "@/lib/pricings/build-comparison";
import type { PricingSlug } from "@/lib/pricings/categories";
import { getPricingsByCategory } from "@/lib/pricings/pricing";
import type { Metadata } from "next";
import BreadcrumbPricing from "../_pricing/BreadcrumbPricing";
import PricingApplicationTypesSection from "../_pricing/PricingApplicationTypesSection";
import PricingBenefitsSection from "../_pricing/PricingBenefitsSection";
import PricingComparisonSection from "../_pricing/PricingComparisonSection";
import PricingCtaSection from "../_pricing/PricingCtaSection";
import PricingDetailIntro from "../_pricing/PricingDetailIntro";
import PricingOffersSection from "../_pricing/PricingOffersSection";

type PricingDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

// --- SEO ---
export async function generateMetadata({
  params,
}: PricingDetailPageProps): Promise<Metadata> {
  const { slug } = await params;

  if (!isPricingSlug(slug)) {
    notFound();
  }

  const config = pricingCategories[slug];

  return buildMetadata({
    title: config.seo.title,
    description: config.seo.description,
    path: `/pricings/${slug}`,
  });
}

const faqDescriptions = {
  "sites-web":
    "Retrouvez les réponses aux questions les plus fréquentes sur la création de votre site web.",
  applications:
    "Tout ce que vous devez savoir pour concrétiser votre projet d'application web ou mobile.",
  maintenance:
    "Les réponses à vos questions sur la maintenance et le suivi de votre site web.",
} satisfies Record<PricingSlug, string>;

export default async function PricingDetailPage({
  params,
}: PricingDetailPageProps) {
  const { slug } = await params;

  // Vérification du slug
  if (!isPricingSlug(slug)) {
    notFound();
  }

  // Configuration de la catégorie
  const config = pricingCategories[slug];

  // Récupération des offres actives
  const pricings = await getActivePricings();

  // Filtrage selon la catégorie
  const offers = getPricingsByCategory(pricings, config.category);

  // Génération de la FAQ adaptée à la catégorie
  const faqData = generatePricingFaqData(slug, offers);

  // Configuration statique de présentation
  const comparisonContent = "comparison" in config ? config.comparison : null;

  // Récupération du catalogue uniquement si nécessaire
  const catalog =
    comparisonContent &&
    (config.category === "pack" || config.category === "maintenance")
      ? await getPricingComparisonCatalog(config.category)
      : null;

  // Construction du comparateur dynamique
  const comparison =
    comparisonContent &&
    catalog &&
    catalog.category === config.category &&
    offers.length > 0
      ? buildPricingComparison(comparisonContent, offers, catalog)
      : null;

  return (
    <>
      <Spacing size="sm" />
      <BreadcrumbPricing config={config} />
      <PricingDetailIntro config={config} />
      <Spacing size="sm" />
      <PricingBenefitsSection benefits={config.benefits} />
      <PricingOffersSection offers={offers} />
      {slug === "applications" && <PricingApplicationTypesSection />}
      {comparison && <PricingComparisonSection comparison={comparison} />}
      <Spacing size="sm" />

      {/* FAQ spécifique à la catégorie */}
      {faqData.length > 0 && (
        <FAQSection items={faqData} description={faqDescriptions[slug]} />
      )}

      {/* CTA */}
      <PricingCtaSection cta={config.cta} />
    </>
  );
}
