"use client"

import COMPANIES from "@/data/companies.json"
import Image from "next/image"
import { Building2 } from "lucide-react"
import { useEffect, useRef } from "react"

interface ICompany {
  id: string
  name: string
  description: string
  logo: string
  url?: string
}

export function Companies() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let scrollAmount = 0
    const scrollSpeed = 1
    let animationId: number

    const scroll = () => {
      if (scrollContainer) {
        scrollAmount += scrollSpeed

        // Reset scroll when reaching the end
        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0
        }

        scrollContainer.scrollLeft = scrollAmount
        animationId = requestAnimationFrame(scroll)
      }
    }

    animationId = requestAnimationFrame(scroll)

    // Pause on hover
    const handleMouseEnter = () => cancelAnimationFrame(animationId)
    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(scroll)
    }

    scrollContainer.addEventListener("mouseenter", handleMouseEnter)
    scrollContainer.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      cancelAnimationFrame(animationId)
      scrollContainer?.removeEventListener("mouseenter", handleMouseEnter)
      scrollContainer?.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  // Duplicate companies for seamless loop
  const duplicatedCompanies = [...COMPANIES, ...COMPANIES]

  return (
    <section className="relative py-10 sm:py-16 lg:py-20 border-b-4 border-black bg-white overflow-visible">
      <div className="relative mb-8">
        <div className="max-w-2xl mx-auto text-center px-4">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Building2 className="w-8 h-8 text-black" />
            <h2 className="text-3xl sm:text-4xl font-bold text-black">
              Companies I&apos;ve worked with
            </h2>
          </div>
        </div>
      </div>

      <div className="relative">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-hidden px-4 py-8 sm:py-12 lg:py-16"
          style={{ scrollBehavior: "auto" }}
        >
          {duplicatedCompanies.map((company, index) => (
            <Company key={`${company.id}-${index}`} company={company} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Company({ company }: { company: ICompany }) {
  const { logo, name, description, url } = company

  const content = (
    <div className="flex items-center gap-4 min-w-[320px]">
      <div className="relative w-16 h-16 shrink-0 brutalist-border-thin p-2 bg-white group-hover:border-white transition-colors">
        <Image
          width={64}
          height={64}
          className="w-full h-full object-contain"
          src={logo}
          alt={`${name} Logo`}
        />
      </div>

      <div className="flex-1">
        <h4 className="text-lg font-bold text-black group-hover:text-white mb-1 transition-colors">
          {name}
        </h4>
        <p className="text-sm text-black group-hover:text-white transition-colors">
          {description}
        </p>
      </div>
    </div>
  )

  if (url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative bg-white card-brutalist p-6 hover:bg-black transition-colors duration-200 cursor-pointer"
      >
        {content}
      </a>
    )
  }

  return (
    <div className="group relative bg-white card-brutalist p-6 hover:bg-black transition-colors duration-200">
      {content}
    </div>
  )
}
