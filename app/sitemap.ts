// app/sitemap.ts

import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://portfolio.briancoupama.re",
      lastModified: new Date("2026-08-23"),
      priority: 1,
    },
    {
      url: "https://portfolio.briancoupama.re/projects",
      lastModified: new Date("2026-08-23"),
      priority: 0.9,
    },
    {
      url: "https://portfolio.briancoupama.re/pricings",
      lastModified: new Date("2026-08-23"),
      priority: 0.9,
    },
    {
      url: "https://portfolio.briancoupama.re/journey",
      lastModified: new Date("2026-08-23"),
      priority: 0.8,
    },
    {
      url: "https://portfolio.briancoupama.re/contact",
      lastModified: new Date("2026-08-23"),
      priority: 0.8,
    },
    {
      url: "https://portfolio.briancoupama.re/legal",
      lastModified: new Date("2026-08-23"),
      priority: 0.8,
    },
    {
      url: "https://portfolio.briancoupama.re/cgv",
      lastModified: new Date("2026-08-23"),
      priority: 0.8,
    },
  ];
}
