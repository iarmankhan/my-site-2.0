"use client"

import COMPANIES from "@/data/companies.json"
import Image from "next/image"
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
    <section className="relative py-16 sm:py-20 lg:py-24 border-b-4 border-foreground bg-background overflow-visible">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 lg:mb-16">
        <div className="inline-block px-4 py-2 bg-yellow-400 brutalist-border mb-4">
          <span className="font-bold text-foreground uppercase text-sm tracking-wide">
            Experience
          </span>
        </div>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
          COMPANIES I&apos;VE WORKED WITH
        </h2>
      </div>

      {/* Carousel - Full Width */}
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-hidden py-4"
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
      <div className="relative w-16 h-16 shrink-0 brutalist-border-thin p-2 bg-background group-hover:border-muted transition-colors">
        <Image
          width={64}
          height={64}
          className="w-full h-full object-contain"
          src={logo}
          alt={`${name} Logo`}
        />
      </div>

      <div className="flex-1">
        <h4 className="text-lg font-bold text-foreground group-hover:text-muted-foreground mb-1 transition-colors">
          {name}
        </h4>
        <p className="text-sm text-foreground group-hover:text-muted-foreground transition-colors">
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
        className="group relative bg-background card-brutalist p-6 hover:bg-muted transition-colors duration-200 cursor-pointer"
      >
        {content}
      </a>
    )
  }

  return (
    <div className="group select-none relative bg-background card-brutalist p-6 hover:bg-muted transition-colors duration-200">
      {content}
    </div>
  )
}
