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
    <nav className="fixed w-full bg-white border-b-4 border-black z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link
            href="/"
            className="text-2xl font-bold text-black hover:bg-yellow-400 px-4 py-2 transition-all duration-200"
          >
            ARMAN KHAN
          </Link>

          <div className="flex items-center gap-2">
            <div className="hidden md:flex md:gap-2">
              <NavBarLinks />
            </div>
            <button
              onClick={toggleMenu}
              className="md:hidden p-3 brutalist-border text-black hover:bg-yellow-400 transition-all duration-200"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Toggle menu</span>
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t-2 border-black bg-white py-4">
            <div className="space-y-2">
              <NavBarLinks mobile />
            </div>
          </div>
        )}
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
      className={`px-5 py-2 text-sm font-bold uppercase tracking-wide transition-all duration-200 brutalist-border
                ${
                  isActive
                    ? "bg-black text-white"
                    : "text-black hover:bg-yellow-400 hover:text-black"
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
        title="Apps"
        href="/apps"
        mobile={mobile}
        extraClassNames={mobile ? "block w-full" : ""}
      />
      {/* <NavBarLink
        title="Projects"
        href="/#projects"
        mobile={mobile}
        extraClassNames={mobile ? "block w-full" : ""}
      /> */}
      <NavBarLink
        title="Contact"
        href="/contact"
        mobile={mobile}
        extraClassNames={mobile ? "block w-full" : ""}
      />
    </>
  )
}
