"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Brain, Hand, Puzzle } from "lucide-react"

export function TargetAudienceSection() {
  const [activeTab, setActiveTab] = useState(0)

  const audiences = [
    {
      icon: Brain,
      title: "Psychomotricien·ne",
      description:
        "Structurez anamnèse, observations cliniques, tests (NEPSY‑II, Figure de Rey, etc.), puis générez la synthèse et les recommandations. Exportez en un clic.",
    },
    {
      icon: Hand,
      title: "Ergothérapeute",
      description:
        "Rassemblez observations fonctionnelles, évaluations (dextérité, AVQ/AEJ), objectifs et plan d'intervention dans un rapport clair et actionnable.",
    },
    {
      icon: Puzzle,
      title: "Neuropsychologue",
      description:
        "Intégrez résultats bruts/étalonnés, graphiques et interprétations avec un assistant qui propose des formulations conformes à votre style.",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-bold text-3xl md:text-4xl text-gray-900 mb-4">Pour qui ?</h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Onglets */}
          <div className="lg:w-1/3">
            <div className="space-y-2">
              {audiences.map((audience, index) => (
                <Button
                  key={index}
                  size="lg"
                  variant={activeTab === index ? "default" : "ghost"}
                  className={`w-full justify-start p-4 h-auto text-lg ${
                    activeTab === index ? "text-white" : "text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  <audience.icon className="w-5 h-5 mr-3" />
                  <span className="font-medium">{audience.title}</span>
                </Button>
              ))}
            </div>
          </div>

          {/* Contenu */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg p-8 shadow-sm border">
              <div className="flex items-center mb-6">
                {React.createElement(audiences[activeTab].icon, {
                  className: "w-8 h-8 text-primary-500 mr-4",
                })}
                <h3 className="font-bold text-2xl text-gray-900">{audiences[activeTab].title}</h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">{audiences[activeTab].description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
