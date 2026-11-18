export default function Nosotros() {
  return (
    <section
      id="nosotros"
      style={{
        position: "relative",
        padding: "clamp(72px, 10vw, 140px) clamp(20px, 4vw, 48px)",
        background: "#050505",
      }}
    >
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        {/* Header */}
        <div className="rv" style={{ marginBottom: "clamp(48px, 6vw, 80px)", maxWidth: 720 }}>
          <p className="eyebrow" style={{ marginBottom: 16 }}>
            Quién está detrás
          </p>
          <h2 className="h2" style={{ marginBottom: 24 }}>
            Finanzas, mercados y criterio para la{" "}
            <span className="grad">economía de la música.</span>
          </h2>
          <p className="lead" style={{ marginBottom: 16 }}>
            Somos una firma de servicios financieros e inversión especializada en la industria musical.
          </p>
          <p style={{ fontSize: 15, color: "#A7A9AC", lineHeight: 1.65 }}>
            Nuestra estructura integra liderazgo estratégico, capacidades financieras y tecnológicas avanzadas, y una gestión centrada en las personas. La tecnología amplifica nuestra capacidad de análisis; el conocimiento experto aporta contexto, supervisión y responsabilidad.
          </p>
        </div>

        {/* Three pillars */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 18,
          }}
        >
          {[
            {
              label: "01",
              title: "Popularidad ≠ Valor",
              sub: "Por potencial, no por ruido",
              desc: "El éxito visible no necesariamente representa valor económico. Comprender el verdadero potencial de un proyecto musical requiere datos, contexto, criterio y sensibilidad cultural.",
              img: "/crowd-hands.webp",
              color: "#A7A9AC",
            },
            {
              label: "02",
              title: "Transparencia por diseño",
              sub: "Sin cajas negras",
              desc: "Contrastamos lo declarado con millones de datos de la industria musical. El Motor SCORE construye las lecturas; THE CORTEX las interpreta; una persona valida antes de entregar.",
              img: "/piano-keys.webp",
              color: "#BCBEC0",
            },
            {
              label: "03",
              title: "Sensibilidad Cultural",
              sub: "La música es cultura. También un activo financiero.",
              desc: "Cada proyecto musical tiene una historia, un contexto territorial y un ecosistema propio. Nuestro análisis integra esa dimensión cultural con el rigor financiero.",
              img: "/composer.webp",
              color: "#D1D3D4",
            },
          ].map((item) => (
            <article
              key={item.label}
              className="rv"
              style={{
                position: "relative",
                borderRadius: 28,
                border: "1px solid rgba(255,255,255,0.08)",
                background: "linear-gradient(180deg,#151515 0%,#0A0A0A 100%)",
                overflow: "hidden",
                padding: 24,
              }}
            >
              {/* Background image */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  overflow: "hidden",
                }}
                aria-hidden="true"
              >
                <img
                  src={item.img}
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    opacity: 0.08,
                    filter: "grayscale(1)",
                    animation: "kb 24s ease-in-out infinite alternate",
                  }}
                />
              </div>

              <div style={{ position: "relative", zIndex: 1 }}>
                <span
                  style={{
                    fontFamily: "var(--font-questrial), monospace",
                    fontSize: 12,
                    color: "#6D6E71",
                    letterSpacing: "0.1em",
                    display: "block",
                    marginBottom: 20,
                  }}
                >
                  {item.label}
                </span>

                <h3
                  style={{
                    fontFamily: "var(--font-quicksand), sans-serif",
                    fontSize: 22,
                    fontWeight: 600,
                    color: "#fff",
                    marginBottom: 8,
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    fontSize: 12,
                    color: "#6D6E71",
                    letterSpacing: "0.06em",
                    marginBottom: 16,
                    textTransform: "uppercase",
                  }}
                >
                  {item.sub}
                </p>

                <p style={{ fontSize: 15, color: "#B5B7BA", lineHeight: 1.65 }}>
                  {item.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
