"use client";

import { useState } from "react";

type TeamMember = {
  name: string;
  role: string;
  img: string;
  paras: { t: string }[];
  vision: string;
  noBio?: boolean;
};

const TEAM: TeamMember[] = [
  {
    name: "Otto Ballaben-Araneo",
    role: "CEO & Founder",
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
    role: "Co-Founder · CFO & CTO",
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
    role: "Head of Client Operations & Strategic Communications",
    img: "/team-gwen.webp",
    paras: [
      { t: "Comunicadora social y ejecutiva especializada en gestión de proyectos, consultoría, planificación estratégica y comunicaciones corporativas, con experiencia en la coordinación de iniciativas empresariales, culturales y musicales." },
      { t: "Es CEO de Creative Capital Consulting, organización desde la cual desarrolla actividades vinculadas con la consultoría, la planificación estratégica y la gestión de proyectos." },
      { t: "Como Head of Client Operations & Strategic Communications de Music Finance Pro, lidera la gestión operativa de proyectos, las comunicaciones estratégicas y la coordinación integral de las relaciones entre la firma, sus clientes y sus equipos especializados." },
      { t: "Desempeña un papel esencial en el modelo híbrido de operación de Music Finance Pro, actuando como enlace estratégico entre la inteligencia tecnológica, el conocimiento especializado y la experiencia humana." },
    ],
    vision: "Conectar estrategia, comunicación y gestión humana para transformar procesos complejos en experiencias profesionales claras, coordinadas y orientadas a generar confianza y valor.",
  },
  {
    name: "Juan Pablo Alonzo",
    role: "Music Data Manager",
    img: "/team-juanpablo.webp",
    paras: [],
    vision: "",
    noBio: true,
  },
];

export default function Equipo() {
  const [bio, setBio] = useState<TeamMember | null>(null);

  return (
    <section
      id="equipo"
      className="sec persp"
      style={{ maxWidth: 1320, margin: "0 auto", padding: "120px 24px 50px" }}
    >
      <div className="rv dirhead">
        <div>
          <p className="eyebrow">Nuestro equipo directivo</p>
          <h2 className="h2" style={{ marginTop: 16, maxWidth: 640 }}>
            Inteligencia Financiera con{" "}
            <span className="grad">Sensibilidad Cultural.</span>
          </h2>
        </div>
        <div className="dirlead">
          <p className="lead">En Music Finance Pro reunimos experiencia en industria musical, economía cultural, finanzas, inversión, tecnología e inteligencia artificial para desarrollar una nueva forma de comprender, diagnosticar y valorar el potencial económico de la música.</p>
          <p>Nuestra estructura integra liderazgo estratégico, capacidades financieras y tecnológicas avanzadas, y una gestión centrada en las personas. La tecnología amplifica nuestra capacidad de análisis; el conocimiento experto aporta contexto, supervisión y responsabilidad.</p>
        </div>
      </div>

      <div className="team dirs" style={{ marginTop: 56 }}>
        {TEAM.map((member) => (
          <article key={member.name} className="tm rv">
            <div className="tph">
              <img src={member.img} alt={member.name} />
            </div>
            <h4>{member.name}</h4>
            <p>{member.role}</p>
            {!member.noBio && (
              <button
                type="button"
                className="dmore"
                onClick={() => setBio(member)}
                aria-label={`Ver perfil completo de ${member.name}`}
              >
                Ver perfil
                <i aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="M13 6l6 6-6 6" />
                  </svg>
                </i>
              </button>
            )}
          </article>
        ))}
      </div>

      {bio && (
        <div
          className="bio"
          role="dialog"
          aria-modal="true"
          aria-label={bio.name}
          onClick={(e) => { if (e.target === e.currentTarget) setBio(null); }}
        >
          <div className="bio-box">
            <button type="button" className="mclose" aria-label="Cerrar perfil" onClick={() => setBio(null)}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M5 5l14 14" /><path d="M19 5L5 19" />
              </svg>
            </button>
            <div className="bio-ph">
              <img src={bio.img} alt={bio.name} />
            </div>
            <div className="bio-tx">
              <p className="eyebrow">{bio.role}</p>
              <h3>{bio.name}</h3>
              {bio.paras.map((p, i) => (
                <p key={i} className="bio-p">{p.t}</p>
              ))}
              {bio.vision && (
                <blockquote className="bio-v">
                  <span>Visión</span>
                  {bio.vision}
                </blockquote>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
