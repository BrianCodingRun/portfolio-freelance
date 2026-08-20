export type AnalyticsEntry = {
  _id?: string;
  timestamp: Date;
  pathname: string;
  duration: number;
  ip: string;
  location: {
    country: string;
    city: string;
  };
  device: string;
  browser: string;
  os: string;
};

export type Period = "today" | "7d" | "30d" | "90d";

export type AnalyticsStats = {
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
