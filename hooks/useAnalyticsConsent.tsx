import { useSyncExternalStore } from "react";

export type ConsentState = "pending" | "accepted" | "refused";

const CONSENT_KEY = "analytics_consent";

/** Le choix est redemandé au bout d'environ 6 mois */
const CONSENT_TTL_MS = 1000 * 60 * 60 * 24 * 182;

type StoredConsent = { value: "accepted" | "refused"; at: number };

// ── Lecture / écriture ───────────────────────────────────────────────────────

/** Lit le choix courant. Utilisable hors React (ex. au moment d'envoyer). */
export function getConsent(): ConsentState {
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return "pending";
    // L'ancien format (simple chaîne) échoue au parse → on redemande le choix
    const stored = JSON.parse(raw) as StoredConsent;
    if (stored.value !== "accepted" && stored.value !== "refused")
      return "pending";
    if (Date.now() - stored.at > CONSENT_TTL_MS) return "pending";
    return stored.value;
  } catch {
    return "pending";
  }
}

function write(value: "accepted" | "refused") {
  const stored: StoredConsent = { value, at: Date.now() };
  localStorage.setItem(CONSENT_KEY, JSON.stringify(stored));
  setCookie(value);
}

// ── Cookie (même durée de vie que le choix) ──────────────────────────────────
// Supprime-le si rien côté serveur ne le lit : localStorage suffit.

function setCookie(value: "accepted" | "refused") {
  const parts = [
    `${CONSENT_KEY}=${value}`,
    `max-age=${Math.round(CONSENT_TTL_MS / 1000)}`,
    "path=/",
    "SameSite=Lax",
  ];
  if (location.protocol === "https:") parts.push("Secure");
  document.cookie = parts.join("; ");
}

function deleteCookie() {
  document.cookie = `${CONSENT_KEY}=; max-age=0; path=/`;
}

// ── Store ────────────────────────────────────────────────────────────────────

function getServerSnapshot(): ConsentState {
  return "pending";
}

const listeners = new Set<() => void>();

function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

function notify() {
  listeners.forEach((cb) => cb());
}

// ── Hook ─────────────────────────────────────────────────────────────────────

export function useAnalyticsConsent() {
  const consent = useSyncExternalStore(
    subscribe,
    getConsent,
    getServerSnapshot,
  );

  const accept = () => {
    write("accepted");
    notify();
  };

  const refuse = () => {
    write("refused");
    notify();
  };

  const reset = () => {
    localStorage.removeItem(CONSENT_KEY);
    deleteCookie();
    notify();
  };

  return { consent, accept, refuse, reset };
}
