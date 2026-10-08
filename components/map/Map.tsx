"use client";

import maplibregl from "maplibre-gl";
import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";
import { fitReunion } from "./bounds";
import { getMapConfig } from "./config";
import { addTownLabels } from "./labels";
import { addServiceAreaLayers } from "./layers";
import { addOfficeMarker } from "./markers";
import { addCommunesSource } from "./sources";

import "./marker.css";

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
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const variant = transparent ? "onDark" : "default";

    const map = new maplibregl.Map({
      container: containerRef.current,
      ...getMapConfig(transparent),
      interactive,
    });

    map.once("load", () => {
      fitReunion(map, transparent ? 8 : 40);
      addCommunesSource(map);
      addServiceAreaLayers(map, variant);
      addTownLabels(map, variant);
      addOfficeMarker(map);
    });

    mapRef.current = map;

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, [interactive, transparent]);

  return <div ref={containerRef} className={cn("size-full", className)} />;
}
