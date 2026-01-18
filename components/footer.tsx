import Link from "next/link"
import { Package, MapPin, Instagram, Facebook, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer id="contacto" className="bg-primary text-primary-foreground">
      {/* CTA Section */}
      <div className="border-b border-primary-foreground/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Listo para sacar tus empaques?</h2>
          <p className="text-primary-foreground/70 text-lg max-w-xl mx-auto">
            Contáctanos hoy y comienza a transformar la presentación de tu negocio
          </p>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Logo & Description */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Package className="h-8 w-8 text-accent" />
              <span className="text-xl font-bold">PackPro</span>
            </Link>
            <p className="text-primary-foreground/70 leading-relaxed">
              Tu socio de confianza en empaques personalizados para comida y bolsas para ropa.
            </p>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-accent" />
              Ubicación
            </h3>
            <address className="text-primary-foreground/70 not-italic leading-relaxed">
              Av. Industrial 1234
              <br />
              Zona Industrial Norte
              <br />
              Ciudad de México, CP 06100
              <br />
              México
            </address>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-success flex items-center justify-center hover:bg-success-light transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/50 text-sm">© 2026 PackPro. Todos los derechos reservados.</p>
            <Link
              href="#"
              className="text-primary-foreground/70 text-sm hover:text-accent transition-colors underline underline-offset-4"
            >
              Políticas de devolución
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
