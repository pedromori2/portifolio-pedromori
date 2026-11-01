import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        backgroundColor: "#0b0c0e",
        color: "#ededec",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <div
          style={{
            width: 16,
            height: 16,
            borderRadius: 999,
            backgroundColor: "#c8372d",
            display: "flex",
          }}
        />
        <span style={{ fontSize: 28, color: "#9a9a96", letterSpacing: 2 }}>
          ARARAS - SP, BRASIL
        </span>
      </div>
      <div style={{ display: "flex", fontSize: 72, fontWeight: 700, marginTop: 24 }}>
        {profile.name}
      </div>
      <div style={{ display: "flex", fontSize: 36, color: "#c8372d", marginTop: 16 }}>
        {profile.targetRole.pt}
      </div>
    </div>,
    { ...size }
  );
}
