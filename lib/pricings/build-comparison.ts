import type { Pricing } from "@/types/pricing";

import type { PricingComparisonCatalog } from "@/lib/api/pricings";

import type {
  PricingComparisonConfig,
  PricingComparisonContent,
  PricingComparisonValue,
} from "@/lib/pricings/categories";

type PricingWithComparison = Pricing & {
  comparison?: {
    key: string;
    value: string | boolean;
  }[];
};

export function buildPricingComparison(
  content: PricingComparisonContent,
  offers: PricingWithComparison[],
  catalog: PricingComparisonCatalog,
): PricingComparisonConfig {
  const columns = offers.map((offer) => offer.title);

  const rows = catalog.criteria.map((criterion) => ({
    label: criterion.label,

    values: offers.map((offer): PricingComparisonValue => {
      const item = offer.comparison?.find(
        (entry) => entry.key === criterion.key,
      );

      if (!item) {
        return "—";
      }

      return item.value;
    }),
  }));

  return {
    ...content,
    columns,
    rows,
  };
}
