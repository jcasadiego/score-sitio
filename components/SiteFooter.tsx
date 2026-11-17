import Image from "next/image";
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer
      style={{
        position: "relative",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        background: "#050505",
        padding: "48px clamp(20px, 4vw, 48px) 32px",
      }}
    >
      <div
        style={{
          maxWidth: 1320,
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
        }}
      >
        <Link href="#inicio" aria-label="Inicio — Music Finance Pro">
          <Image
            src="/logo-full-neg.png"
            alt="Music Finance Pro"
            width={160}
            height={36}
            style={{ height: 36, width: "auto", opacity: 0.7 }}
          />
        </Link>

        <p
          style={{
            fontFamily: "var(--font-questrial), monospace",
            fontSize: 12,
            letterSpacing: "0.14em",
            color: "#6D6E71",
            textAlign: "center",
          }}
        >
          SCORE es un diagnóstico, no una valoración financiera ni asesoría de inversión.
        </p>

        <p
          style={{
            fontFamily: "var(--font-questrial), monospace",
            fontSize: 12,
            color: "#6D6E71",
            letterSpacing: "0.06em",
          }}
        >
          © {new Date().getFullYear()} Music Finance Pro · New York · Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
