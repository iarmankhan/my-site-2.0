import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import "./globals.css"

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Arman Khan",
    template: "%s — Arman Khan",
  },
  description:
    "Software engineer building things for the web, mobile, and AI. Writing about tech, ideas, and whatever else comes to mind.",
  metadataBase: new URL("https://armankhan.dev"),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${plusJakarta.variable} ${GeistMono.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var mode = localStorage.getItem('theme');
                  if (mode === 'dark' || (!mode && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-(--color-background) text-(--color-foreground) font-sans antialiased">
        <a href="#main" className="skip-to-content">
          Skip to content
        </a>
        <div className="relative mx-auto w-full max-w-2xl px-6">
          <main id="main" className="pt-16 pb-16">{children}</main>
          <Footer />
        </div>
        <Nav />
        <Analytics />
      </body>
    </html>
  )
}
