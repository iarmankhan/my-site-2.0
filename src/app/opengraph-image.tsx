import { siteConfig } from "@/lib/seo"
import {
  OG_CONTENT_TYPE,
  OG_SIZE,
  renderOgImage,
} from "@/lib/og"

export const alt = siteConfig.description
export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE

export default function Image() {
  return renderOgImage({
    eyebrow: "Software Engineer",
    title: "Building things for the web, mobile, and AI.",
    subtitle: "Essays, projects, and notes.",
  })
}
