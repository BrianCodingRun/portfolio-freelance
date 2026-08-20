"use client";

import ServiceCard from "@/app/_home/components/ServiceCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getPricingsByCategory } from "@/lib/pricing";
import type { Pricing } from "@/types/pricing";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type Tab = "website" | "app" | "maintenance";

const TABS: { id: Tab; label: string }[] = [
  { id: "app", label: "Application" },
  { id: "website", label: "Sites web" },
  { id: "maintenance", label: "Suivi mensuel" },
];

const tabVariants = {
  hidden: {
    opacity: 0,
    y: 8,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.22,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: {
      duration: 0.15,
    },
  },
};

export default function PricingTabs({ pricings }: { pricings: Pricing[] }) {
  const [active, setActive] = useState<Tab>("website");

  const websitePricings = getPricingsByCategory(pricings, "pack");
  const appPricings = getPricingsByCategory(pricings, "app");
  const maintenancePricings = getPricingsByCategory(pricings, "maintenance");
  return (
    <Tabs defaultValue="website" className="space-y-8 items-center">
      <TabsList>
        {TABS.map((tab) => (
          <TabsTrigger
            value={tab.id}
            key={tab.id}
            onClick={() => setActive(tab.id)}
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          variants={tabVariants}
          initial="hidden"
          animate="show"
          exit="exit"
          className="min-h-50"
        >
          {active === "app" && (
            <TabsContent value="app" className="text-left justify-center">
              <div className="max-w-2xl w-full grid gap-6 md:gap-4 mx-auto md:grid-cols-2">
                {appPricings.map((item) => (
                  <ServiceCard key={item._id} pricing={item} />
                ))}
              </div>
            </TabsContent>
          )}

          {active === "website" && (
            <TabsContent value="website" className="text-left justify-center">
              <div className="w-full grid gap-6 md:gap-4 mx-auto md:grid-cols-3">
                {websitePricings.map((item) => (
                  <ServiceCard key={item._id} pricing={item} />
                ))}
              </div>
            </TabsContent>
          )}

          {active === "maintenance" && (
            <TabsContent value="maintenance">
              <div className="max-w-2xl w-full grid gap-6 md:gap-4 mx-auto md:grid-cols-2">
                {maintenancePricings.map((item) => (
                  <ServiceCard key={item._id} pricing={item} />
                ))}
              </div>
            </TabsContent>
          )}
        </motion.div>
      </AnimatePresence>
    </Tabs>
  );
}
