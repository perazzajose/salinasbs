import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Salinas Barbershop - Tradición desde 1985",
  description:
    "Barbería de lujo con tradición familiar. Especialistas en cortes clásicos, afeitado tradicional y estilo vintage. Donde el estilo cobra vida.",
  keywords: "barbería, cortes de cabello, afeitado, barba, estilo vintage, luxury barbershop",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`scroll-smooth ${playfair.variable}`}>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
