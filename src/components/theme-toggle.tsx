"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { setTheme, theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button className="p-3 brutalist-border text-foreground bg-yellow-accent transition-all duration-200 opacity-50">
        <Sun className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">Toggle theme</span>
      </button>
    )
  }

  const toggleTheme = () => {
    // Toggle between light and dark, ignoring system
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-3 brutalist-border text-foreground bg-yellow-accent transition-all duration-200"
      aria-label="Toggle theme"
    >
      <Sun
        className={`h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all ${resolvedTheme === "dark" ? "-rotate-90 scale-0" : ""}`}
      />
      <Moon
        className={`absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all ${resolvedTheme === "dark" ? "rotate-0 scale-100" : ""}`}
      />
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
