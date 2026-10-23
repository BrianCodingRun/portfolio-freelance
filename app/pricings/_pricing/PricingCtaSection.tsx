import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import type { PricingCtaConfig } from "@/lib/pricings/categories";
import { cn } from "@/lib/utils";

type PricingCtaSectionProps = {
  cta: PricingCtaConfig;
};

export default function PricingCtaSection({ cta }: PricingCtaSectionProps) {
  return (
    <section
      aria-labelledby="pricing-cta-title"
      className="mx-auto my-6 w-full max-w-4xl space-y-4 border bg-card p-4 text-center md:my-12 md:p-8"
    >
      <span className="block text-xs uppercase">{cta.eyebrow}</span>

      <h2 id="pricing-cta-title" className="text-2xl font-semibold">
        {cta.heading}
      </h2>

      <p className="text-muted-foreground mx-auto max-w-lg text-lg">
        {cta.description}
      </p>

      <Link
        href="https://calendly.com/nexmyr/premier-echange"
        className={cn(buttonVariants({ variant: "default" }), "mt-4")}
      >
        {cta.buttonLabel}
        <ArrowUpRight aria-hidden="true" className="size-5" />
      </Link>
    </section>
  );
}
