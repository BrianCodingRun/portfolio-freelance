"use client";

import Section from "@/components/Section";
import SquareEffect from "@/components/SquareEffect";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { lineXVariant } from "@/lib/motion/variants";
import { cn } from "@/lib/utils";
import profileBg from "@/public/assets/avatar/profile.webp";
import type { UserType } from "@/types/user";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutMe({ profile }: { profile: UserType | null }) {
  return (
    <Section className="relative xl:max-w-6xl py-4">
      <div className="w-full flex flex-col md:flex-row gap-12 md:gap-16 items-start md:items-center justify-between">
        {/* ── COLONNE GAUCHE : Bio + CTA ── */}
        <div className="flex flex-1 flex-col items-start md:gap-6 gap-2">
          {/* Label */}
          <div className="flex items-center gap-2">
            <motion.div
              variants={lineXVariant}
              initial="hidden"
              animate="visible"
              className="bg-primary w-7 h-0.5 origin-left"
            />
            <h2 className="text-primary uppercase tracking-widest font-semibold">
              Au service de {"l'humain"}
            </h2>
          </div>
          <div className="flex flex-col gap-2 max-sm:py-2">
            {/* Titre accrocheur */}
            <h3 className="text-2xl md:text-4xl font-bold text-neutral-800 dark:text-zinc-200 leading-snug sm:max-w-xl">
              Le visage derrière <span className="text-primary">Nexmyr.</span>
            </h3>
            <Badge variant="outline" className="max-sm:hidden">
              Brian Coupama • Développeur & Fondateur de Nexmyr
            </Badge>
          </div>
          {/* ── CARTE D'IDENTITÉ (mobile uniquement) ── */}
          <div className="md:hidden flex items-center gap-3">
            <Image
              src={profileBg.src}
              alt="Brian Coupama, fondateur de Nexmyr"
              width={48}
              height={48}
              className="w-12 h-12 object-cover object-[center_-6px] border border-primary/40 shrink-0"
              loading="eager"
            />
            <div className="text-sm leading-tight">
              <p className="font-semibold text-neutral-800 dark:text-zinc-200">
                Brian Coupama
              </p>
              <span className="inline-flex items-center gap-0.5 text-muted-foreground">
                Développeur & Fondateur de Nexmyr
              </span>
            </div>
          </div>
          {/* Bio */}
          <p className="text-lg leading-normal">
            {profile?.bio === ""
              ? "Passionné par le développement web depuis 2021, j'ai construit mes compétences étape par étape — du titre DWWM jusqu'au Bac+3 CDA. Basé à La Réunion, j'accompagne les entreprises, indépendants et associations de l'île dans la création de sites qui leur ressemblent et qui attirent de vrais clients."
              : profile?.bio}
          </p>

          {/* Citation personnelle */}
          <blockquote className="border-l-2 border-primary pl-4 text-base text-muted-foreground italic max-w-xl">
            &quot;
            {
              "J'ai appris à douter, à recommencer, à tenir. C'est ça, aujourd'hui, que je mets dans chaque projet."
            }
            &quot;
          </blockquote>

          {/* CTA Parcours */}
          <Link
            href="/journey"
            className={cn(
              buttonVariants({ variant: "secondary", size: "default" }),
              "group",
            )}
          >
            Découvrir mon parcours
            <ArrowRight
              className="w-3.5 h-3.5 ml-1 transition-transform duration-150 group-hover:translate-x-0.5"
              aria-hidden
            />
          </Link>
        </div>
        <div className="hidden md:block relative max-sm:w-full">
          {/* GRAPHIC ELEMENT TOP RIGHT */}
          <motion.div
            initial={{
              scaleY: 0,
              top: "-16px",
              right: "-16px",
            }}
            animate={{
              scaleY: 1,
              top: "-8px",
              right: "-8px",
            }}
            transition={{
              duration: 0.2,
              delay: 0.4,
              ease: "linear",
              top: {
                duration: 0.2,
                delay: 1,
                ease: "easeOut",
              },
              right: {
                duration: 0.2,
                delay: 1,
                ease: "easeOut",
              },
            }}
            className="absolute bg-primary -top-4 -right-4 w-0.5 h-12 origin-bottom"
          />
          <motion.div
            initial={{
              scaleX: 0,
              top: "-16px",
              right: "-16px",
            }}
            animate={{
              scaleX: 1,
              top: "-8px",
              right: "-8px",
            }}
            transition={{
              duration: 0.2,
              ease: "linear",
              delay: 0.6,
              top: {
                duration: 0.2,
                delay: 1,
                ease: "easeOut",
              },
              right: {
                duration: 0.2,
                delay: 1,
                ease: "easeOut",
              },
            }}
            className="absolute bg-primary -top-4 -right-4 w-12 h-0.5 origin-top-right"
          />
          {/* GRAPHIC ELEMENT BOTTOM LEFT */}
          <motion.div
            initial={{
              scaleY: 0,
              bottom: "-16px",
              left: "-16px",
            }}
            animate={{
              scaleY: 1,
              bottom: "-8px",
              left: "-8px",
            }}
            transition={{
              duration: 0.2,
              delay: 0.4,
              ease: "linear",
              bottom: {
                duration: 0.2,
                delay: 1,
                ease: "easeOut",
              },
              left: {
                duration: 0.2,
                delay: 1,
                ease: "easeOut",
              },
            }}
            className="absolute -bottom-4 -left-4 w-0.5 h-12 bg-primary origin-top"
          />
          <motion.div
            initial={{
              scaleX: 0,
              bottom: "-16px",
              left: "-16px",
            }}
            animate={{
              scaleX: 1,
              bottom: "-8px",
              left: "-8px",
            }}
            transition={{
              duration: 0.2,
              ease: "linear",
              delay: 0.6,
              bottom: {
                duration: 0.2,
                delay: 1,
                ease: "easeOut",
              },
              left: {
                duration: 0.2,
                delay: 1,
                ease: "easeOut",
              },
            }}
            className="absolute -bottom-2 -left-2 w-12 h-0.5 bg-primary origin-bottom-left"
          />
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.4,
              ease: "easeIn",
            }}
            className="p-4 border border-primary/20"
          >
            <Image
              src={profileBg.src}
              alt="Brian Coupama développeur web freelance à La Réunion"
              width={320}
              height={320}
              className="w-full h-64 md:w-80 md:h-80 object-cover object-[center_-6px]"
              loading="eager"
            />
            <div className="border border-primary/5 bg-primary-foreground p-4 space-y-1">
              <p className="text-primary uppercase text-sm font-medium">
                Expertise locale
              </p>
              <span className="inline-flex items-center gap-0.5 text-sm">
                <MapPin className="w-4 h-4" /> Basé à {"l'île"} de La Réunion
              </span>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute overflow-hidden -z-30 -left-44 -bottom-32 w-52 -rotate-32">
        <div className="grid grid-cols-3 justify-between">
          <SquareEffect />
          <SquareEffect />
          <SquareEffect />
        </div>
      </div>
    </Section>
  );
}
