import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site Bilan Plume",
  alternates: { canonical: "/mentions-legales" },
}

export default function MentionsLegalesPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12 prose">
      <h1>Mentions légales</h1>
      <p>Editeur du site: Bilan Plume</p>
      <p>Site: https://www.bilanplume.fr</p>
      <p>Contact: support@bilanplume.fr</p>
      <h2>Hébergement</h2>
      <p>Hébergeur: Vercel</p>
      <h2>Propriété intellectuelle</h2>
      <p>Tous droits réservés.</p>
    </main>
  )
}


