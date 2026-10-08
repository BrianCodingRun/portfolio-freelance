import type { Map } from "maplibre-gl";

type Variant = "default" | "onDark";

const PALETTES = {
  default: {
    fill: "#D89B42",
    fillOpacity: 0.2,
    line: "#D89B42",
    lineOpacity: 0.6,
  },
  onDark: {
    fill: "#F5EDD8",
    fillOpacity: 0.14,
    line: "#F5EDD8",
    lineOpacity: 0.75,
  },
} as const;

const SOURCE = "communes";

export function addServiceAreaLayers(map: Map, variant: Variant = "default") {
  const palette = PALETTES[variant];

  // Insère sous la 1re couche de labels pour ne pas masquer les noms de villes
  const beforeId = map.getStyle().layers.find((l) => l.type === "symbol")?.id;

  map.addLayer(
    {
      id: "service-area-fill",
      type: "fill",
      source: SOURCE,
      paint: {
        "fill-color": palette.fill,
        "fill-opacity": palette.fillOpacity,
        "fill-antialias": false, // évite le liseré entre communes voisines
      },
    },
    beforeId,
  );

  map.addLayer(
    {
      id: "service-area-outline",
      type: "line",
      source: SOURCE,
      layout: {
        "line-join": "round",
        "line-cap": "round",
      },
      paint: {
        "line-color": palette.line,
        "line-opacity": palette.lineOpacity,
        // Trait qui s'épaissit légèrement avec le zoom
        "line-width": ["interpolate", ["linear"], ["zoom"], 8, 0.6, 12, 1.2],
      },
    },
    beforeId,
  );
}
