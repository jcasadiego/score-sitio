"use client";

import { useState, type FormEvent } from "react";
import { getCampaignData } from "@/lib/campaign";
import { FAMILIES, sendLead, type Family } from "@/lib/lead-api";

type Status = "idle" | "sending" | "sent" | "invalid" | "rate-limited" | "error";

// TODO: textos de cada familia según el Figma del cliente. Los valores
// (PROJECT, B2B, ...) no se cambian: son los que espera la API.
const FAMILY_LABELS: Record<Family, string> = {
  PROJECT: "Artista o proyecto",
  B2B: "Empresa",
  PROFESSIONAL: "Evento",
  CATALOG: "Catálogo",
};

const FIELD_LABELS: Record<string, string> = {
  name: "Nombre",
  email: "Email",
  family: "Perfil",
};

export default function LeadForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [family, setFamily] = useState<Family | "">("");
  const [status, setStatus] = useState<Status>("idle");
  const [invalidFields, setInvalidFields] = useState<string[]>([]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!family) return;
    setStatus("sending");

    const result = await sendLead({ name, email, family, ...getCampaignData() });

    if (result.kind === "sent") {
      setName("");
      setEmail("");
      setFamily("");
    }
    setInvalidFields(result.kind === "invalid" ? result.fields : []);
    setStatus(result.kind);
  }

  const invalidLabels = invalidFields.map((field) => FIELD_LABELS[field] ?? field);

  if (status === "sent") {
    return (
      <div style={{ padding: "40px 0", textAlign: "center" }}>
        <svg
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          style={{ display: "block", margin: "0 auto 20px" }}
          aria-hidden="true"
        >
          <circle cx="28" cy="28" r="27" stroke="var(--b, #A7A9AC)" strokeWidth="1.5" />
          <polyline
            className="okc"
            points="16,28 24,36 40,20"
          />
        </svg>
        <p
          style={{
            fontFamily: "var(--font-quicksand), sans-serif",
            fontSize: 22,
            fontWeight: 400,
            color: "#fff",
            marginBottom: 10,
          }}
        >
          ¡Gracias!
        </p>
        <p style={{ fontSize: 14, color: "#C8C9CB", lineHeight: 1.6 }}>
          Te contactaremos en menos de 24 horas hábiles.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
      <h3
        id="f-title"
        style={{
          fontFamily: "var(--font-quicksand), sans-serif",
          fontSize: 26,
          fontWeight: 400,
          color: "#fff",
          marginBottom: 4,
        }}
      >
        Comienza tu SCORE
      </h3>
      <p style={{ fontSize: 14, color: "#C8C9CB", marginBottom: 8, lineHeight: 1.5 }}>
        Menos de 2 minutos. Te escribimos en un máximo de 24 horas hábiles.
      </p>

      {/* Family selector */}
      <div>
        <p
          id="f-fam"
          style={{ fontSize: 13, color: "#D9DADC", marginBottom: 10 }}
        >
          ¿Qué quieres diagnosticar?
        </p>
        <div
          role="group"
          aria-labelledby="f-fam"
          style={{ display: "flex", flexWrap: "wrap", gap: 8 }}
        >
          {FAMILIES.map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => setFamily(value)}
              className={`fpill${family === value ? " on" : ""}`}
            >
              {FAMILY_LABELS[value]}
            </button>
          ))}
        </div>
      </div>

      {/* Name */}
      <div>
        <label htmlFor="f-name" className="flabel">
          Nombre
        </label>
        <input
          id="f-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          minLength={2}
          maxLength={120}
          placeholder="Tu nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={`fi${invalidFields.includes("name") ? " bad" : ""}`}
        />
        {invalidFields.includes("name") && (
          <span className="ferr">Revisa este campo</span>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="f-email" className="flabel">
          Email
        </label>
        <input
          id="f-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          maxLength={254}
          placeholder="tu@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`fi${invalidFields.includes("email") ? " bad" : ""}`}
        />
        {invalidFields.includes("email") && (
          <span className="ferr">Revisa este campo</span>
        )}
      </div>

      {/* TODO: enlace al aviso de privacidad cuando el cliente entregue el texto. */}

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-s"
        style={{ marginTop: 8 }}
      >
        {status === "sending" ? (
          "Enviando…"
        ) : (
          <>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M7 17L17 7" />
              <path d="M8 7h9v9" />
            </svg>
            Hacer mi SCORE
          </>
        )}
      </button>

      {/* `aria-live`: el lector de pantalla anuncia el resultado del envío. */}
      <div aria-live="polite">
        {status === "sending" && (
          <p style={{ fontSize: 13, color: "#C8C9CB" }}>
            Enviando… puede tardar hasta un minuto.
          </p>
        )}
        {status === "invalid" && (
          <p style={{ fontSize: 13, color: "#FDA4AF" }}>
            {invalidLabels.length > 0
              ? `Revisa estos datos: ${invalidLabels.join(", ")}.`
              : "Revisa los datos e intenta de nuevo."}
          </p>
        )}
        {status === "rate-limited" && (
          <p style={{ fontSize: 13, color: "#FDA4AF" }}>
            Recibimos varios envíos seguidos. Intenta de nuevo en un minuto.
          </p>
        )}
        {status === "error" && (
          <p style={{ fontSize: 13, color: "#FDA4AF" }}>
            Hubo un problema al enviar. Intenta de nuevo.
          </p>
        )}
      </div>
    </form>
  );
}
