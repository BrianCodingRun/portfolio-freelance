"use client";

import maplibregl from "maplibre-gl";
import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";
import { fitReunion } from "./bounds";
import { getMapConfig } from "./config";
import { addTownLabels, updateTownLabelsTheme } from "./labels";
import { addLandmarks, updateLandmarksTheme } from "./landmarks";
import { addServiceAreaLayers, updateServiceAreaTheme } from "./layers";
import { addCommunesSource } from "./sources";

type MapProps = {
  className?: string;
  interactive?: boolean;
  transparent?: boolean;
};

export default function Map({
  className,
  interactive = true,
  transparent = false,
}: MapProps) {
  const { resolvedTheme } = useTheme();

  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);

  // Conserver le thème courant pour l'initialisation asynchrone.
  const variantRef = useRef<"default" | "onDark">("default");

  variantRef.current = resolvedTheme === "dark" ? "onDark" : "default";

  // Initialisation de MapLibre
  useEffect(() => {
    if (!containerRef.current) return;

    const map = new maplibregl.Map({
      container: containerRef.current,
      ...getMapConfig(transparent),
      interactive,
    });

    mapRef.current = map;

    map.once("load", () => {
      fitReunion(map, 12);

      const isMobile = map.getContainer().clientWidth < 320;

      if (!isMobile) {
        map.setZoom(map.getZoom() + 0.3);
      }

      addCommunesSource(map);
      addServiceAreaLayers(map, variantRef.current);
      addTownLabels(map, variantRef.current);
      addLandmarks(map, variantRef.current);
    });

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, [interactive, transparent]);

  // Actualisation des couleurs au changement de thème
  useEffect(() => {
    const map = mapRef.current;

    if (!map || !map.isStyleLoaded()) return;

    const variant = resolvedTheme === "dark" ? "onDark" : "default";

    updateServiceAreaTheme(map, variant);
    updateTownLabelsTheme(map, variant);
    updateLandmarksTheme(map, variant);
  }, [resolvedTheme]);

  return <div ref={containerRef} className={cn("size-full", className)} />;
}
