"use client";

import { Button } from "@/components/ui/button";
import { useAnalyticsConsent } from "@/hooks/useAnalyticsConsent";
import { useEffect, useState } from "react";

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
      {/* ── Content ── */}
      <div className="flex flex-col gap-2.5">
        {/* Eyebrow */}
        <div className="flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-medium uppercase tracking-widest text-secondary-foreground">
            Confidentialité &amp; Données
          </span>
        </div>

        {/* Title */}
        <p id="consent-title" className="text-2xl font-semibold leading-snug">
          Ce site collecte des{" "}
          <em className="not-italic text-primary">données analytiques</em>
        </p>

        {/* Description */}
        <p
          id="consent-desc"
          className="text-sm sm:text-base font-light leading-relaxed text-secondary-foreground"
        >
          Pour améliorer votre expérience, nous mesurons votre navigation de
          manière anonyme. Aucune donnée n&apos;est revendue ni partagée avec
          des tiers.
        </p>

        {/* Data tags */}
        <div className="flex flex-wrap gap-1.5 mt-1">
          {[
            "Localisation (pays / ville)",
            "Appareil & navigateur",
            "Pages visitées",
            "Durée de visite",
            "Adresse IP",
          ].map((tag, index) => (
            <span
              key={index}
              className="text-xs sm:text-sm px-2 py-0.5 border border-border bg-muted text-muted-foreground tracking-wide"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* ── Actions ── */}
      <div className="flex flex-col max-sm:flex-row gap-2 shrink-0">
        <Button
          onClick={accept}
          size="lg"
          className="border-none font-semibold shadow-none"
        >
          Accepter
        </Button>
        <Button
          onClick={refuse}
          variant="outline"
          size="lg"
          className="font-medium shadow-none border-primary text-primary"
        >
          Refuser
        </Button>
      </div>
    </div>
  );
}
