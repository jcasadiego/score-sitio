"use client";

import { useState } from "react";

type FaqItem = {
  q: string;
  ps: { b: string; t: string }[];
};

const FAQS: FaqItem[] = [
  {
    q: "¿Qué es SCORE?",
    ps: [
      { b: "", t: "SCORE es un diagnóstico estratégico desarrollado por Music Finance Pro para ayudarte a comprender el estado actual de tu proyecto, empresa, evento o actividad profesional dentro de la industria musical y sus posibilidades de crecimiento." },
      { b: "", t: "Analizamos tres elementos: Madurez, que refleja qué tan estructurada está tu actividad; Potencial, que identifica sus oportunidades de desarrollo; y Confianza, que indica qué tan sólida y verificable es la información disponible." },
      { b: "", t: "SCORE está diseñado para cuatro grandes familias de la industria musical: Proyectos Musicales, Empresas Musicales, Eventos y Activos y Profesionales." },
      { b: "", t: "El objetivo es que puedas tomar mejores decisiones sobre tu futuro, con datos, contexto y criterio profesional." },
    ],
  },
  {
    q: "¿SCORE es una valoración financiera de mi proyecto?",
    ps: [
      { b: "", t: "No. SCORE es un diagnóstico, no una valoración financiera ni una certificación del valor económico de tu proyecto." },
      { b: "", t: "Su función es identificar fortalezas, oportunidades, riesgos y aspectos que requieren mayor desarrollo." },
      { b: "", t: "Si posteriormente necesitas conocer el valor financiero de tu proyecto o sus activos musicales, Music Finance Pro dispone de VALUE, un servicio especializado de valoración financiera." },
    ],
  },
  {
    q: "¿Tengo que adjuntar documentos?",
    ps: [
      { b: "", t: "No. Para realizar SCORE no necesitas cargar contratos, estados financieros ni otros documentos." },
      { b: "", t: "El proceso se desarrolla mediante una experiencia guiada en la que respondes preguntas sobre tu actividad musical, organización, ingresos, operaciones y objetivos." },
      { b: "", t: "Utilizamos tus respuestas y, cuando corresponde, información de fuentes externas para enriquecer el análisis." },
      { b: "", t: "Lo más importante es responder con claridad y sinceridad. No necesitas tener conocimientos financieros para participar." },
    ],
  },
  {
    q: "¿Cuánto tiempo me toma completar SCORE?",
    ps: [
      { b: "", t: "El tiempo depende del tipo de actividad y de la información que tengas disponible." },
      { b: "", t: "SCORE está diseñado para ofrecer una experiencia intuitiva, con preguntas claras y adaptadas a las características de tu proyecto, empresa, evento o actividad profesional." },
      { b: "", t: "No necesitas preparar documentación especializada ni dominar conceptos técnicos. Solo conocer tu actividad y responder de la manera más precisa posible." },
    ],
  },
  {
    q: "¿Cuándo recibo mi SCORE?",
    ps: [
      { b: "", t: "Una vez completado el diagnóstico, la información pasa por un proceso de análisis, contraste y revisión profesional." },
      { b: "", t: "Recibirás tu informe cuando haya concluido este proceso y se haya realizado la aprobación humana correspondiente." },
      { b: "", t: "El plazo estimado de entrega se comunicará antes de confirmar la contratación." },
    ],
  },
  {
    q: "¿Quién revisa mi SCORE?",
    ps: [
      { b: "", t: "SCORE combina inteligencia artificial, análisis de datos y conocimiento especializado de la industria musical." },
      { b: "", t: "La tecnología permite procesar información, identificar patrones y contrastar señales relevantes. Nuestro equipo profesional supervisa y valida los resultados antes de la entrega definitiva." },
      { b: "", t: "La tecnología amplía nuestra capacidad de análisis; las personas aportan criterio y responsabilidad." },
    ],
  },
  {
    q: "¿Qué recibo al finalizar SCORE?",
    ps: [
      { b: "", t: "Recibirás un informe ejecutivo personalizado que presenta tres resultados principales:" },
      { b: "Madurez: ", t: "el nivel de organización y desarrollo actual de tu actividad." },
      { b: "Potencial: ", t: "sus oportunidades de crecimiento y desarrollo." },
      { b: "Confianza: ", t: "el grado de consistencia y respaldo de la información analizada." },
      { b: "", t: "El informe también identifica fortalezas, riesgos y oportunidades, e incluye recomendaciones prácticas para orientar tus próximos pasos." },
      { b: "", t: "No se trata únicamente de conocer dónde estás, sino de comprender qué puedes mejorar y hacia dónde avanzar." },
    ],
  },
  {
    q: "¿Cuánto cuesta SCORE?",
    ps: [
      { b: "", t: "SCORE es un servicio profesional de diagnóstico con una tarifa definida según la oferta comercial vigente." },
      { b: "", t: "Conocerás el precio total antes de confirmar tu contratación y realizar cualquier pago." },
      { b: "", t: "Nuestro compromiso es ofrecer información clara sobre el alcance del servicio, sus entregables y las condiciones de contratación." },
    ],
  },
  {
    q: "¿Puedo realizar SCORE más de una vez?",
    ps: [
      { b: "", t: "Sí. Tu actividad musical evoluciona y su diagnóstico también puede cambiar." },
      { b: "", t: "Puedes realizar un nuevo SCORE cuando hayas alcanzado objetivos importantes, fortalecido tu estructura, desarrollado nuevas fuentes de ingresos o experimentado cambios relevantes." },
      { b: "", t: "Cada evaluación representa una lectura de tu situación en un momento determinado y puede ayudarte a observar su evolución." },
    ],
  },
  {
    q: "¿A quién está dirigido SCORE? ¿Qué tipos de proyectos o actividades musicales puede evaluar?",
    ps: [
      { b: "", t: "SCORE está diseñado para evaluar cuatro grandes familias de la industria musical, adaptando su diagnóstico a las características de cada una:" },
      { b: "1. Proyectos Musicales: ", t: "Cantantes, bandas, DJ, orquestas, dúos y otras agrupaciones o formatos artísticos que desarrollan una carrera o proyecto musical." },
      { b: "2. Empresas Musicales: ", t: "Sellos discográficos, productoras musicales, empresas de management y booking, agencias, distribuidoras, editoras y otras organizaciones que ofrecen productos o servicios dentro de la industria." },
      { b: "3. Eventos: ", t: "Conciertos, festivales, giras, lanzamientos y otras iniciativas de entretenimiento musical en vivo o experiencias relacionadas." },
      { b: "4. Activos y Profesionales: ", t: "Catálogos musicales, compositores, productores musicales y profesionales especializados cuya actividad, trayectoria o derechos pueden representar oportunidades de desarrollo y generación de valor." },
      { b: "", t: "Cada familia cuenta con un enfoque de diagnóstico adaptado a su naturaleza, estructura, modelo de negocio y oportunidades de crecimiento." },
    ],
  },
  {
    q: "¿Qué pasa con mis datos y la información de mi proyecto?",
    ps: [
      { b: "", t: "La información que compartes se utiliza para desarrollar tu diagnóstico y, cuando corresponde, contrastarla con fuentes externas relevantes." },
      { b: "", t: "SCORE contempla el consentimiento para el tratamiento de datos y la trazabilidad de la información utilizada en el análisis." },
      { b: "", t: "Antes de comenzar, tendrás acceso a las condiciones del servicio y a la política de privacidad correspondiente." },
      { b: "", t: "Entendemos que la información comercial, financiera y estratégica de una actividad musical requiere un tratamiento responsable y transparente." },
    ],
  },
  {
    q: "¿Qué pasa si todavía no tengo ingresos, registros financieros o una estructura formal?",
    ps: [
      { b: "", t: "Puedes realizar SCORE aunque tu proyecto, empresa o actividad profesional se encuentre en una etapa inicial." },
      { b: "", t: "No todos los participantes de la industria musical tienen el mismo nivel de organización, experiencia comercial o desarrollo financiero." },
      { b: "", t: "SCORE está diseñado precisamente para reconocer esas diferencias, identificar tu punto de partida y señalar oportunidades de mejora." },
      { b: "", t: "Si no conoces alguna respuesta, es preferible indicarlo antes que proporcionar información imprecisa. La disponibilidad y consistencia de los datos se reflejarán en el nivel de Confianza de tu diagnóstico." },
    ],
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section
      id="faq"
      style={{
        position: "relative",
        padding: "clamp(72px, 10vw, 140px) clamp(20px, 4vw, 48px)",
        background: "#050505",
        overflow: "hidden",
      }}
    >
      {/* Background image */}
      <img
        src="/crowd-hands.webp"
        alt=""
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.08,
          mixBlendMode: "luminosity",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 1320, margin: "0 auto" }}>
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
            Preguntas frecuentes
          </p>
          <h2
            style={{
              fontSize: "clamp(34px, 4.2vw, 58px)",
              fontWeight: 300,
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              maxWidth: 540,
            }}
          >
            Todo lo que necesitas saber sobre SCORE
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0,1fr) 340px",
            gap: "clamp(32px, 5vw, 80px)",
            alignItems: "start",
          }}
        >
          {/* FAQ list */}
          <div>
            {FAQS.map((faq, i) => (
              <div
                key={i}
                style={{
                  borderBottom: "1px solid rgba(255,255,255,0.09)",
                  borderRadius: 20,
                  transition: "background 0.4s",
                  background: open === i ? "rgba(255,255,255,0.045)" : "transparent",
                }}
              >
                <button
                  type="button"
                  aria-expanded={open === i}
                  onClick={() => setOpen(open === i ? -1 : i)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    width: "100%",
                    minHeight: 64,
                    padding: "16px 18px",
                    background: "none",
                    border: 0,
                    color: "#F5F5F5",
                    fontFamily: "inherit",
                    fontSize: 16,
                    textAlign: "left",
                    cursor: "pointer",
                  }}
                >
                  <span style={{ flex: 1 }}>{faq.q}</span>
                  <span
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-flex",
                      flexShrink: 0,
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      background: open === i ? "#A7A9AC" : "#fff",
                      transition: "background 0.4s, transform 0.4s",
                      transform: open === i ? "rotate(180deg)" : "none",
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        left: "50%",
                        top: "50%",
                        width: 12,
                        height: 2,
                        marginLeft: -6,
                        marginTop: -1,
                        borderRadius: 2,
                        background: "#000",
                      }}
                    />
                    <span
                      style={{
                        position: "absolute",
                        left: "50%",
                        top: "50%",
                        width: 12,
                        height: 2,
                        marginLeft: -6,
                        marginTop: -1,
                        borderRadius: 2,
                        background: "#000",
                        transform: open === i ? "rotate(0deg)" : "rotate(90deg)",
                        transition: "transform 0.4s",
                      }}
                    />
                  </span>
                </button>

                {open === i && (
                  <div
                    aria-live="polite"
                    style={{
                      padding: "0 18px 22px",
                      animation: "rise 0.6s cubic-bezier(.2,.8,.2,1) both",
                    }}
                  >
                    {faq.ps.map((p, j) => (
                      <p
                        key={j}
                        style={{
                          fontSize: 15,
                          lineHeight: 1.65,
                          color: "#D1D3D4",
                          maxWidth: 640,
                          marginTop: j > 0 ? 12 : 0,
                        }}
                      >
                        {p.b && <strong style={{ color: "#F5F5F5" }}>{p.b}</strong>}
                        {p.t}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div
            className="rv"
            style={{
              position: "sticky",
              top: 88,
              padding: 28,
              borderRadius: 24,
              border: "1px solid rgba(255,255,255,0.1)",
              background: "rgba(255,255,255,0.03)",
            }}
          >
            <p style={{ fontFamily: "var(--font-quicksand)", fontSize: 20, fontWeight: 600, color: "#fff", marginBottom: 12 }}>
              Tu SCORE no es una sentencia.
            </p>
            <p style={{ fontSize: 14, color: "#A7A9AC", lineHeight: 1.65, marginBottom: 24 }}>
              Es la fotografía de tu momentum, con fecha de corte. Cuando tu proyecto cambie, un nuevo SCORE mostrará cómo evolucionó.
            </p>
            <p style={{ fontSize: 11, color: "#6D6E71", lineHeight: 1.6 }}>
              SCORE es un diagnóstico declarativo con fecha de corte. No constituye valoración financiera, asesoría de inversión, legal ni fiscal, ni auditoría.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1000px) {
          #preguntas [style*="grid-template-columns: minmax"] {
            grid-template-columns: minmax(0,1fr) !important;
          }
          #preguntas [style*="position: sticky"] {
            position: static !important;
          }
        }
      `}</style>
    </section>
  );
}
