import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import type { BannerFormValues } from "@/schemas/bannerSchema";
import {
  BadgePercent,
  CalendarDays,
  type LucideIcon,
  Rocket,
} from "lucide-react";

type BannerMessagesProps = {
  banner: BannerFormValues;
};

type BannerMessage = {
  icon: LucideIcon;
  text: string;
};

export function BannerMessages({ banner }: BannerMessagesProps) {
  const [index, setIndex] = useState(0);

  const messages = [
    {
      icon: Rocket,
      text: banner.title,
    },
    {
      icon: BadgePercent,
      text: banner.message,
    },
    banner.endDate
      ? {
          icon: CalendarDays,
          text: `Offre valable jusqu'au ${format(
            banner.endDate,
            "dd MMMM yyyy",
            { locale: fr },
          )}.`,
        }
      : null,
  ].filter((message): message is BannerMessage => message !== null);

  useEffect(() => {
    if (messages.length <= 1) return;

    const interval = setInterval(() => {
      setIndex((current) => (current + 1) % messages.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [messages]);

  const current = messages[index];
  const Icon = current.icon;

  return (
    <div className="flex h-12 items-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{
            y: 20,
            filter: "blur(8px)",
            opacity: 0,
          }}
          animate={{
            y: 0,
            filter: "blur(0px)",
            opacity: 1,
          }}
          exit={{
            y: -20,
            filter: "blur(8px)",
            opacity: 0,
          }}
          transition={{
            duration: 0.35,
            ease: "easeInOut",
          }}
          className="flex items-center gap-2 w-full"
        >
          <Icon className="h-4 w-4 shrink-0" />
          <span className="block truncate text-sm lg:text-base font-medium">
            {current.text}
          </span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
