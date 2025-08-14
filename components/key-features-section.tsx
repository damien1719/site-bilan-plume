import { BookOpen, Brain, Calculator, Eye, FileText, Users, History, AlertTriangle, Pencil, PenTool } from "lucide-react"
import Image from "next/image"

export function KeyFeaturesSection() {
  const features = [
    {
      icon: BookOpen,
      title: "Bibliothèque de trames",
      description: "Modèles prêts à l'emploi par discipline, 100% éditables.",
    },
    {
      icon: Brain,
      title: "Éditeur intelligent",
      description: "Suggestions de formulations, reformulation « tout public » pour parents/enseignants.",
    },
    {
      icon: FileText,
      title: "Exports et partage",
      description: "DOCX, gabarits de mise en page, filigranes.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Partage de trames et de rapports au sein de votre équipe ou réseau (optionnel).",
    },
    {
      icon: Pencil,
      title: "Personnalisation",
      description: "Personnalisez votre trame ou le style de Bilan Plume pour coller au votre pratique.",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-bold text-3xl md:text-4xl text-gray-900 mb-4">Fonctionnalités clés</h2>
        </div>

        <div className="flex justify-center mb-12">
          <Image src="/Test.png" alt="Fonctionnalités clés" width={1000} height={1000} />
        </div>
        <div className="flex justify-center mb-12">
          <Image src="/Test 2.png" alt="Fonctionnalités clés" width={1000} height={1000} className="rounded-lg" />
        </div>
        <div className="flex justify-center mb-12">
          <Image src="/Test 3.png" alt="Fonctionnalités clés" width={1000} height={1000} />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary-500" />
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Note légale */}
        
      </div>
    </section>
  )
}
