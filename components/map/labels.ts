import type { Map } from "maplibre-gl";

type Variant = "default" | "onDark";

const TOWNS = [
  // Villes principales
  {
    name: "Saint-Denis",
    lngLat: [55.4481, -20.8789],
    priority: 1,
  },
  {
    name: "Saint-Pierre",
    lngLat: [55.4781, -21.3393],
    priority: 2,
  },
  {
    name: "Saint-Paul",
    lngLat: [55.2707, -21.0096],
    priority: 3,
  },
  {
    name: "Saint-Benoît",
    lngLat: [55.7125, -21.0339],
    priority: 4,
  },
  {
    name: "Saint-André",
    lngLat: [55.65, -20.9633],
    priority: 5,
  },

  // Villes secondaires
  {
    name: "Saint-Joseph",
    lngLat: [55.616, -21.378],
    priority: 6,
  },
  {
    name: "Le Tampon",
    lngLat: [55.5153, -21.2778],
    priority: 7,
  },
  {
    name: "Saint-Louis",
    lngLat: [55.4097, -21.2861],
    priority: 8,
  },
  {
    name: "Saint-Leu",
    lngLat: [55.288, -21.168],
    priority: 9,
  },
  {
    name: "Le Port",
    lngLat: [55.2917, -20.9376],
    priority: 10,
  },
  {
    name: "Sainte-Marie",
    lngLat: [55.55, -20.897],
    priority: 11,
  },
  {
    name: "Saint-Philippe",
    lngLat: [55.766, -21.359],
    priority: 12,
  },

  // Repère touristique (quartier de Saint-Paul)
  {
    name: "Saint-Gilles-les-Bains",
    lngLat: [55.227, -21.053],
    priority: 13,
  },
] as const;

const PALETTES = {
  default: {
    text: "#7A5D2A",
    halo: "#F5EEDC",
  },
  onDark: {
    text: "#EDE0C0",
    halo: "#221D14",
  },
} as const;

export function addTownLabels(map: Map, variant: Variant = "default") {
  const palette = PALETTES[variant];

  map.addSource("towns", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: TOWNS.map((town) => ({
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [...town.lngLat],
        },
        properties: {
          name: town.name,
          priority: town.priority,
        },
      })),
    },
  });

  map.addLayer({
    id: "town-labels",
    type: "symbol",
    source: "towns",
    layout: {
      "text-field": ["get", "name"],
      "text-font": ["Syne Regular"],
      "text-size": 12,
      "text-letter-spacing": 0.02,
      "text-transform": "uppercase",
      "text-anchor": "center",
      "text-allow-overlap": false,
      "text-ignore-placement": false,
      "symbol-sort-key": ["get", "priority"],
      "text-padding": 4,
    },
    paint: {
      "text-color": palette.text,
      "text-halo-color": palette.halo,
      "text-halo-width": 1,
      "text-halo-blur": 0.5,
    },
  });
}

export function updateTownLabelsTheme(map: Map, variant: Variant = "default") {
  if (!map.getLayer("town-labels")) return;

  const palette = PALETTES[variant];

  map.setPaintProperty("town-labels", "text-color", palette.text);
  map.setPaintProperty("town-labels", "text-halo-color", palette.halo);
}
