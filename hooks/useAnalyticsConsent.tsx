import { useSyncExternalStore } from "react";

type ConsentState = "pending" | "accepted" | "refused";

const CONSENT_KEY = "analytics_consent";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 an

// ── Cookie helpers ────────────────────────────────────────────────────────────

function setCookie(value: "accepted" | "refused") {
  document.cookie = [
    `${CONSENT_KEY}=${value}`,
    `max-age=${COOKIE_MAX_AGE}`,
    "path=/",
    "SameSite=Lax",
    // Décommente si ton site est en HTTPS uniquement :
    // "Secure",
  ].join("; ");
}

function deleteCookie() {
  document.cookie = `${CONSENT_KEY}=; max-age=0; path=/`;
}

// ── Store (localStorage comme source de vérité côté client) ──────────────────

function getSnapshot(): ConsentState {
  const stored = localStorage.getItem(CONSENT_KEY) as ConsentState | null;
  return stored === "accepted" || stored === "refused" ? stored : "pending";
}

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
    getSnapshot,
    getServerSnapshot,
  );

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    setCookie("accepted");
    notify();
  };

  const refuse = () => {
    localStorage.setItem(CONSENT_KEY, "refused");
    setCookie("refused");
    notify();
  };

  const reset = () => {
    localStorage.removeItem(CONSENT_KEY);
    deleteCookie();
    notify();
  };

  return { consent, accept, refuse, reset };
}
