import { NextRequest, NextResponse } from "next/server";

// Proxy server-side del formulario de precalificación. El navegador le
// pega a esta ruta (mismo origen, sin problema de CORS) y este handler
// reenvía a la API real de score-app usando una variable de entorno sin
// prefijo NEXT_PUBLIC_, para que la URL/credencial nunca llegue al cliente.
export async function POST(request: NextRequest) {
  const payload = await request.json();
  const endpoint = process.env.LEAD_FORM_API_URL;

  if (!endpoint) {
    // TODO: endpoint temporal — José confirma cuándo cambiar a la API real de score-app
    console.log("[api/lead] payload (sin LEAD_FORM_API_URL configurado):", payload);
    return NextResponse.json({ ok: true });
  }

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      return NextResponse.json({ ok: false }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[api/lead] error al reenviar a score-app:", error);
    return NextResponse.json({ ok: false }, { status: 502 });
  }
}
