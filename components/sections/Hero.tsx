"use client";

import Link from "next/link";

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

const TICKER_WORDS = [
  "Artistas", "Empresas", "Catálogos", "Eventos",
  "Momentum", "Madurez", "Potencial", "Confianza",
  "Artistas", "Empresas", "Catálogos", "Eventos",
  "Momentum", "Madurez", "Potencial", "Confianza",
];

export default function Hero() {
  return (
    <section
      id="inicio"
      style={{
        position: "relative",
        minHeight: "940px",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        background: "#050505",
        paddingTop: 68,
      }}
    >
      {/* Background gradient */}
      <div
        aria-hidden="true"
        className="hero-bg"
      />

      {/* Grid lines */}
      <div
        aria-hidden="true"
        className="hero-lines"
      />

      {/* Stage photo */}
      <div
        aria-hidden="true"
        className="hero-photo"
      />

      {/* EQ bars */}
      <div
        aria-hidden="true"
        className="ebars"
      >
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
      <div
        aria-hidden="true"
        className="boltband"
      />

      {/* Content wrapper */}
      <div
        style={{
          position: "relative",
          zIndex: 3,
          width: "100%",
          maxWidth: 1320,
          margin: "0 auto",
          padding: "80px 24px clamp(80px, 12vw, 160px)",
        }}
      >
        {/* Hero grid */}
        <div className="hero-grid" style={{ position: "relative" }}>
          {/* Eyebrow */}
          <p
            className="in1 eyebrow"
            style={{ marginBottom: 24 }}
          >
            Music Finance Pro presenta SCORE
          </p>

          {/* Main headline */}
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
            <span
              className="grad"
              style={{ fontWeight: 400 }}
            >
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
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M7 17L17 7" />
                <path d="M8 7h9v9" />
              </svg>
              Hacer mi SCORE
            </Link>
            <Link href="#metodologia" className="btn-g">
              Ver cómo funciona
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </Link>
          </div>

          {/* Stats */}
          <div
            className="in5"
            style={{
              marginTop: 56,
              display: "flex",
              gap: 32,
              alignItems: "center",
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

        {/* Ticker */}
        <div
          aria-hidden="true"
          className="amq"
          style={{ marginTop: "clamp(60px, 10vw, 120px)" }}
        >
          <div className="amq-track">
            {TICKER_WORDS.map((word, i) => (
              <span
                key={i}
                style={{ display: "inline-flex", alignItems: "center", gap: 56, whiteSpace: "nowrap" }}
              >
                {i % 4 === 0 && (
                  <em />
                )}
                <span className={i % 2 !== 0 ? "o" : ""}>
                  {word}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes ebar { from { transform: scaleY(0) } }
        @keyframes ebob { 0% { scale: 1 1 } 100% { scale: 1 .8 } }
        .ebars span {
          position: absolute;
          bottom: 0;
          width: 3.4%;
          border: 1px solid rgba(255,255,255,.3);
          border-bottom: 0;
          transform-origin: bottom;
          animation: ebar 1.8s cubic-bezier(.2,.8,.2,1) both, ebob 5s ease-in-out infinite alternate;
        }
      `}</style>
    </section>
  );
}
