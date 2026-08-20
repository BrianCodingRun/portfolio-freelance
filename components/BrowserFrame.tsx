// components/ui/browser-frame.tsx
import { cn } from "@/lib/utils";
import { Circle, Lock } from "lucide-react";

interface BrowserFrameProps {
  url?: string;
  deployed?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function BrowserFrame({
  url,
  deployed = true,
  children,
  className,
}: BrowserFrameProps) {
  return (
    <div
      className={cn(
        "flex flex-col overflow-hidden border border-white/10 bg-[#0A0A0A]",
        className,
      )}
    >
      <div className="flex shrink-0 items-center gap-2 border-b border-white/10 bg-white/[0.02] px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]/40" />
        </div>

        <div className="mx-auto flex items-center gap-1.5 rounded-md bg-white/5 px-3 py-1 text-xs text-white/40">
          {deployed ? (
            <>
              <Lock className="h-3 w-3" />
              <span>{url}</span>
            </>
          ) : (
            <>
              <Circle className="h-2 w-2 fill-primary text-primary" />
              <span>Aperçu privé</span>
            </>
          )}
        </div>

        <div className="w-[52px]" />
      </div>

      <div className="relative flex-1 min-h-0">{children}</div>
    </div>
  );
}
