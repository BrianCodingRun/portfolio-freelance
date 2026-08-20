"use client";

import { Button } from "@/components/ui/button";
import React, { ReactNode } from "react";

type ScrollToSectionProps = React.PropsWithChildren<{
  children: ReactNode;
  id: string;
  className?: string;
  size?: React.ComponentProps<typeof Button>["size"];
}>;

export default function ScrollToSection(props: ScrollToSectionProps) {
  // Scroll to section
  const scrollToSection = () => {
    const element = document.getElementById(props.id);
    if (element) {
      element.scrollIntoView({
        block: "center",
        behavior: "smooth",
      });
    }
  };

  return (
    <Button
      size={props.size ?? "lg"}
      className="border-none font-semibold w-full sm:w-auto justify-center shadow-none cursor-pointer"
      onClick={scrollToSection}
    >
      {props.children}
    </Button>
  );
}
