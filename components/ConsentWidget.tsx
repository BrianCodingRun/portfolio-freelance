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
            "fixed bottom-6 left-6 z-10 tracking-wide transition-all duration-150 cursor-pointer overflow-hidden"
          }
        >
          <Cookie
            className={`size-8 ${consent === "accepted" && "text-primary"}`}
          />
        </TooltipTrigger>
        <TooltipContent side="right">
          Modifier mes préférences de confidentialité
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
