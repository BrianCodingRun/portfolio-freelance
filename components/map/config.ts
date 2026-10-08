import type { MapOptions, StyleSpecification } from "maplibre-gl";

/** Fond de la carte quand elle n'est pas transparente */
const BACKGROUND = "#2f2d2d";

/**
 * Style 100 % local : aucune tuile, aucune police ni aucun sprite n'est
 * téléchargé chez un tiers. La forme de l'île vient de ton GeoJSON des
 * communes, ajouté ensuite par `addCommunesSource` et `addServiceAreaLayers`.
 */
export function getMapConfig(
  transparent: boolean,
): Omit<MapOptions, "container"> {
  const style: StyleSpecification = {
    version: 8,
    sources: {},
    layers: transparent
      ? []
      : [
          {
            id: "background",
            type: "background",
            paint: { "background-color": BACKGROUND },
          },
        ],
  };

  return { style, attributionControl: false };
}
