"use client";

import maplibregl from "maplibre-gl";
import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";
import { fitSouthReunion } from "./bounds";
import { mapConfig } from "./config";
import { addServiceAreaLayers } from "./layers";
import { addOfficeMarker } from "./markers";
import { addCommunesSource } from "./sources";

import "./marker.css";

type MapProps = {
  className?: string;
};

export default function Map({ className }: MapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = new maplibregl.Map({
      container: containerRef.current,
      ...mapConfig,
    });

    map.once("load", () => {
      fitSouthReunion(map);
      addCommunesSource(map);
      addServiceAreaLayers(map);
      addOfficeMarker(map);

      map.setLayoutProperty("Town labels", "text-size", 15);

      map.setLayerZoomRange("Town labels", 3, 24);
      map.setLayerZoomRange("Village labels", 8, 24);
    });

    mapRef.current = map;

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  return <div ref={containerRef} className={cn("size-full", className)} />;
}
