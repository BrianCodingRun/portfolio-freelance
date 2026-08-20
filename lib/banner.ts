import type { Banner } from "@/types/banner";

export function isBannerActive(banner: Banner | null): boolean {
  if (!banner) return false;

  if (!banner.enabled) return false;

  const now = new Date();

  if (banner.startDate && now < new Date(banner.startDate)) return false;
  if (banner.endDate && now > new Date(banner.endDate)) return false;

  return true;
}

export const BANNER_DISMISS_COOKIE = "banner_dismissed_version";
