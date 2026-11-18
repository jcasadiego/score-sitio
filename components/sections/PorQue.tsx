"use client";

import { useState } from "react";
import Link from "next/link";

const TABS = [
  { label: "Madurez", n: "01", q: "¿Qué tan preparado estás hoy?", text: "Estructura, información, organización y capacidades: el grado de desarrollo real de tu proyecto, más allá del éxito visible.", hue: "0deg", prov: false },
  { label: "Potencial", n: "02", q: "¿Hasta dónde puede llegar tu proyecto?", text: "El margen de crecimiento de tu proyecto según su contexto, su mercado y las oportunidades que tiene a su alcance.", hue: "45deg", prov: true },
  { label: "Confianza", n: "03", q: "¿Qué tan sólida es esta lectura?", text: "El respaldo de tu SCORE: cuánto de lo declarado es coherente y se sostiene al contrastarlo con datos de la industria.", hue: "-55deg", prov: true },
];

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

export default function PorQue() {
  const [tab, setTab] = useState(0);
  const cur = TABS[tab];

  return (
    <section
      id="por-que"
      className="sec persp"
      style={{ maxWidth: 1320, margin: "0 auto", padding: "130px 24px 60px" }}
    >
      <div className="bgimg" aria-hidden="true">
        <img src="/concert-lights.webp" alt="" />
      </div>

      <div className="rv" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: 24 }}>
        <h2 className="h2">Popularidad <span className="grad">no es valor.</span></h2>
        <p className="lead" style={{ maxWidth: 430 }}>La industria suele medir el ruido: reproducciones, seguidores, tendencias. SCORE lee lo que sostiene a un proyecto.</p>
      </div>

      <div
        style={{ marginTop: 64, display: "grid", gridTemplateColumns: "170px minmax(0, 1.7fr) minmax(0, 1fr)", gap: 24, alignItems: "stretch" }}
      >
        <div role="tablist" aria-label="Lecturas de SCORE" style={{ paddingTop: 6, display: "flex", flexDirection: "column" }}>
          {TABS.map((t, i) => (
            <button key={t.label} type="button" role="tab" className={i === tab ? "tab on" : "tab"} aria-selected={i === tab} onClick={() => setTab(i)}>
              {t.label}
            </button>
          ))}
        </div>

        <article
          className="card tilt rv"
          onMouseMove={onTiltMove}
          onMouseLeave={onTiltLeave}
          style={{ minHeight: 460, padding: 36, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", gap: 18, textAlign: "center", background: "radial-gradient(600px 400px at 50% 55%, color-mix(in srgb, var(--a) 22%, transparent), transparent 70%), linear-gradient(180deg, #141414, #0A0A0A)" }}
        >
          <h3 style={{ fontSize: "clamp(24px, 2.4vw, 32px)", fontWeight: 400, lineHeight: 1.25 }}>{cur.q}</h3>
          <div className="ost" aria-hidden="true" style={{ filter: `hue-rotate(${cur.hue})` }}>
            <div className="oring r2"><i /></div>
            <div className="orb" />
            <div className="oring r1"><i /></div>
            <div className="oring r3" />
          </div>
          <p style={{ fontSize: 15.5, lineHeight: 1.6, color: "#D9DADC", maxWidth: 520 }}>
            {cur.text}
            {cur.prov && <span className="tbd">COPY PROVISIONAL</span>}
          </p>
          <p className="mono" style={{ fontSize: 12.5, color: "#C8C9CB", letterSpacing: ".06em" }}>Lectura {cur.n} &middot; {cur.label}</p>
        </article>

        <article
          className="card tilt rv"
          onMouseMove={onTiltMove}
          onMouseLeave={onTiltLeave}
          style={{ minHeight: 460, padding: 32, display: "flex", flexDirection: "column", justifyContent: "space-between" }}
        >
          <div>
            <h3 style={{ fontSize: 27, fontWeight: 400, lineHeight: 1.25 }}>Tu SCORE no es una sentencia.</h3>
            <p style={{ marginTop: 22, fontSize: 15, color: "#C8C9CB", lineHeight: 1.6 }}>Es la fotograf&iacute;a de tu momentum, con fecha de corte. Cuando tu proyecto cambie, un nuevo SCORE mostrar&aacute; c&oacute;mo evolucion&oacute;.</p>
          </div>
          <svg viewBox="0 0 300 110" width="100%" height="110" aria-hidden="true" style={{ overflow: "visible" }}>
            <defs>
              <linearGradient id="lgA" x1="0" y1="0" x2="300" y2="0" gradientUnits="userSpaceOnUse">
                <stop offset="0" style={{ stopColor: "var(--a)" }} />
                <stop offset="1" style={{ stopColor: "var(--b)" }} />
              </linearGradient>
            </defs>
            <path d="M0 100 H300" stroke="rgba(255,255,255,.08)" />
            <path className="spark" d="M0 92 C30 88 40 74 62 78 S100 56 120 62 S160 38 180 46 S220 20 240 26 S280 10 300 6" />
            <circle cx="300" cy="6" r="5" style={{ fill: "var(--b)" }} />
          </svg>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
            <Link className="arw" href="#como-funciona" aria-label="Ver c&oacute;mo funciona SCORE">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17L17 7" /><path d="M8 7h9v9" /></svg>
            </Link>
            <span className="mono" style={{ fontSize: 13, color: "#D9DADC" }}>Momentum al 17.10.2026</span>
          </div>
        </article>
      </div>

      <style>{`
        .bgimg { position: absolute; inset: 0; pointer-events: none; overflow: hidden; }
        .bgimg img { display: block; width: 100%; height: 100%; object-fit: cover; opacity: .42; animation: kb 26s ease-in-out infinite alternate; }
        .bgimg::after { content: ""; position: absolute; inset: 0; background: linear-gradient(90deg,#050505 18%,rgba(5,5,5,.5) 55%,rgba(5,5,5,.2)); }
        .spark { fill: none; stroke: url(#lgA); stroke-width: 2; stroke-linecap: round; }
        @media (max-width: 1000px) {
          #por-que [style*="grid-template-columns: 170px"] { grid-template-columns: 1fr !important; }
          #por-que [role="tablist"] { flex-direction: row !important; flex-wrap: wrap; gap: 4px; }
          #por-que [role="tablist"] .tab { width: auto; }
        }
      `}</style>
    </section>
  );
}
