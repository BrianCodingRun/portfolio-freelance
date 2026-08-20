import type { MapOptions } from "maplibre-gl";

export const mapConfig: Omit<MapOptions, "container"> = {
  style: `https://api.maptiler.com/maps/backdrop-dark/style.json?key=${process.env.NEXT_PUBLIC_MAPTILER_API_KEY}`,
  attributionControl: false,
};
