import type { Map } from "maplibre-gl";

export function addCommunesSource(map: Map) {
  map.addSource("communes", {
    type: "geojson",
    data: "/geojson/reunion-communes.geojson",
  });
}
