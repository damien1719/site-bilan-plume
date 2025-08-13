import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Confidentialité & RGPD",
  description: "Politique de confidentialité et RGPD de Bilan Plume",
  alternates: { canonical: "/confidentialite" },
}

export default function ConfidentialitePage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12 prose">
      <h1>Politique de confidentialité</h1>
      <p>Nous attachons une grande importance à la protection des données.</p>
      <h2>Données collectées</h2>
      <p>Détails à compléter selon vos traitements.</p>
      <h2>Vos droits</h2>
      <p>Accès, rectification, suppression, portabilité, opposition.</p>
      <h2>Contact DPO</h2>
      <p>privacy@bilanplume.fr</p>
    </main>
  )
}


