import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Project } from "@/types/project";
import Image from "next/image";

/**
 * Nombre maximum de badges techniques affichés.
 * À répercuter dans le dashboard (limite de saisie) pour qu'aucun badge
 * ne disparaisse sans explication.
 */
const MAX_BADGES = 5;

type Props = {
  project: Project;
  /** Affiche la card en version horizontale (image à gauche) pour les featured */
  featured?: boolean;
};

/**
 * Champs optionnels à ajouter à `Project` (types + schéma Mongoose + dashboard) :
 *  - result?: string         → bénéfice concret, ex. « 3 rôles gérés : admin, instructeur, apprenant »
 *  - coverAlt?: string       → texte alternatif descriptif de la capture
 *  - coverPosition?: string  → object-position CSS, ex. "left top" ou "50% 20%"
 *                              pour recadrer la capture sur l'élément clé
 */

export default function ProjectCardTwo({ project, featured = false }: Props) {
  const { result, coverAlt, coverPosition } = project as Project & {
    result?: string;
    coverAlt?: string;
    coverPosition?: string;
  };

  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0">
      <div className="border border-border p-4">
        <Image
          src={project.coverImage}
          width={300}
          height={200}
          style={{
            objectPosition: coverPosition ?? "center top",
          }}
          alt={coverAlt ? coverAlt : ""}
          className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40 sepia"
        />
      </div>
      <CardHeader>
        <CardAction>
          <Badge variant="secondary">Featured</Badge>
        </CardAction>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.tagline}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full">Voir le projet</Button>
      </CardFooter>
    </Card>
  );
}
