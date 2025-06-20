"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Scissors, Star, Clock, MapPin, Phone } from "lucide-react"

export default function BarberShop() {
  const [selectedBarber, setSelectedBarber] = useState<number | null>(null)

  const works = [
    { id: 1, image: "/placeholder.svg?height=300&width=300", title: "Fade Clásico" },
    { id: 2, image: "/placeholder.svg?height=300&width=300", title: "Barba Vintage" },
    { id: 3, image: "/placeholder.svg?height=300&width=300", title: "Corte Moderno" },
    { id: 4, image: "/placeholder.svg?height=300&width=300", title: "Degradado" },
    { id: 5, image: "/placeholder.svg?height=300&width=300", title: "Barba Completa" },
    { id: 6, image: "/placeholder.svg?height=300&width=300", title: "Estilo Clásico" },
    { id: 7, image: "/placeholder.svg?height=300&width=300", title: "Fade Skin" },
    { id: 8, image: "/placeholder.svg?height=300&width=300", title: "Bigote Retro" },
  ]

  const barbers = [
    {
      id: 1,
      name: "Carlos Mendez",
      specialty: "Especialista en Fades",
      experience: "8 años",
      image:
        "https://res.cloudinary.com/dsysu4lnb/image/upload/v1750452781/9c22d5f1-37d6-4d47-9822-e8ff731d6e96_acorhp.png",
      rating: 4.9,
    },
    {
      id: 2,
      name: "Miguel Torres",
      specialty: "Maestro de Barbas",
      experience: "12 años",
      image:
        "https://res.cloudinary.com/dsysu4lnb/image/upload/v1750452781/9c22d5f1-37d6-4d47-9822-e8ff731d6e96_acorhp.png",
      rating: 4.8,
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Starry Background */}
      <div className="fixed inset-0 z-0">
        <div className="stars-container">
          {/* Small stars */}
          {Array.from({ length: 100 }).map((_, i) => (
            <div
              key={`star-small-${i}`}
              className="star star-small"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
          {/* Medium stars */}
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={`star-medium-${i}`}
              className="star star-medium"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}
          {/* Large stars */}
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={`star-large-${i}`}
              className="star star-large"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${4 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content with higher z-index */}
      <div className="relative z-10">
        {/* Hero Section - Mobile Optimized */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-8">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80 z-10" />

          {/* Neon Logo */}
          <div className="relative z-20 text-center w-full max-w-sm sm:max-w-md md:max-w-lg">
            <div className="mb-6 sm:mb-8">
              <img
                src="https://res.cloudinary.com/dsysu4lnb/image/upload/v1750452993/ChatGPT_Image_20_jun_2025_17_56_09_kxmx5r.png"
                alt="Salinas Barbershop Logo"
                className="mx-auto h-44 sm:h-48 md:h-52 lg:h-64 w-auto filter drop-shadow-[0_0_20px_#ff1000] animate-pulse hover:drop-shadow-[0_0_40px_#ff0000] transition-all duration-750"
              />
            </div>

            <p className="text-lg sm:text-xl md:text-2xl text-amber-300 mb-6 sm:mb-8 font-light px-4">
              Donde el estilo cobra vida
            </p>

            <Button
              size="lg"
              className="relative bg-gradient-to-r from-amber-600 via-yellow-500 to-red-600 hover:from-amber-700 hover:via-yellow-600 hover:to-red-700 text-black font-bold py-4 px-8 rounded-full shadow-2xl shadow-amber-500/40 transition-all duration-500 hover:shadow-amber-500/60 hover:scale-105 text-sm sm:text-base w-full max-w-xs overflow-hidden group border border-amber-400/50"
            >
              {/* Luxury shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out" />

              {/* Premium border glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-400/60 to-red-400/60 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

              <Scissors className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:rotate-12 transition-transform duration-300" />
              <span className="relative z-10 tracking-wide">Reservar Cita</span>
            </Button>
          </div>

          {/* Animated Background - Golden theme */}
          <div className="absolute inset-0 opacity-10 sm:opacity-20">
            <div className="absolute top-1/4 left-1/4 w-1 h-1 sm:w-2 sm:h-2 bg-amber-400 rounded-full animate-ping" />
            <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-red-400 rounded-full animate-ping animation-delay-1000" />
            <div className="absolute bottom-1/4 left-1/3 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-yellow-400 rounded-full animate-ping animation-delay-2000" />
          </div>
        </section>

        {/* Double Carousel Section - Mobile Optimized */}
        <section className="py-12 sm:py-16 md:py-20 overflow-hidden">
          <div className="text-center mb-8 sm:mb-12 px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-red-600">
              Nuestros Trabajos
            </h2>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg">Cada corte es una obra de arte</p>
          </div>

          {/* First Carousel - Mobile Optimized */}
          <div className="relative mb-6 sm:mb-8">
            <div className="flex animate-scroll-left space-x-3 sm:space-x-4 md:space-x-6">
              {[...works, ...works].map((work, index) => (
                <div key={`carousel1-${index}`} className="flex-shrink-0">
                  <Card className="bg-gray-900 border-gray-800 hover:border-amber-500 transition-all duration-300 group">
                    <CardContent className="p-2 sm:p-3 md:p-4">
                      <img
                        src={work.image || "/placeholder.svg"}
                        alt={work.title}
                        className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 object-cover rounded-lg mb-2 sm:mb-3 md:mb-4 group-hover:scale-105 transition-transform duration-300"
                      />
                      <h3 className="text-amber-300 font-semibold text-center text-xs sm:text-sm md:text-base">
                        {work.title}
                      </h3>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Second Carousel - Mobile Optimized */}
          <div className="relative">
            <div className="flex animate-scroll-left-slow space-x-3 sm:space-x-4 md:space-x-6">
              {[...works.slice().reverse(), ...works.slice().reverse()].map((work, index) => (
                <div key={`carousel2-${index}`} className="flex-shrink-0">
                  <Card className="bg-gray-900 border-gray-800 hover:border-red-500 transition-all duration-300 group">
                    <CardContent className="p-2 sm:p-3 md:p-4">
                      <img
                        src={work.image || "/placeholder.svg"}
                        alt={work.title}
                        className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 object-cover rounded-lg mb-2 sm:mb-3 md:mb-4 group-hover:scale-105 transition-transform duration-300"
                      />
                      <h3 className="text-amber-300 font-semibold text-center text-xs sm:text-sm md:text-base">
                        {work.title}
                      </h3>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Barber Selection Section - Mobile First */}
        <section className="py-12 sm:py-16 md:py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-red-600">
                Elige tu Barbero
              </h2>
              <p className="text-gray-400 text-sm sm:text-base md:text-lg px-4">
                Selecciona al maestro que transformará tu estilo
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 relative">
              {barbers.map((barber) => (
                <div
                  key={barber.id}
                  className={`relative transition-all duration-700 cursor-pointer transform-gpu ${
                    selectedBarber && selectedBarber !== barber.id
                      ? "blur-sm opacity-30 scale-95"
                      : "active:scale-95 sm:hover:scale-105 sm:hover:-translate-y-2"
                  }`}
                  onClick={() => setSelectedBarber(selectedBarber === barber.id ? null : barber.id)}
                >
                  <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border-2 border-gray-700 hover:border-amber-500 hover:shadow-2xl hover:shadow-amber-500/25 transition-all duration-500 overflow-hidden group relative">
                    <CardContent className="p-4 sm:p-6 md:p-8 text-center">
                      <div className="relative mb-4 sm:mb-6">
                        {/* Glow effect behind barber */}
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-red-500/20 rounded-full blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Barber PNG Image with natural fade effect - Mobile Optimized */}
                        <div className="relative z-10">
                          <img
                            src={barber.image || "/placeholder.svg"}
                            alt={barber.name}
                            className="w-32 h-40 sm:w-36 sm:h-48 md:w-40 md:h-52 lg:w-48 lg:h-64 mx-auto object-contain group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-700 filter group-hover:brightness-110 group-hover:drop-shadow-[0_0_30px_rgba(255,215,0,0.6)] barber-natural-fade"
                          />
                        </div>

                        {/* Animated neon ring - Smaller on mobile */}
                        <div
                          className="absolute inset-0 rounded-full border border-transparent sm:border-2 group-hover:border-amber-400 group-hover:animate-spin transition-all duration-1000"
                          style={{ animationDuration: "3s" }}
                        />
                      </div>

                      {/* Barber Info - Mobile Optimized */}
                      <div className="space-y-2 sm:space-y-3">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 sm:mb-2 group-hover:text-amber-300 transition-colors duration-300">
                          {barber.name}
                        </h3>
                        <p className="text-amber-300 font-semibold text-sm sm:text-base mb-1 group-hover:text-amber-200 transition-colors duration-300">
                          {barber.specialty}
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-4">
                          <span className="text-gray-300 text-xs sm:text-sm group-hover:text-white transition-colors duration-300">
                            {barber.experience} de experiencia
                          </span>
                          <div className="flex items-center">
                            <Star className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 fill-current mr-1 group-hover:scale-110 transition-transform duration-300" />
                            <span className="text-yellow-400 font-semibold text-sm group-hover:text-yellow-300 transition-colors duration-300">
                              {barber.rating}
                            </span>
                          </div>
                        </div>
                      </div>

                   

                      {/* Hover glow effect */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-red-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10" />
                    </CardContent>
                  </Card>

                  {/* Book Button - Mobile Optimized */}
                  {selectedBarber === barber.id && (
                    <div className="mt-4 sm:mt-6 text-center animate-fade-in">
                      <Button
                        size="lg"
                        className="relative bg-gradient-to-r from-amber-600 via-yellow-500 to-red-600 hover:from-amber-700 hover:via-yellow-600 hover:to-red-700 text-black font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-full shadow-2xl shadow-amber-500/40 transition-all duration-500 hover:shadow-amber-500/60 hover:scale-105 w-full sm:w-auto text-sm sm:text-base overflow-hidden group border border-amber-400/50"
                      >
                        {/* Luxury shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out" />

                        {/* Premium border glow */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-400/60 to-red-400/60 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

                        <Clock className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:rotate-12 transition-transform duration-300" />
                        <span className="relative z-10 tracking-wide">Agendar con {barber.name}</span>
                      </Button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section - Mobile Optimized */}
        <section className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-red-600">
              Visítanos
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              <div className="flex flex-col items-center p-4 sm:p-0">
                <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-amber-400 mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Ubicación</h3>
                <p className="text-gray-400 text-sm sm:text-base text-center">
                  Av. Principal 123
                  <br />
                  Centro, Ciudad
                </p>
              </div>
              <div className="flex flex-col items-center p-4 sm:p-0">
                <Phone className="h-6 w-6 sm:h-8 sm:w-8 text-amber-400 mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Teléfono</h3>
                <p className="text-gray-400 text-sm sm:text-base">+1 (555) 123-4567</p>
              </div>
              <div className="flex flex-col items-center p-4 sm:p-0">
                <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-amber-400 mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Horarios</h3>
                <p className="text-gray-400 text-sm sm:text-base text-center">
                  Lun - Sáb: 9AM - 8PM
                  <br />
                  Dom: 10AM - 6PM
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer - Mobile Optimized */}
        <footer className="py-6 sm:py-8 px-4 border-t border-gray-800/50 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-gray-400 text-xs sm:text-sm">
              © 2024 Salinas Barbershop. Todos los derechos reservados.
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}
