import type { MetadataRoute } from "next";

// El sitio se exporta como archivos estáticos: se genera una vez al compilar.
export const dynamic = "force-static";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3003";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
