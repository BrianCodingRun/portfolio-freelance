// lib/slugify.ts
export function slugify(title: string): string {
  return title
    .toLowerCase()
    .normalize("NFD") // décompose les accents
    .replace(/[\u0300-\u036f]/g, "") // supprime les accents
    .replace(/[^a-z0-9]+/g, "-") // remplace les caractères spéciaux par -
    .replace(/(^-|-$)/g, ""); // supprime les - en début/fin
}

// "Acadyo E-Learning Platform" → "acadyo-e-learning-platform"
// "Météo Réunion" → "meteo-reunion"
