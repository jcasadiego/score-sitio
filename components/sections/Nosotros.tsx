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

export default function Nosotros() {
  return (
    <section
      id="nosotros"
      className="sec persp"
      style={{ maxWidth: 1320, margin: "0 auto", padding: "120px 24px 50px" }}
    >
      <div className="rv" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: 24 }}>
        <h2 className="h2 caps" style={{ maxWidth: 760 }}>
          Finanzas, mercados y criterio para la{" "}
          <span className="grad">econom&iacute;a de la m&uacute;sica.</span>
        </h2>
        <p className="lead" style={{ maxWidth: 400 }}>
          Somos una firma de servicios financieros e inversi&oacute;n especializada en la industria musical. Entendemos la m&uacute;sica como cultura y como activo.
        </p>
      </div>

      <div className="g3" style={{ marginTop: 64, display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 20 }}>

        <article className="card hi tilt rv" onMouseMove={onTiltMove} onMouseLeave={onTiltLeave} style={{ height: 440, padding: 26, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span className="ico" style={{ background: "rgba(255,255,255,.14)" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true"><path d="M4 21V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16" /><path d="M2 21h20" /><path d="M14 12h.01" /></svg>
            </span>
            <span className="cnum">01</span>
          </div>
          <div style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center", flex: 1 }}>
            <div className="beam" aria-hidden="true" />
            <div className="sdial" aria-hidden="true">
              <svg viewBox="0 0 200 200">
                <circle className="trk" cx="100" cy="100" r="88" />
                <circle className="arc a1" cx="100" cy="100" r="88" pathLength="100" />
                <circle className="trk" cx="100" cy="100" r="68" />
                <circle className="arc a2" cx="100" cy="100" r="68" pathLength="100" />
                <circle className="trk" cx="100" cy="100" r="48" />
                <circle className="arc a3" cx="100" cy="100" r="48" pathLength="100" />
              </svg>
              <span>SCORE</span>
            </div>
          </div>
          <div>
            <h3 style={{ fontSize: 22, fontWeight: 400 }}>SCORE, la puerta de entrada</h3>
            <p style={{ marginTop: 10, fontSize: 14.5, color: "#E6E7E8", lineHeight: 1.55 }}>Todo empieza por entender el momentum real de tu proyecto.</p>
          </div>
        </article>

        <article className="card tilt rv" onMouseMove={onTiltMove} onMouseLeave={onTiltLeave} style={{ height: 440, padding: 26, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span className="ico">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true"><path d="M4 19h16" /><path d="M6 15l4-5 4 3 5-7" /></svg>
            </span>
            <span className="cnum">02</span>
          </div>
          <div className="gwrap" style={{ display: "flex", justifyContent: "center", alignItems: "center", flex: 1 }} aria-hidden="true">
            <div className="gtilt">
              <div className="globe">
                <span className="gcore" />
                <i /><i /><i /><i /><i /><i />
                <b className="l0" /><b className="l1" /><b className="l2" /><b className="l3" /><b className="l4" />
                <u /><u /><u /><u /><u />
              </div>
            </div>
          </div>
          <div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
              <h3 style={{ fontSize: 22, fontWeight: 400 }}>Servicios financieros</h3>
              <Link className="arw" href="#servicios" aria-label="Ver servicios financieros">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="M13 6l6 6-6 6" /></svg>
              </Link>
            </div>
            <p style={{ marginTop: 10, fontSize: 14, color: "#B5B7BA", lineHeight: 1.55 }}>Diagn&oacute;stico, gesti&oacute;n, valoraci&oacute;n y estructuraci&oacute;n para artistas, empresas, cat&aacute;logos y eventos.</p>
          </div>
        </article>

        <article className="card tilt rv" onMouseMove={onTiltMove} onMouseLeave={onTiltLeave} style={{ height: 440, padding: 26, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span className="ico">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true"><path d="M12 3v18" /><path d="M17 7H9.5a3 3 0 0 0 0 6h5a3 3 0 0 1 0 6H6" /></svg>
            </span>
            <span className="cnum">03</span>
          </div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flex: 1, paddingBottom: 30 }}>
            <div className="eq" aria-hidden="true">
              {Array.from({ length: 20 }).map((_, i) => <span key={i} />)}
            </div>
          </div>
          <div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
              <h3 style={{ fontSize: 22, fontWeight: 400 }}>Inversi&oacute;n directa</h3>
              <Link className="arw" href="#servicios" aria-label="Ver inversi&oacute;n directa">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="M13 6l6 6-6 6" /></svg>
              </Link>
            </div>
            <p style={{ marginTop: 10, fontSize: 14, color: "#B5B7BA", lineHeight: 1.55 }}>Invertimos proyecto a proyecto en oportunidades que superan nuestro proceso de valoraci&oacute;n. <span className="tbd">POR DEFINIR</span></p>
          </div>
        </article>
      </div>
    </section>
  );
}
