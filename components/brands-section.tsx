const brands = [
  { name: "Delicia Café", logo: "/coffee-shop-logo-minimal.jpg" },
  { name: "Burger House", logo: "/burger-restaurant-logo-minimal.jpg" },
  { name: "Sweet Dreams", logo: "/bakery-pastry-logo-minimal-elegant.jpg" },
  { name: "Fashion Store", logo: "/fashion-boutique-logo-minimal.jpg" },
  { name: "Foodie Express", logo: "/food-delivery-logo-minimal.jpg" },
  { name: "Trendy Wear", logo: "/placeholder.svg?height=80&width=160" },
]

export function BrandsSection() {
  return (
    <section className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Algunas marcas que trabajan con nosotros
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
            Empresas que confían en PackPro para sus empaques
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
            >
              <img
                src={brand.logo || "/placeholder.svg"}
                alt={brand.name}
                className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity filter brightness-0 invert"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
