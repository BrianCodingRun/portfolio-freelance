import type { Map } from "maplibre-gl";
import { SOUTH_REUNION_BOUNDS } from "./constants";

export function fitSouthReunion(map: Map) {
  map.fitBounds(SOUTH_REUNION_BOUNDS, {
    padding: 20,
    zoom: 9.5,
    animate: false,
  });
}
