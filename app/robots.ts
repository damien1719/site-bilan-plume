import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://www.bilanplume.fr/sitemap.xml",
    host: "www.bilanplume.fr",
  }
}


