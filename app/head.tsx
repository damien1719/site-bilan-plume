export default function Head() {
  const jsonLdWebsite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Bilan Plume",
    url: "https://www.bilanplume.fr",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.bilanplume.fr/recherche?q={query}",
      "query-input": "required name=query",
    },
  }

  const jsonLdOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Bilan Plume",
    url: "https://www.bilanplume.fr",
    logo: "https://www.bilanplume.fr/logo-bilan-plume.png",
    sameAs: [],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
      />
    </>
  )
}


