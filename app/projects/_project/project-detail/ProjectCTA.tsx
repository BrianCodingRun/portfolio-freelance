import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";

export function ProjectCTA() {
  return (
    <section className="border bg-card p-8 text-center space-y-3">
      <h2 className="text-xl font-semibold">Un projet similaire en tête ?</h2>
      <p className="text-sm text-muted-foreground max-w-sm mx-auto">
        Une idée de plateforme, un site à créer, un besoin métier à digitaliser
        — discutons-en.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
        <Link
          href="/contact"
          className={cn(buttonVariants({ variant: "default" }))}
        >
          <Mail className="w-4 h-4" />
          Me contacter
        </Link>
        <Link
          href="/projects"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "group bg-transparent",
          )}
        >
          Tous les projets
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </section>
  );
}
