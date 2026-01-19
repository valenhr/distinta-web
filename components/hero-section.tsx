import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section id="inicio" className="relative w-full h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/colorful-food-packaging-boxes-and-bags-professiona.jpg"
          alt="Empaques de comida y bolsas personalizadas"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/65"></div>
      </div>

      {/* Content */}
      <div className="relative w-full h-full flex flex-col items-center justify-center text-center text-primary-foreground space-y-6 px-4">
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
    </section>
  )
}
