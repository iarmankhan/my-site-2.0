"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

export const TopBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="fixed w-full bg-slate-900/80 backdrop-blur-xl border-b border-white/10 z-50">
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
                         bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/10 
                         hover:border-white/20 transition-all duration-300"
                aria-expanded={isOpen}
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
        {/* Mobile menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
          } absolute top-16 left-0 right-0 bg-slate-900/95 border-b border-white/10 backdrop-blur-xl`}
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
  mobile = false,
  extraClassNames = "",
}: {
  title: string
  href: string
  mobile?: boolean
  extraClassNames?: string
}) => {
  const pathname = usePathname()
  const isActive =
    pathname === href || (href !== "/" && pathname.startsWith(href))

  return (
    <Link
      href={href}
      className={`relative px-3 py-2 text-sm font-medium transition-all duration-300
                ${
                  isActive
                    ? "text-blue-400"
                    : "text-blue-200 hover:text-blue-400"
                }
                ${
                  !mobile &&
                  "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-blue-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-center"
                }
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
        mobile={mobile}
        extraClassNames={mobile ? "block w-full" : ""}
      />
      <NavBarLink
        title="Blog"
        href="/blog"
        mobile={mobile}
        extraClassNames={mobile ? "block w-full" : ""}
      />
      <NavBarLink
        title="Projects"
        href="/#projects"
        mobile={mobile}
        extraClassNames={mobile ? "block w-full" : ""}
      />
      <NavBarLink
        title="Contact"
        href="/contact"
        mobile={mobile}
        extraClassNames={mobile ? "block w-full" : ""}
      />
    </>
  )
}
