# score-sitio

Landing pública de SCORE (Music Finance Pro). Sitio estático HTML/CSS/JS con React vendorizado (`vendor/`). La versión aprobada por el cliente es **`version-c/`** — el diseño, los textos y las animaciones de `version-c` no se modifican salvo instrucción explícita de José.

---

## Construir y probar en local

```sh
# Build (requiere SCORE_API_URL del origen real):
SCORE_API_URL=https://score-api-qa.onrender.com sh scripts/build.sh

# Servir y verificar en el navegador (CORS bloqueará el envío del form desde localhost, es esperado):
python3 -m http.server -d dist 8080
```

`dist/` es el artefacto final que Render publica. Nunca commitear `dist/`.

---

## Variable de entorno

| Variable | Requerida | Descripción |
|---|---|---|
| `SCORE_API_URL` | Sí | Origen de la API, ej. `https://score-api-qa.onrender.com`. Sin barra final. Debe empezar con `https://`. |

José la configura manualmente en el dashboard de Render (Settings → Environment). No tiene valor por defecto intencional: un default incorrecto enviaría leads de producción a QA.

---

## Contrato de la API (no cambiar desde este repo)

```
POST {SCORE_API_URL}/api/v1/leads/prequalification
Content-Type: application/json
Sin auth ni cookies.
```

| Campo | Requerido | Reglas |
|---|---|---|
| `name` | sí | 2–120 caracteres |
| `email` | sí | email válido, máx. 254 |
| `phone` | no | 7–20: dígitos, espacios, `-`, `(`, `)` y `+` inicial |
| `family` | sí | `PROJECT`, `B2B`, `PROFESSIONAL` o `CATALOG` |
| `utmSource` | no | máx. 200 |
| `utmMedium` | no | máx. 200 |
| `utmCampaign` | no | máx. 200 |

Opcionales vacíos se **omiten**. Cualquier campo fuera de esta tabla → 400.

Mapeo de pestañas del formulario:
- Artista o proyecto → `PROJECT`
- Empresa → `B2B`
- Catálogo → `CATALOG`
- Evento → `PROFESSIONAL`

---

## Flujo de ramas y PRs

- Rama base activa: `develop`
- Crear ramas desde `develop`: `fix/…` o `feature/…`
- PRs hacia `develop`; mergear cuando el CI esté en verde
- `develop` → `main` lo decide José (release a producción)
- Nunca push directo a `develop` ni `main`

Commits en español, modo instrucción: "Corrige…", "Agrega…". PRs con 2–3 líneas de qué cambió y por qué, más test plan real.

---

## Reglas que no negociar

- Identificadores en inglés; textos de UI en español.
- No agregar servicios de terceros que reciban datos de visitantes.
- No logear datos del formulario en consola ni en ningún lado.
- No escribir que SCORE está "certificado" o es "compliant" con SOC 2 / ISO.
- No commitear `.env`, tokens ni secretos.
- No tocar `version-a/` ni `version-b/` (quedan como referencia; no se publican).

---

## Pendientes para José

- **Número de WhatsApp** (`WA_NUMBER` en `version-c/index.html`): dejarlo vacío hasta que José pase el número.
- **Aviso de privacidad**: enlace desde el formulario; cliente entrega el texto.
- **API de producción**: al hacer el release, cambiar `SCORE_API_URL` en Render prod y actualizar `connect-src` en la CSP de `render.yaml`.
- **Campos del formulario no enviados a la API**: `country`, `project`, `role` y `links` se piden en el form visual pero la API los rechaza. José decide si ajustar la API o eliminar esos campos del form.
