import type { CampaignData } from "@/lib/campaign";

/**
 * Envío del formulario de precalificación a la API de score-app.
 *
 * El contrato (campos, límites y respuestas) lo define score-app y no se
 * cambia desde aquí: cualquier cambio se coordina con José.
 */

export const FAMILIES = ["PROJECT", "B2B", "PROFESSIONAL", "CATALOG"] as const;
export type Family = (typeof FAMILIES)[number];

export type LeadInput = {
  name: string;
  email: string;
  family: Family;
} & CampaignData;

export type LeadResult =
  | { kind: "sent" }
  | { kind: "invalid"; fields: string[] }
  | { kind: "rate-limited" }
  | { kind: "error" };

// La API de QA se duerme y tarda cerca de 80 s en despertar.
const TIMEOUT_MS = 90_000;

function endpoint(): string | null {
  const base = process.env.NEXT_PUBLIC_API_URL?.trim().replace(/\/+$/, "");
  return base ? `${base}/api/v1/leads/prequalification` : null;
}

export async function sendLead(input: LeadInput): Promise<LeadResult> {
  const url = endpoint();
  if (!url) {
    console.error("[lead] falta NEXT_PUBLIC_API_URL en .env.local");
    return { kind: "error" };
  }

  // Los opcionales sin valor se omiten: la API no acepta "".
  const body = Object.fromEntries(
    Object.entries(input).filter(([, value]) => value !== undefined && value !== ""),
  );

  let response: Response;
  try {
    response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      credentials: "omit",
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
  } catch {
    // Sin red, CORS o tiempo agotado. Nunca se registran los datos del lead.
    return { kind: "error" };
  }

  if (response.status === 201) return { kind: "sent" };
  if (response.status === 429) return { kind: "rate-limited" };
  if (response.status === 400) {
    // `errors` puede faltar (body que no es JSON válido): se acepta igual.
    const problem = (await response.json().catch(() => null)) as {
      errors?: { field?: string }[];
    } | null;
    const fields = (problem?.errors ?? [])
      .map((error) => error.field)
      .filter((field): field is string => Boolean(field));
    return { kind: "invalid", fields };
  }
  return { kind: "error" };
}
