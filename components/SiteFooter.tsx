import Link from "next/link";

export default function SiteFooter() {
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
        <span className="giant" data-t="SCORE">
          SCORE
        </span>
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
          <span className="tbd">POR DEFINIR</span>
        </span>
        <span>© 2024 Music Finance Pro LLC · New York · Todos los derechos reservados.</span>
      </div>

      {/* Multi-column links + fcontact */}
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
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-full-neg.png"
              alt="Music Finance Pro"
              style={{ display: "block", height: 110, width: "auto" }}
            />
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
              <div style={{ fontSize: 14, color: "#9D9FA2", marginBottom: 14 }}>
                Music Finance Pro
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Link href="#nosotros" className="fl">Nosotros</Link>
                <Link href="#servicios" className="fl">Servicios</Link>
                <Link href="#form" className="fl">Contacto</Link>
              </div>
            </div>
            <div>
              <div style={{ fontSize: 14, color: "#9D9FA2", marginBottom: 14 }}>
                SCORE
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Link href="#como-funciona" className="fl">Cómo funciona</Link>
                <Link href="#para-quien" className="fl">Para quién</Link>
                <Link href="#faq" className="fl">Preguntas frecuentes</Link>
                <Link href="#form" className="fl">Hacer mi SCORE</Link>
              </div>
            </div>
            <div>
              <div style={{ fontSize: 14, color: "#9D9FA2", marginBottom: 14 }}>
                Legal <span className="tbd">POR DEFINIR</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Link href="#" className="fl">Términos y condiciones</Link>
                <Link href="#" className="fl">Política de privacidad</Link>
                <Link href="#" className="fl">Alcance de SCORE</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Contact column */}
        <div
          className="fcontact"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: 12,
            textAlign: "right",
            marginLeft: "auto",
          }}
        >
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <a
              className="ib"
              href="https://www.instagram.com/musicfinance/"
              target="_blank"
              rel="noopener"
              aria-label="Instagram de Music Finance Pro"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" />
              </svg>
            </a>
            <a
              className="ib"
              href="https://share.google/v5J9Kz2EF8Z06BeyN"
              target="_blank"
              rel="noopener"
              aria-label="LinkedIn de Music Finance Pro"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="4" />
                <path d="M8 11v6" />
                <path d="M8 7.5v.01" />
                <path d="M12 17v-6" />
                <path d="M12 13.5c0-1.5 1-2.5 2.3-2.5S16 12 16 13.5V17" />
              </svg>
            </a>
            <span
              className="ib off"
              role="img"
              aria-label="WhatsApp: próximamente"
              title="WhatsApp — próximamente"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 20l1.3-4A8 8 0 1 1 8 18.7z" />
                <path d="M9.5 9.5c0 2.5 2.5 5 5 5l1-1.5-2-1-1 1c-.8-.4-1.6-1.2-2-2l1-1-1-2z" />
              </svg>
            </span>
          </div>
          <a
            href="mailto:info@musicfinance.pro"
            style={{ marginTop: 8, fontSize: 15, color: "#E6E7E8", textDecoration: "none" }}
          >
            info@musicfinance.pro
          </a>
          <span style={{ fontSize: 15, color: "#E6E7E8" }}>
            WhatsApp <span className="tbd">POR DEFINIR</span>
          </span>
          <span style={{ marginTop: 20, fontSize: 14, color: "#9D9FA2" }}>Sede</span>
          <span style={{ fontSize: 15, color: "#E6E7E8" }}>New York</span>
        </div>
      </div>
    </footer>
  );
}
