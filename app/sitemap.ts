import type { MetadataRoute } from "next";

// El sitio se exporta como archivos estáticos: se genera una vez al compilar.
export const dynamic = "force-static";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3003";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
