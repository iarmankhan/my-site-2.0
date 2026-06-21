import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/seo";

/** Open Graph / Twitter recommended size. */
export const OG_SIZE = { width: 1200, height: 630 } as const;
export const OG_CONTENT_TYPE = "image/png";

const ACCENT = "#e8a04a";
const BG = "#0a0a0a";
const FG = "#fafafa";
const MUTED = "#8a8a8a";

/**
 * Fetch a single Google Font, subset to the glyphs actually rendered.
 *
 * Subsetting via the `text` param keeps the payload tiny and avoids shipping a
 * font file in the repo. Returns null on any failure so image generation can
 * fall back to the system font rather than crash the build.
 */
async function loadGoogleFont(
  family: string,
  weight: number,
  text: string,
): Promise<ArrayBuffer | null> {
  try {
    const url = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(
      family,
    )}:wght@${weight}&text=${encodeURIComponent(text)}`;
    const css = await (
      await fetch(url, {
        headers: {
          // Ask for a ttf src so the regex below matches reliably.
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
        },
      })
    ).text();
    const src = css.match(
      /src: url\((.+?)\) format\('(?:opentype|truetype)'\)/,
    );
    if (!src) return null;
    const res = await fetch(src[1]);
    if (!res.ok) return null;
    return await res.arrayBuffer();
  } catch {
    return null;
  }
}

interface OgImageOptions {
  /** Large headline — page or essay title. */
  title: string;
  /** Small uppercase label above the title (e.g. "Essay"). */
  eyebrow?: string;
  /** Optional muted line below the title. */
  subtitle?: string;
}

/**
 * Render the site's social share image. Shared by every `opengraph-image`
 * route so the brand stays consistent: dark canvas, amber signature rule,
 * typographic title, identity footer.
 */
export async function renderOgImage({
  title,
  eyebrow,
  subtitle,
}: OgImageOptions): Promise<ImageResponse> {
  const glyphs = `${title}${eyebrow ?? ""}${subtitle ?? ""}${siteConfig.name}arman.wtf ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789—·`;

  const [bold, regular, mono] = await Promise.all([
    loadGoogleFont("Plus Jakarta Sans", 700, glyphs),
    loadGoogleFont("Plus Jakarta Sans", 500, glyphs),
    loadGoogleFont("Geist Mono", 500, glyphs),
  ]);

  const fonts = [
    bold && { name: "Jakarta", data: bold, weight: 700 as const },
    regular && { name: "Jakarta", data: regular, weight: 500 as const },
    mono && { name: "Mono", data: mono, weight: 500 as const },
  ].filter(Boolean) as {
    name: string;
    data: ArrayBuffer;
    weight: 500 | 700;
  }[];

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: BG,
        padding: "80px",
        fontFamily: "Jakarta",
        position: "relative",
      }}
    >
      {/* Soft amber glow for depth — subtle, not loud. */}
      <div
        style={{
          position: "absolute",
          top: -260,
          left: -180,
          width: 620,
          height: 620,
          borderRadius: "50%",
          background: ACCENT,
          opacity: 0.14,
          filter: "blur(120px)",
          display: "flex",
        }}
      />

      {/* Eyebrow */}
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <div
          style={{ width: 48, height: 4, background: ACCENT, borderRadius: 2 }}
        />
        {eyebrow && (
          <div
            style={{
              fontFamily: "Mono",
              fontSize: 24,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: ACCENT,
            }}
          >
            {eyebrow}
          </div>
        )}
      </div>

      {/* Title + optional subtitle */}
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div
          style={{
            fontSize: title.length > 48 ? 64 : 80,
            fontWeight: 700,
            color: FG,
            lineHeight: 1.05,
            letterSpacing: -2,
            display: "flex",
          }}
        >
          {title}
        </div>
        {subtitle && (
          <div
            style={{
              fontSize: 30,
              fontWeight: 500,
              color: MUTED,
              lineHeight: 1.35,
              display: "flex",
            }}
          >
            {subtitle}
          </div>
        )}
      </div>

      {/* Identity footer */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              background: ACCENT,
              display: "flex",
            }}
          />
          <div style={{ fontSize: 30, fontWeight: 700, color: FG }}>
            {siteConfig.name}
          </div>
        </div>
        <div style={{ fontFamily: "Mono", fontSize: 26, color: MUTED }}>
          arman.wtf
        </div>
      </div>
    </div>,
    { ...OG_SIZE, fonts: fonts.length ? fonts : undefined },
  );
}
