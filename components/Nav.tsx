"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState<"es" | "en">("es");

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 80,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
          padding: "0 clamp(20px, 4vw, 48px)",
          height: 68,
          background: "rgba(5,5,5,0.82)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        <Link href="#inicio" aria-label="Inicio — Music Finance Pro">
          <Image
            src="/logo-full-neg.png"
            alt="Music Finance Pro · SCORE"
            width={140}
            height={50}
            style={{ height: 50, width: "auto" }}
            priority
          />
        </Link>

        {/* Pill nav container — version-c style */}
        <nav
          aria-label="Navegación principal"
          style={{
            display: "flex",
            gap: 4,
            flexWrap: "wrap",
            padding: 5,
            borderRadius: 999,
            background: "rgba(255,255,255,.035)",
            border: "1px solid rgba(255,255,255,.08)",
            backdropFilter: "blur(14px)",
          }}
          className="hidden-mobile"
        >
          <Link href="#metodologia" className="nl on">SCORE</Link>
          <Link href="#servicios" className="nl">Servicios</Link>
          <Link href="#nosotros" className="nl">Nosotros</Link>
          <Link href="#form" className="nl">Contacto</Link>
        </nav>

        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          {/* ES/EN language toggle */}
          <div
            className="seg hidden-mobile"
            role="group"
            aria-label="Idioma"
          >
            <button
              type="button"
              className={lang === "es" ? "on" : ""}
              onClick={() => setLang("es")}
              aria-pressed={lang === "es"}
            >
              ES
            </button>
            <button
              type="button"
              className={lang === "en" ? "on" : ""}
              onClick={() => setLang("en")}
              aria-pressed={lang === "en"}
            >
              EN
            </button>
          </div>

          {/* CTA button */}
          <Link
            href="#form"
            className="btn-p hidden-mobile"
            style={{ minHeight: 46, padding: "0 22px", fontSize: 14 }}
          >
            Hacer mi SCORE
          </Link>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label="Abrir menú"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
            style={{
              display: "none",
              position: "relative",
              flexShrink: 0,
              width: 44,
              height: 44,
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.18)",
              background: "rgba(255,255,255,0.06)",
              cursor: "pointer",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column" as const,
              gap: 6,
            }}
            className="show-mobile"
          >
            <span style={{ display: "block", width: 18, height: 1.5, borderRadius: 2, background: "#fff" }} />
            <span style={{ display: "block", width: 18, height: 1.5, borderRadius: 2, background: "#fff" }} />
          </button>
        </div>
      </header>

      {menuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Menú móvil"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 30,
            padding: "90px 28px 40px",
            background: "rgba(5,5,5,0.97)",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
            animation: "mmin 0.5s cubic-bezier(.2,.8,.2,1) both",
            overflowY: "auto",
          }}
        >
          <button
            type="button"
            aria-label="Cerrar menú"
            onClick={() => setMenuOpen(false)}
            style={{
              position: "absolute",
              top: 18,
              right: 20,
              display: "inline-flex",
              width: 48,
              height: 48,
              borderRadius: "50%",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid rgba(255,255,255,0.2)",
              background: "rgba(255,255,255,0.06)",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M5 5l14 14" />
              <path d="M19 5L5 19" />
            </svg>
          </button>

          <nav style={{ display: "flex", flexDirection: "column" }}>
            {[
              { href: "#metodologia", label: "SCORE" },
              { href: "#servicios", label: "Servicios" },
              { href: "#nosotros", label: "Nosotros" },
              { href: "#form", label: "Contacto" },
              { href: "#form", label: "Hacer mi SCORE" },
            ].map((link, i) => (
              <Link
                key={link.href + i}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  minHeight: 58,
                  borderBottom: "1px solid rgba(255,255,255,0.09)",
                  color: "#fff",
                  textDecoration: "none",
                  fontFamily: "var(--font-quicksand), sans-serif",
                  fontSize: 30,
                  fontWeight: 300,
                  animation: `mmlink 0.6s cubic-bezier(.2,.8,.2,1) ${i * 0.05}s both`,
                }}
              >
                {link.label}
                <span style={{ fontFamily: "var(--font-questrial), sans-serif", fontSize: 18, color: "#A7A9AC" }}>→</span>
              </Link>
            ))}
          </nav>
        </div>
      )}

      <style>{`
        @media (max-width: 760px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: inline-flex !important; }
        }
      `}</style>
    </>
  );
}
