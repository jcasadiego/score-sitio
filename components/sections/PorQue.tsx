export default function PorQue() {
  return (
    <section
      id="por-que"
      style={{
        position: "relative",
        padding: "clamp(72px, 10vw, 140px) clamp(20px, 4vw, 48px)",
        background: "#050505",
        overflow: "hidden",
      }}
    >
      {/* Bolt strip */}
      <div
        aria-hidden="true"
        style={{
          height: 120,
          backgroundImage: "url(/brand-bolt-pattern.png)",
          backgroundSize: "300px auto",
          backgroundRepeat: "repeat",
          opacity: 0.13,
          animation: "boltslide 40s linear infinite",
          WebkitMaskImage: "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)",
          maskImage: "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)",
          marginBottom: 60,
        }}
      />

      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        {/* Giant wordmark */}
        <div
          className="rv"
          style={{ position: "relative", textAlign: "center", marginBottom: "clamp(60px, 8vw, 100px)" }}
        >
          <span
            style={{
              position: "relative",
              display: "block",
              fontSize: "clamp(90px, 23vw, 340px)",
              fontFamily: "var(--font-quicksand), sans-serif",
              fontWeight: 600,
              lineHeight: 0.85,
              letterSpacing: "-0.02em",
              textAlign: "center",
              color: "#050505",
              WebkitTextStroke: "2px rgba(255,255,255,0.16)",
              paintOrder: "stroke fill",
              userSelect: "none",
            }}
          >
            SCORE
          </span>
        </div>

        {/* Two-column editorial */}
        <div
          className="rv"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(32px, 5vw, 80px)",
            alignItems: "center",
          }}
        >
          <div>
            <p className="eyebrow" style={{ marginBottom: 20 }}>
              Nuestra filosofía
            </p>
            <h2 className="h2" style={{ marginBottom: 24 }}>
              Popularidad <span className="grad">no es valor.</span>
            </h2>

            <p style={{ fontSize: 18, color: "#C8C9CB", lineHeight: 1.65, marginBottom: 20 }}>
              SCORE no te dice cuánto{" "}
              <strong style={{ fontFamily: "var(--font-quicksand)", fontWeight: 600, color: "#fff", borderBottom: "1.5px solid rgba(255,255,255,0.4)", paddingBottom: 1 }}>vales</strong>{" "}
              hoy; te revela si hay un{" "}
              <strong style={{ fontFamily: "var(--font-quicksand)", fontWeight: 600, color: "#fff", borderBottom: "1.5px solid rgba(255,255,255,0.4)", paddingBottom: 1 }}>valor</strong>{" "}
              que{" "}
              <strong style={{ fontFamily: "var(--font-quicksand)", fontWeight: 600, color: "#fff", borderBottom: "1.5px solid rgba(255,255,255,0.4)", paddingBottom: 1 }}>vale</strong>{" "}
              la pena{" "}
              <strong style={{ fontFamily: "var(--font-quicksand)", fontWeight: 600, color: "#fff", borderBottom: "1.5px solid rgba(255,255,255,0.4)", paddingBottom: 1 }}>valorar</strong>{" "}
              y qué te falta para lograrlo.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              {
                title: "Popularidad ≠ Valor",
                sub: "Por potencial, no por ruido",
                desc: "El éxito visible no siempre refleja el potencial real. Analizamos la estructura, el contexto y las oportunidades de tu proyecto.",
              },
              {
                title: "Sin cajas negras",
                sub: "Transparencia por diseño",
                desc: "Cada lectura viene con sus fuentes, sus fundamentos y sus límites. Sabes qué se analizó y por qué.",
              },
              {
                title: "Aprobación humana",
                sub: "Ningún SCORE sale sin una persona",
                desc: "La inteligencia artificial amplía nuestra capacidad; el criterio experto aporta contexto, supervisión y responsabilidad.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rv"
                style={{
                  padding: "20px 24px",
                  borderRadius: 20,
                  border: "1px solid rgba(255,255,255,0.08)",
                  background: "rgba(255,255,255,0.025)",
                }}
              >
                <p style={{ fontFamily: "var(--font-quicksand)", fontSize: 16, fontWeight: 600, color: "#fff", marginBottom: 4 }}>
                  {item.title}
                </p>
                <p style={{ fontSize: 12, color: "#A7A9AC", marginBottom: 10, letterSpacing: "0.06em" }}>
                  {item.sub}
                </p>
                <p style={{ fontSize: 14, color: "#C8C9CB", lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 760px) {
          #por-que [style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
