import type { WhyMeItem, WhyMeVisualId } from "@/app/data/whyMeData";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import {
  ChartVisual,
  CodeVisual,
  MapVisual,
  StepsVisual,
} from "./WhyMeVisuals";

const visuals: Record<WhyMeVisualId, ReactNode> = {
  map: <MapVisual />,
  steps: <StepsVisual />,
  code: <CodeVisual />,
  chart: <ChartVisual />,
};

export default function WhyMeCard({
  item,
  index,
}: {
  item: WhyMeItem;
  index: number;
}) {
  const Icon = item.icon;

  return (
    <Card
      className={cn(
        "group relative h-full overflow-hidden border-2 ring-0 shadow-[6px_6px_0_0_var(--color-primary)]",
        "transition-all duration-200 hover:translate-x-0.75 hover:translate-y-0.75 hover:shadow-[3px_3px_0_0_var(--color-primary)]",
        item.featured
          ? "border-primary bg-primary text-primary-foreground shadow-[6px_6px_0_0_var(--color-foreground)]"
          : "border-primary/40 hover:border-primary",
        "items-center text-center sm:items-start sm:text-left",
      )}
    >
      {/* Numéro outline en filigrane */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-4 top-2 font-mono text-6xl font-bold text-transparent opacity-40 [-webkit-text-stroke:1px_currentColor]"
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <CardHeader className="flex flex-col items-center space-y-3 sm:items-start">
        <span
          className={cn(
            "grid size-11 place-items-center border-2",
            item.featured
              ? "border-primary-foreground/60"
              : "border-primary/40 bg-primary/10",
          )}
        >
          <Icon
            className={cn("size-6", !item.featured && "text-primary")}
            aria-hidden="true"
          />
        </span>
        <CardTitle className={cn(item.featured ? "text-3xl" : "text-2xl")}>
          {item.title}
        </CardTitle>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col max-sm:items-center">
        <CardDescription
          className={cn(
            "text-lg leading-relaxed",
            item.featured && "text-primary-foreground",
          )}
        >
          {item.description}
        </CardDescription>
        <div
          className={cn(
            "mt-auto pt-6",
            item.visual === "map" && "flex flex-1 flex-col",
          )}
        >
          {item.visual && visuals[item.visual]}
        </div>
      </CardContent>
    </Card>
  );
}
