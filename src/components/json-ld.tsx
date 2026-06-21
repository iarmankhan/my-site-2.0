/**
 * Renders a JSON-LD structured-data block. Server-rendered into the initial
 * HTML so crawlers (Google rich results, social cards) read it without JS.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe to inline; escape `<` to be defensive.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  )
}
