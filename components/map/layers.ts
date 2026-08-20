import type { Map } from "maplibre-gl";
import { SERVICE_AREA } from "./constants";

export function addServiceAreaLayers(map: Map) {
  map.addLayer({
    id: "service-area-fill",
    type: "fill",
    source: "communes",

    filter: ["in", ["get", "nom"], ["literal", [...SERVICE_AREA]]],

    paint: {
      "fill-color": "#D89B42",
      "fill-opacity": 0.3,
      "fill-outline-color": "#F2C464",
    },
  });

  map.addLayer({
    id: "service-area-outline",
    type: "line",
    source: "communes",

    filter: ["in", ["get", "nom"], ["literal", [...SERVICE_AREA]]],

    paint: {
      "line-color": "#D89B42",
      "line-width": 1.5,
      "line-opacity": 0.8,
    },
  });
}
