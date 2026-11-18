"use client";

import { useState } from "react";
import Image from "next/image";

type TeamMember = {
  name: string;
  role: string;
  img: string;
  paras: { t: string }[];
  vision: string;
};

const TEAM: TeamMember[] = [
  {
    name: "Otto Ballaben-Araneo",
    role: "CEO & Founder — Music Finance Pro",
    img: "/founder-otto.webp",
    paras: [
      { t: "Especialista en industria musical, economía cultural y desarrollo estratégico de negocios creativos, con más de 20 años de trayectoria y participación en más de 400 proyectos vinculados al ecosistema musical y cultural." },
      { t: "Su experiencia integra estrategia empresarial, marketing, dirección creativa, desarrollo de artistas, expansión de mercados y articulación de alianzas con marcas, instituciones y organizaciones del sector." },
      { t: "Ha desarrollado iniciativas junto a más de 30 marcas internacionales y participado en proyectos de alcance internacional, conectando la dimensión cultural de la música con sus oportunidades comerciales y financieras." },
      { t: "Como fundador y CEO de Music Finance Pro, lidera la visión estratégica, el desarrollo del modelo de negocio, la arquitectura de productos y el posicionamiento institucional de la firma." },
    ],
    vision: "La popularidad no necesariamente representa valor económico. Comprender el verdadero potencial de un proyecto musical requiere datos, contexto, criterio y sensibilidad cultural.",
  },
  {
    name: "Javier (Xavi) Martínez",
    role: "Co-Founder, CFO & CTO — Music Finance Pro",
    img: "/team-xavi.webp",
    paras: [
      { t: "Ejecutivo, inversionista estratégico y líder especializado en DeepTech, Venture Capital, inteligencia artificial y tecnologías de frontera, con una trayectoria orientada a la convergencia entre capital, innovación tecnológica y transformación empresarial." },
      { t: "Reconocido en 2025 entre los 50 inversionistas ángeles más influyentes de Latinoamérica por Forbes y Pygma, distinción que destaca su participación en el ecosistema regional de inversión y desarrollo de empresas de alto potencial." },
      { t: "Es fundador y CEO de Base Capital, con experiencia en inversión estratégica, capital de riesgo y desarrollo de iniciativas tecnológicas. Su trayectoria incluye formación en UCLA Anderson School of Management." },
      { t: "Como cofundador, CFO y CTO de Music Finance Pro, dirige la estrategia financiera y tecnológica de la firma, integrando disciplina financiera, inteligencia artificial, automatización y modelos avanzados de análisis para el desarrollo de soluciones especializadas en la economía musical." },
    ],
    vision: "La convergencia entre capital, inteligencia artificial y tecnologías de frontera permite desarrollar nuevas capacidades para identificar, comprender y potenciar el valor económico de los activos musicales.",
  },
  {
    name: "Gwen Mora Zapata",
    role: "Head of Client Operations & Strategic Communications — Music Finance Pro",
    img: "/team-gwen.webp",
    paras: [
      { t: "Comunicadora social y ejecutiva especializada en gestión de proyectos, consultoría, planificación estratégica y comunicaciones corporativas, con experiencia en la coordinación de iniciativas empresariales, culturales y musicales." },
      { t: "Es CEO de Creative Capital Consulting, organización desde la cual desarrolla actividades vinculadas con la consultoría, la planificación estratégica y la gestión de proyectos." },
      { t: "Como Head of Client Operations & Strategic Communications de Music Finance Pro, lidera la gestión operativa de proyectos, las comunicaciones estratégicas y la coordinación integral de las relaciones entre la firma, sus clientes y sus equipos especializados." },
      { t: "Desempeña un papel esencial en el modelo híbrido de operación de Music Finance Pro, actuando como enlace estratégico entre la inteligencia tecnológica, el conocimiento especializado y la experiencia humana." },
    ],
    vision: "Conectar estrategia, comunicación y gestión humana para transformar procesos complejos en experiencias profesionales claras, coordinadas y orientadas a generar confianza y valor.",
  },
];

export default function Equipo() {
  const [bio, setBio] = useState<TeamMember | null>(null);

  return (
    <section
      id="equipo"
      style={{
        padding: "clamp(72px, 10vw, 140px) clamp(20px, 4vw, 48px)",
        background: "#050505",
      }}
    >
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        {/* Header */}
        <div
          className="rv"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: 28,
            marginBottom: "clamp(48px, 6vw, 80px)",
          }}
        >
          <div style={{ maxWidth: 470 }}>
            <p className="eyebrow" style={{ marginBottom: 16 }}>
              Nuestro equipo directivo
            </p>
            <h2 className="h2">
              Inteligencia Financiera con{" "}
              <span className="grad">Sensibilidad Cultural.</span>
            </h2>
          </div>
        </div>

        {/* Team grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: 18,
          }}
        >
          {TEAM.map((member) => (
            <article
              key={member.name}
              className="rv"
              style={{
                position: "relative",
                padding: "14px 14px 24px",
                borderRadius: 28,
                border: "1px solid rgba(255,255,255,0.08)",
                background: "linear-gradient(180deg,#151515,#0A0A0A)",
                display: "flex",
                flexDirection: "column",
                transition: "border-color 0.4s",
              }}
            >
              {/* Photo */}
              <div
                style={{
                  position: "relative",
                  aspectRatio: "3/4",
                  borderRadius: "150px 150px 20px 20px",
                  overflow: "hidden",
                  background: "#0A0A0A",
                }}
              >
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  sizes="(max-width: 760px) 50vw, (max-width: 1000px) 33vw, 300px"
                  style={{
                    objectFit: "cover",
                    objectPosition: "50% 18%",
                    filter: "grayscale(1) contrast(1.05) brightness(0.88)",
                  }}
                />
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(180deg, transparent 45%, rgba(167,169,172,0.4)), linear-gradient(135deg, rgba(167,169,172,0.2), transparent 60%)",
                    mixBlendMode: "screen",
                    opacity: 0.85,
                  }}
                />
              </div>

              {/* Name & role */}
              <h3
                style={{
                  margin: "20px 8px 0",
                  fontFamily: "var(--font-quicksand), sans-serif",
                  fontSize: 19,
                  fontWeight: 400,
                  lineHeight: 1.25,
                  color: "#F5F5F5",
                }}
              >
                {member.name}
              </h3>
              <p
                style={{
                  margin: "8px 8px 0",
                  fontSize: 13.5,
                  lineHeight: 1.45,
                  color: "#B5B7BA",
                  flex: 1,
                }}
              >
                {member.role}
              </p>

              {/* Bio button */}
              <button
                type="button"
                onClick={() => setBio(member)}
                style={{
                  margin: "18px 8px 0",
                  alignSelf: "flex-start",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 12,
                  padding: 0,
                  border: 0,
                  background: "none",
                  color: "#fff",
                  fontFamily: "var(--font-questrial), sans-serif",
                  fontSize: 13.5,
                  cursor: "pointer",
                }}
              >
                Ver perfil
                <span
                  style={{
                    display: "inline-grid",
                    placeItems: "center",
                    width: 34,
                    height: 34,
                    borderRadius: "50%",
                    background: "#fff",
                    color: "#000",
                    fontStyle: "normal",
                    transition: "transform 0.35s cubic-bezier(.2,.8,.2,1)",
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                    <path d="M7 17L17 7" />
                    <path d="M8 7h9v9" />
                  </svg>
                </span>
              </button>
            </article>
          ))}
        </div>
      </div>

      {/* Bio modal */}
      {bio && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={bio.name}
          onClick={(e) => { if (e.target === e.currentTarget) setBio(null); }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 120,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
            background: "rgba(0,0,0,0.86)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            animation: "filmIn 0.4s ease both",
          }}
        >
          <div
            style={{
              position: "relative",
              display: "grid",
              gridTemplateColumns: "340px minmax(0,1fr)",
              width: "min(1080px, 100%)",
              height: "min(720px, calc(100vh - 48px))",
              borderRadius: 28,
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.14)",
              background: "linear-gradient(165deg,#1B1B1C,#0A0A0A 60%)",
              boxShadow: "0 40px 160px rgba(0,0,0,0.8)",
              animation: "filmBox 0.7s cubic-bezier(.2,.8,.2,1) both",
            }}
          >
            {/* Close */}
            <button
              aria-label="Cerrar perfil"
              onClick={() => setBio(null)}
              style={{
                position: "absolute",
                top: 18,
                right: 20,
                zIndex: 3,
                display: "inline-flex",
                width: 48,
                height: 48,
                borderRadius: "50%",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid rgba(255,255,255,0.2)",
                background: "rgba(10,10,10,0.7)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M5 5l14 14" />
                <path d="M19 5L5 19" />
              </svg>
            </button>

            {/* Photo */}
            <div style={{ position: "relative", background: "transparent" }}>
              <Image
                src={bio.img}
                alt={bio.name}
                fill
                sizes="340px"
                style={{
                  objectFit: "cover",
                  objectPosition: "50% 18%",
                  filter: "grayscale(1) contrast(1.05)",
                  WebkitMaskImage: "linear-gradient(90deg, #000 42%, transparent 98%)",
                  maskImage: "linear-gradient(90deg, #000 42%, transparent 98%)",
                }}
              />
            </div>

            {/* Text */}
            <div style={{ overflow: "auto", padding: "52px 48px 48px", overscrollBehavior: "contain" }}>
              <p
                style={{
                  fontFamily: "var(--font-questrial), monospace",
                  fontSize: 11,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "#A7A9AC",
                  paddingRight: 56,
                  lineHeight: 1.5,
                }}
              >
                {bio.role}
              </p>
              <h3
                style={{
                  margin: "14px 0 26px",
                  fontSize: "clamp(28px, 3vw, 40px)",
                  fontWeight: 300,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                }}
              >
                {bio.name}
              </h3>

              {bio.paras.map((p, i) => (
                <p
                  key={i}
                  style={{
                    marginBottom: 16,
                    fontSize: 15,
                    lineHeight: 1.72,
                    color: "#C8C9CB",
                  }}
                >
                  {p.t}
                </p>
              ))}

              <blockquote
                style={{
                  margin: "28px 0 0",
                  padding: "22px 26px",
                  borderRadius: 22,
                  border: "1px solid rgba(255,255,255,0.16)",
                  background: "rgba(255,255,255,0.045)",
                  fontFamily: "var(--font-quicksand), sans-serif",
                  fontSize: 18,
                  lineHeight: 1.5,
                  color: "#fff",
                }}
              >
                <span
                  style={{
                    display: "block",
                    marginBottom: 8,
                    fontFamily: "var(--font-questrial), monospace",
                    fontSize: 11,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "#A7A9AC",
                  }}
                >
                  Visión
                </span>
                {bio.vision}
              </blockquote>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 1000px) {
          #equipo [style*="grid-template-columns: repeat(3"] {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }
        @media (max-width: 760px) {
          #equipo [style*="grid-template-columns: repeat(3"] {
            grid-template-columns: 1fr !important;
          }
          [role="dialog"] [style*="grid-template-columns: 340px"] {
            grid-template-columns: minmax(0,1fr) !important;
            grid-template-rows: 240px minmax(0,1fr);
            height: 100% !important;
            width: 100% !important;
            border-radius: 0 !important;
            border: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
