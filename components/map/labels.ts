import maplibregl, { type Map } from "maplibre-gl";

type Variant = "default" | "onDark";

/**
 * Principales villes affichées sur la carte, [longitude, latitude].
 * Saint-Joseph n'y figure pas : le marqueur du bureau s'y trouve déjà.
 * Coordonnées approximatives : ajuste-les si un nom tombe mal sur l'île.
 */
const TOWNS: { name: string; lngLat: [number, number] }[] = [
  { name: "Saint-Denis", lngLat: [55.4481, -20.8789] },
  { name: "Saint-André", lngLat: [55.65, -20.9633] },
  { name: "Saint-Benoît", lngLat: [55.7125, -21.0339] },
  { name: "Saint-Paul", lngLat: [55.2707, -21.0096] },
  { name: "Le Port", lngLat: [55.2917, -20.9376] },
  { name: "Saint-Louis", lngLat: [55.4097, -21.2861] },
  { name: "Le Tampon", lngLat: [55.5153, -21.2778] },
  { name: "Saint-Pierre", lngLat: [55.4781, -21.3393] },
];

/**
 * Les noms sont de simples éléments HTML positionnés par MapLibre : ils
 * n'ont pas besoin des polices de carte (glyphes) d'un fournisseur de tuiles.
 */
export function addTownLabels(map: Map, variant: Variant = "default") {
  for (const town of TOWNS) {
    const element = document.createElement("span");
    element.className =
      variant === "onDark" ? "town-label town-label--onDark" : "town-label";
    element.textContent = town.name;

    new maplibregl.Marker({ element, anchor: "center" })
      .setLngLat(town.lngLat)
      .addTo(map);
  }
}
