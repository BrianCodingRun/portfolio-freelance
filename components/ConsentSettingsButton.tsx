"use client";

import { useAnalyticsConsent } from "@/hooks/useAnalyticsConsent";

/**
 * Lien permanent pour rouvrir le choix de consentement (ex. dans le footer).
 * Même logique que ConsentWidget : tant qu'aucun choix n'a été fait,
 * la bannière est déjà affichée, donc on ne rend rien.
 */
export default function ConsentSettingsButton({
  className,
}: {
  className?: string;
}) {
  const { consent, reset } = useAnalyticsConsent();

  if (consent === "pending") return null;

  return (
    <button type="button" onClick={reset} className={className}>
      Gérer mes cookies
    </button>
  );
}
