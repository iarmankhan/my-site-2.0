import { siteConfig } from "@/lib/seo"
import {
  OG_CONTENT_TYPE,
  OG_SIZE,
  renderHomeOgImage,
} from "@/lib/og"

export const alt = `${siteConfig.name}, engineer and founder, beside a painted sunlit town`
export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE

export default function Image() {
  return renderHomeOgImage()
}
