import type { Map } from "maplibre-gl";

export function addServiceAreaLayers(map: Map) {
  map.addLayer({
    id: "service-area-fill",
    type: "fill",
    source: "communes",

    paint: {
      "fill-color": "#D89B42",
      "fill-opacity": 0.2,
      "fill-outline-color": "#F2C464",
    },
  });

  map.addLayer({
    id: "service-area-outline",
    type: "line",
    source: "communes",

    paint: {
      "line-color": "#D89B42",
      "line-width": 1,
      "line-opacity": 0.6,
    },
  });
}
