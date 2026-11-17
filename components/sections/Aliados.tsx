const ALIADOS = [
  { src: "/ally-base.png", alt: "Base" },
  { src: "/ally-break-event.png", alt: "Break Event" },
  { src: "/ally-creative-capital.png", alt: "Creative Capital" },
  { src: "/ally-e33.png", alt: "E33" },
  { src: "/ally-escuela-de-pitch.png", alt: "Escuela de Pitch" },
];

// Duplicate for seamless infinite scroll
const ALL = [...ALIADOS, ...ALIADOS];

export default function Aliados() {
  return (
    <section
      id="aliados"
      style={{
        padding: "clamp(72px, 10vw, 140px) 0",
        background: "#050505",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: 1320,
          margin: "0 auto",
          padding: "0 clamp(20px, 4vw, 48px)",
          marginBottom: 48,
        }}
      >
        <p
          className="rv"
          style={{
            fontFamily: "var(--font-questrial), monospace",
            fontSize: 12,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#B5B7BA",
            marginBottom: 16,
          }}
        >
          Aliados
        </p>
        <h2
          className="rv"
          style={{
            fontSize: "clamp(34px, 4.2vw, 58px)",
            fontWeight: 300,
            lineHeight: 1.1,
            letterSpacing: "-0.025em",
            maxWidth: 540,
          }}
        >
          Construyendo el ecosistema juntos
        </h2>
      </div>

      {/* Infinite scroll carousel */}
      <div
        style={{
          overflow: "hidden",
          padding: "10px 0",
          WebkitMaskImage: "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)",
          maskImage: "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)",
        }}
      >
        <div
          aria-label="Logos de aliados"
          style={{
            display: "flex",
            alignItems: "center",
            width: "max-content",
            animation: "amq 38s linear infinite",
          }}
        >
          {ALL.map((ally, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                width: 240,
                height: 112,
                marginRight: 18,
                borderRadius: 22,
                border: "1px solid rgba(255,255,255,0.08)",
                background: "rgba(255,255,255,0.035)",
                transition: "background 0.4s, border-color 0.4s, transform 0.4s",
              }}
            >
              <img
                src={ally.src}
                alt={ally.alt}
                style={{
                  display: "block",
                  width: "auto",
                  maxWidth: 180,
                  maxHeight: 60,
                  objectFit: "contain",
                  opacity: 0.72,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
