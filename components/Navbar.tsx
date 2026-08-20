"use client";

import { Button } from "@/components/ui/button";
import { fade, mobileMenu, slideUp, slideUpSkew } from "@/lib/motion/";
import Logo from "@/public/assets/logo-original.svg";
import { AnimatePresence, motion } from "framer-motion";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

type Navlink = {
  name: string;
  href: string;
};
const navLinks: Navlink[] = [
  {
    name: "Projets",
    href: "/projects",
  },
  {
    name: "Tarifs",
    href: "/pricings",
  },
  {
    name: "Parcours",
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
    <nav>
      <div
        className={`flex items-center justify-between ${isScrolled ? "h-20" : "h-24"}`}
      >
        <div className="flex items-center">
          <Link
            href="/"
            aria-label="retour vers la page d'accueil"
            prefetch={false}
          >
            <Logo
              className={`${isScrolled ? "w-12 h-12 md:w-14 md:h-14" : "w-16 h-16 md:w-20 md:h-20"} transition-[width,height]`}
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
                  pathname === link.href ? "text-primary font-medium" : ""
                } 2xl:text-lg hover:text-primary hover:underline underline-offset-4 transition-colors`}
                prefetch={false}
              >
                {link.name}
              </Link>
            ))}
        </div>
        <div className="hidden md:flex gap-4">
          {[
            {
              name: "Twitter",
              icon: <FaXTwitter className="w-5 h-5" />,
              href: "https://x.com/CoupamaBrian",
            },
            {
              name: "Instagram",
              icon: <FaInstagram className="w-5 h-5" />,
              href: "https://www.instagram.com/briandevrun",
            },
            {
              name: "Github",
              icon: <FaGithub className="w-5 h-5" />,
              href: "https://github.com/BrianCodingRun",
            },
            {
              name: "Linkedin",
              icon: <FaLinkedinIn className="w-5 h-5" />,
              href: "https://www.linkedin.com/in/brian-coupama/",
            },
          ].map((item, index) => (
            <Link
              key={index}
              href={item.href}
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

            <Menu className="block h-8 w-8 stroke-slate-200" />
          </button>
        </div>
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
            <motion.div variants={fade}>
              <Link
                href="/"
                aria-label="retour vers la page d'accueil"
                prefetch={false}
              >
                <Logo className="w-16 h-16" />
              </Link>
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
                        className={`${
                          pathname === link.href ? "text-primary" : ""
                        } text-7xl transition-colors block font-semibold`}
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
                    href: "https://x.com/CoupamaBrian",
                  },
                  {
                    name: "Instagram",
                    icon: <FaInstagram className="w-4 h-4" />,
                    href: "https://www.instagram.com/briandevrun",
                  },
                  {
                    name: "Github",
                    icon: <FaGithub className="w-4 h-4" />,
                    href: "https://github.com/BrianCodingRun",
                  },
                  {
                    name: "Linkedin",
                    icon: <FaLinkedinIn className="w-4 h-4" />,
                    href: "https://www.linkedin.com/in/brian-coupama/",
                  },
                ].map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
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
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
