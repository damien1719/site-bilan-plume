"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "Qu'est-ce que Bilan Plume ?",
      answer:
        "Bilan Plume est un assistant intelligent conçu pour aider les psychomotriciens, ergothérapeutes et neuropsychologues à rédiger leurs bilans plus rapidement. Il génère un premier jet structuré à partir de vos observations, que vous pouvez ensuite ajuster et valider.",
    },
    {
      question: "Comment Bilan Plume me fait-il gagner du temps ?",
      answer:
        "En automatisant les parties répétitives comme l'anamnèse, les tableaux de résultats ou la synthèse. Vous pouvez ainsi réduire de 1 à 3 heures le temps nécessaire à chaque bilan.",
    },
    {
      question: "Est-ce que Bilan Plume respecte la confidentialité des données ?",
      answer:
        "Oui. Toutes les données sont hébergées en France et conformes au RGPD. Nous ne stockons aucune donnée personnelle en dehors des besoins strictement nécessaires à l'utilisation du service.",
    },
    {
      question: "Puis-je personnaliser mes trames de bilan ?",
      answer:
        "Absolument. Vous pouvez créer vos propres trames ou utiliser celles proposées par Bilan Plume et les adapter à votre pratique.",
    },
    {
      question: "Pour qui est fait Bilan Plume ?",
      answer:
        "Bilan Plume s'adresse à tous les professionnels de santé qui rédigent des bilans ou comptes rendus : psychomotriciens, ergothérapeutes, neuropsychologues… et toute profession ayant besoin de structurer et synthétiser des évaluations cliniques.",
    },
    {
      question: "Comment puis-je essayer Bilan Plume ?",
      answer:
        'Vous pouvez tester Bilan Plume gratuitement pendant 14 jours, sans carte bancaire. Cliquez simplement sur "Essayer gratuitement" pour commencer.',
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-bold text-3xl md:text-4xl text-gray-900 mb-4">Questions fréquentes</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg border shadow-sm">
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 rounded-lg"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
