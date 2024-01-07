"use client"

import { useState } from "react"
import Link from "next/link"

export const TopBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-gray-800 font-bold text-xl">
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
                className="p-2 inline-flex items-center justify-center rounded-md text-gray-400 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div
          className={`md:hidden ${
            isOpen ? "absolute" : "hidden"
          } top-16 left-0 right-0 bg-white z-40`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
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
      className={`text-gray-800 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium ${extraClassNames}`}
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
        extraClassNames={mobile ? "block" : ""}
      />
      <NavBarLink
        title="Blog"
        href="/blog"
        extraClassNames={mobile ? "block" : ""}
      />
      <NavBarLink
        title="Projects"
        href="/#projects"
        extraClassNames={mobile ? "block" : ""}
      />
      <NavBarLink
        title="Contact"
        href="/contact"
        extraClassNames={mobile ? "block" : ""}
      />
    </>
  )
}
