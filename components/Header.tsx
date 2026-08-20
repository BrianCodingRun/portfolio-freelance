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

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`sticky top-0 left-0 right-0 z-30 ${isScrolled && "backdrop-blur-lg bg-background/20"}`}
    >
      <Section>
        <Navbar isScrolled={isScrolled} />
      </Section>
    </header>
  );
};
