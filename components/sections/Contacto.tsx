import LeadForm from "@/components/LeadForm";

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

export default function Contacto() {
  return (
    <section
      id="form"
      className="sec"
      style={{ padding: "100px 16px 60px" }}
    >
      <div className="cta" style={{ maxWidth: 1440, margin: "0 auto" }}>
        {/* Background image */}
        <div className="ctaimg" aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/hands-smoke.webp" alt="" />
        </div>

        {/* Sun glow */}
        <div className="sun" aria-hidden="true" />

        {/* Grid floor */}
        <div className="floor" aria-hidden="true" />

        {/* EQ bars */}
        <div className="ebars" aria-hidden="true">
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

        {/* Content grid */}
        <div
          className="g2"
          style={{
            position: "relative",
            maxWidth: 1320,
            margin: "0 auto",
            padding: "96px 40px",
            display: "grid",
            gridTemplateColumns: "minmax(0, .95fr) minmax(0, 1.05fr)",
            gap: 56,
            alignItems: "start",
          }}
        >
          {/* Left: headline */}
          <div className="rv" style={{ paddingTop: 20 }}>
            <h2
              className="caps"
              style={{
                fontSize: "clamp(32px, 4vw, 54px)",
                fontWeight: 300,
                lineHeight: 1.1,
              }}
            >
              Antes de decidir
              <br />
              <span className="grad">entiende tu momentum.</span>
            </h2>
            <p className="lead" style={{ marginTop: 26, maxWidth: 460, color: "#E6E7E8" }}>
              Haz tu SCORE y recibe una lectura clara de dónde está tu proyecto y cuál es tu próximo paso.
            </p>

            {/* Stats */}
            <div
              style={{
                marginTop: 44,
                display: "flex",
                alignItems: "center",
                gap: 32,
                flexWrap: "wrap",
              }}
            >
              <div>
                <div style={{ fontSize: 28, fontWeight: 300 }}>4 familias</div>
                <div style={{ marginTop: 6, fontSize: 13.5, color: "#C8C9CB", maxWidth: 190, lineHeight: 1.5 }}>
                  Artistas · Empresas · Catálogos · Eventos
                </div>
              </div>
              <div
                style={{
                  width: 1,
                  height: 64,
                  background: "linear-gradient(transparent, rgba(255,255,255,.4), transparent)",
                }}
              />
              <div>
                <div style={{ fontSize: 28, fontWeight: 300 }}>1 momentum</div>
                <div style={{ marginTop: 6, fontSize: 13.5, color: "#C8C9CB", maxWidth: 200, lineHeight: 1.5 }}>
                  Con fecha de corte y revisión humana
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div
              style={{
                marginTop: 40,
                display: "flex",
                flexWrap: "wrap",
                gap: 14,
                alignItems: "center",
              }}
            >
              <a className="btn-p" href="#f-name">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M7 17L17 7" />
                  <path d="M8 7h9v9" />
                </svg>
                Hacer mi SCORE
              </a>
              <a className="btn-g" href="mailto:info@musicfinance.pro">
                Hablar con el equipo
              </a>
            </div>
            <p style={{ marginTop: 22, fontSize: 14, color: "#D9DADC" }}>
              WhatsApp <span className="tbd">POR DEFINIR</span>
            </p>
          </div>

          {/* Right: form */}
          <div className="ring-c rv">
            <div className="fcard">
              <LeadForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
