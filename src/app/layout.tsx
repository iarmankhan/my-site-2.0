import { cn } from "@/lib/utils";
import { Analytics } from "@/components/analytics";
import { TopBar } from "@/components/top-bar";
import "./globals.css";
import React from "react";
import { IBM_Plex_Mono } from "next/font/google"
import { Footer } from "@/components/footer";


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
    <html lang="en">
      <body className={cn(ibmPlexMono.className, "bg-white text-slate-950")}>
        <main className="min-h-screen px-2 md:px-0">
          <TopBar />
          {children}
          <Footer/>
        </main>
        <Analytics />
      </body>
    </html>
  )
}