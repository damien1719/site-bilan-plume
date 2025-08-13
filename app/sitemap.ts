import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.bilanplume.fr"
  const now = new Date()

  return [
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/essai-gratuit`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/mentions-legales`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/confidentialite`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/recherche`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.2,
    },
    // Blog articles (static slugs for now)
    {
      url: `${baseUrl}/blog/meilleures-pratiques-en-psychomotricite-guide-2024`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/comment-optimiser-vos-bilans-psychomoteurs`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/ia-sante-revolution-ou-evolution`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/gestion-du-temps-professionnels-de-sante`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/nouveautes-reglementaires-psychomotricite`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/temoignage-ma-premiere-annee-avec-bilan-plume`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    // Nouveaux articles
    {
      url: `${baseUrl}/blog/methode-simple-claire`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/bilan-psychomoteur-etapes-tests-rendu-professionnel`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/tests-fonctions-executives-enfant`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/ia-bilan-psychomoteur-gagner-2h`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ]
}


