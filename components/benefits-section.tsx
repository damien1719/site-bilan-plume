"use client"

import { Clock, Award, Users, Quote, Calculator, Sparkles, TrendingUp } from "lucide-react"
import { useState } from "react"

export function BenefitsSection() {
  const [showCalculator, setShowCalculator] = useState(false)
  const [bilansPerWeek, setBilansPerWeek] = useState(5)

  const benefits = [
    {
      icon: Clock,
      title: "2h gagné par Bilan",
      description: "A partir de vos notes et résultats de tests, Bilan Plume génère un 1e jet de bilan.",
      color: "from-[#FF6F61] to-[#FFD700]", // Ajout de couleurs spécifiques pour chaque bénéfice
    },
    {
      icon: Award,
      title: "Personnalisable à votre style",
      description: "Personnalisez votre trame ou le style de Bilan Plume pour coller au votre pratique.",
      color: "from-[#8B5CF6] to-[#3B82F6]",
    },
    {
      icon: Users,
      title: "Données sécurisées",
      description: "Les données sont hébergés sur des serveurs HDS (comme les hôpitaux).",
      color: "from-[#3FAF88] to-[#2C7A5D]",
    },
  ]

  const testimonials = [
    {
      quote:
        "Bilan Plume m'a fait gagner 3 heures par semaine. Je peux enfin me concentrer sur mes patients plutôt que sur la rédaction administrative.",
      author: "Marie L.",
      role: "Psychomotricienne, Paris",
    },
    {
      quote:
        "La qualité des bilans générés est impressionnante. Mes collègues médecins apprécient la clarté et la structure des comptes-rendus.",
      author: "Thomas D.",
      role: "Psychomotricien libéral, Lyon",
    },
  ]

  const timesSaved = bilansPerWeek * 2

  return (
    <section className="py-12 bg-gradient-to-br from-white via-[#f8fcfa] to-[#f0faf6] relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center p-6 hover-lift">
              <div
                className={`w-20 h-20 bg-gradient-to-r ${benefit.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                <benefit.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-semibold text-xl text-gray-900 mb-4">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mb-12 p-8 bg-white rounded-xl shadow-lg border border-primary-100 hover-lift relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-[#4A90A4] to-[#D4B896]"></div>
          <div className="flex items-center justify-center gap-2 mb-2">
            <TrendingUp className="w-8 h-8 text-primary" />
            <div className="text-4xl font-bold bg-gradient-to-r from-primary to-[#4A90A4] bg-clip-text text-transparent">
              10h par semaine
            </div>
          </div>
          <div className="text-lg text-gray-700 mb-4">⏰ Temps économisé par semaine</div>
          <button
            onClick={() => setShowCalculator(!showCalculator)}
            className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center gap-2 transition-colors bg-primary-50 px-4 py-2 rounded-full hover:bg-primary-100"
          >
            <Calculator className="w-4 h-4" />🧮 Calculez votre gain de temps →
          </button>

          {showCalculator && (
            <div className="mt-6 p-6 bg-gradient-to-r from-primary-50 to-[#F5F1E8] rounded-lg border border-primary-200">
              <div className="max-w-sm mx-auto">
                <label className="block text-sm font-medium text-gray-700 mb-2">Nombre de bilans par semaine :</label>
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={bilansPerWeek}
                  onChange={(e) => setBilansPerWeek(Number(e.target.value))}
                  className="w-full mb-4 accent-primary"
                />
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600 flex items-center justify-center gap-2">
                    <Sparkles className="w-6 h-6" />
                    {bilansPerWeek} bilans
                  </div>
                  <div className="text-lg text-gray-700 mt-2">
                    ={" "}
                    <span className="font-semibold bg-gradient-to-r from-primary to-[#4A90A4] bg-clip-text text-transparent">
                      {timesSaved}h économisées
                    </span>{" "}
                    par semaine
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    Soit {Math.round(timesSaved * 4.3)} heures par mois 🚀
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 relative shadow-lg border-l-4 border-primary hover-lift"
            >
              <Quote className="w-8 h-8 text-primary-300 absolute top-4 left-4" />
              <blockquote className="text-gray-800 italic mb-4 pl-8">"{testimonial.quote}"</blockquote>
              <div className="text-sm">
                <div className="font-semibold text-primary-700 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  {testimonial.author}
                </div>
                <div className="text-gray-600">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
