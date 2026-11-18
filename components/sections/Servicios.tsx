"use client";

import Link from "next/link";

const onTiltMove = (e: React.MouseEvent<HTMLElement>) => {
  const el = e.currentTarget as HTMLElement;
  const r = el.getBoundingClientRect();
  const x = (e.clientX - r.left) / r.width;
  const y = (e.clientY - r.top) / r.height;
  el.style.setProperty("--rx", `${((0.5 - y) * 10).toFixed(2)}deg`);
  el.style.setProperty("--ry", `${((x - 0.5) * 12).toFixed(2)}deg`);
  el.style.setProperty("--mx", `${(x * 100).toFixed(1)}%`);
  el.style.setProperty("--my", `${(y * 100).toFixed(1)}%`);
};

const onTiltLeave = (e: React.MouseEvent<HTMLElement>) => {
  const el = e.currentTarget as HTMLElement;
  el.style.setProperty("--rx", "0deg");
  el.style.setProperty("--ry", "0deg");
};

export default function Servicios() {
  return (
    <section
      id="servicios"
      className="sec persp"
      style={{ maxWidth: 1320, margin: "0 auto", padding: "110px 24px 60px" }}
    >
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
        <h2 className="h2" style={{ maxWidth: 700 }}>
          Una Suite de servicios financieros y de inversi&oacute;n{" "}
          <span className="grad">para cada momento.</span>
        </h2>
        <p className="lead" style={{ maxWidth: 430 }}>
          SCORE es el punto de partida y puerta de entrada para aplicar a otros servicios de nuestra Suite.
        </p>
      </div>

      <div
        style={{
          marginTop: 64,
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.4fr) minmax(0, 1fr) minmax(0, 1fr)",
          gridTemplateRows: "auto auto",
          gap: 20,
        }}
      >
        <article
          className="card hi tilt rv"
          onMouseMove={onTiltMove}
          onMouseLeave={onTiltLeave}
          style={{ gridRow: "span 2", minHeight: 560, padding: 32, display: "flex", flexDirection: "column", justifyContent: "space-between" }}
        >
          <div className="blob" aria-hidden="true" style={{ right: -180, bottom: -160 }} />
          <div style={{ position: "relative", display: "flex", justifyContent: "space-between", fontSize: 14, color: "#E6E7E8" }}>
            <span>Entender</span><span className="mono">01</span>
          </div>
          <div style={{ position: "relative", display: "flex", justifyContent: "center" }} aria-hidden="true">
            <div className="ost" style={{ width: 200, height: 200 }}>
              <div className="oring r2"><i /></div>
              <div className="orb" />
              <div className="oring r1"><i /></div>
              <div className="oring r3" />
            </div>
          </div>
          <div style={{ position: "relative" }}>
            <h3 style={{ fontSize: "clamp(34px, 3.4vw, 46px)", fontWeight: 500, letterSpacing: ".08em" }}>SCORE</h3>
            <p style={{ marginTop: 14, fontSize: 16, lineHeight: 1.6, color: "#F0F0F0", maxWidth: 440 }}>
              El diagn&oacute;stico del momentum de tu proyecto: madurez, potencial y confianza. La puerta de entrada a Music Finance Pro.
            </p>
            <div style={{ marginTop: 26, display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
              <span style={{ fontSize: 14, color: "#E6E7E8" }}>
                Puerta de entrada<span style={{ margin: "0 12px", color: "var(--b)" }}>&bull;</span>4 familias
              </span>
              <Link className="btn-w" href="#form">
                Hacer mi SCORE
                <span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="M13 6l6 6-6 6" /></svg></span>
              </Link>
            </div>
          </div>
        </article>

        <article className="card tilt rv" onMouseMove={onTiltMove} onMouseLeave={onTiltLeave} style={{ minHeight: 270, padding: 26, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14, color: "#B5B7BA" }}><span>Gestionar</span><span className="mono">02</span></div>
          <div>
            <h3 style={{ fontSize: 28, fontWeight: 500, letterSpacing: ".08em" }}>TRACE</h3>
            <p style={{ marginTop: 10, fontSize: 14, color: "#C8C9CB", lineHeight: 1.55 }}>Es un agente administrativo h&iacute;brido de gesti&oacute;n financiera que garantiza Exactitud, Orden y Trazabilidad en la gesti&oacute;n diaria de artistas, empresas y eventos musicales.</p>
          </div>
          <Link className="lk" href="#form">Hablar con el equipo<span className="arw" style={{ width: 36, height: 36 }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="M13 6l6 6-6 6" /></svg></span></Link>
        </article>

        <article className="card tilt rv" onMouseMove={onTiltMove} onMouseLeave={onTiltLeave} style={{ minHeight: 270, padding: 26, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14, color: "#B5B7BA" }}><span>Valorar</span><span className="mono">03</span></div>
          <div>
            <h3 style={{ fontSize: 28, fontWeight: 500, letterSpacing: ".08em" }}>VALUE</h3>
            <p style={{ marginTop: 10, fontSize: 14, color: "#C8C9CB", lineHeight: 1.55 }}>Valoraci&oacute;n financiera de proyectos, empresas, cat&aacute;logos y eventos musicales, con metodolog&iacute;a propia.</p>
          </div>
          <Link className="lk" href="#form">Hablar con el equipo<span className="arw" style={{ width: 36, height: 36 }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="M13 6l6 6-6 6" /></svg></span></Link>
        </article>

        <article className="card tilt rv" onMouseMove={onTiltMove} onMouseLeave={onTiltLeave} style={{ gridColumn: "span 2", minHeight: 270, padding: 26, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div className="radar" aria-hidden="true">
            <u style={{ left: "30%", top: "40%" }} />
            <u style={{ left: "62%", top: "22%", animationDelay: "-1.2s" }} />
            <u style={{ left: "46%", top: "70%", animationDelay: "-2.4s" }} />
          </div>
          <div style={{ position: "relative", display: "flex", justifyContent: "space-between", fontSize: 14, color: "#B5B7BA" }}><span>Estructurar</span><span className="mono">04</span></div>
          <div style={{ position: "relative" }}>
            <h3 style={{ fontSize: 28, fontWeight: 500, letterSpacing: ".08em" }}>CAPITAL</h3>
            <p style={{ marginTop: 10, fontSize: 14, color: "#C8C9CB", lineHeight: 1.55, maxWidth: 420 }}>Invertimos, estructuramos o conectamos capital para oportunidades musicales. <span className="tbd">POR DEFINIR</span></p>
          </div>
          <Link className="lk" href="#form" style={{ maxWidth: 420 }}>Hablar con el equipo<span className="arw" style={{ width: 36, height: 36 }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="M13 6l6 6-6 6" /></svg></span></Link>
        </article>
      </div>
    </section>
  );
}
