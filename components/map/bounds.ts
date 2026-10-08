import type { Map } from "maplibre-gl";
import { REUNION_BOUNDS } from "./constants";

export function fitReunion(map: Map, padding = 40) {
  map.fitBounds(REUNION_BOUNDS, { padding, animate: false });
}
