import type { Map } from "maplibre-gl";
import { REUNION_BOUNDS } from "./constants";

export function fitReunion(map: Map) {
  map.fitBounds(REUNION_BOUNDS, {
    padding: 20,
    animate: false,
  });
}
