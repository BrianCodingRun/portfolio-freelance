import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Calendar } from "lucide-react";
import Link from "next/link";

export default function CalendlyWidget() {
  return (
    <Link
      href="https://calendly.com/briancoupama/30min"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Réserver un appel"
      className={cn(
        buttonVariants({ variant: "default" }),
        "inline-flex items-center gap-2 px-3 py-2 rounded-md border border-border text-primary-foreground shadow-md text-xs font-medium tracking-wide transition-all duration-150 hover:-translate-y-px cursor-pointer",
      )}
    >
      <Calendar />
      <span className="hidden md:block">Réserver un appel</span>
    </Link>
  );
}
