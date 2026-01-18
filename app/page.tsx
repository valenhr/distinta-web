import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ProductsSection } from "@/components/products-section"
import { ProcessSection } from "@/components/process-section"
import { WhyUsSection } from "@/components/why-us-section"
import { BrandsSection } from "@/components/brands-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProductsSection />
      <ProcessSection />
      <WhyUsSection />
      <BrandsSection />
      <Footer />
    </main>
  )
}
