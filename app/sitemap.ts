// app/sitemap.ts

import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://nexmyr.com",
      lastModified: new Date("2026-09-24"),
      priority: 1,
    },
    {
      url: "https://nexmyr.com/projects",
      lastModified: new Date("2026-09-24"),
      priority: 0.9,
    },
    {
      url: "https://nexmyr.com/pricings",
      lastModified: new Date("2026-09-24"),
      priority: 0.9,
    },
    {
      url: "https://nexmyr.com/journey",
      lastModified: new Date("2026-09-24"),
      priority: 0.8,
    },
    {
      url: "https://nexmyr.com/contact",
      lastModified: new Date("2026-09-24"),
      priority: 0.8,
    },
    {
      url: "https://nexmyr.com/legal",
      lastModified: new Date("2026-09-24"),
      priority: 0.8,
    },
    {
      url: "https://nexmyr.com/cgv",
      lastModified: new Date("2026-09-24"),
      priority: 0.8,
    },
  ];
}
