import FadeUp from "@/components/motion/FadeUp";
import Opacity from "@/components/motion/Opacity";
import StaggerContainer from "@/components/motion/StaggerContainer";
import StaggerItem from "@/components/motion/StaggerItem";
import Section from "@/components/Section";
import Subtitle from "@/components/Subtitle";
import Title from "@/components/Title";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getActivePricings } from "@/lib/api/pricings";
import { getPricingsByCategory } from "@/lib/pricing";
import { cn } from "@/lib/utils";
import { BadgeEuro } from "lucide-react";
import Link from "next/link";
import ServiceCard from "./components/ServiceCard";

export default async function Services() {
  const pricings = (await getActivePricings()).sort(
    (a, b) => a.order - b.order,
  );

  const SERVICE_SECTIONS = [
    {
      category: "pack",
      label: "Creation de site web",
      title: "Mes formules de création",
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
              <FadeUp delay={0.4} y={10}>
                <div className="text-center mb-10">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Separator
                      orientation="horizontal"
                      className="bg-primary data-horizontal:w-10"
                    />

                    <span className="text-primary uppercase text-sm sm:text-base font-semibold">
                      {section.label}
                    </span>

                    <Separator
                      orientation="horizontal"
                      className="bg-primary data-horizontal:w-10"
                    />
                  </div>

                  <Title level={2} className="text-current">
                    {section.title}
                  </Title>

                  <Subtitle className="py-2 max-w-xl mx-auto">
                    {section.subtitle}
                  </Subtitle>
                </div>
              </FadeUp>

              <StaggerContainer
                className={cn(
                  "w-full grid md:gap-4 gap-6 mx-auto",
                  section.cols,
                  section.maxWidth,
                )}
              >
                {sectionPricings.map((pricing) => (
                  <StaggerItem key={pricing._id}>
                    <ServiceCard pricing={pricing} />
                  </StaggerItem>
                ))}
              </StaggerContainer>
              <p className="mt-12 text-sm text-muted-foreground text-center">
                * TVA non applicable — art. 293B du CGI
              </p>
              <p className="mt-1 text-sm text-muted-foreground text-center">
                Paiement en 2 fois : 30 % à la signature, 70 % à la livraison
                par virement bancaire.
              </p>
              <Opacity delay={0.04}>
                <div className="max-w-5xl mx-auto flex items-center justify-between flex-wrap gap-4 px-5 py-4 border border-border bg-card my-6">
                  <div>
                    <p className="text-lg font-semibold text-foreground">
                      Pas besoin {"d'un"} site web ?
                    </p>
                    <p className="max-w-xl text-sm text-muted-foreground mt-0.5">
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
              </Opacity>
            </div>
          </Section>
        );
      })}
    </div>
  );
}
