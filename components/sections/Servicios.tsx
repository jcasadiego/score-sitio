import Link from "next/link";

const SERVICIOS = [
  {
    id: "SCORE",
    label: "Diagnóstico",
    headline: "El diagnóstico del momentum de tu proyecto",
    desc: "Madurez, Potencial y Confianza. La puerta de entrada a Music Finance Pro.",
    tag: "Puerta de entrada",
    img: "/concert-lights.webp",
    color: "#A7A9AC",
  },
  {
    id: "TRACE",
    label: "Gestión financiera",
    headline: "Exactitud, Orden y Trazabilidad",
    desc: "Agente administrativo híbrido de gestión financiera para artistas, empresas y eventos musicales.",
    tag: "Gestión diaria",
    img: "/console.webp",
    color: "#BCBEC0",
  },
  {
    id: "VALUE",
    label: "Valoración",
    headline: "Valoración financiera con metodología propia",
    desc: "Proyectos, empresas, catálogos y eventos musicales valorados con rigor financiero.",
    tag: "Metodología propia",
    img: "/studio.webp",
    color: "#D1D3D4",
  },
  {
    id: "CAPITAL",
    label: "Inversión",
    headline: "Invertimos, estructuramos o conectamos capital",
    desc: "Para oportunidades musicales que superan nuestro proceso de valoración.",
    tag: "Capital estratégico",
    img: "/band-studio.webp",
    color: "#E6E7E8",
  },
];

const CLIP_PATHS = [
  "ellipse(80% 100% at 50% 0%)",
  "polygon(0 0, 100% 0, 100% 74%, 0 100%)",
  "polygon(0 0, 100% 0, 100% 100%, 50% 82%, 0 100%)",
  "polygon(0 0, 100% 0, 100% 100%, 0 74%)",
];

export default function Servicios() {
  return (
    <section
      id="servicios"
      style={{
        position: "relative",
        padding: "clamp(72px, 10vw, 140px) clamp(20px, 4vw, 48px)",
        background: "#050505",
      }}
    >
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        {/* Header */}
        <div className="rv" style={{ marginBottom: "clamp(48px, 6vw, 80px)" }}>
          <p
            style={{
              fontFamily: "var(--font-questrial), monospace",
              fontSize: 12,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#B5B7BA",
              marginBottom: 16,
            }}
          >
            Suite de servicios
          </p>
          <h2
            style={{
              fontSize: "clamp(34px, 4.2vw, 58px)",
              fontWeight: 300,
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              maxWidth: 600,
            }}
          >
            Servicios financieros para la industria musical
          </h2>
          <p
            style={{
              marginTop: 16,
              fontSize: 18,
              color: "#C8C9CB",
              lineHeight: 1.55,
              maxWidth: 500,
            }}
          >
            Diagnóstico, gestión, valoración y estructuración para artistas, empresas, catálogos y eventos.
          </p>
        </div>

        {/* Service cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 18,
          }}
        >
          {SERVICIOS.map((s, i) => (
            <article
              key={s.id}
              className="rv"
              style={{
                position: "relative",
                borderRadius: 28,
                border: "1px solid rgba(255,255,255,0.08)",
                background: "linear-gradient(180deg,#151515 0%,#0A0A0A 100%)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                gap: 18,
                padding: 24,
                minHeight: 440,
                transition: "border-color 0.4s, box-shadow 0.4s",
              }}
            >
              {/* Image */}
              <div
                style={{
                  position: "relative",
                  height: 190,
                  margin: "-24px -24px 4px",
                  overflow: "hidden",
                  clipPath: CLIP_PATHS[i],
                }}
              >
                <img
                  src={s.img}
                  alt=""
                  aria-hidden="true"
                  style={{
                    display: "block",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transform: "scale(1.14)",
                    filter: "contrast(1.05) brightness(0.82)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: `linear-gradient(135deg, color-mix(in srgb, ${s.color} 60%, transparent), transparent 55%)`,
                    mixBlendMode: "color",
                  }}
                />
              </div>

              {/* Content */}
              <span
                style={{
                  fontFamily: "var(--font-questrial), monospace",
                  fontSize: 11,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#6D6E71",
                }}
              >
                {s.label}
              </span>

              <h3
                style={{
                  fontFamily: "var(--font-quicksand), sans-serif",
                  fontSize: "clamp(22px, 2.5vw, 28px)",
                  fontWeight: 600,
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  color: "#fff",
                }}
              >
                {s.id}
              </h3>

              <p style={{ fontSize: 15, lineHeight: 1.55, color: "#B5B7BA", flex: 1 }}>
                {s.desc}
              </p>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingTop: 16,
                  borderTop: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    minHeight: 32,
                    padding: "0 14px",
                    borderRadius: 999,
                    border: "1px solid rgba(255,255,255,0.14)",
                    background: "rgba(255,255,255,0.04)",
                    fontSize: 12.5,
                    color: "#E6E7E8",
                  }}
                >
                  {s.tag}
                </span>
                {s.id === "SCORE" && (
                  <Link
                    href="#contacto"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 44,
                      height: 44,
                      borderRadius: "50%",
                      background: "#fff",
                      color: "#000",
                      textDecoration: "none",
                      transition: "transform 0.35s",
                    }}
                    aria-label="Hacer mi SCORE"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                      <path d="M7 17L17 7" />
                      <path d="M8 7h9v9" />
                    </svg>
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Cómo funciona accordion */}
        <ComoFunciona />
      </div>
    </section>
  );
}

const STEPS = [
  {
    n: "01",
    title: "Cuéntanos quién eres",
    meta: "Menos de 2 min",
    text: "Completa un formulario breve con tus datos y tus enlaces. Te contactamos en un máximo de 24 horas hábiles para contarte los siguientes pasos.",
  },
  {
    n: "02",
    title: "Vive tu SCORE",
    meta: "30–45 min",
    text: "La Conversación SCORE: cuentas tu proyecto hablando, escribiendo, eligiendo entre opciones o combinándolas. Guardas y continúas cuando quieras, sin documentos que adjuntar.",
  },
  {
    n: "03",
    title: "Analizamos tu momentum",
    meta: "Revisión humana",
    text: "Contrastamos lo que declaras con datos de la industria musical. El Motor SCORE construye tus lecturas, THE CORTEX las interpreta en contexto y una persona revisa y aprueba antes de entregar.",
  },
  {
    n: "04",
    title: "Recibe la fotografía de tu momentum",
    meta: "7 días hábiles",
    text: "Recibe un reporte del más alto nivel corporativo en el que se describen en detalle el momentum, alcance, oportunidades, riesgos, próximos pasos, análisis y conclusiones de nuestra directiva.",
  },
];

function ComoFunciona() {
  return (
    <div style={{ marginTop: "clamp(72px, 8vw, 120px)" }}>
      <div className="rv" style={{ marginBottom: 40 }}>
        <p
          style={{
            fontFamily: "var(--font-questrial), monospace",
            fontSize: 12,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#B5B7BA",
            marginBottom: 16,
          }}
        >
          Cómo funciona
        </p>
        <h2
          style={{
            fontSize: "clamp(34px, 4.2vw, 58px)",
            fontWeight: 300,
            lineHeight: 1.1,
            letterSpacing: "-0.025em",
          }}
        >
          Una metodología de Music Finance Pro
        </h2>
      </div>

      <div>
        {STEPS.map((step, i) => (
          <div
            key={step.n}
            className="rv"
            style={{
              borderTop: i === 0 ? "none" : "1px solid rgba(255,255,255,0.09)",
              padding: "28px 0",
            }}
          >
            <div style={{ display: "flex", alignItems: "flex-start", gap: 20 }}>
              <span
                style={{
                  fontFamily: "var(--font-questrial), monospace",
                  fontSize: 13,
                  color: "#939598",
                  width: 26,
                  flexShrink: 0,
                  paddingTop: 4,
                }}
              >
                {step.n}
              </span>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, marginBottom: 12 }}>
                  <h3
                    style={{
                      fontSize: "clamp(18px, 2vw, 23px)",
                      fontWeight: 300,
                      color: "#F5F5F5",
                    }}
                  >
                    {step.title}
                  </h3>
                  <span style={{ fontSize: 12.5, color: "#C8C9CB", whiteSpace: "nowrap", flexShrink: 0 }}>
                    {step.meta}
                  </span>
                </div>
                <p style={{ fontSize: 15, lineHeight: 1.65, color: "#A7A9AC", maxWidth: 640 }}>
                  {step.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
