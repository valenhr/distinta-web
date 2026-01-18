import { CheckCircle } from "lucide-react"

const benefits = [
  "Más de 10 años de experiencia en el mercado",
  "Materiales de primera calidad certificados",
  "Diseños personalizados que reflejan tu marca",
  "Entregas puntuales en todo el país",
  "Precios competitivos sin sacrificar calidad",
  "Atención al cliente dedicada y personalizada",
]

export function WhyUsSection() {
  return (
    <section id="nosotros" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">¿Por qué trabajar con nosotros?</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              En PackPro nos dedicamos a transformar la manera en que las empresas presentan sus productos. Con más de
              una década de experiencia en la industria del empaque, hemos perfeccionado el arte de crear soluciones que
              no solo protegen tus productos, sino que también elevan la percepción de tu marca. Nuestro equipo de
              diseñadores y especialistas trabaja mano a mano contigo para entender tus necesidades específicas y crear
              empaques que cuenten la historia de tu negocio.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Utilizamos tecnología de punta y materiales de la más alta calidad para garantizar que cada empaque que
              sale de nuestra planta cumple con los estándares más exigentes. Ya sea que necesites empaques para comida
              rápida, repostería, o bolsas elegantes para tu boutique, tenemos la solución perfecta para ti. Nos
              enorgullece ser parte del éxito de cientos de negocios que confían en nosotros para hacer brillar sus
              productos.
            </p>

            {/* Benefits List */}
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden border-4 border-accent/30">
              <img
                src="/packaging-factory-workers-team-professional-wareho.jpg"
                alt="Nuestro equipo de trabajo"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Stats overlay */}
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-xl">
              <div className="text-4xl font-bold text-accent">10+</div>
              <div className="text-sm">Años de experiencia</div>
            </div>
            <div className="absolute -top-6 -right-6 bg-success text-white p-6 rounded-xl shadow-xl">
              <div className="text-4xl font-bold">500+</div>
              <div className="text-sm">Clientes satisfechos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
