import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section id="inicio" className="pt-16 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-primary-foreground space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              Empaques que <span className="text-accent">destacan</span> tu marca
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed max-w-xl">
              Diseñamos y fabricamos empaques para comida y bolsas para ropa de alta calidad. Personaliza tus productos
              con tu marca y déjanos impresionar a tus clientes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                Ver Productos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                Contáctanos
              </Button>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="relative">
            <div className="aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden bg-secondary/10 border-4 border-accent/30">
              <img
                src="/colorful-food-packaging-boxes-and-bags-professiona.jpg"
                alt="Empaques de comida y bolsas personalizadas"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-success rounded-xl opacity-80 -z-10" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent rounded-full opacity-60 -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
