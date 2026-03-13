import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon(): ImageResponse {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "36px",
          background: "linear-gradient(135deg, #EF4444, #DC2626)",
          color: "white",
          fontSize: "100px",
          fontWeight: "bold",
          fontFamily: "system-ui",
        }}
      >
        A
      </div>
    ),
    { ...size },
  );
}
