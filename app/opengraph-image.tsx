import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "UGC by Mysbah portfolio preview";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const runtime = "nodejs";

export default async function OpenGraphImage() {
  const portrait = await readFile(
    join(process.cwd(), "public", "images", "00-main-profile-photo.jpeg"),
  );
  const portraitSrc = `data:image/jpeg;base64,${portrait.toString("base64")}`;

  return new ImageResponse(
    <div
      style={{
        alignItems: "stretch",
        background: "#f9e1e4",
        color: "#2b1e1c",
        display: "flex",
        fontFamily: "Arial, sans-serif",
        height: "100%",
        padding: 48,
        position: "relative",
        width: "100%",
      }}
    >
      <div
        style={{
          background: "#5e7d3a",
          height: 118,
          position: "absolute",
          right: 0,
          top: 0,
          width: 250,
        }}
      />
      <div
        style={{
          background: "#c8435f",
          bottom: 0,
          height: 94,
          left: 0,
          position: "absolute",
          width: 210,
        }}
      />
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          padding: "18px 44px 18px 14px",
        }}
      >
        <div
          style={{
            color: "#8e2343",
            display: "flex",
            fontSize: 24,
            fontWeight: 800,
          }}
        >
          UGC CREATOR · 4 YEARS
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 96,
            fontWeight: 900,
            lineHeight: 0.94,
            marginTop: 22,
          }}
        >
          UGC by
          <br />
          Mysbah
        </div>
        <div
          style={{
            color: "#3e5626",
            display: "flex",
            fontSize: 25,
            fontWeight: 700,
            marginTop: 28,
          }}
        >
          Skincare / Beauty / ASMR / Product
        </div>
      </div>
      <div
        style={{
          background: "#2b1e1c",
          display: "flex",
          padding: 10,
          transform: "rotate(1.5deg)",
          width: 404,
        }}
      >
        <img
          alt=""
          src={portraitSrc}
          style={{ height: "100%", objectFit: "cover", width: "100%" }}
        />
      </div>
    </div>,
    size,
  );
}
