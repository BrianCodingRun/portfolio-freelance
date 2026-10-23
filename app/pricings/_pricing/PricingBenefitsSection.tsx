import Section from "@/components/Section";
import type { PricingBenefitsConfig } from "@/lib/pricings/categories";

type PricingBenefitsSectionProps = {
  benefits: PricingBenefitsConfig;
};

export default function PricingBenefitsSection({
  benefits,
}: PricingBenefitsSectionProps) {
  return (
    <Section
      aria-labelledby="pricing-benefits-title"
      className="mx-auto w-full max-w-7xl"
    >
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="space-y-6">
          <p className="text-primary text-sm font-medium tracking-[0.2em] uppercase">
            {benefits.eyebrow}
          </p>

          <h2
            id="pricing-benefits-title"
            className="text-3xl font-semibold tracking-tight md:text-4xl"
          >
            {benefits.heading}
          </h2>

          <p className="text-muted-foreground max-w-lg leading-relaxed">
            {benefits.description}
          </p>
        </div>

        <div className="divide-border divide-y">
          {benefits.items.map((benefit, index) => (
            <div
              key={index}
              className="flex items-start gap-5 py-6 first:pt-0 last:pb-0"
            >
              <span className="text-primary shrink-0 text-sm font-medium">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="space-y-2">
                <h3 className="text-xl font-medium">{benefit.title}</h3>

                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
