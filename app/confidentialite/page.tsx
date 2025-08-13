import React from 'react';
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Confidentialité & RGPD",
  description: "Politique de confidentialité et RGPD de Bilan Plume",
  alternates: { canonical: "/confidentialite" },
}

export default function ConfidentialitePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-12 prose prose-slate dark:prose-invert">
        <h1>Politique de confidentialité</h1>
        <p>Nous attachons une grande importance à la protection de vos données personnelles.</p>
        
        <h2>Politique de Confidentialité – Bilan Plume</h2>
        <p>Dernière mise à jour : 13 août 2025</p>

        <p>Bilan Plume (« nous », « notre » ou « nos ») accorde une grande importance à la protection de vos données personnelles.</p>
        <p>La présente politique explique quelles informations nous collectons, comment nous les utilisons et quels sont vos droits conformément au Règlement Général sur la Protection des Données (RGPD) et à la législation française.</p>

        <h2>1. Responsable du traitement</h2>
        <p>Le responsable du traitement des données collectées sur le site https://bilanplume.fr est :</p>
        <p>Bilan Plume<br />
        📧 Email : contact@bilanplume.fr</p>

        <h2>2. Données collectées</h2>
        <p>Nous pouvons collecter les catégories de données suivantes :</p>
        <ul>
          <li>Données d'identification : nom, prénom, adresse e-mail, numéro de téléphone (si renseigné).</li>
          <li>Données de connexion : adresse IP, navigateur, pages visitées.</li>
          <li>Données professionnelles : informations liées à votre activité (psychomotricien, ergothérapeute, etc.), uniquement si vous les renseignez volontairement.</li>
          <li>Données sensibles : aucune donnée de santé n'est collectée sans votre consentement explicite.</li>
        </ul>

        <h2>3. Finalités de la collecte</h2>
        <p>Vos données sont traitées pour :</p>
        <ul>
          <li>Fournir nos services et gérer votre compte.</li>
          <li>Répondre à vos demandes via nos formulaires de contact ou de démonstration.</li>
          <li>Améliorer l'expérience utilisateur et la sécurité du site.</li>
          <li>Communiquer des informations commerciales ou de mise à jour, si vous l'avez accepté.</li>
        </ul>

        <h2>4. Base légale du traitement</h2>
        <p>Les traitements reposent sur :</p>
        <ul>
          <li>Votre consentement (formulaire de contact, inscription à la newsletter, etc.).</li>
          <li>L'exécution d'un contrat (accès à nos services).</li>
          <li>Nos obligations légales (archivage, facturation).</li>
          <li>Notre intérêt légitime (amélioration de nos services, sécurité).</li>
        </ul>

        <h2>5. Durée de conservation</h2>
        <p>Données de contact : 3 ans après le dernier échange.</p>
        <p>Données de compte client : pendant toute la durée d'utilisation du service + 3 ans après la fermeture du compte.</p>
        <p>Données techniques (logs) : 12 mois maximum.</p>

        <h2>6. Partage des données</h2>
        <p>Nous ne vendons pas vos données.</p>
        <p>Vos informations peuvent être transmises à :</p>
        <ul>
          <li>Nos prestataires techniques (hébergeur, envoi d'e-mails).</li>
          <li>Les autorités compétentes, si la loi l'exige.</li>
        </ul>

        <h2>7. Hébergement et sécurité</h2>
        <p>Nos données sont hébergées en France ou dans l'Union européenne, sur des serveurs conformes aux exigences du RGPD et, lorsque pertinent, aux normes HDS (Hébergement de Données de Santé).</p>
        <p>Des mesures techniques et organisationnelles protègent vos données contre toute perte, accès non autorisé ou divulgation.</p>

        <h2>8. Cookies</h2>
        <p>Nous utilisons des cookies pour :</p>
        <ul>
          <li>Assurer le bon fonctionnement du site.</li>
          <li>Mesurer l'audience et analyser la navigation.</li>
        </ul>
        <p>Vous pouvez paramétrer vos préférences depuis votre navigateur ou notre bandeau cookies.</p>

        <h2>9. Vos droits</h2>
        <p>Conformément au RGPD, vous disposez des droits suivants :</p>
        <ul>
          <li>Droit d'accès et de rectification.</li>
          <li>Droit à l'effacement (« droit à l'oubli »).</li>
          <li>Droit à la limitation et à l'opposition au traitement.</li>
          <li>Droit à la portabilité des données.</li>
        </ul>
        <p>Pour exercer vos droits, contactez : contact@bilanplume.fr</p>
        <p>Vous pouvez également déposer une réclamation auprès de la CNIL (www.cnil.fr).</p>

        <h2>10. Modifications</h2>
        <p>Nous pouvons mettre à jour la présente politique à tout moment. La date de dernière mise à jour figure en haut de la page.</p>
      </main>
      <Footer />
    </div>
  )
}
