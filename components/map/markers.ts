import maplibregl, { type Map } from "maplibre-gl";

const OFFICE_COORDINATES: [number, number] = [55.6167, -21.3833];

export function addOfficeMarker(map: Map) {
  const markerElement = document.createElement("div");

  markerElement.className = "office-marker";

  new maplibregl.Marker({
    element: markerElement,
    anchor: "center",
  })
    .setLngLat(OFFICE_COORDINATES)
    .addTo(map);
}
