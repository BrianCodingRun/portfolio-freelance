import type { Map } from "maplibre-gl";

type Variant = "default" | "onDark";

const PALETTES = {
  default: {
    fill: "#7A5D2A",
    fillOpacity: 0.08,
    line: "#7A5D2A",
    lineOpacity: 0.85,
  },
  onDark: {
    fill: "#C9A66B",
    fillOpacity: 0.08,
    line: "#C9A66B",
    lineOpacity: 0.85,
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

export function updateServiceAreaTheme(map: Map, variant: Variant) {
  const palette = PALETTES[variant];

  if (map.getLayer("service-area-fill")) {
    map.setPaintProperty("service-area-fill", "fill-color", palette.fill);

    map.setPaintProperty(
      "service-area-fill",
      "fill-opacity",
      palette.fillOpacity,
    );
  }

  if (map.getLayer("service-area-outline")) {
    map.setPaintProperty("service-area-outline", "line-color", palette.line);

    map.setPaintProperty(
      "service-area-outline",
      "line-opacity",
      palette.lineOpacity,
    );
  }
}
