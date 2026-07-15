/* eslint-disable @next/next/no-img-element */
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Mysbah Ahmad, UGC creator in Pakistan";
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
        background: "#f6ebe6",
        color: "#17120f",
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
          background: "#a8c686",
          height: 118,
          position: "absolute",
          right: 0,
          top: 0,
          width: 250,
        }}
      />
      <div
        style={{
          background: "#ff8aa1",
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
            color: "#a23b57",
            display: "flex",
            fontSize: 24,
            fontWeight: 800,
          }}
        >
          UGC CREATOR IN PAKISTAN
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
            color: "#5f514f",
            display: "flex",
            fontSize: 25,
            fontWeight: 700,
            marginTop: 28,
          }}
        >
          Beauty / Skincare / Lifestyle / Travel
        </div>
      </div>
      <div
        style={{
          background: "#17120f",
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
