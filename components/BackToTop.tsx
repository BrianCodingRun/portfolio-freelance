"use client";

import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function BackToTop() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    let previousScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;

      ticking = true;

      requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        const scrollDifference = currentScrollY - previousScrollY;

        const pastThreshold = currentScrollY > window.innerHeight;

        if (!pastThreshold) {
          setActive(false);
        } else if (scrollDifference < -4) {
          // L'utilisateur remonte
          setActive(true);
        } else if (scrollDifference > 4) {
          // L'utilisateur descend
          setActive(false);
        }

        previousScrollY = currentScrollY;
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button
      type="button"
      size="lg"
      onClick={scrollToTop}
      aria-label="Retour en haut de page"
      aria-hidden={!active}
      tabIndex={active ? 0 : -1}
      className={`
        fixed bottom-5 right-5 z-30
        transition-[opacity,transform,visibility]
        duration-300
        motion-reduce:transition-none
        ${
          active
            ? "visible translate-y-0 opacity-100"
            : "invisible translate-y-3 opacity-0 pointer-events-none"
        }
      `}
    >
      <ChevronUp aria-hidden="true" className="size-4" />
    </Button>
  );
}
