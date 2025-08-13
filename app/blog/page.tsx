import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, User } from "lucide-react"
import type { Metadata } from "next"
import { NewsletterForm } from "@/components/newsletter-form"

export default function BlogPage() {
  const articles = [
    {
      id: 9,
      title: "IA et bilans cliniques : comment gagner 2h par dossier",
      excerpt:
        "Standardisez vos trames, automatisez les calculs et générez un premier jet intelligent. Découvrez comment un logiciel d’IA pour bilan psychomoteur vous fait gagner jusqu’à 2 h par dossier.",
      author: "Bilan Plume",
      date: "22 Août 2025",
      readTime: "7 min",
      category: "Innovation",
      image: "/intelligence-artificielle-sante.png",
      slug: "ia-bilan-psychomoteur-gagner-2h"
    },
    {
      id: 7,
      title: "Quels tests utiliser pour évaluer les fonctions exécutives chez l’enfant ?",
      excerpt:
        "NEPSY-II, Figure de Rey, MABC : comment choisir et interpréter les tests des fonctions exécutives chez l’enfant, avec exemples concrets et FAQ.",
      author: "Bilan Plume",
      date: "21 Août 2025",
      readTime: "6 min",
      category: "Documentation",
      image: "/psychomotricite-therapie.png",
      slug: "tests-fonctions-executives-enfant"
    },
    {
      id: 0,
      title: "Bilan psychomoteur : étapes, tests et méthodes pour un rendu professionnel",
      excerpt:
        "Guide complet du bilan psychomoteur : observation, tests, cotations, interprétation, et modèle de rapport. Conseils concrets pour un compte rendu clair et utile.",
      author: "Bilan Plume",
      date: "20 Août 2025",
      readTime: "8 min",
      category: "Documentation",
      image: "/medical-report-writing.png",
      slug: "bilan-psychomoteur-etapes-tests-rendu-professionnel"
    },
    {
      id: 1,
      title: "Méthode simple pour des bilans psychomoteurs précis et rapides",
      excerpt:
        "Découvrez comment rédiger des bilans clairs et efficaces avec une méthode pragmatique pour gagner du temps sans perdre en qualité clinique.",
      author: "Bilan Plume",
      date: "13 Août 2025",
      readTime: "5 min",
      category: "Pratique Clinique",
      image: "/psychomotricite-therapie.png",
      slug: "methode-simple-claire"
    }
  ]

  

  const slugify = (value: string) =>
    value
      .toLowerCase()
      .normalize("NFD")
      .replace(/\p{Diacritic}/gu, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "")

  return (
    <div className="min-h-screen">
      <Header />

      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* En-tête */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Blog Bilan Plume</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conseils, actualités et bonnes pratiques pour les professionnels de la psychomotricité
            </p>
          </div>

          

          {/* Grille des articles */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Card
                key={article.id}
                className="border-gray-100 hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              >
                <div className="aspect-video bg-gray-100 relative overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 1024px) 50vw, 33vw"
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                  
                </div>

                <CardHeader>
                  <CardTitle className="text-xl hover:text-primary transition-colors">
                    <Link href={`/blog/${article.slug || slugify(article.title)}`}>
                      {article.title}
                    </Link>
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">{article.excerpt}</p>

                  <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Newsletter */}
          <div className="mt-20 bg-[#FAF9F7] rounded-2xl p-8 lg:p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Restez informé des dernières actualités</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Recevez nos articles directement dans votre boîte mail et ne manquez aucune nouveauté du secteur.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Conseils, actualités et bonnes pratiques pour les professionnels de la psychomotricité. Découvrez nos articles et guides.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    url: "https://www.bilanplume.fr/blog",
    title: "Blog | Bilan Plume",
    description:
      "Conseils, actualités et bonnes pratiques pour les professionnels de la psychomotricité.",
    images: [
      {
        url: "https://www.bilanplume.fr/logo-bilan-plume.png",
        width: 1200,
        height: 630,
        alt: "Bilan Plume",
      },
    ],
  },
}
