"use client";

import { useState, type FormEvent } from "react";
import { getCampaignData } from "@/lib/campaign";

type Status = "idle" | "sending" | "sent" | "error";

export default function LeadForm() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const payload = {
      nombre,
      email,
      ...getCampaignData(),
    };

    const endpoint = process.env.NEXT_PUBLIC_LEAD_FORM_ENDPOINT;

    try {
      if (!endpoint) {
        // TODO: endpoint temporal — José confirma cuándo cambiar a la API real de score-app
        console.log("[LeadForm] payload (sin endpoint configurado):", payload);
      } else {
        await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      }
      setStatus("sent");
      setNombre("");
      setEmail("");
    } catch (error) {
      console.error("[LeadForm] error al enviar:", error);
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
      <div className="flex flex-col gap-1">
        <label htmlFor="nombre" className="text-sm font-medium">
          Nombre
        </label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          required
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="border rounded px-3 py-2"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border rounded px-3 py-2"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="bg-black text-white rounded px-4 py-2 disabled:opacity-50"
      >
        {status === "sending" ? "Enviando..." : "Enviar"}
      </button>

      {status === "sent" && (
        <p className="text-sm text-green-700">¡Gracias! Te contactaremos pronto.</p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-700">
          Hubo un problema al enviar. Intenta de nuevo.
        </p>
      )}
    </form>
  );
}
