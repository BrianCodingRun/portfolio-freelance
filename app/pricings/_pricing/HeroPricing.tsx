import Section from "@/components/Section";
import Subtitle from "@/components/Subtitle";
import Title from "@/components/Title";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowDown, ArrowUpRight, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HeroPricing() {
  return (
    <section className="relative isolate flex min-h-[60vh]  items-center overflow-hidden">
      {/* Photographie en arrière-plan */}
      <>
        <Image
          src="/images/pricings/hero-workspace.webp"
          alt="Environnement de travail dédié au développement web"
          fill
          priority
          sizes="100vw"
          className="-z-30 object-cover object-center grayscale contrast-110"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-20 bg-primary/30 mix-blend-color"
        />
      </>

      {/* Dégradés */}

      {/* Dégradé horizontal pour desktop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden md:block bg-linear-to-r from-background from-15% via-background/85 via-35% to-transparent to-65% dark:from-background dark:from-15% dark:via-background/90 dark:via-40% dark:to-transparent dark:to-85%
        "
      />

      {/* Dégradé mobile : fond uniforme derrière le contenu */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-linear-to-b from-background/95 from-0% via-background/95 via-65% to-background/65 md:hidden dark:from-background/95 dark:via-background/90 dark:to-background/60
        "
      />

      {/* Contenu du Hero */}
      <Section className="relative z-10 py-12 md:py-28">
        <div className="relative isolate max-w-5xl">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -z-10 -inset-x-6 -inset-y-10 bg-linear-to-r from-background/95 via-background/90 to-transparent blur-2xl dark:hidden"
          />
          <Badge variant="outline" className="md:text-base md:h-7">
            Mes prestations de services
          </Badge>

          <Title
            level={1}
            className="max-w-3xl text-left text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-6xl text-neutral-900 dark:text-zinc-300"
          >
            Des solutions adaptées{" "}
            <span className="text-primary">à chaque projet.</span>
          </Title>

          <Subtitle className="mt-5 max-w-xl text-left text-base leading-relaxed text-muted-foreground sm:text-lg">
            Du site vitrine à {"l'"}application sur mesure, découvrez des
            prestations pensées pour répondre aux besoins réels de votre
            activité.
          </Subtitle>

          <div className="mt-6 sm:mt-12 flex flex-col items-start gap-3 sm:flex-row">
            <Link
              href="#services"
              className={cn(
                buttonVariants({ size: "lg" }),
                "w-full gap-2 sm:w-auto",
              )}
            >
              Découvrir les prestations
              <ArrowDown className="size-4" />
            </Link>

            <Link
              href="/contact"
              className={cn(
                buttonVariants({
                  variant: "outline",
                  size: "lg",
                }),
                "w-full gap-2 border-primary text-primary sm:w-auto",
              )}
            >
              <Mail className="size-4" />
              Me contacter
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </Section>
    </section>
  );
}
