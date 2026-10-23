import type { PricingSlug } from "@/lib/pricings/categories";
import type { Pricing } from "@/types/pricing";

import { generateApplicationsFaqData } from "./applications";
import { generateMaintenanceFaqData } from "./maintenance";
import { generateSitesWebFaqData } from "./sites-web";
import type { FAQItem } from "./types";

export function generatePricingFaqData(
  slug: PricingSlug,
  offers: Pricing[],
): FAQItem[] {
  switch (slug) {
    case "sites-web":
      return generateSitesWebFaqData(offers);

    case "applications":
      return generateApplicationsFaqData(offers);

    case "maintenance":
      return generateMaintenanceFaqData(offers);
  }
}
