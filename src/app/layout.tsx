import { cn } from "@/lib/utils"
import { Analytics } from "@/components/analytics"
import { TopBar } from "@/components/top-bar"
import "./globals.css"
import { Raleway } from "next/font/google"

const raleway = Raleway({ subsets: ["latin"] })

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
      <body
        className={cn(
          raleway.className,
          "mx-auto max-w-xl md:max-w-screen-2xl"
        )}
      >
        <TopBar />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
