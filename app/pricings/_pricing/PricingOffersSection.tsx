import PricingCard from "@/app/_home/components/PricingCard";
import Section from "@/components/Section";
import type { Pricing } from "@/types/pricing";

type PricingOffersSectionProps = {
  offers: Pricing[];
};

export default function PricingOffersSection({
  offers,
}: PricingOffersSectionProps) {
  if (offers.length === 0) {
    return null;
  }

  const isTwoColumns = offers.length === 2;

  const gridClassName = isTwoColumns
    ? "grid grid-cols-1 gap-4 md:grid-cols-2 max-w-[860px] mx-auto"
    : "grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3";

  return (
    <Section
      aria-labelledby="pricing-offers-heading"
      className="py-12 md:py-16"
    >
      <div className="mb-10 md:max-w-2xl md:text-center mx-auto max-w-3xl space-y-4 md:mb-12">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
          MES FORMULES
        </p>

        <h2
          id="pricing-offers-heading"
          className="text-3xl font-semibold tracking-tight md:text-4xl"
        >
          Choisissez {"l'"}offre qui{" "}
          <span className="text-primary">vous correspond.</span>
        </h2>

        <p className="text-base leading-relaxed text-muted-foreground">
          Des prestations adaptées à vos besoins, avec des fonctionnalités et un
          accompagnement clairement définis.
        </p>
      </div>

      <div className={gridClassName}>
        {offers.map((offer) => (
          <PricingCard key={String(offer._id)} pricing={offer} />
        ))}
      </div>

      <p className="mt-8 md:text-center text-sm text-muted-foreground">
        * TVA non applicable — art. 293 B du CGI.
      </p>
    </Section>
  );
}
