import { Button } from "@/components/ui/button"
import { CreditCard, Palette, Truck } from "lucide-react"

const steps = [
  {
    number: "1",
    icon: CreditCard,
    title: "Pago y creación de orden",
    description: "Realiza tu pedido y confirma el pago de manera segura",
  },
  {
    number: "2",
    icon: Palette,
    title: "Realización de diseño e impresión",
    description: "Nuestro equipo crea tu diseño personalizado y lo imprime",
  },
  {
    number: "3",
    icon: Truck,
    title: "Entrega de los productos",
    description: "Recibe tus empaques en la puerta de tu negocio",
  },
]

export function ProcessSection() {
  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Proceso de Compra</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Así de fácil es obtener tus empaques personalizados
          </p>
        </div>

        {/* Steps - Horizontal */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-16 left-[15%] right-[15%] h-1 bg-border">
            <div className="absolute inset-0 bg-accent/50" style={{ width: "100%" }} />
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={step.number} className="flex flex-col items-center text-center">
                  {/* Number Circle */}
                  <div className="relative z-10 mb-6">
                    <div className="w-32 h-32 rounded-full bg-primary flex items-center justify-center shadow-lg">
                      <Icon className="h-12 w-12 text-accent" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-success flex items-center justify-center text-white font-bold text-lg shadow-md">
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed max-w-xs">{step.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <Button size="lg" className="bg-success hover:bg-success-light text-white font-semibold px-12 py-6 text-lg">
            Comprar Ahora
          </Button>
        </div>
      </div>
    </section>
  )
}
