"use client";

import { getDeviceInfo, getGeoInfo } from "@/helpers/analytics-helpers";
import { useAnalyticsConsent } from "@/hooks/useAnalyticsConsent";
import { AnalyticsEntry } from "@/types/analytics";
import { getIpAddress } from "@/utils/getIpAddress";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function Analytics() {
  const pathname = usePathname();
  const { consent } = useAnalyticsConsent();
  const startRef = useRef<number>(0);
  const isFirstRender = useRef<boolean>(true);

  // Remet le timer à zéro à chaque changement de route
  useEffect(() => {
    startRef.current = Date.now();
  }, [pathname]);

  useEffect(() => {
    // Ne pas envoyer au premier rendu : la page vient juste de s'afficher,
    // la durée serait 0. On attend la prochaine navigation pour envoyer
    // les analytics de cette page-ci.
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (consent !== "accepted") return;
    if (pathname.startsWith("/dashboard")) return;

    const recordAndSend = async () => {
      const duration = Math.round((Date.now() - startRef.current) / 1000);
      const ip = await getIpAddress();
      const userAgent = window.navigator.userAgent;
      const location = await getGeoInfo(ip);
      const deviceInfo = getDeviceInfo(userAgent);

      const event: AnalyticsEntry = {
        timestamp: new Date(),
        pathname,
        duration,
        ip,
        location,
        ...deviceInfo,
      };

      try {
        await fetch(
          (process.env.NEXT_PUBLIC_ANALYTICS_API_URL as string) + "/add",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(event),
            keepalive: true,
          },
        );
      } catch (error) {
        console.error("Error sending analytics:", error);
      }
    };

    recordAndSend();
  }, [pathname, consent]);

  return null;
}
