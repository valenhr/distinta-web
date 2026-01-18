"use client"

import { useState } from "react"
import { ChevronRight, UtensilsCrossed, FileText, Shirt } from "lucide-react"
import { cn } from "@/lib/utils"

type Category = "empaques" | "papeles" | "ropa" | null
type SubCategory = string | null

const categories = [
  { id: "empaques", label: "Empaques", icon: UtensilsCrossed },
  { id: "papeles", label: "Papeles", icon: FileText },
  { id: "ropa", label: "Ropa", icon: Shirt },
] as const

const subCategories: Record<string, { id: string; label: string; image: string }[]> = {
  empaques: [
    { id: "comida-rapida", label: "Comida Rápida", image: "/fast-food-packaging-boxes-hamburger-fries-professi.jpg" },
    { id: "reposteria", label: "Repostería", image: "/bakery-pastry-packaging-boxes-cupcakes-cakes-elega.jpg" },
    { id: "otros", label: "Otros", image: "/various-food-packaging-containers-takeout-professi.jpg" },
  ],
  papeles: [
    { id: "antigrasa", label: "Papel Antigrasa", image: "/grease-proof-paper-food-wrap-professional-kitchen.jpg" },
    { id: "envoltura", label: "Papel de Envoltura", image: "/wrapping-paper-rolls-colorful-gift-packaging.jpg" },
  ],
  ropa: [
    { id: "bolsas-boutique", label: "Bolsas Boutique", image: "/luxury-shopping-bags-clothing-boutique-elegant.jpg" },
    { id: "bolsas-plastico", label: "Bolsas Plástico", image: "/plastic-shopping-bags-retail-clothing-store.jpg" },
    { id: "bolsas-papel", label: "Bolsas de Papel", image: "/paper-shopping-bags-eco-friendly-retail-fashion.jpg" },
  ],
}

export function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState<Category>(null)

  return (
    <section id="productos" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Nuestros Productos</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explora nuestra amplia gama de empaques y bolsas personalizadas para tu negocio
          </p>
        </div>

        {/* Main Categories */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {categories.map((category) => {
            const Icon = category.icon
            const isActive = activeCategory === category.id

            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(isActive ? null : (category.id as Category))}
                className={cn(
                  "group relative p-8 rounded-2xl border-2 transition-all duration-300",
                  "hover:shadow-lg hover:-translate-y-1",
                  isActive
                    ? "bg-primary border-primary text-primary-foreground"
                    : "bg-card border-border hover:border-accent",
                )}
              >
                <div className="flex flex-col items-center gap-4">
                  <div
                    className={cn(
                      "p-4 rounded-xl transition-colors",
                      isActive ? "bg-accent" : "bg-secondary group-hover:bg-accent/20",
                    )}
                  >
                    <Icon className={cn("h-8 w-8", isActive ? "text-accent-foreground" : "text-foreground")} />
                  </div>
                  <span className="text-xl font-semibold">{category.label}</span>
                  <ChevronRight
                    className={cn("h-5 w-5 transition-transform", isActive ? "rotate-90" : "group-hover:translate-x-1")}
                  />
                </div>
              </button>
            )
          })}
        </div>

        {/* Subcategories */}
        {activeCategory && (
          <div className="animate-in fade-in slide-in-from-top-4 duration-500">
            <div className="bg-secondary rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent" />
                Categorías de {categories.find((c) => c.id === activeCategory)?.label}
              </h3>
              <div
                className={cn(
                  "grid gap-6",
                  subCategories[activeCategory].length === 2 ? "md:grid-cols-2" : "md:grid-cols-3",
                )}
              >
                {subCategories[activeCategory].map((sub) => (
                  <div
                    key={sub.id}
                    className="group relative overflow-hidden rounded-xl bg-card border border-border hover:border-accent transition-all duration-300 hover:shadow-xl cursor-pointer"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={sub.image || "/placeholder.svg"}
                        alt={sub.label}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h4 className="text-xl font-bold text-primary-foreground">{sub.label}</h4>
                      <p className="text-primary-foreground/70 text-sm mt-1">Ver productos →</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
