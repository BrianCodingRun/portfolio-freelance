import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") ?? "Nexmyr";
  const subtitle =
    searchParams.get("subtitle") ??
    "Conception de sites web et d'application à La Réunion";

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        backgroundColor: "#1c1917",
        backgroundImage: "linear-gradient(135deg, #1c1917 0%, #2a2420 100%)",
        fontFamily: "sans-serif",
      }}
    >
      {/* Marque */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          marginBottom: 56,
        }}
      >
        <div
          style={{
            width: 48,
            height: 48,
            backgroundColor: "#D89B42",
          }}
        />
        <span
          style={{
            fontSize: 30,
            fontWeight: 700,
            color: "#F2C464",
            letterSpacing: "0.08em",
          }}
        >
          NEXMYR
        </span>
      </div>

      {/* Titre */}
      <div
        style={{
          display: "flex",
          fontSize: title.length > 30 ? 52 : 64,
          fontWeight: 700,
          color: "#F5F0E6",
          lineHeight: 1.15,
          maxWidth: 950,
        }}
      >
        {title}
      </div>

      {/* Sous-titre */}
      <div
        style={{
          display: "flex",
          fontSize: 28,
          color: "#B8A88A",
          marginTop: 28,
          maxWidth: 850,
        }}
      >
        {subtitle}
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
    },
  );
}
