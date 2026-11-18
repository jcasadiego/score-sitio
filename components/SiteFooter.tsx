import Image from "next/image";
import Link from "next/link";

export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer
      className="sec"
      style={{
        maxWidth: 1320,
        margin: "0 auto",
        padding: "60px 24px 0",
        borderTop: "1px solid rgba(255,255,255,.07)",
      }}
    >
      {/* Giant SCORE wordmark */}
      <div style={{ marginTop: 10, overflow: "hidden" }} aria-hidden="true">
        <span
          className="giant"
          data-t="SCORE"
          style={
            {
              "--a": "#A7A9AC",
              "--b": "#FFFFFF",
            } as React.CSSProperties
          }
        >
          SCORE
        </span>
      </div>

      {/* Multi-column links + logo */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: 48,
          padding: "56px 0 64px",
          borderTop: "1px solid rgba(255,255,255,.08)",
        }}
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <Link href="#inicio" aria-label="Inicio — Music Finance Pro">
              <Image
                src="/logo-full-neg.png"
                alt="Music Finance Pro"
                width={160}
                height={110}
                style={{ display: "block", height: 110, width: "auto" }}
              />
            </Link>
          </div>
          <div
            style={{
              marginTop: 48,
              display: "flex",
              flexWrap: "wrap",
              gap: 64,
            }}
          >
            <div>
              <div
                style={{
                  fontSize: 14,
                  color: "#9D9FA2",
                  marginBottom: 14,
                }}
              >
                Music Finance Pro
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Link href="#nosotros" className="fl">
                  Nosotros
                </Link>
                <Link href="#servicios" className="fl">
                  Servicios
                </Link>
                <Link href="#form" className="fl">
                  Contacto
                </Link>
              </div>
            </div>
            <div>
              <div
                style={{
                  fontSize: 14,
                  color: "#9D9FA2",
                  marginBottom: 14,
                }}
              >
                SCORE
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Link href="#como-funciona" className="fl">
                  Cómo funciona
                </Link>
                <Link href="#para-quien" className="fl">
                  Para quién
                </Link>
                <Link href="#faq" className="fl">
                  Preguntas frecuentes
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer + copyright */}
      <div
        style={{
          padding: "28px 0 36px",
          borderTop: "1px solid rgba(255,255,255,.08)",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: 16,
          fontSize: 12.5,
          color: "#9D9FA2",
          lineHeight: 1.6,
        }}
      >
        <span style={{ maxWidth: 640 }}>
          SCORE es un diagnóstico declarativo con fecha de corte. No constituye valoración financiera, asesoría de inversión, legal ni fiscal, ni auditoría.{" "}
          <em className="tbd">POR DEFINIR</em>
        </span>
        <span>© {year} Music Finance Pro LLC · New York · Todos los derechos reservados.</span>
      </div>
    </footer>
  );
}
