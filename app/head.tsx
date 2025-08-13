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
      {/* Google Tag Manager */}
      <script dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-PL55ZMV7');`
      }} />
      {/* End Google Tag Manager */}
      
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
