"use client";

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/a8QWcxG86ic
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import Section from "./Section";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className={isScrolled ? "backdrop-blur-lg bg-background/80" : ""}>
      <Section>
        <Navbar isScrolled={isScrolled} />
      </Section>
    </header>
  );
};
