"use client";

import Link from "next/link";

function handleTilt(e: React.MouseEvent<HTMLElement>) {
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  const x = (e.clientX - r.left) / r.width;
  const y = (e.clientY - r.top) / r.height;
  el.style.setProperty("--rx", `${((0.5 - y) * 10).toFixed(2)}deg`);
  el.style.setProperty("--ry", `${((x - 0.5) * 12).toFixed(2)}deg`);
  el.style.setProperty("--mx", `${(x * 100).toFixed(1)}%`);
  el.style.setProperty("--my", `${(y * 100).toFixed(1)}%`);
}

function handleUntilt(e: React.MouseEvent<HTMLElement>) {
  const el = e.currentTarget;
  el.style.setProperty("--rx", "0deg");
  el.style.setProperty("--ry", "0deg");
}

export default function VideoVenta() {
  return (
    <section
      id="metodologia"
      className="sec persp"
      style={{ maxWidth: 1320, margin: "0 auto", padding: "130px 24px 60px" }}
    >
      {/* Header */}
      <div
        className="rv"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "flex-end",
          gap: 24,
        }}
      >
        <div>
          <p className="eyebrow">Metodología SCORE</p>
          <h2 className="h2 caps" style={{ marginTop: 18 }}>
            Tecnología que amplifica
            <br />
            <span className="grad">Expertos que analizan</span>
          </h2>
        </div>
        <p className="lead" style={{ maxWidth: 460 }}>
          Cada SCORE recorre 8 estaciones: empieza en una conversación, se contrasta con millones de datos de la industria musical global y termina en manos de expertos que revisan, concluyen y entregan.
        </p>
      </div>

      {/* Rail */}
      <div className="rail rv" aria-hidden="true" style={{ marginTop: 64 }}>
        <i />
      </div>

      {/* 8 stations grid */}
      <div
        className="g4"
        style={{
          marginTop: 32,
          display: "grid",
          gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
          gap: 18,
          alignItems: "start",
        }}
      >
        {/* Column 1: Lo que declaras */}
        <div className="rv">
          <div className="col-h">
            <b />
            Lo que declaras
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <article
              className="card hi tilt mc"
              onMouseMove={handleTilt}
              onMouseLeave={handleUntilt}
            >
              <div className="top">
                <span className="mono">01</span>
                <span>Voz · Texto · Selección · Híbrida</span>
              </div>
              <h3>Conversación SCORE</h3>
              <div className="eq sm" aria-hidden="true">
                {Array.from({ length: 24 }).map((_, i) => <span key={i} />)}
              </div>
              <p>Cuentas tu proyecto como prefieras: hablando, escribiendo, eligiendo entre opciones o combinándolas. Guardas y continúas cuando quieras. Sin documentos que adjuntar.</p>
            </article>
            <article
              className="card tilt mc"
              onMouseMove={handleTilt}
              onMouseLeave={handleUntilt}
            >
              <div className="top">
                <span className="mono">02</span>
                <span>Contradicciones · Vacíos</span>
              </div>
              <h3>Consistencia</h3>
              <p>Al cerrar, revisamos que lo declarado sea coherente y marcamos contradicciones y vacíos. Si algo importante no cuadra, te hacemos una sola pregunta.</p>
            </article>
          </div>
        </div>

        {/* Column 2: Lo que observamos */}
        <div className="rv">
          <div className="col-h">
            <b />
            Lo que observamos
          </div>
          <article
            className="card tilt mc"
            onMouseMove={handleTilt}
            onMouseLeave={handleUntilt}
          >
            <div className="top">
              <span className="mono">03</span>
              <span>Declarado vs. observado</span>
            </div>
            <h3>Contraste con la industria</h3>
            <p>
              Lo que declaras se contrasta con millones de datos de la industria musical.{" "}
              <span className="tbd">POR DEFINIR: CIFRA</span>
            </p>
            <div
              style={{
                position: "relative",
                height: 170,
                margin: "4px -8px",
                borderRadius: 18,
                overflow: "hidden",
                background: "rgba(0,0,0,.3)",
                border: "1px solid rgba(255,255,255,.07)",
              }}
            >
              <span
                className="mono"
                style={{
                  position: "absolute",
                  left: 12,
                  top: 10,
                  fontSize: 10.5,
                  letterSpacing: ".1em",
                  color: "#D9DADC",
                }}
              >
                SEÑALES · DECLARADO
              </span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              <span className="pill">Consumo y audiencias</span>
              <span className="pill">Regalías y derechos</span>
              <span className="pill">Repertorio</span>
              <span className="pill">Música en vivo</span>
              <span className="pill">Mercado físico</span>
              <span className="pill">Mercados y territorios</span>
            </div>
          </article>
        </div>

        {/* Column 3: Lo que analizamos */}
        <div className="rv">
          <div className="col-h">
            <b />
            Lo que analizamos
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <article
              className="card tilt mc"
              onMouseMove={handleTilt}
              onMouseLeave={handleUntilt}
            >
              <div className="top">
                <span className="mono">04</span>
                <span>Metodología propia</span>
              </div>
              <h3>Motor SCORE</h3>
              <p>Ordena lo declarado y lo observado y construye las tres lecturas: Madurez, Potencial y Confianza.</p>
            </article>
            <article
              className="card tilt mc"
              onMouseMove={handleTilt}
              onMouseLeave={handleUntilt}
            >
              <div className="top">
                <span className="mono">05</span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                  <b
                    style={{
                      display: "block",
                      width: 7,
                      height: 7,
                      borderRadius: "50%",
                      background: "var(--b)",
                      boxShadow: "0 0 10px var(--b)",
                      animation: "blink 1.4s ease-in-out infinite",
                    }}
                  />
                  En desarrollo
                </span>
              </div>
              <h3>Sensor SCORE</h3>
              <p>SENSOR es una inteligencia contextual que conecta «señales» musicales, humanas, culturales, territoriales y económicas para comprender cambios, detectar oportunidades y orientar decisiones.</p>
            </article>
            <article
              className="card hi tilt mc"
              onMouseMove={handleTilt}
              onMouseLeave={handleUntilt}
            >
              <div
                className="radar"
                aria-hidden="true"
                style={{ width: 200, height: 200, right: -60, bottom: -60 }}
              >
                <u style={{ left: "30%", top: "40%" }} />
                <u style={{ left: "60%", top: "24%", animationDelay: "-1.2s" }} />
              </div>
              <div className="top" style={{ position: "relative" }}>
                <span className="mono">06</span>
                <span>Contexto</span>
              </div>
              <h3 style={{ position: "relative", letterSpacing: ".06em" }}>THE CORTEX</h3>
              <p style={{ position: "relative" }}>THE CORTEX es nuestro cerebro intelectual de inteligencia y conocimiento institucional de Music Finance Pro.</p>
            </article>
          </div>
        </div>

        {/* Column 4: Lo que deciden personas */}
        <div className="rv">
          <div className="col-h">
            <b />
            Lo que deciden personas
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <article
              className="card tilt mc"
              onMouseMove={handleTilt}
              onMouseLeave={handleUntilt}
            >
              <div className="top">
                <span className="mono">07</span>
                <span>9 áreas de especialidad</span>
              </div>
              <h3>Comité Experto</h3>
              <p>Especialistas de estrategia y A&amp;R a finanzas y legal analizan hallazgos y recomendaciones cuando el caso lo pide.</p>
            </article>
            <article
              className="card hi tilt mc"
              onMouseMove={handleTilt}
              onMouseLeave={handleUntilt}
            >
              <div className="top">
                <span className="mono">08</span>
                <span>Human in the loop</span>
              </div>
              <h3>Revisión experta y entrega</h3>
              <p>Una persona revisa, cuestiona y aprueba antes de entregar. Ningún SCORE sale sin aprobación humana.</p>
            </article>
          </div>
        </div>
      </div>

      {/* Delivery callout */}
      <div className="ring-b rv" style={{ marginTop: 22 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            flexWrap: "wrap",
            padding: "14px 22px 14px 14px",
            borderRadius: 999,
            background: "#0E0E0E",
          }}
        >
          <span className="arw" style={{ background: "var(--b)" }} aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="M13 6l6 6-6 6" />
            </svg>
          </span>
          <strong style={{ fontSize: 18, fontWeight: 500 }}>Entrega</strong>
          <span style={{ fontSize: 15, color: "#D9DADC" }}>Recibes la fotografía de tu momentum: tus lecturas, hallazgos y hoja de ruta.</span>
        </div>
      </div>

      <p style={{ marginTop: 16, fontSize: 12.5, color: "#9D9FA2", lineHeight: 1.6 }}>
        Las fuentes varían según la familia y el territorio de cada proyecto. Posición de la estación 05 en el recorrido{" "}
        <span className="tbd">POR DEFINIR</span>
      </p>

      {/* MFP brand callout */}
      <div
        className="card rv mfpb"
        style={{
          marginTop: 48,
          padding: "28px 32px",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: 24,
          background: "linear-gradient(100deg, color-mix(in srgb, var(--a) 18%, #101010), #101010 60%)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="bimg"
          src="/film-set.webp"
          alt=""
          aria-hidden="true"
        />
        <span className="ico" style={{ width: 68, height: 68, borderRadius: 18 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-mark-neg.png" alt="" style={{ display: "block", width: 44, height: 44 }} />
        </span>
        <div style={{ flex: 1, minWidth: 260 }}>
          <p style={{ fontSize: 13, color: "#B5B7BA" }}>Una metodología de Music Finance Pro</p>
          <p style={{ marginTop: 8, fontSize: 17, lineHeight: 1.5, color: "#F5F5F5", maxWidth: 680 }}>
            Creada por una firma de servicios financieros e inversión especializada en la industria musical, que entiende la música como cultura y como activo.
          </p>
        </div>
        <Link className="btn-w" href="#nosotros">
          Conoce quiénes somos
          <span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14" />
              <path d="M13 6l6 6-6 6" />
            </svg>
          </span>
        </Link>
      </div>

      <style>{`
        .mc { padding: 22px; display: flex; flex-direction: column; gap: 14px; }
        .mc .top { display: flex; justify-content: space-between; gap: 10px; font-size: 12px; color: #B5B7BA; }
        .mc h3 { font-size: 20px; font-weight: 400; }
        .mc p { font-size: 14px; line-height: 1.55; color: #C8C9CB; }
        .mc.hi p { color: #EDEDED; }
        .col-h { display: flex; align-items: center; gap: 10px; padding-bottom: 14px; margin-bottom: 16px; border-bottom: 1px solid rgba(255,255,255,.1); font-size: 13px; color: #C8C9CB; }
        .col-h b { width: 8px; height: 8px; border-radius: 50%; background: var(--b); box-shadow: 0 0 10px var(--b); }
        .mfpb > * { position: relative; }
        .mfpb > .bimg {
          position: absolute; top: 0; right: 0; bottom: 0; width: 58%; height: 100%;
          object-fit: cover; opacity: .38;
          -webkit-mask-image: linear-gradient(90deg, transparent, #000 65%);
          mask-image: linear-gradient(90deg, transparent, #000 65%);
          pointer-events: none; animation: kb 24s ease-in-out infinite alternate;
        }
        @media (max-width: 1000px) {
          .g4 { grid-template-columns: minmax(0, 1fr) !important; }
          .mfpb > .bimg { width: 100%; }
        }
        @media (max-width: 760px) {
          #metodologia { padding-top: 72px !important; padding-bottom: 36px !important; }
        }
      `}</style>
    </section>
  );
}
