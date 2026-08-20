import Section from "@/components/Section";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import type { UserType } from "@/types/user";
import { ArrowRight, GraduationCap, MapPin, Milestone } from "lucide-react";
import Link from "next/link";

const stats = [
  {
    icon: GraduationCap,
    value: "Bac+3",
    label: "Concepteur Développeur d'Applications",
  },
  {
    icon: MapPin,
    value: "Saint-Joseph",
    label: "Sud Sauvage, La Réunion",
  },
  {
    icon: Milestone,
    value: "2011 — 2026",
    label: "Un parcours atypique et déterminé",
  },
];

export default function AboutMe({ profile }: { profile: UserType }) {
  return (
    <Section className="py-4">
      <div className="w-full flex flex-col md:flex-row gap-12 md:gap-16 items-start md:items-center">
        {/* ── COLONNE GAUCHE : Bio + CTA ── */}
        <div className="flex-1 flex flex-col items-start gap-6">
          {/* Label */}
          <div className="flex items-center gap-2">
            <Separator
              orientation="horizontal"
              className="bg-primary data-horizontal:w-8"
            />
            <h2 className="text-primary uppercase tracking-widest font-semibold">
              A propos de moi
            </h2>
          </div>
          <div className="flex items-center gap-2">
            {/* Titre accrocheur */}
            <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-snug sm:max-w-lg">
              Un développeur qui comprend{" "}
              <span className="text-primary">votre réalité locale.</span>
            </h3>
          </div>

          {/* Bio */}
          <p className="text-lg leading-normal">
            {profile?.bio ??
              "Passionné par le développement web depuis 2021, j'ai construit mes compétences étape par étape — du titre DWWM jusqu'au Bac+3 CDA. Basé à Saint-Joseph dans le Sud Sauvage, j'accompagne les entreprises, indépendants et associations de La Réunion dans la création de sites qui leur ressemblent et qui attirent de vrais clients."}
          </p>

          {/* Citation personnelle */}
          <blockquote className="border-l-2 border-primary pl-4 text-base text-muted-foreground italic max-w-xl">
            &quot;
            {
              "Mon parcours n'a jamais été linéaire. Pourtant, c'est précisément ce qui lui donne sa valeur."
            }
            &quot;
          </blockquote>

          {/* CTA Parcours */}
          <Link
            href="/journey"
            className={cn(
              buttonVariants({ variant: "outline", size: "default" }),
              "w-fit group bg-transparent hover:bg-primary hover:text-primary-foreground transition-all duration-300",
            )}
          >
            Découvrir mon parcours
            <ArrowRight
              className="w-3.5 h-3.5 ml-1 transition-transform duration-150 group-hover:translate-x-0.5"
              aria-hidden
            />
          </Link>
        </div>

        {/* ── COLONNE DROITE : Stats ── */}
        <div className="flex flex-col gap-4 md:w-96 w-full">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.value}
                className="flex items-center gap-4 p-4 border border-border bg-card hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-10 h-10 bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 text-primary" aria-hidden />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-foreground leading-tight">
                    {stat.value}
                  </span>
                  <span className="text-sm text-muted-foreground leading-snug">
                    {stat.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
