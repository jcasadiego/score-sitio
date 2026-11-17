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
    if (!family) return; // el `required` del select ya lo impide
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

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
      <div className="flex flex-col gap-1">
        <label htmlFor="lead-name" className="text-sm font-medium">
          Nombre
        </label>
        <input
          id="lead-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          minLength={2}
          maxLength={120}
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border rounded px-3 py-2"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="lead-email" className="text-sm font-medium">
          Email
        </label>
        <input
          id="lead-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          maxLength={254}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border rounded px-3 py-2"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="lead-family" className="text-sm font-medium">
          ¿Qué describe mejor tu caso?
        </label>
        <select
          id="lead-family"
          name="family"
          required
          value={family}
          onChange={(e) => setFamily(e.target.value as Family | "")}
          className="border rounded px-3 py-2"
        >
          <option value="" disabled>
            Elige una opción
          </option>
          {FAMILIES.map((value) => (
            <option key={value} value={value}>
              {FAMILY_LABELS[value]}
            </option>
          ))}
        </select>
      </div>

      {/* TODO: enlace al aviso de privacidad cuando el cliente entregue el texto. */}

      <button
        type="submit"
        disabled={status === "sending"}
        className="bg-black text-white rounded px-4 py-2 disabled:opacity-50"
      >
        {status === "sending" ? "Enviando..." : "Enviar"}
      </button>

      {/* `aria-live`: el lector de pantalla anuncia el resultado del envío. */}
      <div aria-live="polite" className="text-sm">
        {status === "sending" && <p>Enviando… puede tardar hasta un minuto.</p>}
        {status === "sent" && (
          <p className="text-green-700">¡Gracias! Te contactaremos pronto.</p>
        )}
        {status === "invalid" && (
          <p className="text-red-700">
            {invalidLabels.length > 0
              ? `Revisa estos datos: ${invalidLabels.join(", ")}.`
              : "Revisa los datos e intenta de nuevo."}
          </p>
        )}
        {status === "rate-limited" && (
          <p className="text-red-700">
            Recibimos varios envíos seguidos. Intenta de nuevo en un minuto.
          </p>
        )}
        {status === "error" && (
          <p className="text-red-700">Hubo un problema al enviar. Intenta de nuevo.</p>
        )}
      </div>
    </form>
  );
}
