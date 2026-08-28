import { ImageResponse } from "next/og";

import { SITE } from "@/lib/constants";

export const alt = SITE.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: "64px",
          background: "linear-gradient(135deg, #050505 0%, #0a1628 50%, #050505 100%)",
          color: "#ffffff",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            fontSize: "18px",
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "#008cff",
          }}
        >
          Kreeda Studios
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              fontSize: "64px",
              fontWeight: 600,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              maxWidth: "900px",
            }}
          >
            We build worlds that move.
          </div>
          <div
            style={{
              fontSize: "28px",
              lineHeight: 1.4,
              color: "#a0a0a0",
              maxWidth: "800px",
            }}
          >
            {SITE.tagline}
          </div>
        </div>
        <div
          style={{
            fontSize: "20px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#666666",
          }}
        >
          kreedastudios.com
        </div>
      </div>
    ),
    { ...size },
  );
}
