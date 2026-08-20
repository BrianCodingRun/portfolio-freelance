import type { Picture } from "@/types/picture";
import type { Project } from "@/types/project";
import type { Visit } from "@/types/visit";

const getTrend = (current: number, previous: number) => {
  if (previous === 0) return null;
  const trend = ((current - previous) / previous) * 100;
  return Math.round(trend * 10) / 10;
};

export const calculateVisitsTrend = (visits: Visit[]) => {
  const now = new Date();
  const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
  const fourteenDaysAgo = new Date(now.getTime() - 14 * 24 * 60 * 60 * 1000);

  const currentWeek = visits.filter(
    (v) => new Date(v.timestamp) >= sevenDaysAgo,
  ).length;

  const previousWeek = visits.filter(
    (v) =>
      new Date(v.timestamp) >= fourteenDaysAgo &&
      new Date(v.timestamp) < sevenDaysAgo,
  ).length;

  return getTrend(currentWeek, previousWeek);
};

export const calculateProjectsTrend = (projects: Project[]) => {
  const now = new Date();
  const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
  const fourteenDaysAgo = new Date(now.getTime() - 14 * 24 * 60 * 60 * 1000);

  const currentWeek = projects.filter(
    (p) => new Date(p.createdAt) >= sevenDaysAgo,
  ).length;

  const previousWeek = projects.filter(
    (p) =>
      new Date(p.createdAt) >= fourteenDaysAgo &&
      new Date(p.createdAt) < sevenDaysAgo,
  ).length;

  return getTrend(currentWeek, previousWeek);
};

export const calculateFilesTrend = (files: Picture[]) => {
  const now = new Date();
  const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
  const fourteenDaysAgo = new Date(now.getTime() - 14 * 24 * 60 * 60 * 1000);

  const currentWeek = files.filter(
    (f) => new Date(f.createdAt) >= sevenDaysAgo,
  ).length;

  const previousWeek = files.filter(
    (f) =>
      new Date(f.createdAt) >= fourteenDaysAgo &&
      new Date(f.createdAt) < sevenDaysAgo,
  ).length;

  return getTrend(currentWeek, previousWeek);
};
