import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, User } from "lucide-react"
import type { Metadata } from "next"

export default function BlogPage() {
  const articles = [
    {
      id: 1,
      title: "Meilleures pratiques en psychomotricité : Guide 2024",
      excerpt:
        "Découvrez les dernières recommandations pour optimiser vos séances de psychomotricité et améliorer l'accompagnement de vos patients.",
      author: "Dr. Sophie Martin",
      date: "15 Mars 2024",
      readTime: "5 min",
      category: "Pratique Clinique",
      image: "/psychomotricite-therapie.png",
    },
    {
      id: 2,
      title: "Comment optimiser vos bilans psychomoteurs ?",
      excerpt:
        "Techniques et astuces pour rédiger des bilans plus efficaces et complets, tout en gagnant du temps dans votre pratique quotidienne.",
      author: "Thomas Dubois",
      date: "10 Mars 2024",
      readTime: "7 min",
      category: "Documentation",
      image: "/medical-report-writing.png",
    },
    {
      id: 3,
      title: "L'IA au service de la santé : révolution ou évolution ?",
      excerpt:
        "Analyse de l'impact de l'intelligence artificielle sur les professions de santé et les opportunités qu'elle offre aux praticiens.",
      author: "Marie Leroy",
      date: "5 Mars 2024",
      readTime: "6 min",
      category: "Innovation",
      image: "/intelligence-artificielle-sante.png",
    },
    {
      id: 4,
      title: "Gestion du temps : conseils pour les professionnels de santé",
      excerpt:
        "Stratégies pratiques pour optimiser votre emploi du temps et équilibrer vie professionnelle et personnelle.",
      author: "Dr. Pierre Moreau",
      date: "28 Février 2024",
      readTime: "4 min",
      category: "Développement",
      image: "/professional-time-management.png",
    },
    {
      id: 5,
      title: "Nouveautés réglementaires en psychomotricité",
      excerpt:
        "Tour d'horizon des dernières évolutions réglementaires qui impactent la pratique de la psychomotricité en France.",
      author: "Avocat Santé",
      date: "20 Février 2024",
      readTime: "8 min",
      category: "Réglementation",
      image: "/placeholder-gur1m.png",
    },
    {
      id: 6,
      title: "Témoignage : Ma première année avec Bilan Plume",
      excerpt:
        "Retour d'expérience d'une psychomotricienne qui utilise Bilan Plume depuis un an. Bilan et conseils pratiques.",
      author: "Julie Bertrand",
      date: "15 Février 2024",
      readTime: "3 min",
      category: "Témoignage",
      image: "/professional-health-testimonial.png",
    },
  ]

  const categories = [
    "Tous",
    "Pratique Clinique",
    "Documentation",
    "Innovation",
    "Développement",
    "Réglementation",
    "Témoignage",
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
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Blog Bilan Plume</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conseils, actualités et bonnes pratiques pour les professionnels de la psychomotricité
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={category === "Tous" ? "default" : "secondary"}
                className={`cursor-pointer hover:bg-primary hover:text-white transition-colors ${
                  category === "Tous" ? "bg-primary text-white" : ""
                }`}
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Card
                key={article.id}
                className="border-gray-100 hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              >
                <div className="aspect-video bg-gray-100 relative overflow-hidden">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    fill
                    sizes="(max-width: 1024px) 50vw, 33vw"
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-3 left-3 bg-primary text-white">{article.category}</Badge>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl hover:text-primary transition-colors">
                    <Link href={`/blog/${slugify(article.title)}`}>{article.title}</Link>
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

          {/* Newsletter CTA */}
          <div className="mt-20 bg-[#FAF9F7] rounded-2xl p-8 lg:p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Restez informé des dernières actualités</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Recevez nos articles directement dans votre boîte mail et ne manquez aucune nouveauté du secteur.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre email professionnel"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="bg-primary hover:bg-[#2C7A5D] text-white px-6 py-3 rounded-lg font-medium transition-colors">
                S'abonner
              </button>
            </div>
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
