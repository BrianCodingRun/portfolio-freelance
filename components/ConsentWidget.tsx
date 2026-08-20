"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useAnalyticsConsent } from "@/hooks/useAnalyticsConsent";
import { Cookie } from "lucide-react";

export default function ConsentWidget() {
  const { consent, reset } = useAnalyticsConsent();

  if (consent === "pending") return null;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          onClick={reset}
          className={
            "fixed bg-card bottom-4 left-4 z-10 group flex items-center justify-between gap-2 px-3 py-1.5 border border-border shadow-md text-xs font-medium tracking-wide transition-all duration-150 hover:border-foreground/20 cursor-pointer overflow-hidden"
          }
        >
          <Cookie className={consent === "accepted" ? "text-primary" : ""} />
          <span className="hidden md:block">Gestion des cookies</span>
        </TooltipTrigger>
        <TooltipContent side="right">
          Modifier mes préférences de confidentialité
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
