"use client";

import { TooltipProvider } from "@/components/ui/tooltip";
import dynamic from "next/dynamic";

const Analytics = dynamic(() => import("@/components/Analytics"));

const BackToTop = dynamic(() => import("@/components/BackToTop"));

const ConsentWidget = dynamic(() => import("@/components/ConsentWidget"));

const ConsentBanner = dynamic(() =>
  import("@/components/ConsentBanner").then((mod) => mod.ConsentBanner),
);

export default function ClientProviders() {
  return (
    <TooltipProvider>
      <ConsentWidget />
      <ConsentBanner />

      <Analytics />
      <BackToTop />
    </TooltipProvider>
  );
}
