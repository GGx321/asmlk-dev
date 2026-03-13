import type { MetadataRoute } from "next";

const SITE_URL = "https://asmlk.dev";
const LOCALES = ["ru", "en"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [""];

  return routes.flatMap((route) =>
    LOCALES.map((locale) => ({
      url: `${SITE_URL}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1.0,
    })),
  );
}
