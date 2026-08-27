"use client";

import { MAX_YEARS } from "@/app/data/skillsData";
import TechIcon from "@/components/TechIcon";

type SkillCardProps = {
  icon: string;
  title: string;
  description: string;
  years: number;
};

export default function SkillCard({
  icon,
  title,
  description,
  years,
}: SkillCardProps) {
  const dots = Array.from({ length: MAX_YEARS }, (_, i) => i < years);

  return (
    <div className="group relative flex gap-3 items-start p-4 border border-border bg-card transition-all duration-300 group hover:border-primary/40 hover:bg-linear-to-tl hover:from-primary/5 hover:to-transparent cursor-default overflow-hidden">
      {/* Ligne lumineuse */}
      <div className="absolute top-0 left-0 right-0 h-px pointer-events-none bg-transparent group-hover:bg-linear-to-r group-hover:from-transparent group-hover:via-primary opacity-50 group-hover:to-transparent transition-all duration-1000" />

      {/* Icône */}
      <div className="w-9 h-9 bg-primary/10 border border-primary/20 flex items-center justify-center text-primary text-base shrink-0 mt-0.5">
        <TechIcon name={icon} className="fill-primary" />
      </div>

      {/* Contenu */}
      <div className="flex flex-col gap-1 flex-1 min-w-0">
        <h3 className="text-base font-semibold text-foreground leading-snug">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>

        {/* Barre de progression en points */}
        <div className="flex items-center gap-3 mt-2">
          <div className="flex gap-1">
            {dots.map((filled, i) => (
              <span
                key={i}
                className={`block w-4 h-1 rounded-md transition-colors ${
                  filled ? "bg-primary" : "bg-border"
                }`}
              />
            ))}
          </div>
          <span className="text-xs font-normal text-primary">
            {years} an{years > 1 ? "s" : ""}
          </span>
        </div>
      </div>
    </div>
  );
}
