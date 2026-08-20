"use client";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import type { Pricing } from "@/types/pricing";
import {
  ArrowRight,
  Crown,
  Diamond,
  Gift,
  type LucideIcon,
  RefreshCw,
  Rocket,
  Shield,
  SquareCheck,
  Star,
  Zap,
} from "lucide-react";
import Link from "next/link";

const ICONS: Record<string, LucideIcon> = {
  Rocket,
  Star,
  Crown,
  Zap,
  Shield,
  Diamond,
  RefreshCw,
};

function isPromoExpired(promoEndDate?: string | null): boolean {
  if (!promoEndDate) return false;
  return new Date(promoEndDate) < new Date();
}

export default function ServiceCard({ pricing }: { pricing: Pricing }) {
  const Icon = ICONS[pricing.icon] ?? Rocket;
  const promoPrice =
    pricing.discount && pricing.discount > 0
      ? pricing.price * (1 - pricing.discount / 100)
      : null;

  const promoActive =
    promoPrice !== null && !isPromoExpired(pricing.promoEndDate);

  const formatCurrency = (
    value: number,
    currencyCode: string,
    locale: string,
  ) => {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency: currencyCode,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div
      className={cn(
        "group relative flex flex-col h-full px-6 py-8 gap-5 transition-all duration-300 bg-card border border-border hover:bg-gradient-to-tl hover:from-primary/5 hover:to-transparent text-left",
        pricing.popular && "scale-105 border-4 border-primary",
      )}
    >
      {/* Ligne lumineuse hover (uniquement non-popular) */}
      {!pricing.popular && (
        <div className="absolute top-0 left-0 right-0 h-px pointer-events-none bg-transparent group-hover:bg-gradient-to-r group-hover:from-transparent group-hover:via-primary group-hover:to-transparent transition-all duration-300" />
      )}

      {pricing.popular && (
        <Badge className="absolute -top-0.5 -left-0.5 shadow-none overflow-ellipsis">
          ★ Populaire
        </Badge>
      )}

      {/* Top — icône + nom + description */}
      <div className="flex flex-col gap-2 min-h-28">
        <div className="flex items-center gap-2 justify-between">
          <div className="flex gap-2 items-center">
            <Icon className={cn("w-4 h-4 text-primary")} />
            <p className={cn("text-base font-semibold text-foreground")}>
              {pricing.title}
            </p>
          </div>
        </div>
        {/* Prix */}
        <div className="flex flex-col gap-1">
          <div className="flex items-end flex-wrap gap-2">
            {pricing.onQuote ? (
              <span className="text-5xl font-bold leading-none text-foreground">
                Sur devis
              </span>
            ) : (
              <span className="text-5xl font-bold leading-none text-foreground">
                {promoPrice
                  ? formatCurrency(promoPrice, "EUR", "fr-FR")
                  : formatCurrency(pricing.price, "EUR", "fr-FR")}
              </span>
            )}

            {!pricing.onQuote && (
              <span className="text-lg font-semibold leading-tight pb-1 text-foreground">
                HT*
              </span>
            )}

            {promoActive && pricing.price > 0 && (
              <span className="text-sm line-through text-muted-foreground">
                {pricing.price}€
              </span>
            )}
          </div>

          {promoActive && pricing.promoLabel && (
            <span className="text-xs font-semibold text-primary">
              {pricing.promoLabel}
            </span>
          )}

          <div className="flex items-center pb-1 gap-2">
            <span className="text-xs leading-tight text-muted-foreground font-semibold">
              {pricing.categorie !== "maintenance" && "Livraison:" + " "}
              {pricing.delay}
            </span>
          </div>
        </div>
        {pricing.categorie === "pack" && (
          <span
            className={`inline-flex items-center gap-1 text-xs font-medium px-3 py-1 border border-primary w-fit text-primary ${pricing.popular && "bg-primary text-primary-foreground"}`}
          >
            <Gift className="w-4 h-4" />
            Domaine + hébergement offerts (1 an)
          </span>
        )}
      </div>
      <Separator />
      <p className={cn("text-base leading-relaxed text-muted-foreground")}>
        {pricing.description}
      </p>

      {/* Features */}
      <ul className="flex flex-1 flex-col gap-2">
        {pricing.features.map((f) => (
          <li
            key={f.id}
            className={cn(
              "flex items-center gap-2.5 text-sm text-muted-foreground",
            )}
          >
            <div
              className={cn(
                "w-4 h-4 flex items-center justify-center flex-shrink-0 ",
              )}
            >
              <SquareCheck className={cn("w-3 h-3 text-primary")} />
            </div>
            {f.name}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Link
        href="/contact"
        className={cn(
          buttonVariants({
            variant: pricing.popular ? "default" : "outline",
            size: pricing.popular ? "default" : "sm",
          }),
          `${!pricing.popular && "bg-card hover:bg-primary hover:text-primary-foreground"}`,
        )}
      >
        {pricing.cta}
        <ArrowRight
          className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-0.5"
          aria-hidden
        />
      </Link>
    </div>
  );
}
