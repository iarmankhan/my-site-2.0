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
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link
                href="/"
                className="text-xl font-bold text-black hover:bg-black hover:text-white px-2 py-1 transition-all duration-200"
              >
                Arman Khan
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <div className="hidden md:flex md:space-x-4">
              <NavBarLinks />
            </div>
            <div className="flex md:hidden">
              <button
                onClick={toggleMenu}
                className="relative p-2 inline-flex items-center justify-center brutalist-border text-black hover:bg-black hover:text-white transition-all duration-200"
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
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
          } absolute top-16 left-0 right-0 bg-white border-b-4 border-black`}
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
      className={`px-4 py-2 text-sm font-bold transition-all duration-200 brutalist-border
                ${
                  isActive
                    ? "bg-black text-white"
                    : "text-black hover:bg-black hover:text-white"
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
