"use client";

import { InlineWidget } from "react-calendly";

export default function CalendlySection() {
  return (
    <section className="w-full">
      <InlineWidget
        url="https://calendly.com/briancoupama/30min"
        styles={{
          height: "700px",
        }}
        pageSettings={{
          backgroundColor: "0C0A09",
          hideEventTypeDetails: false,
          hideLandingPageDetails: false,
          primaryColor: "D89B42",
          textColor: "FAFAF9",
        }}
      />
    </section>
  );
}
