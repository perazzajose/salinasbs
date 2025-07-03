"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Scissors, Star, Clock, MapPin, Phone } from "lucide-react"
import Navbar from "@/components/navbar"

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
        "https://res.cloudinary.com/dsysu4lnb/image/upload/v1750452785/ef2ae4e9-cd68-4390-9e97-b958f88ce009_ajnni9.png",
      rating: 4.8,
    },
  ]

  const services = [
  {
    id: 1,
    name: "Corte",
    description: "Corte tradicional adaptado al estilo del cliente",
    price: "$340",
  },
  {
    id: 2,
    name: "Barba",
    description: "Arreglo y diseño de barba con productos premium",
    price: "$280",
    duration: "60 min",
  },
  {
    id: 3,
    name: "Cejas",
    description: "Perfilado de cejas con técnica precisa y limpieza facial leve",
    price: "$120",
  }, {
    id: 4,
    name: "Promo VIP, Corte, barba y cejas",
    description: "Pack completo: corte, diseño de barba y perfilado de cejas",
    price: "$420",
  },
   {
    id: 5,
    name: "Mechas",
    description: "Aplicación de mechas para dar luz y estilo al cabello",
    price: "(Desde) $1600",
  },{
    id: 6,
    name: "Platinado global",
    description: "Decoloración completa un platinado uniforme",
    price: "(Desde) $1900",
  },
];


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

      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section id="home" className="relative min-h-screen flex items-center justify-center px-4 py-8 pt-20">
          <div className="text-center w-full max-w-2xl">
            <div className="mb-8">
              <img
                src="https://res.cloudinary.com/dsysu4lnb/image/upload/v1750452993/ChatGPT_Image_20_jun_2025_17_56_09_kxmx5r.png"
                alt="Salinas Barbershop Logo"
                className="mx-auto h-48 sm:h-56 md:h-64 w-auto transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-16 md:py-20">
          <div className="text-center mb-12 px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Nuestros Trabajos</h2>
            <div className="w-16 h-0.5 bg-red-600 mx-auto mb-4"></div>
            <p className="text-gray-400 text-lg">Cada corte es una obra de arte</p>
          </div>

          {/* First Carousel */}
          <div className="relative mb-8">
            <div className="flex animate-scroll-left space-x-6">
              {[...works, ...works].map((work, index) => (
                <div key={`carousel1-${index}`} className="flex-shrink-0">
                  <Card className="bg-gray-900/50 border-gray-800 hover:border-red-600 transition-all duration-300 group backdrop-blur-sm">
                    <CardContent className="p-4">
                      <img
                        src={work.image || "/placeholder.svg"}
                        alt={work.title}
                        className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
                      />
                      <h3 className="text-white font-medium text-center">{work.title}</h3>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Second Carousel */}
          <div className="relative">
            <div className="flex animate-scroll-left-slow space-x-6">
              {[...works.slice().reverse(), ...works.slice().reverse()].map((work, index) => (
                <div key={`carousel2-${index}`} className="flex-shrink-0">
                  <Card className="bg-gray-900/50 border-gray-800 hover:border-red-600 transition-all duration-300 group backdrop-blur-sm">
                    <CardContent className="p-4">
                      <img
                        src={work.image || "/placeholder.svg"}
                        alt={work.title}
                        className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
                      />
                      <h3 className="text-white font-medium text-center">{work.title}</h3>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Barber Selection Section */}
        <section id="barbers" className="py-16 md:py-20 px-4 bg-gray-900/20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Nuestro equipo</h2>
              <div className="w-16 h-0.5 bg-red-600 mx-auto mb-4"></div>
              <p className="text-gray-400 text-lg">Selecciona al maestro que transformará tu estilo</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {barbers.map((barber) => (
                <div
                  key={barber.id}
                  className={`relative transition-all duration-300 cursor-pointer ${
                    selectedBarber && selectedBarber !== barber.id ? "opacity-50 scale-95" : "hover:scale-105"
                  }`}
                  onClick={() => setSelectedBarber(selectedBarber === barber.id ? null : barber.id)}
                >
                  <Card className="bg-gray-900/50 border-gray-800 hover:border-red-600 transition-all duration-300 group backdrop-blur-sm">
                    <CardContent className="p-8 text-center">
                      <div className="relative mb-6">
                        <img
                          src={barber.image || "/placeholder.svg"}
                          alt={barber.name}
                          className="w-48 h-64 mx-auto object-contain group-hover:scale-105 transition-transform duration-300 barber-natural-fade"
                        />
                      </div>

                      <div className="space-y-3">
                        <h3 className="text-2xl font-bold text-white group-hover:text-red-400 transition-colors duration-300">
                          {barber.name}
                        </h3>
                        <p className="text-red-400 font-medium">{barber.specialty}</p>
                        <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
                          <span>{barber.experience} de experiencia</span>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-red-400 fill-current mr-1" />
                            <span className="text-red-400 font-medium">{barber.rating}</span>
                          </div>
                        </div>
                      </div>

                      {selectedBarber === barber.id && (
                        <div className="absolute inset-0 border-2 border-red-600 bg-red-600/5 flex items-center justify-center rounded-lg">
                          <div className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold animate-pulse">
                            ¡SELECCIONADO!
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>

                  {selectedBarber === barber.id && (
                    <div className="mt-6 text-center animate-fade-in">
                      <Button
                        onClick={(e) => {
                          e.stopPropagation()
                          const element = document.querySelector("#contact")
                          if (element) {
                            element.scrollIntoView({ behavior: "smooth" })
                          }
                        }}
                        className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-red-600/25"
                      >
                        <Clock className="mr-2 h-5 w-5" />
                        Agendar con {barber.name}
                      </Button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 md:py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Nuestros Servicios</h2>
              <div className="w-16 h-0.5 bg-red-600 mx-auto mb-4"></div>
              <p className="text-gray-400 text-lg">Servicios premium de barbería moderna</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service) => (
                <Card
                  key={service.id}
                  className="bg-gray-900/50 border-gray-800 hover:border-red-600 transition-all duration-300 group backdrop-blur-sm hover:scale-105"
                >
                  <CardContent className="p-6 text-center">
                    <div className="mb-4">
                      <Star className="w-8 h-8 text-red-600 mx-auto group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors duration-300">
                      {service.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-red-600">{service.price}</span>
                      <span className="text-gray-500 text-sm">{service.duration}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-20 px-4 bg-gray-900/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Visítanos</h2>
            <div className="w-16 h-0.5 bg-red-600 mx-auto mb-12"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600/10 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-red-600/20 transition-colors duration-300">
                  <MapPin className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Ubicación</h3>
                <p className="text-gray-400">
                  Av. Principal 123
                  <br />
                  Centro, Ciudad
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-red-600/10 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-red-600/20 transition-colors duration-300">
                  <Phone className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Teléfono</h3>
                <p className="text-gray-400">+1 (555) 123-4567</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-red-600/10 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-red-600/20 transition-colors duration-300">
                  <Clock className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Horarios</h3>
                <p className="text-gray-400">
                  Lun - Sáb: 9AM - 8PM
                  <br />
                  Dom: 10AM - 6PM
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 border-t border-gray-800">
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="w-12 h-px bg-gray-600"></div>
              <Scissors className="w-5 h-5 text-red-600" />
              <div className="w-12 h-px bg-gray-600"></div>
            </div>
            <p className="text-gray-400 text-sm">© 2024 Salinas Barbershop. Todos los derechos reservados.</p>
            <p className="text-red-600/60 text-xs mt-2">Barbería Moderna • Estilo Contemporáneo</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
