"use client"

import { useState } from "react"
import { Menu, X, Scissors, Star, Users, Phone, ImageIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Inicio", href: "#home", icon: Scissors },
    { name: "Galería", href: "#gallery", icon: ImageIcon },
    { name: "Equipo", href: "#barbers", icon: Users },
    { name: "Servicios", href: "#services", icon: Star },
    { name: "Contacto", href: "#contact", icon: Phone },
  ]

  const handleScrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <button onClick={() => handleScrollToSection("#home")} className="flex-shrink-0 cursor-pointer">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors duration-200">
                <Scissors className="w-5 h-5 text-white" />
              </div>
              
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => {
                const Icon = item.icon

                return (
                  <button
                    key={item.name}
                    onClick={() => handleScrollToSection(item.href)}
                    className="group flex items-center space-x-2 px-3 py-2 text-sm font-medium transition-all duration-200 text-gray-300 hover:text-white relative"
                  >
                    <Icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                    <span>{item.name}</span>
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-200" />
                  </button>
                )
              })}
            </div>
          </div>

          {/* CTA Button Desktop */}
          <div className="hidden md:block">
            <Button
              onClick={() => handleScrollToSection("#contact")}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-200 hover:scale-105"
            >
              Reservar Cita
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2 rounded-md transition-colors duration-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon

              return (
                <button
                  key={item.name}
                  onClick={() => handleScrollToSection(item.href)}
                  className="group flex items-center space-x-3 px-3 py-3 text-base font-medium w-full text-left rounded-md transition-all duration-200 text-gray-300 hover:text-white hover:bg-gray-800/50"
                >
                  <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                  <span>{item.name}</span>
                </button>
              )
            })}
            <div className="pt-4 pb-2">
              <Button
                onClick={() => handleScrollToSection("#contact")}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition-all duration-200"
              >
                Reservar Cita
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
