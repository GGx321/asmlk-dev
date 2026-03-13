import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon(): ImageResponse {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "6px",
          background: "#EF4444",
          color: "white",
          fontSize: "20px",
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
