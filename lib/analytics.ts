import type { AnalyticsEntry, AnalyticsStats, Period } from "@/types/analytics";

const API_URL = process.env.NEXT_PUBLIC_ANALYTICS_API_URL!;

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

export async function fetchAnalytics(
  period: Period,
): Promise<AnalyticsEntry[]> {
  const res = await fetch(`${API_URL}`, {
    next: { revalidate: 120 },
  });

  if (!res.ok) throw new Error("Erreur fetch analytics");
  const all: AnalyticsEntry[] = await res.json();

  const { from } = getPeriodRange(period);
  return all.filter((e) => new Date(e.timestamp) >= from);
}

export async function fetchAnalyticsPrev(
  period: Period,
): Promise<AnalyticsEntry[]> {
  const res = await fetch(`${API_URL}`, {
    next: { revalidate: 120 },
  });

  if (!res.ok) return [];
  const all: AnalyticsEntry[] = await res.json();

  const { prevFrom, prevTo } = getPeriodRange(period);
  return all.filter(
    (e) => new Date(e.timestamp) >= prevFrom && new Date(e.timestamp) <= prevTo,
  );
}

// --- Agrégations ---

function countUnique(
  entries: AnalyticsEntry[],
  key: (e: AnalyticsEntry) => string,
): number {
  return new Set(entries.map(key)).size;
}

function countBy<T extends string>(
  entries: AnalyticsEntry[],
  key: (e: AnalyticsEntry) => T,
  limit = 5,
): { name: T; count: number }[] {
  const map = new Map<T, number>();
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
  const map = new Map<string, number>();
  for (const e of entries) {
    map.set(e.pathname, (map.get(e.pathname) ?? 0) + 1);
  }
  return Array.from(map.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([pathname, count]) => ({ pathname, count }));
}

function countCountries(entries: AnalyticsEntry[], limit = 5) {
  const map = new Map<string, number>();
  for (const e of entries) {
    const c = e.location.country;
    map.set(c, (map.get(c) ?? 0) + 1);
  }
  return Array.from(map.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([country, count]) => ({ country, count }));
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
    const key = getKey(d);
    buckets.set(key, { current: 0, previous: 0 });
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

  const uniqueVisitors = countUnique(current, (e) => e.ip);
  const uniqueVisitorsPrev = countUnique(previous, (e) => e.ip);

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

  // Pages par session = total visites / visiteurs uniques
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
    devices: countBy(current, (e) => e.device as any),
    browsers: countBy(current, (e) => e.browser as any),
    systems: countBy(current, (e) => e.os as any),
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
