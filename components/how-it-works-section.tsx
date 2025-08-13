import { FileIcon as FileTemplate, Edit, Download } from "lucide-react"

export function HowItWorksSection() {
  const steps = [
    {
      icon: FileTemplate,
      title: "Choisissez une trame",
      description: "Bibliothèque de modèles validés + vos propres modèles.",
    },
    {
      icon: Edit,
      title: "Saisissez vos données",
      description:
        "Anamnèse, notes, résultats chiffrés. Import possible depuis des formulaires/Google Sheets (optionnel).",
    },
    {
      icon: Download,
      title: "Générez & ajustez",
      description: "L'IA propose un premier jet structuré. Vous éditez, validez, exportez.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-bold text-3xl md:text-4xl text-gray-900 mb-4">Comment ça marche</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              {/* Numéro d'étape */}
              <div className="w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 font-bold text-lg">
                {index + 1}
              </div>

              {/* Icône */}
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <step.icon className="w-8 h-8 text-primary-500" />
              </div>

              <h3 className="font-semibold text-xl text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>

              {/* Flèche de connexion */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-8 h-0.5 bg-primary-200 transform -translate-y-1/2 -translate-x-4"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
