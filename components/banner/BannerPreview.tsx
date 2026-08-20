import type { SiteSettingsDTO } from "@/lib/dto/siteSettingsDTO";

import { Banner } from "./Banner";

export function BannerPreview({ banner }: SiteSettingsDTO) {
  return <Banner banner={banner} preview />;
}
