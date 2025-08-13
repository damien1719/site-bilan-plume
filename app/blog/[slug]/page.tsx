import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"

type Article = {
  slug: string
  title: string
  excerpt: string
  author: string
  date: string
  image: string
  category: string
}

const articles: Article[] = [
  {
    slug: "meilleures-pratiques-en-psychomotricite-guide-2024",
    title: "Meilleures pratiques en psychomotricité : Guide 2024",
    excerpt:
      "Découvrez les dernières recommandations pour optimiser vos séances de psychomotricité et améliorer l'accompagnement de vos patients.",
    author: "Dr. Sophie Martin",
    date: "2024-03-15",
    category: "Pratique Clinique",
    image: "/psychomotricite-therapie.png",
  },
  {
    slug: "comment-optimiser-vos-bilans-psychomoteurs",
    title: "Comment optimiser vos bilans psychomoteurs ?",
    excerpt:
      "Techniques et astuces pour rédiger des bilans plus efficaces et complets, tout en gagnant du temps dans votre pratique quotidienne.",
    author: "Thomas Dubois",
    date: "2024-03-10",
    category: "Documentation",
    image: "/medical-report-writing.png",
  },
  {
    slug: "ia-sante-revolution-ou-evolution",
    title: "L'IA au service de la santé : révolution ou évolution ?",
    excerpt:
      "Analyse de l'impact de l'intelligence artificielle sur les professions de santé et les opportunités qu'elle offre aux praticiens.",
    author: "Marie Leroy",
    date: "2024-03-05",
    category: "Innovation",
    image: "/intelligence-artificielle-sante.png",
  },
  {
    slug: "gestion-du-temps-professionnels-de-sante",
    title: "Gestion du temps : conseils pour les professionnels de santé",
    excerpt:
      "Stratégies pratiques pour optimiser votre emploi du temps et équilibrer vie professionnelle et personnelle.",
    author: "Dr. Pierre Moreau",
    date: "2024-02-28",
    category: "Développement",
    image: "/professional-time-management.png",
  },
  {
    slug: "nouveautes-reglementaires-psychomotricite",
    title: "Nouveautés réglementaires en psychomotricité",
    excerpt:
      "Tour d'horizon des dernières évolutions réglementaires qui impactent la pratique de la psychomotricité en France.",
    author: "Avocat Santé",
    date: "2024-02-20",
    category: "Réglementation",
    image: "/placeholder-gur1m.png",
  },
  {
    slug: "temoignage-ma-premiere-annee-avec-bilan-plume",
    title: "Témoignage : Ma première année avec Bilan Plume",
    excerpt:
      "Retour d'expérience d'une psychomotricienne qui utilise Bilan Plume depuis un an. Bilan et conseils pratiques.",
    author: "Julie Bertrand",
    date: "2024-02-15",
    category: "Témoignage",
    image: "/professional-health-testimonial.png",
  },
]

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

type PageProps = { params: { slug: string } }

function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug)
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const article = getArticleBySlug(params.slug)
  if (!article) return {}
  const url = `https://www.bilanplume.fr/blog/${article.slug}`

  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/blog/${article.slug}` },
    openGraph: {
      type: "article",
      url,
      title: `${article.title} | Bilan Plume` as string,
      description: article.excerpt,
      images: [
        {
          url: `https://www.bilanplume.fr${article.image}`,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
  }
}

export default function BlogArticlePage({ params }: PageProps) {
  const article = getArticleBySlug(params.slug)
  if (!article) return notFound()

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: "https://www.bilanplume.fr/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://www.bilanplume.fr/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: `https://www.bilanplume.fr/blog/${article.slug}`,
      },
    ],
  }

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    author: {
      "@type": "Person",
      name: article.author,
    },
    datePublished: article.date,
    image: `https://www.bilanplume.fr${article.image}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.bilanplume.fr/blog/${article.slug}`,
    },
  }

  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <nav className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:underline">
          Accueil
        </Link>{" "}
        /{" "}
        <Link href="/blog" className="hover:underline">
          Blog
        </Link>{" "}
        / <span className="text-gray-700">{article.title}</span>
      </nav>

      <h1 className="text-4xl font-bold text-gray-900 mb-4">{article.title}</h1>
      <p className="text-gray-600 mb-6">Par {article.author} • {new Date(article.date).toLocaleDateString("fr-FR")}</p>

      <div className="relative aspect-video w-full mb-8 overflow-hidden rounded-xl border border-gray-100">
        <Image
          src={article.image}
          alt={article.title}
          fill
          sizes="(max-width: 768px) 100vw, 768px"
          className="object-cover"
          priority
        />
      </div>

      <div className="prose prose-lg max-w-none">
        <p>{article.excerpt}</p>
        <p>
          Ceci est un exemple d'article. Ajoutez ici votre contenu riche: sections, listes, visuels, et liens internes
          vers d'autres ressources du site.
        </p>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
    </article>
  )
}


