import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Clock, FileCheck, Shield, Users, Zap } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Brain,
      title: "IA Spécialisée",
      description:
        "Notre intelligence artificielle est spécialement entraînée pour la rédaction de bilans psychomoteurs professionnels.",
    },
    {
      icon: Clock,
      title: "Gain de Temps",
      description: "Réduisez le temps de rédaction de vos bilans de 80% tout en maintenant la qualité professionnelle.",
    },
    {
      icon: FileCheck,
      title: "Conformité Assurée",
      description: "Tous les bilans respectent les standards professionnels et les exigences réglementaires.",
    },
    {
      icon: Shield,
      title: "Sécurité Maximale",
      description:
        "Vos données patients sont protégées par un chiffrement de niveau bancaire et restent confidentielles.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Partagez facilement vos bilans avec votre équipe et les autres professionnels de santé.",
    },
    {
      icon: Zap,
      title: "Interface Intuitive",
      description: "Une interface simple et ergonomique conçue pour s'adapter à votre flux de travail quotidien.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Pourquoi choisir Bilan Plume ?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une solution complète pensée par et pour les professionnels de la psychomotricité
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-gray-900">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
