import { MetadataRoute } from "next";
import { people } from "@/lib/people";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://example.com";
  const staticRoutes = [
    "",
    "/people",
    "/topics",
    "/methodik",
    "/quellen",
    "/angebote",
    "/support",
    "/kontakt",
    "/impressum",
    "/agb",
    "/datenschutz"
  ];

  return [
    ...staticRoutes.map((p) => ({
      url: `${base}${p}/`,
      lastModified: new Date("2026-02-06").toISOString()
    })),
    ...people.map((p) => ({
      url: `${base}/people/${p.slug}/`,
      lastModified: new Date("2026-02-06").toISOString()
    }))
  ];
}
