import Section from "@/components/Section";
import type { FormulaPricing, Pricing } from "@/types/pricing";
import { ArrowUpRight, Code2, Monitor, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Category = {
  id: Extract<FormulaPricing, "pack" | "app" | "maintenance">;
  title: string;
  description: string;
  href: string;
  icon: typeof Monitor;
  unit?: string;
  image: string;
};

const categories: Category[] = [
  {
    id: "pack",
    title: "Sites web",
    description:
      "Présentez votre activité, développez votre visibilité et transformez vos visiteurs en clients.",
    href: "/pricings/sites-web",
    icon: Monitor,
    image: "/images/pricings/sites-web.webp",
  },
  {
    id: "app",
    title: "Applications",
    description:
      "Des solutions web et mobiles conçues pour répondre aux besoins spécifiques de votre activité.",
    href: "/pricings/applications",
    icon: Code2,
    image: "/images/pricings/applications.webp",
  },
  {
    id: "maintenance",
    title: "Maintenance",
    description:
      "Gardez votre site performant, sécurisé et disponible grâce à un accompagnement régulier.",
    href: "/pricings/maintenance",
    icon: ShieldCheck,
    unit: "/mois",
    image: "/images/pricings/maintenance.webp",
  },
];

function getStartingPrice(
  pricings: Pricing[],
  category: FormulaPricing,
): number | null {
  const prices = pricings
    .filter(
      (pricing) =>
        pricing.active &&
        pricing.categorie === category &&
        !pricing.onQuote &&
        Number.isFinite(pricing.price) &&
        pricing.price > 0,
    )
    .map((pricing) => pricing.price);

  return prices.length > 0 ? Math.min(...prices) : null;
}

const formatPrice = (price: number) =>
  new Intl.NumberFormat("fr-FR", {
    maximumFractionDigits: 0,
  }).format(price);

export default function PricingCategories({
  pricings,
}: {
  pricings: Pricing[];
}) {
  return (
    <Section id="services" className="scroll-mt-24 py-20 md:py-20">
      {/* En-tête de section */}
      <div className="mb-12 max-w-2xl">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary sm:text-sm">
          Mes expertises
        </p>

        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          Une solution pour{" "}
          <span className="text-primary">chaque ambition.</span>
        </h2>

        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Chaque projet est unique. Découvrez mes prestations et choisissez
          celle qui correspond à vos objectifs.
        </p>
      </div>

      {/* Cartes de catégories */}
      <div className="grid gap-5 md:grid-cols-3">
        {categories.map((category, index) => {
          const Icon = category.icon;
          const startingPrice = getStartingPrice(pricings, category.id);

          return (
            <Link
              key={category.id}
              href={category.href}
              className="
                group relative flex h-full flex-col
                border border-border bg-card
                p-6 transition-colors duration-300
                hover:border-primary
                focus-visible:outline-2
                focus-visible:outline-offset-4
                focus-visible:outline-primary
                sm:p-8 isolate overflow-hidden
              "
            >
              {/* Photographie décorative */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[65%] overflow-hidden"
              >
                <Image
                  src={category.image}
                  alt=""
                  fill
                  sizes="(max-width: 767px) 100vw, 33vw"
                  className="
                  object-cover object-center
                  grayscale sepia
                  opacity-30
                  transition-transform duration-300
                  group-hover:scale-105
                  dark:opacity-35
                "
                />

                {/* Fondu progressif vers la couleur de la carte */}
                <div
                  className="
                  absolute inset-0
                  bg-linear-to-b
                  from-card/45
                  via-card/80
                  to-card
                "
                />
              </div>
              <div className="relative z-10 flex h-full flex-col">
                {/* Numéro et icône */}
                <div className="mb-10 flex items-start justify-between">
                  <span className="text-xs tracking-widest text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <Icon
                    aria-hidden="true"
                    className="size-7 text-primary"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Contenu */}
                <h3 className="text-2xl font-semibold text-card-foreground">
                  {category.title}
                </h3>

                <p className="mt-4 min-h-20 text-sm leading-relaxed text-muted-foreground">
                  {category.description}
                </p>

                {/* Prix */}
                <div className="mt-4 sm:mt-8 border-t border-border pt-6">
                  {startingPrice !== null ? (
                    <>
                      <p className="text-xs text-muted-foreground">Dès</p>

                      <h4 className="text-3xl font-semibold tracking-tight text-foreground">
                        {formatPrice(startingPrice)} €
                        <span className="ml-2 text-sm font-normal text-muted-foreground">
                          HT*{category.unit}
                        </span>
                      </h4>
                    </>
                  ) : (
                    <p className="text-base font-medium text-foreground">
                      Tarifs sur demande
                    </p>
                  )}
                </div>

                {/* Navigation */}
                <div className="mt-8 flex items-center justify-between text-sm font-medium text-primary">
                  <span>Découvrir les offres</span>

                  <ArrowUpRight
                    aria-hidden="true"
                    className="size-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      <p className="mt-6 text-center text-xs text-muted-foreground">
        * TVA non applicable — art. 293 B du CGI.
      </p>
    </Section>
  );
}
