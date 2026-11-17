"use client";

import { useState } from "react";

export default function VideoVenta() {
  const [open, setOpen] = useState(false);

  return (
    <section
      id="video-venta"
      style={{
        position: "relative",
        padding: "clamp(72px, 10vw, 140px) clamp(20px, 4vw, 48px)",
        background: "#050505",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        <div
          className="rv"
          style={{
            position: "relative",
            borderRadius: 32,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.1)",
            background: "linear-gradient(180deg, #0E0E0F, #141415)",
            minHeight: "clamp(300px, 40vw, 540px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Background image */}
          <img
            src="/stage-crowd.webp"
            alt=""
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: 0.3,
              mixBlendMode: "luminosity",
            }}
          />
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(180deg, #0E0E0F 0%, rgba(14,14,14,0.5) 40%, rgba(16,16,16,0.88) 100%)",
            }}
          />

          {/* Play button */}
          <div style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
            <button
              onClick={() => setOpen(true)}
              aria-label="Ver el manifiesto de Music Finance Pro, 2 minutos"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                padding: "7px 20px 7px 7px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.28)",
                background: "rgba(8,8,8,0.72)",
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
                color: "#fff",
                fontFamily: "var(--font-questrial), sans-serif",
                fontSize: 14,
                letterSpacing: "0.02em",
                cursor: "pointer",
                transition: "background 0.3s, transform 0.3s",
              }}
            >
              <span
                style={{
                  position: "relative",
                  display: "grid",
                  placeItems: "center",
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  background: "#fff",
                  color: "#000",
                  flexShrink: 0,
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              Ver manifiesto
              <span style={{ fontSize: 12, color: "#A7A9AC" }}>2 min</span>
            </button>

            <p
              style={{
                marginTop: 20,
                fontFamily: "var(--font-questrial), monospace",
                fontSize: 11,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#A7A9AC",
              }}
            >
              Music Finance Pro · Manifiesto
            </p>
          </div>
        </div>
      </div>

      {/* Video modal */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Manifiesto de Music Finance Pro"
          onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 120,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 18,
            padding: 24,
            background: "rgba(0,0,0,0.93)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            animation: "filmIn 0.45s ease both",
          }}
        >
          <button
            aria-label="Cerrar video"
            onClick={() => setOpen(false)}
            style={{
              position: "absolute",
              top: 18,
              right: 20,
              display: "inline-flex",
              width: 48,
              height: 48,
              borderRadius: "50%",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid rgba(255,255,255,0.2)",
              background: "rgba(255,255,255,0.06)",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M5 5l14 14" />
              <path d="M19 5L5 19" />
            </svg>
          </button>

          <div
            style={{
              position: "relative",
              width: "min(1200px, 100%)",
              aspectRatio: "16/9",
              borderRadius: 22,
              overflow: "hidden",
              background: "#000",
              boxShadow: "0 0 0 1px rgba(255,255,255,0.16), 0 40px 160px rgba(0,0,0,0.85)",
              animation: "filmBox 0.8s cubic-bezier(.2,.8,.2,1) both",
            }}
          >
            {/*
              TODO: reemplazar por iframe de YouTube cuando se disponga del enlace.
              El equipo confirmará la URL y José deberá aprobar youtube.com en el CSP de render.yaml.

              Ejemplo:
              <iframe
                src="https://www.youtube.com/embed/VIDEO_ID?autoplay=1"
                title="Manifiesto de Music Finance Pro"
                allow="autoplay; fullscreen"
                style={{ width: "100%", height: "100%", border: 0, display: "block" }}
              />
            */}
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: 16,
                background: "#0A0A0A",
                color: "#6D6E71",
              }}
            >
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
              <p style={{ fontFamily: "var(--font-questrial)", fontSize: 13, letterSpacing: "0.1em" }}>
                Video próximamente
              </p>
            </div>
          </div>

          <p
            style={{
              fontFamily: "var(--font-questrial), monospace",
              fontSize: 12,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#A7A9AC",
            }}
          >
            Music Finance Pro · Manifiesto
          </p>
        </div>
      )}
    </section>
  );
}
