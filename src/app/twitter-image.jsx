import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

export const alt = `${SITE.name} — ${SITE.jobTitle}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const stack = ["React", "Next.js", "Node.js", "Express", "MongoDB"];
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "radial-gradient(circle at 80% 20%, #27272a 0%, #0a0a0a 55%)",
          color: "#fafafa",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 26, color: "#a1a1aa", letterSpacing: 4 }}>
          NAZMUS-SHAKIB.SPACE
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 92, fontWeight: 800, lineHeight: 1.05 }}>Md Nazmus Shakib</div>
          <div style={{ fontSize: 44, color: "#d4d4d8", marginTop: 18 }}>
            Software Engineer · Full-Stack (MERN & Next.js)
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: 14 }}>
            {stack.map((s) => (
              <div
                key={s}
                style={{
                  display: "flex",
                  padding: "10px 22px",
                  border: "1px solid #3f3f46",
                  borderRadius: 999,
                  fontSize: 24,
                  color: "#e4e4e7",
                }}
              >
                {s}
              </div>
            ))}
          </div>
          <div style={{ display: "flex", fontSize: 24, color: "#a1a1aa" }}>KUET · Khulna, Bangladesh</div>
        </div>
      </div>
    ),
    size
  );
}
