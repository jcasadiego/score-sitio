"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Fam = "a" | "e" | "c" | "v";

const FAMS: {
  id: Fam;
  n: string;
  imgCls: string;
  img: string;
  alt: string;
  ico: React.ReactNode;
  title: string;
  who: string;
  quote: string;
}[] = [
  {
    id: "a",
    n: "01",
    imgCls: "fimg s1",
    img: "/music-video.webp",
    alt: "Artista grabando un videoclip",
    ico: null,
    title: "Artistas & Proyectos",
    who: "Artistas, bandas, productores, managers",
    quote:
      "\u00abNecesito saber cu\u00e1nto vale realmente lo que he construido y qu\u00e9 tan listo estoy para el siguiente nivel.\u00bb",
  },
  {
    id: "e",
    n: "02",
    imgCls: "fimg s2",
    img: "/studio.webp",
    alt: "Estudio de grabaci\u00f3n",
    ico: null,
    title: "Empresas",
    who: "Sellos, editoriales, distribuidoras, agencias, tech",
    quote:
      "\u00abQuiero entender el momentum de mi empresa y comunicarlo con criterio a socios, inversores o clientes.\u00bb",
  },
  {
    id: "c",
    n: "03",
    imgCls: "fimg s3",
    img: "/composer.webp",
    alt: "Compositor trabajando",
    ico: null,
    title: "Cat\u00e1logos",
    who: "Propietarios y gestores de derechos musicales",
    quote:
      "\u00abNecesito una referencia clara de mi cat\u00e1logo antes de negociar, ceder o poner en valor mis derechos.\u00bb",
  },
  {
    id: "v",
    n: "04",
    imgCls: "fimg s4",
    img: "/crowd-hands.webp",
    alt: "Multitud en un festival",
    ico: null,
    title: "Eventos & Festivales",
    who: "Promotores, productores de eventos, festivales",
    quote:
      "\u00abQuiero medir el potencial real de mi evento y presentarlo con solidez a patrocinadores e inversores.\u00bb",
  },
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

export default function ParaQuien() {
  const [active, setActive] = useState<Fam>("a");

  return (
    <section
      id="para-quien"
      className="sec persp"
      style={{ maxWidth: 1320, margin: "0 auto", padding: "130px 24px 60px" }}
    >
      <canvas className="fxbg" aria-hidden="true" />

      <div className="famgrid">
        {/* Vertical band */}
        <aside className="vband rv" aria-label="Valoramos la m\u00fasica">
          <span className="vt">VALORAMOS LA M\u00daSICA.</span>
          <span className="vl" aria-hidden="true" />
          <p className="vp">
            <b>Metodolog\u00eda \u00fanica, aplicaci\u00f3n flexible:</b>{" "}
            El marco conceptual unificado de SCORE se moldea seg\u00fan el perfil espec\u00edfico de cada entidad y luego pasa por revisi\u00f3n, an\u00e1lisis y conclusiones de nuestro Comit\u00e9 de Expertos.
          </p>
        </aside>

        {/* Right side */}
        <div style={{ minWidth: 0 }}>
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
            <h2 className="h2" style={{ maxWidth: 640 }}>
              Hecho para quienes{" "}
              <span className="grad">mueven la m\u00fasica.</span>
            </h2>
            <p className="lead" style={{ maxWidth: 420 }}>
              Music Finance Pro trabaja con cuatro tipos de protagonistas. Si eres uno de ellos, SCORE tiene una conversaci\u00f3n pensada para ti.
            </p>
          </div>

          {/* Family cards */}
          <div className="fams" style={{ marginTop: 64 }}>
            {FAMS.map((fam) => (
              <article
                key={fam.id}
                className={
                  active === fam.id
                    ? "card tilt fam hi"
                    : "card tilt fam"
                }
                onMouseMove={onTiltMove}
                onMouseLeave={onTiltLeave}
                onClick={() => setActive(fam.id)}
              >
                <div className={fam.imgCls}>
                  <Image
                    src={fam.img}
                    alt={fam.alt}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>

                <span className="fv" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </span>

                <div
                  style={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span className="ico">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
                      <rect x="9" y="3" width="6" height="11" rx="3" />
                      <path d="M5 11a7 7 0 0 0 14 0" />
                      <path d="M12 18v3" />
                    </svg>
                  </span>
                  <span className="mono" style={{ fontSize: 13, color: "#6D6E71" }}>
                    {fam.n}
                  </span>
                </div>

                <div style={{ position: "relative", marginTop: "auto" }}>
                  <h3
                    style={{
                      fontSize: 20,
                      fontWeight: 500,
                      letterSpacing: ".06em",
                    }}
                  >
                    {fam.title}
                  </h3>
                  <p
                    style={{
                      marginTop: 6,
                      fontSize: 13,
                      color: "#B5B7BA",
                      fontStyle: "italic",
                    }}
                  >
                    {fam.who}
                  </p>
                  <blockquote
                    style={{
                      marginTop: 16,
                      fontSize: 13.5,
                      lineHeight: 1.6,
                      color: "#D9DADC",
                    }}
                  >
                    {fam.quote}
                  </blockquote>
                  <div style={{ marginTop: 20 }}>
                    <Link className="lk" href="#form" style={{ fontSize: 13.5 }}>
                      Hacer mi SCORE
                      <span className="arw" style={{ width: 32, height: 32 }}>
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M5 12h14" />
                          <path d="M13 6l6 6-6 6" />
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
