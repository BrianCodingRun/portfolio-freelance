"use client";

import { Button } from "@/components/ui/button";
import { useAnalyticsConsent } from "@/hooks/useAnalyticsConsent";
import Link from "next/link";
import { useEffect, useState } from "react";

const COLLECTED = [
  "Pages visitées",
  "Durée de visite",
  "Pays",
  "Appareil et navigateur",
];

export function ConsentBanner() {
  const { consent, accept, refuse } = useAnalyticsConsent();
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    if (consent !== "pending") return;
    const t = setTimeout(() => setShowBanner(true), 400);
    return () => clearTimeout(t);
  }, [consent]);

  if (!showBanner || consent !== "pending") return null;

  return (
    <div
      role="dialog"
      aria-labelledby="consent-title"
      aria-describedby="consent-desc"
      className={[
        "fixed bottom-7 left-1/2 z-50",
        "-translate-x-1/2",
        "w-[min(780px,calc(100vw-32px))]",
        "max-sm:bottom-0 max-sm:left-0 max-sm:right-0 max-sm:w-full max-sm:translate-x-0",
        "bg-card text-card-foreground border border-border shadow-2xl",
        "grid grid-cols-[1fr_auto] max-sm:grid-cols-1 gap-6 items-center",
        "p-7 max-sm:p-5",
      ].join(" ")}
    >
      <div className="flex flex-col gap-2.5">
        <p id="consent-title" className="text-2xl font-semibold leading-snug">
          Mesure d&apos;audience du site
        </p>

        <p
          id="consent-desc"
          className="text-base font-light leading-relaxed text-secondary-foreground"
        >
          Je mesure la fréquentation de ce site pour l&apos;améliorer. Votre
          adresse IP n&apos;est jamais enregistrée : elle sert uniquement à
          déterminer votre pays, puis elle est écartée. <br /> Les statistiques
          sont conservées 13 mois et ne sont partagées avec aucun tiers. Vous
          pouvez changer d&apos;avis à tout moment avec l&apos;icône en bas à
          gauche.{" "}
          <Link href="/privacy" className="underline underline-offset-4">
            En savoir plus
          </Link>
        </p>

        <ul
          aria-label="Données mesurées"
          className="mt-1 flex flex-wrap gap-1.5"
        >
          {COLLECTED.map((item) => (
            <li
              key={item}
              className="border border-border bg-muted px-2 py-0.5 text-sm tracking-wide text-muted-foreground"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Deux boutons de même poids : refuser est aussi simple qu'accepter */}
      <div className="flex shrink-0 flex-col gap-2 max-sm:flex-row">
        <Button onClick={accept} className="max-sm:flex-1">
          Accepter
        </Button>
        <Button onClick={refuse} className="max-sm:flex-1">
          Refuser
        </Button>
      </div>
    </div>
  );
}
