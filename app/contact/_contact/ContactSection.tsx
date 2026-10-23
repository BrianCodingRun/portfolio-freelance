import Column from "@/components/Column";
import { Map } from "@/components/map";
import Row from "@/components/Row";
import Section from "@/components/Section";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

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
    value: "contact@nexmyr.com",
    sub: "Réponse sous 24h",
    href: "mailto:contact@nexmyr.com",
  },
  {
    icon: MapPin,
    label: "Localisation",
    value: "La Réunion",
    sub: "Interventions sur toute l'île",
    href: null,
  },
];

export default function ContactSection() {
  return (
    <Section>
      <div className="grid grid-cols-1 items-stretch gap-5 lg:grid-cols-2 lg:gap-6">
        {/* Colonne gauche — Coordonnées */}
        <Column className="gap-3">
          {contactItems.map((item) => {
            const Icon = item.icon;

            return (
              <Row
                className="group justify-start border border-border bg-card p-4 transition-colors duration-300 hover:border-primary/40 hover:bg-primary/5 sm:p-5"
                key={item.label}
              >
                {/* Icône */}
                <div className="flex size-10 shrink-0 items-center justify-center border border-primary/20 bg-primary/10 sm:size-11">
                  <Icon className="size-4 text-primary" aria-hidden="true" />
                </div>

                {/* Informations */}
                <div className="flex min-w-0 flex-col gap-1">
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    {item.label}
                  </p>

                  {item.href ? (
                    <Link
                      href={item.href}
                      className="w-fit max-w-full wrap-break-word text-sm font-medium text-primary underline-offset-4 hover:underline sm:text-base"
                    >
                      {item.value}
                    </Link>
                  ) : (
                    <p className="text-sm font-medium text-foreground sm:text-base">
                      {item.value}
                    </p>
                  )}

                  <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    {item.sub}
                  </p>
                </div>
              </Row>
            );
          })}

          {/* Disponibilité */}
          <Row className="justify-start border border-primary/20 bg-primary/5 px-4 py-4">
            <span className="relative flex size-2.5 shrink-0">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-40" />
              <span className="relative inline-flex size-2.5 rounded-full bg-primary" />
            </span>

            <span className="text-sm font-medium text-primary">
              Disponible pour échanger sur votre projet
            </span>
          </Row>
        </Column>

        {/* Colonne droite — Carte de La Réunion */}
        <Column className="gap-0">
          <div className="relative h-72 overflow-hidden border border-border bg-background sm:h-80 lg:h-full lg:min-h-80">
            <Map transparent className="size-full" />
          </div>
          {/* Légende */}
          <Row className="pointer-events-none justify-start gap-3 bg-background/95 p-4 border border-border border-t-0">
            <span
              className="h-1.5 w-6 shrink-0 bg-primary"
              aria-hidden="true"
            />

            <p className="text-xs leading-relaxed text-muted-foreground">
              Basé à La Réunion, disponible pour vos projets à distance.
            </p>
          </Row>
        </Column>
      </div>
    </Section>
  );
}
