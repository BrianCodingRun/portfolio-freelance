import Section from "@/components/Section";
import Subtitle from "@/components/Subtitle";
import Title from "@/components/Title";
import type { PricingCategoryConfig } from "@/lib/pricings/categories";

type PricingDetailHeroProps = {
  config: PricingCategoryConfig;
};

export default function PricingDetailHero({ config }: PricingDetailHeroProps) {
  return (
    <Section aria-labelledby="pricing-detail-heading">
      <div className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
          {config.title}
        </p>

        <Title
          level={1}
          id="pricing-detail-heading"
          className="text-4xl font-semibold tracking-tight md:text-6xl text-neutral-900 dark:text-zinc-300"
        >
          {config.heading}
        </Title>

        <Subtitle className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {config.description}
        </Subtitle>
      </div>
    </Section>
  );
}
