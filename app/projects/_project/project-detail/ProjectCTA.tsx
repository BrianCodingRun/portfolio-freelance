import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Mail } from "lucide-react";
import Link from "next/link";

export function ProjectCTA() {
  return (
    <section className="border bg-card p-8 text-center space-y-3">
      <h2 className="text-xl font-semibold">Un projet similaire en tête ?</h2>
      <p className="text-sm text-muted-foreground max-w-sm mx-auto">
        Une idée de plateforme, un site à créer, un besoin métier à digitaliser
        — discutons-en.
      </p>
      <Link
        href="/contact"
        className={cn(buttonVariants({ variant: "default" }))}
      >
        <Mail className="w-4 h-4" />
        Me contacter
      </Link>
    </section>
  );
}
