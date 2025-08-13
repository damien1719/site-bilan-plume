import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section className="py-20 bg-primary-500">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="font-bold text-3xl md:text-4xl text-white mb-6">Prêt à transformer votre pratique ?</h2>
        <p className="text-xl text-primary-100 mb-8">Rejoignez les professionnels qui ont déjà adopté Bilan Plume</p>

        <div className="mb-8">
          <Button size="lg" className="py-4 px-10 text-lg rounded-xl" asChild>
            <a href="/essai-gratuit">Essayer gratuitement</a>
          </Button>
        </div>

        <p className="text-primary-100 text-sm">Pas de CB • Annulation à tout moment</p>
      </div>
    </section>
  )
}
