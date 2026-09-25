"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useTheme } from "next-themes";
import Image from "next/image";

export function ToggleTheme() {
  const { setTheme, theme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger aria-label="Basculer le thème clair/sombre">
          <label
            htmlFor="switch"
            aria-label="Basculer le thème clair/sombre"
            className="relative flex w-14 h-6 rounded-full p-0.5 duration-500 cursor-pointer bg-primary dark:bg-primary-foreground ring-2 ring-black/15 dark:ring-primary/15 overflow-hidden"
          >
            <input
              type="checkbox"
              id="switch"
              className="sr-only peer"
              onClick={toggleTheme}
            />

            {/* Couche des nuages : superposée, en dehors du flux flex */}
            <div className="absolute inset-0 pointer-events-none">
              <Image
                src="/assets/cloud_1.svg"
                alt=""
                className="absolute -bottom-2.5 left-1.5 z-30 translate-x-0 translate-y-0 w-8 will-change-transform transition-transform duration-500 dark:-translate-x-6 dark:translate-y-1.5"
                width={1}
                height={1}
              />
              <Image
                src="/assets/cloud_2.svg"
                alt=""
                className="absolute -bottom-2.5 left-3 opacity-70 translate-x-0 translate-y-0 w-8 will-change-transform transition-transform duration-500 dark:-translate-x-10 dark:translate-y-1"
                width={1}
                height={1}
              />
              <Image
                src="/assets/cloud_3.svg"
                alt=""
                className="absolute -bottom-2 right-0 z-20 translate-x-0 translate-y-0 w-8 will-change-transform transition-transform duration-500 dark:translate-x-8 dark:translate-y-1"
                width={1}
                height={1}
              />
              <Image
                src="/assets/cloud_4.svg"
                alt=""
                className="absolute -bottom-1.5 -right-1.5 opacity-80 translate-x-0 translate-y-0 w-8 will-change-transform transition-transform duration-500 dark:translate-x-8 dark:-translate-y-2.5"
                width={1}
                height={1}
              />
              <Image
                src="/assets/stars.svg"
                alt=""
                className="absolute w-16 top-1/2 left-0 -translate-y-1/2 will-change-transform transition-all dark:top-2/4 opacity-0 dark:opacity-100 duration-700"
                width={1}
                height={1}
              />
            </div>

            {/* Knob, au-dessus des nuages */}
            <div className="relative z-10 shrink-0 w-4 h-4 dark:w-4.5 dark:h-4.5 rounded-full bg-primary-foreground top-0.5 left-0.5 dark:top-0 dark:left-0 dark:bg-primary transition-all duration-200 ease-in dark:translate-x-8 dark:-rotate-12">
              <div className="absolute top-0.5 left-0.5 w-[70%] h-[70%] rounded-full dark:bg-primary-foreground dark:top-0 dark:left-0 transition-colors" />
            </div>
          </label>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          {theme === "dark"
            ? "Désactiver le mode sombre"
            : "Activer le mode sombre"}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
