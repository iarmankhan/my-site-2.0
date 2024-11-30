"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export const TopBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="fixed w-full bg-slate-900/50 backdrop-blur-xl border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link
                href="/"
                className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent hover:from-blue-300 hover:to-cyan-300 transition-all duration-300"
              >
                Arman Khan
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <div className="hidden md:block">
              <NavBarLinks />
            </div>
            <div className="flex md:hidden">
              <button
                onClick={toggleMenu}
                className="relative p-2 inline-flex items-center justify-center rounded-lg text-blue-400 hover:text-blue-300 
                         bg-white/5 hover:bg-white/10 backdrop-blur-xl border border-white/10 
                         hover:border-white/20 transition-all duration-300"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>
        <div
          className={`md:hidden ${
            isOpen ? "animate-fade-in-down" : "hidden"
          } absolute top-16 left-0 right-0 border-b border-white/10 backdrop-blur-xl bg-slate-900/50`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavBarLinks mobile />
          </div>
        </div>
      </div>
    </nav>
  )
}

const NavBarLink = ({
  title,
  href,
  extraClassNames = "",
}: {
  title: string
  href: string
  extraClassNames?: string
}) => {
  return (
    <Link
      href={href}
      className={`relative group px-4 py-2 rounded-lg text-sm font-medium
                text-blue-200 hover:text-blue-100
                transition-all duration-300
                before:absolute before:inset-0 before:rounded-lg
                before:bg-white/5 before:backdrop-blur-xl before:border before:border-white/10
                before:opacity-0 before:transition-all before:duration-300
                hover:before:opacity-100 
                ${extraClassNames}`}
    >
      {title}
    </Link>
  )
}

const NavBarLinks = ({ mobile }: { mobile?: boolean }) => {
  return (
    <>
      <NavBarLink
        title="Home"
        href="/"
        extraClassNames={mobile ? "block w-full" : ""}
      />
      <NavBarLink
        title="Blog"
        href="/blog"
        extraClassNames={mobile ? "block w-full" : ""}
      />
      <NavBarLink
        title="Projects"
        href="/#projects"
        extraClassNames={mobile ? "block w-full" : ""}
      />
      <NavBarLink
        title="Contact"
        href="/contact"
        extraClassNames={mobile ? "block w-full" : ""}
      />
    </>
  )
}
