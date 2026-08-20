// app/preview/banner/BannerPreviewClient.tsx
"use client";

import { BannerPreview } from "@/components/banner/BannerPreview";
import { decodeBannerPayload } from "@/lib/banners/bannerPreviewEncoding";
import type { BannerDTO } from "@/lib/dto/siteSettingsDTO";
import { useSearchParams } from "next/navigation";

export function BannerPreviewClient() {
  const params = useSearchParams();
  const raw = params.get("data");
  const banner = raw ? decodeBannerPayload<BannerDTO>(raw) : null;

  if (!banner) {
    return (
      <div className="min-h-screen flex items-center justify-center text-muted-foreground text-sm">
        Aperçu invalide ou expiré.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <BannerPreview banner={banner} />
      <div className="px-6 py-10 text-center text-sm text-muted-foreground">
        Aperçu en temps réel — les modifications non enregistrées ne sont pas
        persistées ici.
      </div>
    </div>
  );
}
