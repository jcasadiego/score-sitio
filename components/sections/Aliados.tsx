const ALIADOS = [
  { src: "/ally-base.png", alt: "BASE", h: 54 },
  { src: "/ally-escuela-de-pitch.png", alt: "Escuela de Pitch", h: 62 },
  { src: "/ally-e33.png", alt: "E33", h: 44 },
  { src: "/ally-creative-capital.png", alt: "Creative Capital Consulting", h: 56 },
  { src: "/ally-break-event.png", alt: "break|event", h: 36 },
];

// 5 real + 15 aria-hidden (3 duplicates) = 20 total, matches version-c
const ALL = [
  ...ALIADOS,
  ...ALIADOS.map((a) => ({ ...a, alt: "", aria: true })),
  ...ALIADOS.map((a) => ({ ...a, alt: "", aria: true })),
  ...ALIADOS.map((a) => ({ ...a, alt: "", aria: true })),
];

export default function Aliados() {
  return (
    <section
      id="aliados"
      className="sec persp"
      style={{ maxWidth: 1320, margin: "0 auto", padding: "100px 24px 70px" }}
    >
      <div className="rv">
        <p className="eyebrow" style={{ textAlign: "center" }}>
          Nuestros aliados estratégicos
        </p>
        <div style={{ marginTop: 28 }}>
          <div className="amq">
            <div className="amq-track">
              {ALL.map((ally, i) => (
                <span
                  key={i}
                  className="al"
                  aria-hidden={"aria" in ally && ally.aria ? true : undefined}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={ally.src}
                    alt={ally.alt}
                    style={{ height: ally.h }}
                  />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
