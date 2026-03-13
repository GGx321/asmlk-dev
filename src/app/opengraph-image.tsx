import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Alex Samoliuk — Fullstack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage(): ImageResponse {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px",
          background:
            "linear-gradient(135deg, #09090b 0%, #18181b 50%, #09090b 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              background: "#EF4444",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "24px",
              fontWeight: "bold",
            }}
          >
            A
          </div>
          <span style={{ color: "#a1a1aa", fontSize: "20px" }}>
            asmlk.dev
          </span>
        </div>

        <h1
          style={{
            fontSize: "72px",
            fontWeight: "bold",
            color: "#fafafa",
            lineHeight: 1.1,
            margin: "0 0 16px 0",
          }}
        >
          Alex Samoliuk
        </h1>

        <p
          style={{
            fontSize: "32px",
            color: "#EF4444",
            margin: "0 0 24px 0",
            fontWeight: 600,
          }}
        >
          Fullstack Developer
        </p>

        <p
          style={{
            fontSize: "24px",
            color: "#a1a1aa",
            margin: 0,
            maxWidth: "700px",
            lineHeight: 1.4,
          }}
        >
          React · Next.js · Node.js · TypeScript · Web3
        </p>

        <div
          style={{
            position: "absolute",
            right: "80px",
            bottom: "80px",
            display: "flex",
            gap: "8px",
          }}
        >
          {["React", "Next.js", "Node.js", "TypeScript"].map((tech) => (
            <span
              key={tech}
              style={{
                padding: "8px 16px",
                borderRadius: "8px",
                border: "1px solid rgba(255,255,255,0.1)",
                background: "rgba(255,255,255,0.05)",
                color: "#a1a1aa",
                fontSize: "14px",
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
