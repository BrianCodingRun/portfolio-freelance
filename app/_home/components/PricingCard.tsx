"use client";

import {
  ArrowRight,
  Crown,
  Diamond,
  RefreshCw,
  Rocket,
  Shield,
  SquareCheck,
  Star,
  Zap,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import type { Pricing } from "@/types/pricing";

const ICONS: Record<string, LucideIcon> = {
  Rocket,
  Star,
  Crown,
  Zap,
  Shield,
  Diamond,
  RefreshCw,
};

const currencyFormatter = new Intl.NumberFormat("fr-FR", {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

function isPromoExpired(promoEndDate?: string | null): boolean {
  if (!promoEndDate) return false;

  const endDate = new Date(promoEndDate);

  if (Number.isNaN(endDate.getTime())) return true;

  return endDate.getTime() <= Date.now();
}

type PricingCardProps = {
  pricing: Pricing;
};

export default function PricingCard({ pricing }: PricingCardProps) {
  const Icon = ICONS[pricing.icon] ?? Rocket;

  const isMaintenance = pricing.categorie === "maintenance";

  const hasDiscount =
    !pricing.onQuote &&
    typeof pricing.discount === "number" &&
    pricing.discount > 0 &&
    pricing.discount <= 100 &&
    pricing.price > 0;

  const promoActive = hasDiscount && !isPromoExpired(pricing.promoEndDate);

  const discountedPrice = promoActive
    ? pricing.price * (1 - pricing.discount! / 100)
    : pricing.price;

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col gap-6",
        "border bg-card p-6 text-left",
        "transition-colors duration-300",
        "hover:border-primary/50",
        "md:p-8",
        pricing.popular ? "border-primary" : "border-border",
      )}
    >
      {/* Badge populaire */}
      {pricing.popular && (
        <Badge className={"absolute -top-3 left-6 rounded-none"}>
          ★ Populaire
        </Badge>
      )}

      {/* En-tête */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <Icon className="size-7 shrink-0 text-primary" aria-hidden="true" />

          <h3 className="text-xl font-semibold text-foreground">
            {pricing.title}
          </h3>
        </div>

        <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
          {pricing.description}
        </p>
      </div>

      {/* Prix */}
      <div className="flex flex-col gap-2">
        <div className="flex flex-wrap items-end gap-x-2 gap-y-1">
          {pricing.onQuote ? (
            <span className="text-4xl font-semibold tracking-tight text-foreground">
              Sur devis
            </span>
          ) : (
            <>
              <span className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
                {currencyFormatter.format(discountedPrice)}
              </span>

              <span className="pb-1 text-sm font-medium text-muted-foreground">
                HT*
                {isMaintenance && "/mois"}
              </span>
            </>
          )}

          {promoActive && (
            <span className="pb-1 text-sm text-muted-foreground line-through">
              {currencyFormatter.format(pricing.price)}
            </span>
          )}
        </div>

        {promoActive && pricing.promoLabel && (
          <p className="text-xs font-medium text-primary">
            {pricing.promoLabel}
          </p>
        )}

        {pricing.delay && (
          <p className="text-sm font-medium text-muted-foreground">
            {!isMaintenance && "Livraison : "}
            {pricing.delay}
          </p>
        )}
      </div>

      <Separator />

      {/* Fonctionnalités */}
      <ul className="flex flex-1 flex-col gap-3">
        {pricing.features.map((feature) => (
          <li
            key={feature.id}
            className="flex items-center gap-3 text-sm leading-relaxed text-muted-foreground"
          >
            <SquareCheck
              className="size-4 shrink-0 text-primary"
              aria-hidden="true"
            />
            <span>{feature.name}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Link
        href="/contact"
        className={cn(
          buttonVariants({
            variant: pricing.popular ? "default" : "outline",
            size: "default",
          }),
          "mt-auto w-full rounded-none",
          "transition-colors duration-200",
          !pricing.popular &&
            "hover:bg-primary dark:hover:bg-primary hover:text-primary-foreground",
        )}
      >
        {pricing.cta}

        <ArrowRight
          className="size-4 transition-transform duration-200 group-hover:translate-x-1"
          aria-hidden="true"
        />
      </Link>
    </article>
  );
}
