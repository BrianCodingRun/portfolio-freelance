export type AnalyticsEntry = {
  _id?: string;
  timestamp: Date | string;
  pathname: string;
  duration: number;
  /** Identifiant haché qui change chaque jour (aucune IP stockée) */
  visitorId: string;
  location: {
    country: string;
  };
  device: string;
  browser: string;
  os: string;
};

export type Period = "today" | "7d" | "30d" | "90d";

export type AnalyticsStats = {
  /** Visiteurs uniques par jour, cumulés sur la période */
  uniqueVisitors: number;
  uniqueVisitorsPrev: number;
  avgDuration: number;
  avgDurationPrev: number;
  pagesPerSession: number;
  pagesPerSessionPrev: number;
  topPages: { pathname: string; count: number }[];
  topCountries: { country: string; count: number }[];
  devices: { name: string; count: number }[];
  browsers: { name: string; count: number }[];
  systems: { name: string; count: number }[];
  chartData: { date: string; current: number; previous: number }[];
  recentVisits: AnalyticsEntry[];
};
