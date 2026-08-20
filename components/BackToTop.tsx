"use client";

import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function BackToTop() {
  const [active, setActive] = useState<boolean>(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const isVisible = () => {
      if (window.scrollY > window.innerHeight) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    isVisible();

    window.addEventListener("scroll", isVisible);

    return () => window.removeEventListener("scroll", isVisible);
  }, []);

  return (
    <Button
      size="lg"
      onClick={scrollToTop}
      className={`${!active && "invisible opacity-0"} transition-opacity duration-200 fixed bottom-4 right-4`}
      aria-label="Remonter vers le haut"
    >
      <ChevronUp className="w-4 h-4" />
    </Button>
  );
}
