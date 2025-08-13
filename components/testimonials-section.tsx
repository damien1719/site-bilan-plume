import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Dr. Sophie Martin",
      role: "Psychomotricienne",
      location: "Paris",
      content:
        "Bilan Plume a révolutionné ma pratique. Je peux maintenant consacrer plus de temps à mes patients plutôt qu'à la paperasse.",
      rating: 5,
    },
    {
      name: "Thomas Dubois",
      role: "Ergothérapeute",
      location: "Lyon",
      content:
        "La qualité des bilans générés est impressionnante. L'outil comprend vraiment les spécificités de notre métier.",
      rating: 5,
    },
    {
      name: "Marie Leroy",
      role: "Psychomotricienne",
      location: "Marseille",
      content:
        "Interface intuitive et résultats professionnels. Mes collègues sont impressionnés par la rapidité de mes comptes-rendus.",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 bg-[#FAF9F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Ils nous font confiance</h2>
          <p className="text-xl text-gray-600">Découvrez ce que disent les professionnels qui utilisent Bilan Plume</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div className="border-t border-gray-100 pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">
                    {testimonial.role} • {testimonial.location}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
