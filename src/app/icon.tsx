import { ImageResponse } from "next/og"

// Favicon: amber tile (site accent) with a bold lowercase "a" wordmark.
export const size = { width: 64, height: 64 }
export const contentType = "image/png"

export default function Icon() {
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
          borderRadius: 14,
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#0a0a0a",
            fontSize: 46,
            fontWeight: 800,
            lineHeight: 1,
            marginTop: -2,
          }}
        >
          a
        </div>
      </div>
    ),
    { ...size },
  )
}
