import type { Metadata } from "next";

type BuildMetadataParams = {
  /**
   * Titre de la page. Omets ce champ pour la page d'accueil : elle héritera
   * alors du `default` défini dans le layout, sans passer par le template
   * "%s | Nexmyr - ...".
   */
  title?: string;
  description: string;
  /** Chemin de la page pour le canonical, ex. "/projects", "/contact". */
  path: string;
  /**
   * Image Open Graph / Twitter, 1200x630. Si omise, une image est générée
   * dynamiquement via /og avec le titre de la page (ou "Nexmyr" par défaut
   * sur la home). Passe une URL (ex. une image de couverture de projet)
   * pour l'utiliser à la place de l'image générée.
   */
  image?: string;
  imageAlt?: string;
  type?: "website" | "article";
  /** Passe à false pour une page à ne pas indexer (ex. "introuvable"). */
  index?: boolean;
};

function buildOgImageUrl(title?: string): string {
  const params = new URLSearchParams();
  if (title) params.set("title", title);
  const query = params.toString();
  return `/og${query ? `?${query}` : ""}`;
}

export function buildMetadata({
  title,
  description,
  path,
  image,
  imageAlt,
  type = "website",
  index = true,
}: BuildMetadataParams): Metadata {
  const titleField = title ? { title } : {};
  const resolvedImage = image ?? buildOgImageUrl(title);

  return {
    ...titleField,
    description,
    alternates: {
      canonical: path,
    },
    robots: {
      index,
      follow: index,
    },
    openGraph: {
      ...titleField,
      description,
      type,
      images: [
        {
          url: resolvedImage,
          width: 1200,
          height: 630,
          alt: imageAlt ?? title ?? "Nexmyr",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      ...titleField,
      description,
      images: [resolvedImage],
    },
  };
}
