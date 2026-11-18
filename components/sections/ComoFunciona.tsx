"use client";

import { useState } from "react";
import Link from "next/link";

type Step = {
  n: string;
  title: string;
  meta: string;
  tbd: boolean;
  text: string;
  k: "form" | "voice" | "stations" | "bars";
};

const STEPS: Step[] = [
  {
    n: "01",
    title: "Cu\u00e9ntanos qui\u00e9n eres",
    meta: "Menos de 2 min",
    tbd: false,
    k: "form",
    text: "Completa un formulario breve con tus datos y tus enlaces. Te contactamos en un m\u00e1ximo de 24 horas h\u00e1biles para contarte los siguientes pasos.",
  },
  {
    n: "02",
    title: "Vive tu SCORE",
    meta: "30\u201345 min",
    tbd: true,
    k: "voice",
    text: "La Conversaci\u00f3n SCORE: cuentas tu proyecto hablando, escribiendo, eligiendo entre opciones o combin\u00e1ndolas. Guardas y contin\u00faas cuando quieras, sin documentos que adjuntar.",
  },
  {
    n: "03",
    title: "Analizamos tu momentum",
    meta: "Revisi\u00f3n humana",
    tbd: false,
    k: "stations",
    text: "Contrastamos lo que declaras con datos de la industria musical. El Motor SCORE construye tus lecturas, THE CORTEX las interpreta en contexto y una persona revisa y aprueba antes de entregar.",
  },
  {
    n: "04",
    title: "Recibe la fotograf\u00eda de tu momentum",
    meta: "7 d\u00edas h\u00e1biles",
    tbd: true,
    k: "bars",
    text: "Recibe un reporte del m\u00e1s alto nivel corporativo en el que se describen en detalle el momentum, alcance, oportunidades, riesgos, pr\u00f3ximos pasos, an\u00e1lisis y conclusiones de nuestra directiva.",
  },
];

export default function ComoFunciona() {
  const [step, setStep] = useState(0);

  return (
    <section
      id="como-funciona"
      className="sec"
      style={{ padding: "90px 16px" }}
    >
      <div className="panel" style={{ maxWidth: 1440, margin: "0 auto" }}>
        <div
          className="g2"
          style={{
            maxWidth: 1320,
            margin: "0 auto",
            padding: "80px 40px",
            display: "grid",
            gridTemplateColumns: "minmax(0, .85fr) minmax(0, 1.15fr)",
            gap: 56,
            alignItems: "center",
          }}
        >
          {/* Left */}
          <div className="rv">
            <span className="chip">
              <i />
              C\u00f3mo funciona
            </span>
            <h2 className="h2" style={{ marginTop: 26 }}>
              Tu SCORE en <span className="grad">cuatro pasos.</span>
            </h2>
            <p className="lead" style={{ marginTop: 26, maxWidth: 420 }}>
              Tan natural como conversar. T\u00fa cuentas tu historia; nosotros la convertimos en una lectura clara.
            </p>
            <div style={{ marginTop: 40 }}>
              <Link className="btn-w" href="#form">
                Hacer mi SCORE
                <span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14" />
                    <path d="M13 6l6 6-6 6" />
                  </svg>
                </span>
              </Link>
            </div>
            <div style={{ position: "relative", height: 300, marginTop: 20 }} aria-hidden="true">
              <canvas className="morph" />
            </div>
          </div>

          {/* Right — accordion */}
          <div className="glass rv" style={{ padding: "16px 28px" }}>
            {STEPS.map((s, i) => (
              <div key={s.n} className={i === step ? "st open" : "st"}>
                <button
                  type="button"
                  className="st-head"
                  aria-expanded={i === step}
                  onClick={() => setStep(i === step ? -1 : i)}
                >
                  <span className="st-n">{s.n}</span>
                  <span className="st-t">{s.title}</span>
                  <span className="st-m">
                    {s.meta}
                    {s.tbd && <span className="tbd">POR DEFINIR</span>}
                  </span>
                  <span className="st-ic" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 6l6 6-6 6" />
                    </svg>
                  </span>
                </button>
                {i === step && (
                  <div className="st-body">
                    <p style={{ fontSize: 15, lineHeight: 1.6, color: "#D9DADC", maxWidth: 500 }}>
                      {s.text}
                    </p>
                    <div
                      style={{
                        marginTop: 20,
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 16,
                        alignItems: "center",
                      }}
                    >
                      <span className="chip" style={{ padding: "6px 14px 6px 6px" }}>
                        <i />
                        {s.meta}
                      </span>
                      {s.k === "form" && (
                        <div className="mini">
                          <p style={{ fontSize: 12, color: "#B5B7BA", marginBottom: 10 }}>
                            \u00bfQu\u00e9 quieres diagnosticar?
                          </p>
                          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                            <span className="mini-p">Artista o proyecto</span>
                            <span className="mini-p">Empresa</span>
                            <span className="mini-p">Cat\u00e1logo</span>
                            <span className="mini-p">Evento</span>
                          </div>
                        </div>
                      )}
                      {s.k === "voice" && (
                        <div className="mini" style={{ display: "flex", alignItems: "center", gap: 14 }}>
                          <span className="arw" style={{ background: "var(--b)" }} aria-hidden="true">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                              <rect x="9" y="3" width="6" height="11" rx="3" />
                              <path d="M5 11a7 7 0 0 0 14 0" />
                            </svg>
                          </span>
                          <div className="eq sm" aria-hidden="true" style={{ height: 40 }}>
                            {Array.from({ length: 18 }).map((_, idx) => <span key={idx} />)}
                          </div>
                        </div>
                      )}
                      {s.k === "stations" && (
                        <div className="mini" style={{ display: "flex", flexWrap: "wrap", gap: 6, alignItems: "center" }}>
                          <span className="mini-p">Motor SCORE</span>
                          <span style={{ color: "var(--b)" }}>&rarr;</span>
                          <span className="mini-p">THE CORTEX</span>
                          <span style={{ color: "var(--b)" }}>&rarr;</span>
                          <span className="mini-p">Comit\u00e9 Experto</span>
                          <span style={{ color: "var(--b)" }}>&rarr;</span>
                          <span className="mini-p">Aprobaci\u00f3n humana</span>
                        </div>
                      )}
                      {s.k === "bars" && (
                        <div className="mini" style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                          {[
                            { label: "Madurez", w: "78%", delay: undefined },
                            { label: "Potencial", w: "62%", delay: ".12s" },
                            { label: "Confianza", w: "70%", delay: ".24s" },
                          ].map((bar) => (
                            <div key={bar.label}>
                              <p style={{ fontSize: 12, color: "#B5B7BA", marginBottom: 6 }}>{bar.label}</p>
                              <div className="bar">
                                <i style={{ width: bar.w, animationDelay: bar.delay }} />
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
