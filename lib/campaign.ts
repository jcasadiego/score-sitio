const STORAGE_KEY = "score_campaign";
const UTM_PARAMS = ["utm_source", "utm_campaign", "utm_medium"] as const;

export type CampaignData = Partial<Record<(typeof UTM_PARAMS)[number], string>>;

// Lee los parámetros utm_* de la URL actual y los guarda en sessionStorage
// para que sobrevivan la navegación dentro de la misma sesión del lead.
export function captureCampaignFromUrl(): void {
  if (typeof window === "undefined") return;

  const params = new URLSearchParams(window.location.search);
  const found: CampaignData = {};

  for (const key of UTM_PARAMS) {
    const value = params.get(key);
    if (value) found[key] = value;
  }

  if (Object.keys(found).length > 0) {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(found));
  }
}

export function getCampaignData(): CampaignData {
  if (typeof window === "undefined") return {};

  const raw = window.sessionStorage.getItem(STORAGE_KEY);
  if (!raw) return {};

  try {
    return JSON.parse(raw) as CampaignData;
  } catch {
    return {};
  }
}
