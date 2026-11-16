const STORAGE_KEY = "score_campaign";

// Parámetro de la URL → campo que espera la API de score-app.
const UTM_FIELDS = {
  utm_source: "utmSource",
  utm_medium: "utmMedium",
  utm_campaign: "utmCampaign",
} as const;

// La API rechaza el envío completo si un UTM pasa de 200 caracteres.
const MAX_LENGTH = 200;

export type CampaignData = Partial<
  Record<(typeof UTM_FIELDS)[keyof typeof UTM_FIELDS], string>
>;

// Lee los parámetros utm_* de la URL actual y los guarda en sessionStorage
// para que sobrevivan la navegación dentro de la misma sesión del lead.
export function captureCampaignFromUrl(): void {
  if (typeof window === "undefined") return;

  const params = new URLSearchParams(window.location.search);
  const found: CampaignData = {};

  for (const [param, field] of Object.entries(UTM_FIELDS)) {
    const value = params.get(param)?.trim();
    if (value) found[field] = value.slice(0, MAX_LENGTH);
  }

  if (Object.keys(found).length === 0) return;

  try {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(found));
  } catch {
    // Navegación privada o almacenamiento bloqueado: el lead se envía sin UTM.
  }
}

export function getCampaignData(): CampaignData {
  if (typeof window === "undefined") return {};

  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return {};

    const stored = JSON.parse(raw) as Record<string, unknown>;
    const data: CampaignData = {};
    // Solo los campos conocidos y como texto: la API rechaza campos de más.
    for (const field of Object.values(UTM_FIELDS)) {
      const value = stored[field];
      if (typeof value === "string" && value) data[field] = value.slice(0, MAX_LENGTH);
    }
    return data;
  } catch {
    return {};
  }
}
