"use client";

import StaggerContainer from "@/components/motion/StaggerContainer";
import StaggerItem from "@/components/motion/StaggerItem";
import Link from "next/link";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

const socials = [
  {
    label: "Twitter",
    href: "https://x.com/CoupamaBrian",
    icon: FaXTwitter,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/briandevrun",
    icon: FaInstagram,
  },
  {
    label: "GitHub",
    href: "https://github.com/BrianCodingRun",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/brian-coupama/",
    icon: FaLinkedinIn,
  },
];

export default function ContactSocials() {
  return (
    <StaggerContainer className="flex flex-wrap gap-2">
      {socials.map((social) => {
        const Icon = social.icon;
        return (
          <StaggerItem key={social.label}>
            <Link
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 border border-border bg-card text-muted-foreground transition-all duration-200 hover:border-primary/40 hover:text-primary hover:bg-primary/5"
            >
              <Icon className="w-3.5 h-3.5" />
              {social.label}
            </Link>
          </StaggerItem>
        );
      })}
    </StaggerContainer>
  );
}
