import type { AnalyticsEntry, AnalyticsStats, Period } from "@/types/analytics";

// Variables serveur uniquement (sans NEXT_PUBLIC_) : le jeton ne doit jamais
// atteindre le navigateur. Ce fichier ne doit donc être importé que depuis des
// composants serveur, des server actions ou des route handlers.
const API_URL = process.env.ANALYTICS_API_URL;
const READ_TOKEN = process.env.ANALYTICS_READ_TOKEN;

type Count = { name: string; count: number };

function getPeriodRange(period: Period): {
  from: Date;
  to: Date;
  prevFrom: Date;
  prevTo: Date;
} {
  const to = new Date();
  const from = new Date();

  const days =
    period === "today" ? 1 : period === "7d" ? 7 : period === "30d" ? 30 : 90;
  from.setDate(from.getDate() - days);

  const prevTo = new Date(from);
  const prevFrom = new Date(from);
  prevFrom.setDate(prevFrom.getDate() - days);

  return { from, to, prevFrom, prevTo };
}

// --- Récupération : l'API filtre par période et exige le jeton ---

async function fetchRange(from: Date, to: Date): Promise<AnalyticsEntry[]> {
  if (!API_URL || !READ_TOKEN) {
    throw new Error("ANALYTICS_API_URL et ANALYTICS_READ_TOKEN sont requis");
  }

  const url = `${API_URL}?from=${from.toISOString()}&to=${to.toISOString()}`;
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${READ_TOKEN}` },
    next: { revalidate: 120 },
  });

  if (!res.ok) throw new Error("Erreur fetch analytics");
  return res.json();
}

export async function fetchAnalytics(
  period: Period,
): Promise<AnalyticsEntry[]> {
  const { from, to } = getPeriodRange(period);
  return fetchRange(from, to);
}

export async function fetchAnalyticsPrev(
  period: Period,
): Promise<AnalyticsEntry[]> {
  const { prevFrom, prevTo } = getPeriodRange(period);
  try {
    return await fetchRange(prevFrom, prevTo);
  } catch {
    // La période précédente sert seulement à la comparaison
    return [];
  }
}

// --- Agrégations ---

function countUnique(
  entries: AnalyticsEntry[],
  key: (e: AnalyticsEntry) => string,
): number {
  return new Set(entries.map(key)).size;
}

function countBy(
  entries: AnalyticsEntry[],
  key: (e: AnalyticsEntry) => string,
  limit = 5,
): Count[] {
  const map = new Map<string, number>();
  for (const e of entries) {
    const k = key(e);
    map.set(k, (map.get(k) ?? 0) + 1);
  }
  return Array.from(map.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([name, count]) => ({ name, count }));
}

function countPages(entries: AnalyticsEntry[], limit = 5) {
  return countBy(entries, (e) => e.pathname, limit).map(({ name, count }) => ({
    pathname: name,
    count,
  }));
}

function countCountries(entries: AnalyticsEntry[], limit = 5) {
  return countBy(entries, (e) => e.location?.country ?? "Unknown", limit).map(
    ({ name, count }) => ({ country: name, count }),
  );
}

function buildChartData(
  current: AnalyticsEntry[],
  previous: AnalyticsEntry[],
  period: Period,
): { date: string; current: number; previous: number }[] {
  const days =
    period === "today" ? 24 : period === "7d" ? 7 : period === "30d" ? 30 : 90;
  const format = period === "today" ? "hour" : "day";

  const buckets = new Map<string, { current: number; previous: number }>();

  const getKey = (date: Date) => {
    if (format === "hour") return `${date.getHours()}h`;
    return date.toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "2-digit",
    });
  };

  // Initialise les buckets
  const now = new Date();
  for (let i = days - 1; i >= 0; i--) {
    const d = new Date(now);
    if (format === "hour") d.setHours(d.getHours() - i);
    else d.setDate(d.getDate() - i);
    buckets.set(getKey(d), { current: 0, previous: 0 });
  }

  for (const e of current) {
    const key = getKey(new Date(e.timestamp));
    if (buckets.has(key)) buckets.get(key)!.current++;
  }
  for (const e of previous) {
    const key = getKey(new Date(e.timestamp));
    if (buckets.has(key)) buckets.get(key)!.previous++;
  }

  return Array.from(buckets.entries()).map(([date, val]) => ({ date, ...val }));
}

export async function computeStats(period: Period): Promise<AnalyticsStats> {
  const [current, previous] = await Promise.all([
    fetchAnalytics(period),
    fetchAnalyticsPrev(period),
  ]);

  // L'identifiant change chaque jour : on compte donc des visiteurs uniques
  // PAR JOUR, cumulés sur la période (et non des personnes distinctes).
  const uniqueVisitors = countUnique(current, (e) => e.visitorId);
  const uniqueVisitorsPrev = countUnique(previous, (e) => e.visitorId);

  const avgDuration =
    current.length > 0
      ? Math.round(current.reduce((s, e) => s + e.duration, 0) / current.length)
      : 0;
  const avgDurationPrev =
    previous.length > 0
      ? Math.round(
          previous.reduce((s, e) => s + e.duration, 0) / previous.length,
        )
      : 0;

  // Pages par session ≈ total de pages vues / visiteurs uniques du jour
  const pagesPerSession =
    uniqueVisitors > 0
      ? Math.round((current.length / uniqueVisitors) * 10) / 10
      : 0;
  const pagesPerSessionPrev =
    uniqueVisitorsPrev > 0
      ? Math.round((previous.length / uniqueVisitorsPrev) * 10) / 10
      : 0;

  return {
    uniqueVisitors,
    uniqueVisitorsPrev,
    avgDuration,
    avgDurationPrev,
    pagesPerSession,
    pagesPerSessionPrev,
    topPages: countPages(current),
    topCountries: countCountries(current),
    devices: countBy(current, (e) => e.device),
    browsers: countBy(current, (e) => e.browser),
    systems: countBy(current, (e) => e.os),
    chartData: buildChartData(current, previous, period),
    recentVisits: [...current]
      .sort(
        (a, b) =>
          new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime(),
      )
      .slice(0, 8),
  };
}

// Formate une durée en secondes → "2m 34s"
export function formatDuration(seconds: number): string {
  if (seconds < 60) return `${seconds}s`;
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return s > 0 ? `${m}m ${s}s` : `${m}m`;
}

// Calcule le delta en %
export function delta(
  current: number,
  prev: number,
): { value: number; up: boolean } {
  if (prev === 0) return { value: 0, up: true };
  const value = Math.round(((current - prev) / prev) * 100);
  return { value: Math.abs(value), up: value >= 0 };
}
