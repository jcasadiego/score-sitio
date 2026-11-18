import LeadForm from "@/components/LeadForm";

export default function Contacto() {
  return (
    <section
      id="form"
      style={{
        position: "relative",
        padding: "clamp(72px, 10vw, 140px) clamp(20px, 4vw, 48px) clamp(80px, 12vw, 160px)",
        background: "#050505",
        overflow: "hidden",
      }}
    >
      {/* Background */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(900px 420px at 30% 112%, rgba(167,169,172,0.4) 0%, transparent 70%), linear-gradient(180deg,#0E0E0F,#141415)",
        }}
      />

      {/* Perspective grid floor */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "-30%",
          right: "-30%",
          bottom: "-6%",
          height: "50%",
          backgroundImage:
            "linear-gradient(rgba(167,169,172,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(167,169,172,0.4) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          transform: "perspective(420px) rotateX(62deg)",
          transformOrigin: "center top",
          animation: "grid 1.8s linear infinite",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, #000 35%, #000 75%, transparent 100%)",
          maskImage: "linear-gradient(to bottom, transparent 0%, #000 35%, #000 75%, transparent 100%)",
          opacity: 0.55,
        }}
      />

      {/* Background image */}
      <img
        src="/film-set.webp"
        alt=""
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.12,
          mixBlendMode: "luminosity",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 1320, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 480px",
            gap: "clamp(32px, 5vw, 80px)",
            alignItems: "start",
          }}
        >
          {/* Left: headline */}
          <div>
            <p
              className="rv eyebrow"
              style={{ marginBottom: 20 }}
            >
              Todo empieza por entender el momentum real de tu proyecto
            </p>

            <h2
              className="rv caps h2"
              style={{ marginBottom: 24 }}
            >
              Antes de decidir /{" "}
              <span className="grad">entiende tu momentum.</span>
            </h2>

            <p
              className="rv"
              style={{ fontSize: 18, color: "#C8C9CB", lineHeight: 1.65, maxWidth: 480, marginBottom: 40 }}
            >
              El diagnóstico del momentum de tu proyecto: madurez, potencial y confianza.
            </p>

            {/* What you get */}
            <div className="rv" style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 440 }}>
              {[
                { label: "Servicios financieros", desc: "Diagnóstico, gestión, valoración y estructuración para artistas, empresas, catálogos y eventos." },
                { label: "Inversión directa", desc: "Invertimos proyecto a proyecto en oportunidades que superan nuestro proceso de valoración." },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    padding: "16px 20px",
                    borderRadius: 18,
                    border: "1px solid rgba(255,255,255,0.08)",
                    background: "rgba(255,255,255,0.025)",
                  }}
                >
                  <p style={{ fontFamily: "var(--font-quicksand)", fontSize: 15, fontWeight: 600, color: "#fff", marginBottom: 6 }}>
                    {item.label}
                  </p>
                  <p style={{ fontSize: 14, color: "#A7A9AC", lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div
            className="rv"
            style={{
              borderRadius: 30,
              background: "linear-gradient(180deg,#141414,#0C0C0C)",
              padding: 34,
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-quicksand), sans-serif",
                fontSize: 22,
                fontWeight: 600,
                color: "#fff",
                marginBottom: 8,
              }}
            >
              Hacer mi SCORE
            </h3>
            <p style={{ fontSize: 14, color: "#A7A9AC", marginBottom: 28, lineHeight: 1.5 }}>
              Cuéntanos sobre tu proyecto y te contactamos en menos de 24 horas hábiles.
            </p>
            <LeadForm />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes grid { to { background-position: 0 64px } }
        @media (max-width: 1000px) {
          #contacto [style*="grid-template-columns: 1fr 480px"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
