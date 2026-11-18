"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

// EQ bars matching the HTML original: 12 bars with specific heights and delays
const EQ_BARS = [
  { left: "3%",  height: "55%", delay: "0.00s, 0.00s" },
  { left: "11%", height: "78%", delay: "0.08s, -0.70s" },
  { left: "19%", height: "40%", delay: "0.16s, -1.40s" },
  { left: "27%", height: "62%", delay: "0.24s, -2.10s" },
  { left: "35%", height: "30%", delay: "0.32s, -2.80s" },
  { left: "43%", height: "48%", delay: "0.40s, -3.50s" },
  { left: "51%", height: "85%", delay: "0.48s, -4.20s" },
  { left: "59%", height: "66%", delay: "0.56s, -4.90s" },
  { left: "67%", height: "38%", delay: "0.64s, -5.60s" },
  { left: "75%", height: "72%", delay: "0.72s, -6.30s" },
  { left: "83%", height: "50%", delay: "0.80s, -7.00s" },
  { left: "91%", height: "95%", delay: "0.88s, -7.70s" },
];

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState<"es" | "en">("es");

  return (
    <section
      id="inicio"
      className="sec"
      style={{
        position: "relative",
        minHeight: "940px",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {/* Background gradient */}
      <div aria-hidden="true" className="hero-bg" />

      {/* Grid lines */}
      <div aria-hidden="true" className="hero-lines" />

      {/* Stage photo */}
      <div aria-hidden="true" className="hero-photo" />

      {/* EQ bars */}
      <div aria-hidden="true" className="ebars">
        {EQ_BARS.map((bar, i) => (
          <span
            key={i}
            style={{
              left: bar.left,
              height: bar.height,
              animationDelay: bar.delay,
            }}
          />
        ))}
      </div>

      {/* Bolt band left */}
      <div aria-hidden="true" className="boltband" />

      {/* Brain wrap — panel derecho con halo, vscreen, HUD badges */}
      <div className="brain-wrap" aria-hidden="true">
        <div className="halo" />
        {/* vscreen: video preview placeholder (fallback hero-stage.webp — manifiesto-poster.jpg pendiente) */}
        <div className="vscreen" style={{ opacity: 0.4 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/hero-stage.webp"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        {/* TODO: canvas 3D — reemplazar con el componente de partículas cuando se migre */}
        <span className="hud" style={{ left: "24%", top: "20%" }}>
          <b />
          Madurez
        </span>
        <span className="hud" style={{ right: "22%", top: "34%", animationDelay: "-2s" }}>
          <b />
          Potencial
        </span>
        <span className="hud" style={{ left: "26%", top: "72%", animationDelay: "-4s" }}>
          <b />
          Confianza
        </span>
        <span className="hud" style={{ right: "22%", top: "78%", animationDelay: "-1s" }}>
          <b />
          Momentum
        </span>
      </div>

      {/* Header embebido dentro de #inicio — version-c */}
      <header
        style={{
          position: "relative",
          zIndex: 5,
          width: "100%",
          maxWidth: 1320,
          margin: "0 auto",
          padding: "28px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 20,
          flexWrap: "wrap",
        }}
      >
        <Link
          href="#inicio"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            textDecoration: "none",
            color: "#F5F5F5",
          }}
        >
          <Image
            src="/logo-full-neg.png"
            alt="Music Finance Pro"
            width={140}
            height={50}
            style={{ display: "block", height: 50, width: "auto" }}
            priority
          />
        </Link>

        {/* Pill nav container — version-c */}
        <nav
          aria-label="Principal"
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
          className="nav-desktop"
        >
          <Link className="nl on" href="#metodologia">SCORE</Link>
          <Link className="nl" href="#servicios">Servicios</Link>
          <Link className="nl" href="#nosotros">Nosotros</Link>
          <Link className="nl" href="#form">Contacto</Link>
        </nav>

        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          {/* ES/EN language toggle */}
          <div
            className="seg nav-desktop"
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

          <Link
            className="btn-p nav-desktop"
            href="#form"
            style={{ minHeight: 46, padding: "0 22px", fontSize: 14 }}
          >
            Hacer mi SCORE
          </Link>
          <button
            type="button"
            className="mtoggle"
            aria-label="Abrir menú"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="mmenu"
          role="dialog"
          aria-label="Menú"
        >
          <button
            type="button"
            className="mclose"
            aria-label="Cerrar menú"
            onClick={() => setMenuOpen(false)}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M5 5l14 14" />
              <path d="M19 5L5 19" />
            </svg>
          </button>
          <Image
            src="/logo-full-neg.png"
            alt="Music Finance Pro"
            width={140}
            height={40}
            style={{ position: "absolute", top: 22, left: 28, height: 40, width: "auto" }}
          />
          <nav aria-label="Menú móvil">
            {[
              { href: "#metodologia", label: "SCORE" },
              { href: "#para-quien", label: "Para quién" },
              { href: "#equipo", label: "Equipo" },
              { href: "#nosotros", label: "Nosotros" },
              { href: "#servicios", label: "Servicios" },
              { href: "#como-funciona", label: "Cómo funciona" },
              { href: "#faq", label: "Preguntas" },
              { href: "#form", label: "Contacto" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            className="btn-p"
            href="#form"
            onClick={() => setMenuOpen(false)}
            style={{ alignSelf: "flex-start" }}
          >
            Hacer mi SCORE
          </Link>
        </div>
      )}

      {/* Hero grid — 2 columnas: contenido izquierdo + columna derecha (brain-wrap es absoluto) */}
      <div
        className="hero-grid"
        style={{
          position: "relative",
          zIndex: 3,
          width: "100%",
          maxWidth: 1320,
          margin: "0 auto",
          padding: "84px 24px 40px",
          display: "grid",
          gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
          gap: 32,
          flex: 1,
        }}
      >
        <div style={{ maxWidth: 820 }}>
          {/* Chip eyebrow — version-c */}
          <div
            className="in1"
            style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 16 }}
          >
            <div className="chip">
              <i />
              Music Finance Pro presenta SCORE
            </div>
            <span style={{ fontSize: 13.5, color: "#A7A9AC" }}>
              Para artistas, empresas, catálogos y eventos
            </span>
          </div>

          {/* Headline */}
          <h1
            className="in2"
            style={{
              marginTop: 28,
              fontSize: "clamp(36px, 4.2vw, 60px)",
              fontWeight: 300,
              lineHeight: 1.08,
              letterSpacing: "-0.035em",
            }}
          >
            Entiende dónde está tu proyecto.{" "}
            <span className="grad" style={{ fontWeight: 400 }}>
              Descubre hasta dónde puede llegar.
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className="in3"
            style={{
              marginTop: 28,
              maxWidth: 600,
              fontSize: 18,
              lineHeight: 1.65,
              color: "#C8C9CB",
            }}
          >
            SCORE es el diagnóstico que mide el potencial, la madurez y la confianza de artistas, empresas, catálogos y eventos. SCORE es tu puerta de entrada a nuestra Suite de Servicios Financieros e inversión enfocados en la industria musical.
          </p>

          {/* CTA row */}
          <div
            className="in4"
            style={{
              marginTop: 40,
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: 14,
            }}
          >
            <Link href="#form" className="btn-p">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M7 17L17 7" />
                <path d="M8 7h9v9" />
              </svg>
              Hacer mi SCORE
            </Link>
            <Link href="#como-funciona" className="btn-g">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
              Ver cómo funciona
            </Link>
          </div>

          {/* Stats */}
          <div
            className="in5"
            style={{
              marginTop: 52,
              display: "flex",
              alignItems: "center",
              gap: 36,
              flexWrap: "wrap",
            }}
          >
            <div>
              <div style={{ fontSize: 30, fontWeight: 300 }}>4 familias</div>
              <div style={{ marginTop: 6, fontSize: 13.5, color: "#A7A9AC" }}>Artistas · Empresas · Catálogos · Eventos</div>
            </div>
            <div
              style={{
                width: 1,
                height: 56,
                background: "linear-gradient(transparent, rgba(255,255,255,.35), transparent)",
              }}
            />
            <div>
              <div style={{ fontSize: 30, fontWeight: 300 }}>3 lecturas</div>
              <div style={{ marginTop: 6, fontSize: 13.5, color: "#A7A9AC" }}>Madurez · Potencial · Confianza</div>
            </div>
          </div>
        </div>

        {/* Columna derecha vacía — brain-wrap es absoluto y se posiciona sobre ella */}
        <div aria-hidden="true" />
      </div>

      {/* Bottom bar */}
      <div
        className="hbar"
        style={{
          position: "relative",
          zIndex: 3,
          width: "100%",
          maxWidth: 1320,
          margin: "0 auto",
          padding: "24px 24px 40px",
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gap: 24,
          alignItems: "end",
        }}
      >
        <div style={{ fontSize: 14, lineHeight: 1.5, color: "#A7A9AC", maxWidth: 300 }}>
          © 2024 Music Finance Pro LLC
          <br />
          New York · Todos los derechos reservados.
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
          <span className="mouse" aria-hidden="true" />
          <Link
            href="#para-quien"
            style={{ fontSize: 13, color: "#D9DADC", letterSpacing: ".08em", textDecoration: "none" }}
          >
            Desliza para descubrir ↓
          </Link>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 10 }}>
          <span style={{ fontSize: 14, color: "#D9DADC" }}>
            Contacto <span className="tbd">POR DEFINIR</span>
          </span>
          <div style={{ display: "flex", gap: 8 }}>
            <a className="ib" href="https://www.instagram.com/musicfinance/" target="_blank" rel="noopener" aria-label="Instagram de Music Finance Pro">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" />
              </svg>
            </a>
            <a className="ib" href="https://share.google/v5J9Kz2EF8Z06BeyN" target="_blank" rel="noopener" aria-label="LinkedIn de Music Finance Pro">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="4" />
                <path d="M8 11v6" />
                <path d="M8 7.5v.01" />
                <path d="M12 17v-6" />
                <path d="M12 13.5c0-1.5 1-2.5 2.3-2.5S16 12 16 13.5V17" />
              </svg>
            </a>
            <span className="ib off" role="img" aria-label="WhatsApp: próximamente" title="WhatsApp — próximamente">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 20l1.3-4A8 8 0 1 1 8 18.7z" />
                <path d="M9.5 9.5c0 2.5 2.5 5 5 5l1-1.5-2-1-1 1c-.8-.4-1.6-1.2-2-2l1-1-1-2z" />
              </svg>
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes ebar { from { transform: scaleY(0) } }
        @keyframes ebob { 0% { scale: 1 1 } 100% { scale: 1 .8 } }
        @keyframes wheel { 0% { transform: translateY(0); opacity: 1 } 100% { transform: translateY(12px); opacity: 0 } }
        .ebars span {
          position: absolute;
          bottom: 0;
          width: 3.4%;
          border: 1px solid rgba(255,255,255,.3);
          border-bottom: 0;
          transform-origin: bottom;
          animation: ebar 1.8s cubic-bezier(.2,.8,.2,1) both, ebob 5s ease-in-out infinite alternate;
        }
        .nav-desktop { display: flex; }
        @media (max-width: 760px) {
          .nav-desktop { display: none !important; }
          .mtoggle { display: inline-flex !important; }
          .hbar { display: none !important; }
          #inicio { min-height: 0 !important; }
          .boltband { width: 10px !important; opacity: .28 !important; }
          .brain-wrap { top: 92px !important; height: 320px !important; opacity: .95 !important; }
          .hero-grid { padding-top: 290px !important; padding-bottom: 30px !important; }
          .pg h1 { font-size: 36px !important; line-height: 1.1 !important; }
        }
        @media (max-width: 1000px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .brain-wrap { width: 100% !important; right: 0 !important; top: 150px !important; height: 560px !important; opacity: .5; }
          .hbar > div { align-items: flex-start !important; text-align: left !important; }
        }
      `}</style>
    </section>
  );
}
