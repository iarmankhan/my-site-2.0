import { cn } from "@/lib/utils"
import { Analytics } from "@/components/analytics"
import { TopBar } from "@/components/top-bar"
import "./globals.css"
import React from "react"
import { IBM_Plex_Mono } from "next/font/google"
import { Footer } from "@/components/footer"

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
})

export const metadata = {
  title: "Arman Khan",
  description: "Fullstack Engineer",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="flex min-h-screen flex-col">
          <TopBar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
