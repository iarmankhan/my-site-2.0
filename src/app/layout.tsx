import { cn } from "@/lib/utils"
import { Analytics } from "@/components/analytics"
import { TopBar } from "@/components/top-bar"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"
import React from "react"
import { Space_Grotesk } from "next/font/google"
import { Footer } from "@/components/footer"

const spaceGrotesk = Space_Grotesk({
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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background text-foreground",
          spaceGrotesk.className
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="arman-theme"
        >
          <div className="flex min-h-screen flex-col">
            <TopBar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
