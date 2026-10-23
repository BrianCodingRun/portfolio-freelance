import Section from "@/components/Section";
import Subtitle from "@/components/Subtitle";
import Title from "@/components/Title";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getActivePricings } from "@/lib/api/pricings";
import { getPricingsByCategory } from "@/lib/pricings/pricing";
import { cn } from "@/lib/utils";
import { BadgeEuro } from "lucide-react";
import Link from "next/link";
import PricingCard from "./components/PricingCard";

export default async function Services() {
  const pricings = (await getActivePricings()).sort(
    (a, b) => a.order - b.order,
  );

  const SERVICE_SECTIONS = [
    {
      category: "pack",
      label: "Création de site web",
      title: (
        <>
          Mes formules de <span className="text-primary">création</span>
        </>
      ),
      subtitle:
        "Du site vitrine simple au projet sur mesure complet. Je réalise aussi des applications mobiles, desktop et des contrats de maintenance — retrouvez-les juste en dessous.",
      cols: "md:grid-cols-3",
      maxWidth: "max-w-none",
    },
  ] as const;

  return (
    <div className="flex flex-col gap-12">
      {SERVICE_SECTIONS.map((section) => {
        const sectionPricings = getPricingsByCategory(
          pricings,
          section.category,
        );

        if (sectionPricings.length === 0) return null;

        return (
          <Section key={section.category} className="relative overflow-hidden">
            <div className="w-full flex flex-col">
              <div className="text-center md:mb-10">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Separator
                    orientation="horizontal"
                    className="bg-primary data-horizontal:w-10 data-horizontal:h-0.5"
                  />

                  <span className="max-sm:text-xs 2xl:text-lg text-base text-primary uppercase tracking-widest font-semibold">
                    {section.label}
                  </span>

                  <Separator
                    orientation="horizontal"
                    className="bg-primary data-horizontal:w-10 data-horizontal:h-0.5"
                  />
                </div>

                <Title
                  level={2}
                  className="max-sm:text-3xl 2xl:text-3xl text-5xl font-bold text-neutral-800 dark:text-zinc-200 md:leading-snug leading-tight sm:max-w-xl mx-auto"
                >
                  {section.title}
                </Title>

                <Subtitle className="max-sm:text-lg 2xl:text-xl text-xl leading-relaxed sm:max-w-lg sm:mx-auto">
                  {section.subtitle}
                </Subtitle>
              </div>

              <div
                className={cn(
                  "w-full grid gap-2 mx-auto",
                  section.cols,
                  section.maxWidth,
                )}
              >
                {sectionPricings.map((pricing) => (
                  <PricingCard key={pricing._id} pricing={pricing} />
                ))}
              </div>
              <p className="mt-12 mb-6 text-sm text-muted-foreground text-center">
                * TVA non applicable — art. 293B du CGI
              </p>
              <div className="flex items-center justify-between flex-wrap gap-4 px-5 py-4 border border-border bg-card my-6">
                <div>
                  <p className="text-xl font-semibold text-foreground">
                    Pas besoin {"d'un"} site web ?
                  </p>
                  <p className="max-w-2xl text-base text-muted-foreground mt-0.5">
                    Je conçois aussi des applications mobiles et desktop sur
                    mesure, ainsi que des contrats de maintenance pour garder
                    votre projet performant dans la durée.
                  </p>
                </div>
                <Link
                  href="/pricings"
                  className={cn(
                    buttonVariants({ variant: "default" }),
                    "group shadow-none",
                  )}
                >
                  <BadgeEuro />
                  Mes Tarifs
                </Link>
              </div>
            </div>
          </Section>
        );
      })}
    </div>
  );
}
