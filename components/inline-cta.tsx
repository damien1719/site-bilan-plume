import { Button } from "@/components/ui/button"
import Link from "next/link"

interface InlineCtaProps {
  variant?: "default" | "minimal"
  className?: string
}

const FeatherIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" fill="currentColor" opacity="0.8" />
    <path d="M16 8L2 22" stroke="currentColor" strokeWidth="2" />
    <path d="M17.5 15H9" stroke="currentColor" strokeWidth="2" />
  </svg>
)

export function InlineCta({ variant = "default", className = "" }: InlineCtaProps) {
  if (variant === "minimal") {
    return (
      <div className={`text-center py-8 ${className}`}>
        <Link href="/essai-gratuit">
          <Button
            size="xl"
            variant="default"
            className="bg-gradient-to-r from-primary to-[#2C7A5D] hover:from-[#2C7A5D] hover:to-primary text-white hover-lift inline-flex items-center gap-3 px-10 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <FeatherIcon className="w-5 h-5" />
            Essayer gratuitement
          </Button>
        </Link>
        <p className="text-sm text-gray-600 mt-3">Sans CB, sans engagement</p>
      </div>
    )
  }

  return (
    <div
      className={`bg-gradient-to-r from-primary-50 via-[#F5F1E8] to-[#E8F4F1] py-12 relative overflow-hidden ${className}`}
    >
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <Link href="/essai-gratuit">
          <Button
            size="xl"
            variant="default"
            className="bg-gradient-to-r from-primary to-[#4A90A4] hover:from-[#4A90A4] hover:to-primary text-white hover-lift animate-glow inline-flex items-center gap-3 px-12 py-4 text-xl font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <FeatherIcon className="w-6 h-6" />
            Essayer gratuitement
          </Button>
        </Link>
        <p className="text-sm text-gray-600 mt-4">Sans CB, sans engagement • Essai de 14 jours 🎁</p>
      </div>
    </div>
  )
}
