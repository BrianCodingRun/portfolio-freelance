import Section from "@/components/Section";
import type { PricingCategoryConfig } from "@/lib/pricings/categories";

type PricingDetailIntroProps = {
  config: PricingCategoryConfig;
};

export default function PricingDetailIntro({
  config,
}: PricingDetailIntroProps) {
  return (
    <Section
      aria-labelledby="pricing-detail-heading"
      className="pt-12 pb-6 md:pt-16 md:pb-8"
    >
      <div className="max-w-3xl space-y-6">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
          {config.title}
        </p>

        <h1
          id="pricing-detail-heading"
          className="md:max-w-2xl text-4xl font-semibold tracking-tight md:text-5xl"
        >
          {config.heading}
        </h1>

        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {config.description}
        </p>
      </div>
    </Section>
  );
}
