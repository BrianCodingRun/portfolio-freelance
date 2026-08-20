import { Map } from "@/components/map";
import Opacity from "@/components/motion/Opacity";
import StaggerContainer from "@/components/motion/StaggerContainer";
import StaggerItem from "@/components/motion/StaggerItem";
import Section from "@/components/Section";
import Subtitle from "@/components/Subtitle";
import Title from "@/components/Title";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Calendar, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import ContactSocials from "./ContactSocials";

const contactItems = [
  {
    icon: Phone,
    label: "Téléphone",
    value: "(+262) 0692 38 58 46",
    sub: "Lun – Ven, 08:30 – 12:00 / 14:00 – 17:00",
    href: "tel:+262692385846",
  },
  {
    icon: Mail,
    label: "Email",
    value: "dev.contact@briancoupama.re",
    sub: "Réponse sous 24h",
    href: "mailto:dev.contact@briancoupama.re",
  },
  {
    icon: MapPin,
    label: "Localisation",
    value: "Saint-Joseph",
    sub: "97480 — Île de La Réunion",
    href: null,
  },
];

export default function HeroContact() {
  return (
    <Section className="flex flex-col gap-10">
      {/* Header */}
      <Opacity delay={0.02}>
        <div className="w-full md:w-5/6">
          <div className="flex items-center gap-2 mb-4">
            <Separator
              orientation="horizontal"
              className="bg-primary data-horizontal:w-8"
            />
            <span className="text-primary uppercase text-sm sm:text-base font-semibold">
              Moyen de contact
            </span>
          </div>
          <Title level={1} className="md:text-5xl text-current">
            Travaillons ensemble.
          </Title>
          <Subtitle className="font-light text-muted-foreground not-italic mt-2 max-w-xl">
            Derrière chaque projet se cache une belle rencontre. Si vous
            souhaitez donner vie à une idée, collaborer ou simplement échanger,
            je serai ravi de faire votre connaissance. <br /> <br />
            {"N'hésitez pas à me contacter."}
          </Subtitle>
        </div>
      </Opacity>

      {/* Grille principale */}
      <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        {/* Colonne gauche — infos de contact */}
        <div className="flex flex-col gap-3">
          {/* Cards */}
          {contactItems.map((item) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={item.label}>
                <div className="flex gap-4 items-center p-4 border border-border bg-card transition-all duration-300 group hover:border-primary/40 hover:bg-linear-to-tl hover:from-primary/5 hover:to-transparent">
                  <div className="w-10 h-10 bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-md font-medium text-primary hover:underline underline-offset-4"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-md font-medium text-foreground">
                        {item.value}
                      </p>
                    )}
                    <p className="text-sm text-muted-foreground">{item.sub}</p>
                  </div>
                </div>
              </StaggerItem>
            );
          })}

          {/* Badge disponibilité */}
          <Opacity delay={0.04}>
            <div className="flex items-center gap-3 px-4 py-3 border border-primary/20 bg-primary/5">
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
              </span>
              <span className="text-sm font-medium text-primary">
                Disponible pour de nouveaux projets
              </span>
              <span className="ml-auto text-xs text-muted-foreground">
                Dès maintenant
              </span>
            </div>
          </Opacity>

          {/* Réseaux sociaux */}
          <ContactSocials />
        </div>

        {/* Colonne droite — Carte */}
        <div className="relative overflow-hidden border border-border h-70 lg:h-full min-h-65">
          <Map />
          <div className="absolute bottom-0 left-0 w-full bg-card p-4 flex items-center gap-4">
            <div className="space-y-1">
              <div className="w-5 h-2 bg-primary border border-border" />
              <p className="text-xs font-medium text-muted-foreground">
                Zone {"d'intervention"}
              </p>
            </div>
            <div className="space-y-1">
              <div className="w-5 h-2 bg-neutral-800 border border-muted-foreground" />
              <p className="text-xs font-medium text-muted-foreground">
                Zone hors intervention (peut intervenir exceptionnellement)
              </p>
            </div>
          </div>
        </div>
      </StaggerContainer>

      {/* CTA bar */}
      <Opacity delay={0.04}>
        <div className="flex items-center justify-between flex-wrap gap-4 px-5 py-4 border border-primary/20 bg-primary/5">
          <div>
            <p className="text-sm font-semibold text-foreground">
              Vous préférez discuter directement ?
            </p>
            <p className="text-xs text-muted-foreground mt-0.5">
              Réservez un appel de 30 min pour parler de votre projet.
            </p>
          </div>
          <Link
            href="https://calendly.com/briancoupama/30min"
            className={cn(
              buttonVariants({ variant: "default", size: "lg" }),
              "group",
            )}
          >
            <Calendar className="w-3.5 h-3.5" aria-hidden />
            Prendre un rendez-vous
          </Link>
        </div>
      </Opacity>
    </Section>
  );
}
