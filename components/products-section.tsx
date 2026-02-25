"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)
export function ProductsSection() {
    const titleRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    gsap.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#productos",
        start: "top 80%",
        once: true
      }
    })

    gsap.from(textRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.3,
      scrollTrigger: {
        trigger: "#productos",
        start: "top 80%",
        once: true
      }
    })
  }, [])

  return (
    <section id="productos">
      {/* Header verde */}
      <div className="bg-[#dceef2] pt-7 pb-12 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 ref={titleRef} className="text-5xl font-extrabold text-[#024873] leading-tight ">
            Nuestros Productos
          </h2>
          <p ref={textRef} className="text-[#035a8a] font-light text-2xl max-w-2xl mx-auto mb-6">
            Explora nuestra amplia gama de empaques y bolsas personalizadas para tu negocio
          </p>
        </div>
      </div>


      {/* Secciones de producto full width */}
      <div className="w-full">
        {/* Empaques */}
        <div className="flex flex-col md:flex-row items-stretch w-full">
          <div className="md:w-1/2 p-8 md:p-20 bg-[#25d9d9]">
            <h3 className="text-4xl font-bold mb-4">Empaques</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Diseñamos empaques personalizados que elevan la presentación de tus productos y refuerzan tu marca.
            </p>
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-accent transition">
              Conocer más
            </button>
          </div>
          <div className="md:w-1/2 h-[500px]">
            <img
              src="/fast-food-packaging-boxes-hamburger-fries-professi.jpg"
              alt="Empaques"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Papeles */}
        <div className="flex flex-col md:flex-row-reverse items-stretch w-full">
          <div className="md:w-1/2 p-8 md:p-20 bg-[#f5f5f5]">
            <h3 className="text-4xl font-bold mb-4">Papeles</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Papeles resistentes y sostenibles para envolver, proteger y dar estilo a tus productos.
            </p>
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-accent transition">
              Conocer más
            </button>
          </div>
          <div className="md:w-1/2 h-[500px]">
            <img
              src="/wrapping-paper-rolls-colorful-gift-packaging.jpg"
              alt="Papeles"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Ropa */}
        <div className="flex flex-col md:flex-row items-stretch w-full">
          <div className="md:w-1/2 p-8 md:p-20 bg-[#f5f5f5]">
            <h3 className="text-4xl font-bold mb-4">Ropa</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Bolsas y accesorios para boutiques y tiendas de ropa, diseñados para destacar tu estilo.
            </p>
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-accent transition">
              Conocer más
            </button>
          </div>
          <div className="md:w-1/2 h-[500px]">
            <img
              src="/luxury-shopping-bags-clothing-boutique-elegant.jpg"
              alt="Ropa"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}