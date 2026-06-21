import { ImageResponse } from "next/og"

// Apple touch icon: full-bleed amber (iOS applies its own rounding/mask).
export const size = { width: 180, height: 180 }
export const contentType = "image/png"

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#e8a04a",
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#0a0a0a",
            fontSize: 128,
            fontWeight: 800,
            lineHeight: 1,
            marginTop: -6,
          }}
        >
          a
        </div>
      </div>
    ),
    { ...size },
  )
}
