"use client";

import type { BannerDTO } from "@/lib/dto/siteSettingsDTO";

import { dismissBanner } from "@/app/actions/siteSettingActions";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, X } from "lucide-react";
import Link from "next/link";
import { useState, useTransition } from "react";
import { BannerMessages } from "./BannerMessages";
import { Countdown } from "./Countdown";

type BannerProps = {
  banner: BannerDTO;
  preview?: boolean;
};

const backgroundClasses = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  accent: "bg-accent",
  destructive: "bg-destructive",
} as const;

const textClasses = {
  "primary-foreground": "text-primary-foreground",
  "secondary-foreground": "text-secondary-foreground",
  "accent-foreground": "text-accent-foreground",
  "destructive-foreground": "text-destructive-foreground",
} as const;

export function Banner({ banner, preview = false }: BannerProps) {
  const [expired, setExpired] = useState(false);
  const [closed, setClosed] = useState(false); // ← ajouté
  const [, startTransition] = useTransition(); // ← ajouté

  if (expired || closed) {
    // ← closed ajouté
    return null;
  }

  function handleClose() {
    // ← ajouté
    setClosed(true);
    if (!preview) {
      startTransition(() => {
        dismissBanner(banner.version);
      });
    }
  }

  return (
    <div
      className={cn(
        "w-full border-b transition-colors duration-300",
        backgroundClasses[banner.backgroundColor],
        textClasses[banner.textColor],
      )}
    >
      <div className="mx-auto flex flex-wrap h-12 max-w-screen-2xl items-center gap-6 px-6">
        {/* Zone principale */}
        <div className="flex min-w-0 flex-1 items-center justify-center">
          <BannerMessages banner={banner} />
        </div>
        {banner.showCountdown && banner.endDate && (
          <Countdown
            endDate={banner.endDate}
            onExpire={() => setExpired(true)}
          />
        )}
        {/* Bouton */}
        {banner.showButton &&
          (preview ? (
            <Button
              type="button"
              variant="link"
              className="group font-semibold text-current group text-sm lg:text-base"
            >
              {banner.button.text || "Découvrir l'offre"}{" "}
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </Button>
          ) : (
            <Link
              className={cn(
                buttonVariants({ variant: "link" }),
                "group font-semibold text-current group text-sm lg:text-base",
              )}
              href={banner.button.href}
            >
              {banner.button.text || "Découvrir l'offre"}{" "}
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>
          ))}

        {/* Fermeture */}
        {banner.closable && (
          <Button
            type="button"
            variant="link"
            size="icon"
            className="text-current"
            disabled={preview}
            onClick={handleClose}
            aria-label="Fermer la bannière"
          >
            <X className="size-4" />
          </Button>
        )}
      </div>
    </div>
  );
}
