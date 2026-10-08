"use client";

import { getConsent, useAnalyticsConsent } from "@/hooks/useAnalyticsConsent";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef } from "react";

const API_URL = process.env.NEXT_PUBLIC_ANALYTICS_API_URL as string;

/**
 * Mesure d'audience minimale : on n'envoie que la page et la durée.
 * L'IP, le pays et l'appareil sont déterminés par ton serveur à partir de
 * la requête, sans aucun appel à un service tiers depuis le navigateur.
 */
export default function Analytics() {
  const pathname = usePathname();
  const { consent } = useAnalyticsConsent();

  const page = useRef<{ path: string; start: number } | null>(null);
  const lastPath = useRef<string | null>(null);

  // Envoie la page en cours (si elle existe) avec sa durée réelle
  const send = useCallback(() => {
    const current = page.current;
    page.current = null;

    // Relu au moment de l'envoi : rien ne part après un retrait du consentement
    if (!current || getConsent() !== "accepted") return;

    const duration = Math.min(
      Math.round((Date.now() - current.start) / 1000),
      3600,
    );

    // text/plain : requête « simple », pas de préflight CORS
    fetch(`${API_URL}/add`, {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify({ pathname: current.path, duration }),
      keepalive: true,
      credentials: "omit",
    }).catch(() => {});
  }, []);

  // Une page = un événement, envoyé quand on la quitte (navigation ou démontage)
  useEffect(() => {
    if (consent !== "accepted" || pathname.startsWith("/dashboard")) return;

    lastPath.current = pathname;
    page.current = { path: pathname, start: Date.now() };

    return send;
  }, [pathname, consent, send]);

  // Onglet masqué ou fermé : on envoie ; onglet de retour : on reprend le chrono
  useEffect(() => {
    if (consent !== "accepted") return;

    const onVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        send();
      } else if (lastPath.current && !page.current) {
        page.current = { path: lastPath.current, start: Date.now() };
      }
    };

    document.addEventListener("visibilitychange", onVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", onVisibilityChange);
  }, [consent, send]);

  return null;
}
