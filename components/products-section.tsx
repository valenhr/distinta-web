"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)
export function ProductsSection() {
  //Nuestros productos 
    const NuestrosPTitleRef = useRef(null)
    const NuestrosPTextRef = useRef(null)
// Empaques
  const empaquesTitleRef = useRef(null)
  const empaquesTextRef = useRef(null)
  const empaquesButtonRef = useRef(null)

  // Papeles
  const papelesTitleRef = useRef(null)
  const papelesTextRef = useRef(null)
  const papelesButtonRef = useRef(null)

  // Ropa
  const ropaTitleRef = useRef(null)
  const ropaTextRef = useRef(null)
  const ropaButtonRef = useRef(null)

  useEffect(() => {
    // Nuestros productos
    gsap.from(NuestrosPTitleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: NuestrosPTitleRef.current,
        start: "top 80%",
        toggleActions: "play none play reset"
      }
    })
    gsap.from(NuestrosPTextRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.2,
      scrollTrigger: {
        trigger: NuestrosPTextRef.current,
        start: "top 80%",
        toggleActions: "play none play reset"
      }
    })

    // Empaques
    gsap.from(empaquesTitleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: empaquesTitleRef.current,
        start: "top 80%",
        toggleActions: "play none play reset"
      }
    })
    gsap.from(empaquesTextRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.2,
      scrollTrigger: {
        trigger: empaquesTextRef.current,
        start: "top 80%",
        toggleActions: "play none play reset"
      }
    })
    gsap.from(empaquesButtonRef.current, {
      x: 100,
      opacity: 0,
      duration: 1,
      delay: 0.4,
      scrollTrigger: {
        trigger: empaquesButtonRef.current,
        start: "top 85%",
        toggleActions: "play none play reset"
      }
    })

    // Papeles
    gsap.from(papelesTitleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: papelesTitleRef.current,
        start: "top 80%",
        toggleActions: "play none play reset"
      }
    })
    gsap.from(papelesTextRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.2,
      scrollTrigger: {
        trigger: papelesTextRef.current,
        start: "top 80%",
        toggleActions: "play none play reset"
      }
    })
    gsap.from(papelesButtonRef.current, {
      x: 100,
      opacity: 0,
      duration: 1,
      delay: 0.4,
      scrollTrigger: {
        trigger: papelesButtonRef.current,
        start: "top 85%",
        toggleActions: "play none play reset"
      }
    })

    // Ropa
    gsap.from(ropaTitleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ropaTitleRef.current,
        start: "top 80%",
        toggleActions: "play none play reset"
      }
    })
    gsap.from(ropaTextRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.2,
      scrollTrigger: {
        trigger: ropaTextRef.current,
        start: "top 80%",
        toggleActions: "play none play reset"
      }
    })
    gsap.from(ropaButtonRef.current, {
      x: 100,
      opacity: 0,
      duration: 1,
      delay: 0.4,
      scrollTrigger: {
        trigger: ropaButtonRef.current,
        start: "top 85%",
        toggleActions: "play none play reset"
      }
    })
  }, [])

  return (
    <section id="productos">
      {/* Header verde */}
      <div className="bg-[#dceef2] pt-7 pb-12 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 ref={NuestrosPTitleRef} className="text-5xl font-extrabold text-[#024873] leading-tight ">
            Nuestros Productos
          </h2>
          <p ref={NuestrosPTextRef} className="text-[#035a8a] font-light text-2xl max-w-2xl mx-auto mb-6">
            Explora nuestra amplia gama de empaques y bolsas personalizadas para tu negocio
          </p>
        </div>
      </div>


      {/* Secciones de producto full width */}
      <div className="w-full">
        {/* Empaques */}
        <div className="flex flex-col md:flex-row items-stretch w-full">
          <div className="md:w-1/2 p-8 md:p-20 bg-[#024873] text-white flex flex-col justify-center items-center h-[500px]">
            <h3 ref={empaquesTitleRef} className="text-6xl text-center font-bold mb-4">Empaques</h3>
            <p ref={empaquesTextRef}  className="text-lg text-white mb-6 text-center max-w-2xl">
              Empaques diseñados para enamorar a primera vista y reforzar la identidad de tu marca en cada detalle.
            </p>
            <button ref={empaquesButtonRef} className="px-6 py-3 bg-accent text-accent-foreground rounded-md hover:bg-accent/90 transition text-center block mx-auto">
                Conocer más
            </button>
          </div>
          <div className="md:w-1/2 h-[500px]">
            <img
              src="/Empaques-foto.png"
              alt="Empaques"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Papeles */}
        <div className="flex flex-col md:flex-row-reverse items-stretch w-full">
          <div className="md:w-1/2 p-8 md:px-20 md:py-10 bg-accent flex flex-col justify-center items-center h-[500px] text-white">
            <h3 ref={papelesTitleRef} className="text-6xl text-center font-bold mb-4">Papeles</h3>
            <p ref={papelesTextRef}  className="text-lg  mb-6 text-center max-w-2xl">
              Papeles resistentes y sostenibles para envolver, proteger y dar estilo a tus productos.
            </p>
            <button ref={papelesButtonRef} className="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-accent transition">
              Conocer más
            </button>
          </div>
          <div className="md:w-1/2 h-[500px]">
            <img
              src="/papel-antigrasa.png"
              alt="Papeles"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Ropa */}
        <div className="flex flex-col md:flex-row items-stretch w-full">
          <div className="md:w-1/2 p-8 md:px-20 md:py-10 bg-[#024873] text-white flex flex-col justify-center items-center h-[500px]">
            <h3 ref={ropaTitleRef} className="text-6xl font-bold mb-4">Ropa</h3>
            <p ref={ropaTextRef} className="text-lg text-white mb-6">
              Bolsas y accesorios para boutiques y tiendas de ropa, diseñados para destacar tu estilo.
            </p>
            <button ref={ropaButtonRef} className="px-6 py-3 bg-accent text-accent-foreground rounded-md hover:bg-accent/90 transition">
              Conocer más
            </button>
          </div>
          <div className="md:w-1/2 h-[500px]">
            <img
              src="/bolsas.png"
              alt="Ropa"

              className="w-full h-full object-cover" 

            />
          </div>
        </div>
      </div>
    </section>
  )
}