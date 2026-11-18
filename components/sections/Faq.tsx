"use client";

import { useState } from "react";

type FAQ = {
  q: string;
  ps: { b: string; t: string }[];
};

const FAQS: FAQ[] = [
  {
    q: "\u00bfQu\u00e9 es SCORE?",
    ps: [
      {
        b: "",
        t: "SCORE es un diagn\u00f3stico estrat\u00e9gico de momentum musical: una lectura profunda de la madurez, el potencial y la confianza de tu proyecto, empresa, cat\u00e1logo o evento, construida a partir de lo que declaras y contrastada con datos de la industria.",
      },
      {
        b: "",
        t: "No es una herramienta autom\u00e1tica: cada entrega pasa por revisi\u00f3n humana antes de llegar a tus manos.",
      },
    ],
  },
  {
    q: "\u00bfA qui\u00e9n va dirigido?",
    ps: [
      {
        b: "",
        t: "SCORE est\u00e1 dise\u00f1ado para cuatro familias: artistas y proyectos musicales, empresas del sector, cat\u00e1logos musicales y eventos o festivales.",
      },
      {
        b: "",
        t: "Si mueves m\u00fasica \u2014 ya sea como creador, gestor, inversor o promotor \u2014 SCORE tiene algo que decirte.",
      },
    ],
  },
  {
    q: "\u00bfQu\u00e9 recibo al final?",
    ps: [
      {
        b: "",
        t: "Recibes un reporte del m\u00e1s alto nivel corporativo en el que se describen en detalle el momentum, alcance, oportunidades, riesgos, pr\u00f3ximos pasos, an\u00e1lisis y conclusiones de nuestra directiva.",
      },
      {
        b: "",
        t: "Incluye tres lecturas principales: Madurez, Potencial y Confianza, cada una con su justificaci\u00f3n, contexto e implicaciones.",
      },
    ],
  },
  {
    q: "\u00bfCu\u00e1nto tiempo toma?",
    ps: [
      {
        b: "Formulario inicial:",
        t: "menos de 2 minutos.",
      },
      {
        b: "Conversaci\u00f3n SCORE:",
        t: "entre 30 y 45 minutos (puedes pausar y continuar cuando quieras).",
      },
      {
        b: "Entrega del reporte:",
        t: "7 d\u00edas h\u00e1biles desde que completamos el an\u00e1lisis.",
      },
    ],
  },
  {
    q: "\u00bfC\u00f3mo funciona la Conversaci\u00f3n SCORE?",
    ps: [
      {
        b: "",
        t: "La Conversaci\u00f3n SCORE es el coraz\u00f3n del proceso: cuentas tu proyecto hablando, escribiendo, eligiendo entre opciones o combin\u00e1ndolas. No hay documentos que adjuntar.",
      },
      {
        b: "",
        t: "Est\u00e1 en desarrollo activo. \u00danete a la lista de espera y te avisamos cuando est\u00e9 lista.",
      },
    ],
  },
  {
    q: "\u00bfQu\u00e9 es THE CORTEX?",
    ps: [
      {
        b: "",
        t: "THE CORTEX es el sistema de inteligencia de Music Finance Pro. Interpreta en contexto los datos que genera el Motor SCORE, cruza variables y construye la lectura que un comit\u00e9 experto revisa y aprueba.",
      },
      {
        b: "",
        t: "No es un chatbot ni una herramienta de prop\u00f3sito general: est\u00e1 especializado exclusivamente en la industria musical.",
      },
    ],
  },
  {
    q: "\u00bfQu\u00e9 pasa despu\u00e9s del SCORE?",
    ps: [
      {
        b: "",
        t: "SCORE es la puerta de entrada a Music Finance Pro. Con tu reporte en mano, puedes acceder a otros servicios de nuestra suite: TRACE (gesti\u00f3n financiera), VALUE (valoraci\u00f3n) y CAPITAL (estructuraci\u00f3n de capital).",
      },
      {
        b: "",
        t: "Nuestro equipo te acompa\u00f1a a interpretar los resultados y definir el camino m\u00e1s adecuado.",
      },
    ],
  },
  {
    q: "\u00bfCu\u00e1l es el costo?",
    ps: [
      {
        b: "",
        t: "El precio de SCORE estar\u00e1 disponible pronto. \u00danete a la lista de espera para recibir informaci\u00f3n cuando lancemos.",
      },
    ],
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="sec"
      style={{ padding: "110px 16px 80px" }}
    >
      <div
        className="panel faqp"
        style={{ maxWidth: 1440, margin: "0 auto", padding: "80px 56px" }}
      >
        <img
          className="pimg"
          src="/crowd-hands.webp"
          alt=""
          aria-hidden="true"
        />
        <div
          className="faqg"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, .8fr) minmax(0, 1.2fr)",
            gap: 56,
            alignItems: "start",
          }}
        >
          {/* Left */}
          <div className="rv">
            <span className="chip">
              <i />
              Preguntas frecuentes
            </span>
            <h2 className="h2" style={{ marginTop: 26 }}>
              Lo que necesitas saber{" "}
              <span className="grad">antes de empezar.</span>
            </h2>
            <div
              style={{ position: "relative", height: 360, marginTop: 30 }}
              aria-hidden="true"
            >
              <canvas className="morph" />
            </div>
          </div>

          {/* Right — accordion */}
          <div className="rv">
            {FAQS.map((faq, i) => (
              <div key={i} className={open === i ? "faq open" : "faq"}>
                <button
                  type="button"
                  className="faq-h"
                  aria-expanded={open === i}
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span>{faq.q}</span>
                  <i className="faq-i" aria-hidden="true" />
                </button>
                {open === i && (
                  <div className="faq-b multi">
                    {faq.ps.map((p, j) => (
                      <p key={j}>
                        {p.b && <b>{p.b} </b>}
                        {p.t}
                      </p>
                    ))}
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
