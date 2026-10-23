import type { Map } from "maplibre-gl";

type Variant = "default" | "onDark";

const LANDMARKS = [
  {
    name: "Mafate",
    lngLat: [55.423, -21.061],
    priority: 1,
  },
  {
    name: "Salazie",
    lngLat: [55.508, -21.046],
    priority: 2,
  },
  {
    name: "Cilaos",
    lngLat: [55.471, -21.137],
    priority: 3,
  },
  {
    name: "Piton de la Fournaise",
    lngLat: [55.7089, -21.2445],
    priority: 4,
  },
] as const;

const PALETTES = {
  default: {
    text: "#967239",
    point: "#967239",
    halo: "#F5EEDC",
  },
  onDark: {
    text: "#C9A66B",
    point: "#C9A66B",
    halo: "#221D14",
  },
} as const;

export function addLandmarks(map: Map, variant: Variant = "default") {
  const palette = PALETTES[variant];

  map.addSource("landmarks", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: LANDMARKS.map((landmark) => ({
        type: "Feature",
        properties: {
          name: landmark.name,
          priority: landmark.priority,
        },
        geometry: {
          type: "Point",
          coordinates: [...landmark.lngLat],
        },
      })),
    },
  });

  map.addLayer({
    id: "landmark-points",
    type: "circle",
    source: "landmarks",
    paint: {
      "circle-radius": 2.5,
      "circle-color": palette.point,
      "circle-opacity": 0.8,
    },
  });

  map.addLayer({
    id: "landmark-labels",
    type: "symbol",
    source: "landmarks",
    layout: {
      "text-field": ["get", "name"],
      "text-font": ["Syne Regular"],
      "text-size": 10,
      "text-letter-spacing": 0.04,
      "text-transform": "none",
      "text-anchor": "left",
      "text-offset": [0.8, 0],
      "text-allow-overlap": false,
      "text-ignore-placement": false,
      "symbol-sort-key": ["get", "priority"],
      "text-padding": 4,
      "text-max-width": 9,
    },
    paint: {
      "text-color": palette.text,
      "text-halo-color": palette.halo,
      "text-halo-width": 1,
    },
  });
}

export function updateLandmarksTheme(map: Map, variant: Variant = "default") {
  const palette = PALETTES[variant];

  if (map.getLayer("landmark-points")) {
    map.setPaintProperty("landmark-points", "circle-color", palette.point);
  }

  if (map.getLayer("landmark-labels")) {
    map.setPaintProperty("landmark-labels", "text-color", palette.text);

    map.setPaintProperty("landmark-labels", "text-halo-color", palette.halo);
  }
}
