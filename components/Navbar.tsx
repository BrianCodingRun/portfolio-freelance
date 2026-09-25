"use client";

import { Button } from "@/components/ui/button";
import { fade, mobileMenu, slideUp, slideUpSkew } from "@/lib/motion/";
import Logo from "@/public/assets/nexmyr_logo_fond_sombre.svg";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import SquareEffect from "./SquareEffect";
import { ToggleTheme } from "./ToggleTheme";

type Navlink = {
  name: string;
  href: string;
};
const navLinks: Navlink[] = [
  {
    name: "Portfolio",
    href: "/projects",
  },
  {
    name: "Tarifs",
    href: "/pricings",
  },
  {
    name: "Qui suis-je",
    href: "/journey",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Navbar({ isScrolled }: { isScrolled: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between h-24">
      <div className="flex items-center shrink-0">
        <Link
          href="/"
          aria-label="retour vers la page d'accueil"
          prefetch={false}
          className="text-center"
        >
          <Logo
            className={`w-12 h-12 md:w-16 md:h-16 origin-left transition-transform duration-100 ${
              isScrolled ? "scale-[0.85]" : "scale-100"
            }`}
          />
        </Link>
      </div>
      <div className="hidden md:flex gap-4">
        {navLinks &&
          navLinks.map((link: Navlink, index: number) => (
            <Link
              key={index}
              href={link.href}
              className={`${
                pathname === link.href
                  ? "text-primary font-bold"
                  : "font-medium"
              } ${isScrolled && "scale-[0.90]"} transition-transform duration-100 text-lg hover:text-primary hover:underline underline-offset-4`}
              prefetch={false}
            >
              {link.name}
            </Link>
          ))}
      </div>
      <div className="hidden md:flex items-center gap-4">
        <ToggleTheme />
        {[
          {
            name: "Twitter",
            icon: <FaXTwitter className="w-5 h-5" />,
            href: "https://x.com/nexmyr_officiel",
          },
          {
            name: "Instagram",
            icon: <FaInstagram className="w-5 h-5" />,
            href: "https://www.instagram.com/nexmyr_officiel",
          },
          {
            name: "Github",
            icon: <FaGithub className="w-5 h-5" />,
            href: "https://github.com/BrianCodingRun",
          },
          {
            name: "Linkedin",
            icon: <FaLinkedinIn className="w-5 h-5" />,
            href: "https://www.linkedin.com/company/nexmyr",
          },
        ].map((item, index) => (
          <Link
            key={index}
            href={item.href}
            target="_blank"
            aria-label={`Lien vers mon profil ${item.name}`}
            className="text-muted-foreground transition-all hover:-translate-y-0.5 hover:text-primary"
          >
            {item.icon}
          </Link>
        ))}
      </div>
      <div className="md:hidden flex items-center">
        <button
          onClick={toggleMenu}
          className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
        >
          <span className="sr-only">Open main menu</span>

          <div className="relative w-10 h-10">
            <span className="w-6 h-0.5 absolute top-3 left-2/4 -translate-2/4 block bg-neutral-700 dark:bg-zinc-200 rounded-full" />
            <span className="w-6 h-0.5 absolute top-5 left-2/4 -translate-2/4 block bg-neutral-700 dark:bg-zinc-200 rounded-full" />
            <span className="w-6 h-0.5 absolute top-7 left-2/4 -translate-2/4 block bg-neutral-700 dark:bg-zinc-200 rounded-full" />
          </div>
        </button>
      </div>
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            variants={mobileMenu}
            initial="closed"
            animate="open"
            exit="closed"
            className="md:hidden z-50 fixed top-0 right-0 bottom-0 left-0 w-full min-h-svh flex flex-col justify-between bg-background p-4"
          >
            <motion.div variants={fade} className="flex justify-between">
              <Link
                href="/"
                aria-label="retour vers la page d'accueil"
                prefetch={false}
              >
                <Logo className="w-16 h-16" />
              </Link>
              {/* Theme Dark/Light mode */}
              <ToggleTheme />
            </motion.div>
            <div className="space-y-6 mb-6">
              {navLinks &&
                navLinks.map((link: Navlink, index: number) => (
                  <div key={index} className="overflow-y-hidden">
                    <motion.div
                      variants={slideUpSkew}
                      initial="closed"
                      animate="open"
                      exit="closed"
                      style={{ transformOrigin: "left bottom" }}
                    >
                      <Link
                        key={index}
                        href={link.href}
                        onClick={toggleMenu}
                        className={`${
                          pathname === link.href ? "text-primary" : ""
                        } text-6xl transition-colors block font-semibold`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  </div>
                ))}
            </div>
            {/* LINK SOCIALS MEDIA */}
            <div className="overflow-y-hidden flex items-center justify-between">
              <motion.div
                variants={slideUp}
                initial="closed"
                animate="open"
                exit="closed"
                className="flex items-center gap-2"
              >
                {[
                  {
                    name: "Twitter",
                    icon: <FaXTwitter className="w-4 h-4" />,
                    href: "https://x.com/nexmyr_officiel",
                  },
                  {
                    name: "Instagram",
                    icon: <FaInstagram className="w-4 h-4" />,
                    href: "https://www.instagram.com/nexmyr_officiel",
                  },
                  {
                    name: "Github",
                    icon: <FaGithub className="w-4 h-4" />,
                    href: "https://github.com/BrianCodingRun",
                  },
                  {
                    name: "Linkedin",
                    icon: <FaLinkedinIn className="w-4 h-4" />,
                    href: "https://www.linkedin.com/company/nexmyr",
                  },
                ].map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    target="_blank"
                    aria-label={`Lien vers mon profil ${item.name}`}
                    className="text-muted-foreground transition-all hover:-translate-y-0.5 hover:text-primary"
                  >
                    {item.icon}
                  </Link>
                ))}
              </motion.div>
              <motion.div
                variants={slideUp}
                initial="closed"
                animate="open"
                exit="closed"
              >
                <Button
                  variant="link"
                  className="p-0 text-sm font-normal text-muted-foreground"
                  onClick={toggleMenu}
                >
                  Fermer le menu
                </Button>
              </motion.div>
            </div>
            <div className="absolute overflow-hidden -z-30 -right-32 -bottom-32 w-52 rotate-32">
              <div className="grid grid-cols-3 justify-between">
                <SquareEffect />
                <SquareEffect />
                <SquareEffect />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
