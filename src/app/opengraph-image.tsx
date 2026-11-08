import { siteConfig } from "@/lib/seo"
import { heroArtwork } from "@/data/hero-artwork"
import { headers } from "next/headers"
import {
  OG_CONTENT_TYPE,
  OG_SIZE,
  renderHomeOgImage,
} from "@/lib/og"

export const alt = `${siteConfig.name}, engineer and founder, beside a painted town`
export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE
export const dynamic = "force-dynamic"

export default async function Image() {
  const requestHeaders = await headers()
  const host = requestHeaders.get("host") ?? new URL(siteConfig.url).host
  const protocol = host.startsWith("localhost") ? "http" : "https"
  const artwork = heroArtwork[Math.floor(Math.random() * heroArtwork.length)]

  return renderHomeOgImage(`${protocol}://${host}${artwork.ogSrc}`)
}
