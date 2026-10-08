"use client";

import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/components/map/Map"), {
  ssr: false,
  loading: () => (
    <div className="size-full animate-pulse bg-primary-foreground/10" />
  ),
});

export function MapVisual() {
  return (
    <div
      role="img"
      aria-label="Carte de La Réunion avec ma zone d'intervention"
      className="max-sm:hidden relative h-72 w-full flex-1 overflow-hidden lg:min-h-80"
    >
      <Map interactive={false} transparent />
    </div>
  );
}

const STEPS = ["Échange", "Devis", "Création", "En ligne"];

export function StepsVisual() {
  return (
    <ol
      aria-hidden="true"
      className="max-sm:grid max-sm:grid-cols-2 max-sm:mx-auto lg:flex w-full gap-2 text-sm text-neutral-800 dark:text-zinc-200 lg:flex-row lg:items-center lg:gap-0"
    >
      {STEPS.map((step, i) => {
        const isLast = i === STEPS.length - 1;
        return (
          <li
            key={step}
            className={
              isLast
                ? "flex items-center gap-2"
                : "flex items-center gap-2 lg:flex-1"
            }
          >
            <span className="grid size-6 shrink-0 place-items-center border-2 border-primary text-primary">
              {i + 1}
            </span>
            <span>{step}</span>
            {!isLast && (
              <span className="mx-1 hidden h-0.5 flex-1 bg-primary/40 lg:block" />
            )}
          </li>
        );
      })}
    </ol>
  );
}

export function CodeVisual() {
  return (
    <pre
      aria-hidden="true"
      className="overflow-x-auto border border-primary/30 bg-primary/5 p-3 text-xs leading-relaxed text-primary"
    >
      <code>{`<Site
  pour="vous"
  template={false}
/>`}</code>
    </pre>
  );
}

export function ChartVisual() {
  return (
    <div aria-hidden="true" className="flex h-24 items-end gap-1.5">
      {[20, 32, 28, 48, 64, 88].map((h, i) => (
        <span
          key={i}
          style={{ height: `${h}%` }}
          className="w-full bg-primary/70 transition-colors group-hover:bg-primary"
        />
      ))}
    </div>
  );
}
