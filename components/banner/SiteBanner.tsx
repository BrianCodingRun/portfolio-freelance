import { getBanner } from "@/lib/api/banner";
import { BANNER_DISMISS_COOKIE, isBannerActive } from "@/lib/banner";
import { cookies } from "next/headers";
import { Banner } from "./Banner";

export async function SiteBanner() {
  const banner = await getBanner();

  if (banner === null) return;

  if (!isBannerActive(banner)) return null;

  const cookieStore = await cookies();
  const dismissedVersion = cookieStore.get(BANNER_DISMISS_COOKIE)?.value;

  if (dismissedVersion === String(banner.version)) return null;

  return (
    <div className="hidden xl:block">
      <Banner banner={banner} />
    </div>
  );
}
