import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site Bilan Plume",
  alternates: { canonical: "/mentions-legales" },
}

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 max-w-4xl py-20">
        <h1>Mentions légales</h1>
        <p>Éditeur du site : Bilan Plume</p>
        <p>Site : https://www.bilanplume.fr</p>
        <p>Contact : support@bilanplume.fr</p>
        
        <h2>Hébergement</h2>
        <p>Hébergeur : Vercel Inc.<br />
        340 S Lemon Ave #4133,<br />
        Walnut, CA 91789,<br />
        États-Unis</p>
        
        <h2>Propriété intellectuelle</h2>
        <p>L'ensemble des éléments constituant le site Bilan Plume (textes, images, logos, etc.) est la propriété exclusive de Bilan Plume ou de ses partenaires. Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de Bilan Plume.</p>
        
        <h2>Protection des données personnelles</h2>
        <p>Conformément à la loi « informatique et libertés » du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, de suppression et de portabilité de vos données personnelles. Pour exercer ces droits, vous pouvez nous contacter à l'adresse suivante : support@bilanplume.fr</p>
        
        <h2>Cookies</h2>
        <p>Le site Bilan Plume utilise des cookies pour améliorer votre expérience de navigation. En continuant votre navigation sur ce site, vous acceptez l'utilisation de cookies conformément à notre politique de confidentialité.</p>
      </main>
      <Footer />
    </div>
  )
}
