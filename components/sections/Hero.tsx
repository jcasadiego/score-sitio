import Link from "next/link";

const EQ_BARS = [0.4, 0.75, 0.55, 0.9, 0.65, 0.3, 0.8, 0.45, 0.7, 0.35, 0.6, 0.85];

export default function Hero() {
  return (
    <section
      id="inicio"
      style={{
        position: "relative",
        minHeight: "100svh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "#050505",
        paddingTop: 68,
      }}
    >
      {/* Background gradient */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(900px 640px at 72% 32%, rgba(167,169,172,0.18) 0%, transparent 62%), radial-gradient(620px 420px at 88% 74%, rgba(255,255,255,0.08) 0%, transparent 60%), linear-gradient(180deg,#0C0C0C 0%,#050505 100%)",
        }}
      />

      {/* Grid lines */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 65% 40%, #000 20%, transparent 75%)",
          maskImage: "radial-gradient(ellipse 70% 60% at 65% 40%, #000 20%, transparent 75%)",
        }}
      />

      {/* Bolt band left */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          width: 64,
          backgroundImage: "url(/brand-bolt-pattern.png)",
          backgroundSize: "240px auto",
          backgroundRepeat: "repeat",
          opacity: 0.16,
          animation: "boltmove 26s linear infinite",
          WebkitMaskImage: "linear-gradient(180deg, transparent, #000 18%, #000 82%, transparent)",
          maskImage: "linear-gradient(180deg, transparent, #000 18%, #000 82%, transparent)",
          pointerEvents: "none",
          zIndex: 2,
        }}
      />

      {/* Stage photo */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: "72%",
          backgroundImage: "url(/hero-stage.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center 35%",
          opacity: 0.26,
          WebkitMaskImage: "linear-gradient(0deg, transparent 0%, #000 30%, #000 55%, transparent 100%)",
          maskImage: "linear-gradient(0deg, transparent 0%, #000 30%, #000 55%, transparent 100%)",
          pointerEvents: "none",
        }}
      />

      {/* EQ bars */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: "60%",
          pointerEvents: "none",
          WebkitMaskImage: "linear-gradient(0deg, #000 25%, transparent)",
          maskImage: "linear-gradient(0deg, #000 25%, transparent)",
        }}
      >
        {EQ_BARS.map((h, i) => (
          <span
            key={i}
            style={{
              position: "absolute",
              bottom: 0,
              left: `${(i / EQ_BARS.length) * 100}%`,
              width: `${100 / EQ_BARS.length - 0.4}%`,
              height: `${h * 100}%`,
              border: "1px solid rgba(255,255,255,0.3)",
              borderBottom: 0,
              transformOrigin: "bottom",
              animation: `ebar 1.8s cubic-bezier(.2,.8,.2,1) ${i * 0.1}s both, ebob 5s ease-in-out ${i * 0.3}s infinite alternate`,
            }}
          />
        ))}
      </div>

      {/* Canvas placeholder — 3D particle brain (TODO: implementar animación de partículas) */}
      {/* TODO: convertir _brain() canvas a un componente React con useRef + useEffect */}

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 3,
          width: "100%",
          maxWidth: 1320,
          margin: "0 auto",
          padding: "80px clamp(20px, 4vw, 48px) clamp(80px, 12vw, 160px)",
        }}
      >
        {/* Eyebrow */}
        <p
          style={{
            fontFamily: "var(--font-questrial), monospace",
            fontSize: 12,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#B5B7BA",
            marginBottom: 24,
            animation: "rise 1.1s cubic-bezier(.2,.8,.2,1) both",
          }}
        >
          Music Finance Pro presenta SCORE
        </p>

        {/* Main headline */}
        <h1
          style={{
            fontSize: "clamp(42px, 7vw, 96px)",
            fontWeight: 300,
            lineHeight: 1.05,
            letterSpacing: "-0.025em",
            maxWidth: 740,
            marginBottom: 24,
            animation: "rise 1.1s cubic-bezier(.2,.8,.2,1) 0.08s both",
          }}
        >
          Para artistas, empresas,{" "}
          <span className="grad-text">catálogos y eventos</span>
        </h1>

        {/* Subheadline */}
        <p
          style={{
            fontSize: "clamp(16px, 2vw, 20px)",
            color: "#C8C9CB",
            lineHeight: 1.55,
            maxWidth: 520,
            marginBottom: 48,
            animation: "rise 1.1s cubic-bezier(.2,.8,.2,1) 0.18s both",
          }}
        >
          Entiende dónde está tu proyecto.{" "}
          <span style={{ color: "#F5F5F5" }}>Descubre hasta dónde puede llegar.</span>
        </p>

        {/* CTA row */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 16,
            animation: "rise 1.1s cubic-bezier(.2,.8,.2,1) 0.3s both",
          }}
        >
          <Link href="#contacto" className="btn-primary">
            Hacer mi SCORE
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M7 17L17 7" />
              <path d="M8 7h9v9" />
            </svg>
          </Link>
          <Link href="#servicios" className="btn-ghost">
            Ver cómo funciona
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          </Link>
        </div>

        {/* Ticker */}
        <div
          aria-hidden="true"
          style={{
            overflow: "hidden",
            marginTop: "clamp(60px, 10vw, 120px)",
            WebkitMaskImage: "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)",
            maskImage: "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 56,
              width: "max-content",
              animation: "amq 40s linear infinite",
              fontFamily: "var(--font-quicksand), sans-serif",
              fontSize: 30,
              fontWeight: 300,
              color: "#D1D3D4",
            }}
          >
            {["Artistas", "Empresas", "Catálogos", "Eventos", "Momentum", "Madurez", "Potencial", "Confianza", "Artistas", "Empresas", "Catálogos", "Eventos", "Momentum", "Madurez", "Potencial", "Confianza"].map((word, i) => (
              <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 56, whiteSpace: "nowrap" }}>
                {i % 4 === 0 ? <em style={{ display: "block", width: 10, height: 10, transform: "rotate(45deg)", background: "linear-gradient(135deg, #A7A9AC, #fff)", flexShrink: 0 }} /> : null}
                <span style={i % 2 === 0 ? {} : { color: "transparent", WebkitTextStroke: "1px rgba(255,255,255,0.4)" }}>{word}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes ebar { from { transform: scaleY(0) } }
        @keyframes ebob { 0% { scale: 1 1 } 100% { scale: 1 .8 } }
      `}</style>
    </section>
  );
}
