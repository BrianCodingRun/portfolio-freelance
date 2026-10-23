import type { Map } from "maplibre-gl";
import { REUNION_BOUNDS } from "./constants";

export function fitReunion(map: Map, padding = 20) {
  map.fitBounds(REUNION_BOUNDS, {
    padding,
    offset: [0, 15],
    maxZoom: 10,
    animate: false,
  });
}
