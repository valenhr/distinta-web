import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative w-full h-screen overflow-hidden bg-[#dceef2] flex flex-col items-center justify-center"
    >
      {/* Background Image con separación lateral y margen arriba */}
      <div className="w-11/12 h-[80%] rounded-t-[40px] rounded-b-[40px] overflow-hidden shadow-xl relative mt-12">
          <img
            src="/colorful-food-packaging-boxes-and-bags-professiona.jpg"
            alt="Empaques de comida y bolsas personalizadas"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60 rounded-t-[40px] rounded-b-[40px]"></div>
        </div>

      {/* Contenido */}
      <div className="absolute inset-0 w-11/12 left-1/2 transform -translate-x-1/2 mt-12 flex flex-col items-center justify-center text-center text-primary-foreground space-y-6 px-6 md:px-20 rounded-t-[40px] rounded-b-[40px] pointer-events-none">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
          Empaques que <span className="text-accent">destacan</span> tu marca
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/90 leading-tight max-w-xl">
          Empaques genéricos y personalizados, únicos y biodegradables, dale un toque distinto a tus cajas, bolsas y papeles.
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
